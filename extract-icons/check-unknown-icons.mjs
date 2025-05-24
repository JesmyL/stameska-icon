import fs from 'fs';

const unknownIconNamesSet = new Set(JSON.parse('' + fs.readFileSync('extract-icons/unknown-icon-names.json')));

fs.readdirSync('src/icons/').forEach(fileName => {
  unknownIconNamesSet.delete(fileName.slice(0, -3));
});

fs.writeFileSync('extract-icons/unknown-icon-names.json', JSON.stringify(Array.from(unknownIconNamesSet), null, 2));
