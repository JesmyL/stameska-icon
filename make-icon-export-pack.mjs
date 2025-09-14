import fs from 'fs';

const numericVarStart = '_';
const indent = '  ';
const fileNameToVarNameDict = {};
const numsSet = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
const replacer = (_all, $1, $2) => {
  if ($1 === '-') return $2.toUpperCase();

  return numsSet.has($2) ? `${numericVarStart}${$2}` : $2[0].toUpperCase() + $2.slice(1);
};

fs.readdirSync('./src/icons').forEach(fileName => {
  fileName = fileName.slice(0, -3);
  fileNameToVarNameDict[fileName] = fileName.replace(/(-|^)(.)/g, replacer);
});

const entries = Object.entries(fileNameToVarNameDict);

fs.writeFileSync(
  './src/pack.new.ts',
  `import { StameskaIconName, StameskaIconPack } from '../types/model';
${entries.map(([fileName, varName]) => `import ${varName} from './icons/${fileName}';`).join('\n')}
    
const pack = {\n${entries
    .map(
      ([, varName]) =>
        `${indent}${varName.startsWith(numericVarStart) ? `'${varName.slice(1)}': ${varName}` : varName},`,
    )
    .join('\n')}\n};

export const stameskaIconPack = pack as Record<StameskaIconName, StameskaIconPack>;`,
);

fs.writeFileSync(
  './src/names.type.new.ts',
  `type A = ${entries
    .map(([, varName]) => `'${varName.startsWith(numericVarStart) ? varName.slice(1) : varName}'`)
    .join('|\n')}`,
);
