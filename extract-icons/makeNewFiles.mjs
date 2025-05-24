import fs from 'fs';
import { makeNamedRegExp } from 'regexpert';

const dictAttrToMini = {
  'stroke-linecap="square"': 'ss',
  'stroke-linecap="round"': 'sr',
  'fill-rule="evenodd"': 'fr',
  'clip-rule="evenodd"': 'c',
  'height="10"': 'h1',
  'height="11"': 'h2',
  'height="13"': 'h3',
  'height="18"': 'h4',
  'height="19"': 'h5',
  'height="20"': 'h6',
  'height="3"': 'h7',
  'height="4"': 'h8',
  'height="6"': 'h9',
  'height="8.5"': 'h0',
  'opacity="0.3"': 'o1',
  'opacity="0.34"': 'o2',
  'opacity="0.44"': 'o3',
  'opacity="0.5"': 'o4',
  'opacity="0.54"': 'o5',
  'opacity="0.93"': 'o6',
  'opacity="0.4"': 'o7',
  'stroke-dasharray="0.5 3"': 's1',
  'stroke-dasharray="1 3"': 's2',
  'stroke-dasharray="3 2"': 's3',
  'stroke-dasharray="3 3"': 's4',
  'stroke-linecap="round"': 'sr',
  'stroke-linecap="square"': 'ss',
  'stroke-linejoin="bevel"': 'sb',
  'stroke-linejoin="round"': 'sj',
  'stroke-miterlimit="10"': 'm1',
  'stroke-miterlimit="16"': 'm2',
  'transform="matrix(1 0 0 1 16 8)"': 't1',
  'transform="matrix(1 0 0 1 20 2.5)"': 't2',
  'transform="matrix(1 0 0 1 20.5 2)"': 't3',
  'transform="matrix(1 0 0 1 21 16)"': 't4',
  'transform="matrix(1 0 0 1 22 9)"': 't5',
  'transform="matrix(1 0 0 1 8 3)"': 't6',
  'transform="matrix(4.37114e08 1 1 4.37114e08 15 22)"': 't7',
  'transform="matrix(4.37114e08 1 1 4.37114e08 15 8)"': 't8',
  'transform="matrix(4.37114e08 1 1 4.37114e08 15.0005 22)"': 't9',
  'transform="matrix(4.37114e08 1 1 4.37114e08 21 22)"': 't0',
  'transform="matrix(4.37114e08 1 1 4.37114e08 9 2)"': 't',
  'transform="rotate(90 10 6)"': 't_',
  'width="10"': 'w1',
  'width="11"': 'w2',
  'width="12"': 'w3',
  'width="13"': 'w4',
  'width="16"': 'w5',
  'width="17.5"': 'w6',
  'width="18"': 'w7',
  'width="19"': 'w8',
  'width="19.5"': 'w9',
  'width="20"': 'w0',
  'width="3"': 'w',
  'width="4"': 'w_',
};

const svgInnerTagRegs = makeNamedRegExp(
  '/<g(?<gAttrs>(?: [^>]+)?)>[\\s\\t]*|(?<gClose></g>)[\\s\\t]*|(?:<(?<tagName>\\w+)(?<attrs>[\\w\\W]+?)(></\\k<tagName>|/)>[\\s\\t]*)/g',
);
const attrDetectRegs = makeNamedRegExp('/ ?(?<attr>[-a-z]+="[^"]+?")/g');

const tagAlias = {
  path: '',
  circle: 'C',
  rect: 'R',
  ellipse: 'E',
};

const newIcons = JSON.parse('' + fs.readFileSync('extract-icons/new-icons.json'));

const postfixAliasToPostfixDict = {
  A: '-stroke-rounded',
  B: '-duotone-rounded',
  C: '-twotone-rounded',
  D: '-solid-rounded',
  E: '-bulk-rounded',
  F: '-stroke-sharp',
  G: '-solid-sharp',
};

const postfixAliases = Object.keys(postfixAliasToPostfixDict);
const deletedIconsSet = new Set();
let nonFixedIcons = {};

Object.entries(newIcons).forEach(([key, svg]) => {
  if (deletedIconsSet.has(key)) return;
  const postfixAliasSet = new Set(postfixAliases);

  const postfixAlias = key.slice(-1);
  const fileName = key.slice(0, -1);
  const packName = fileName.replace(/(^|-)(\w)/g, (_all, _, letter) => letter.toUpperCase());
  const svgList = [];
  const iconsForBack = {};
  const dValues = {};
  let dLast = 1;

  const makeSvg = (svg, postfixAlias) => {
    if (!svg) return;

    postfixAliasSet.delete(postfixAlias);

    const iconKey = `${fileName}${postfixAlias}`;

    iconsForBack[iconKey] = newIcons[iconKey];
    delete newIcons[iconKey];
    deletedIconsSet.add(iconKey);

    const unknownAttrs = [];
    const icParts = new Set();

    let dAttr = null;

    const svgContent = svg.replace(svgInnerTagRegs.regExp, (...args) => {
      const tagChips = svgInnerTagRegs.transform(args);

      if (tagChips.gAttrs) return `<g ${tagChips.gAttrs.trim()}>`;
      if (tagChips.gClose) return tagChips.gClose;

      const attrs = tagChips.attrs.split(attrDetectRegs.regExp);

      for (const attri in attrs) {
        const attr = attrs[attri];
        if (attr === '') continue;

        if (attr.startsWith('d="')) {
          const dContent = attr.slice(3, -1);
          dValues[dContent] ??= `d${dLast++}`;

          dAttr = `d="\${d.${dValues[dContent]}}"`.trim();

          continue;
        }

        if (attr.startsWith('stroke="')) {
          icParts.add('s');
          continue;
        }

        if (attr.startsWith('fill="')) {
          icParts.add('f');
          continue;
        }

        if (attr.startsWith('stroke-width="')) {
          icParts.add('sw');
          continue;
        }

        if (dictAttrToMini[attr] !== undefined) {
          icParts.add(dictAttrToMini[attr]);
          continue;
        }

        unknownAttrs.push(attr);
      }

      return `<${tagAlias[tagChips.tagName] ?? tagChips.tagName} ${[
        dAttr,
        unknownAttrs,
        `i-c="${Array.from(icParts).join(' ')}"`,
      ]
        .flat()
        .filter(f => f)
        .join('')}/>`;
    });

    svgList[postfixAliases.indexOf(postfixAlias)] = svgContent;
  };

  makeSvg(svg, postfixAlias);

  postfixAliasSet.forEach(postfixAlias => makeSvg(newIcons[`${fileName}${postfixAlias}`], postfixAlias));

  if (!postfixAliasSet.size) {
    fs.writeFileSync(
      `src/icons/${fileName}.ts`,
      `const d = {\n  ${
        //
        Object.keys(dValues)
          .map(content => `${dValues[content]}: '${content}'`)
          .join(',\n  ')
      }\n};\n\nexport default [\n  '${packName}',\n  \`${svgList.join('`,\n  `')}\`\n];`,
    );
  } else nonFixedIcons = { ...nonFixedIcons, ...iconsForBack };
});

fs.writeFileSync('extract-icons/new-icons.json', JSON.stringify(nonFixedIcons, null, 2));
