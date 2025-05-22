import fs from 'fs';
import { makeNamedRegExp, makeRegExp } from 'regexpert';

import { replaceFileContent, walkAllFiles } from './utils.mjs';

const dictArrtToIC = {
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
const iconDeclareRegs = makeNamedRegExp(
  '/(?<start>export const Icon\\w+(?:StrokeRounded|DuotoneRounded|TwotoneRounded|SolidRounded|BulkRounded|StrokeSharp|SolidSharp))[\\w\\W]+?<TheIconWrapper[^>]+>\\s*(?<inners>[\\w\\W]+?)</TheIconWrapper>[^)]*\\);\\s*};/g',
);
const exportPackRegs = makeNamedRegExp('/export const iconPackOf(?<packName>\\w+): TheIconSelfPack =[\\w\\W]+/');

const iconNames = [];
let i = 0;

const tagNamesSet = new Set();
const tagAlias = {
  path: '',
  circle: 'C',
  rect: 'R',
  ellipse: 'E',
};

walkAllFiles('./src/icons', (filePath, name, _path, isDir) => {
  if (isDir) return;
  // if (name !== 'adventure.tsx') return;

  replaceFileContent(filePath, content => {
    if (!content.includes('export const ')) return content;
    const inners = [];

    content = content.replace(iconDeclareRegs.regExp, (...args) => {
      const chips = iconDeclareRegs.transform(args);

      const tagInners = chips.inners.replace(svgInnerTagRegs.regExp, (...args) => {
        const tagChips = svgInnerTagRegs.transform(args);

        if (tagChips.gAttrs) return `<g ${tagChips.gAttrs.trim()}>`;
        if (tagChips.gClose) return tagChips.gClose;

        const attrs = tagChips.attrs.split(makeRegExp('/\\s*\\r?\\n\\s*/')).slice(1, -1);

        for (const attri in attrs) {
          const attr = attrs[attri];

          if (attr.startsWith('d={')) {
            attrs[attri] = `d="\${${attr.slice(3, -1)}}"`.trim();
          }
        }

        return `<${tagAlias[tagChips.tagName] ?? tagChips.tagName} ${attrs.join('').trim()}/>`;
      });

      inners.push(tagInners);

      return '';
    });

    content = content.replace(makeRegExp('/\\r?\\n?import .+\\r?\\n/g'), '');
    content = content.replace(makeRegExp('/(\\r?\\n){2,}/g'), '');

    content = content.replace(exportPackRegs.regExp, (...args) => {
      const chips = exportPackRegs.transform(args);

      return `\n\nexport default [\n  '${chips.packName}',\n  \`${inners.join('`,\n  `')}\`\n];`;
    });

    return `${content.trim()}\n`;
  });
});

console.log(tagNamesSet);

if (0)
  walkAllFiles('src/icons', (filePath, name, _path, isDir) => {
    if (isDir || name.endsWith(' copy.tsx')) return;
    iconNames.push(name.slice(0, -4));

    const content = '' + fs.readFileSync(filePath);
    if (!content.includes('stroke=')) return;

    const packName = name.slice(0, -4).replace(/(^|-)(\w)/g, (_all, _, letter) => letter.toUpperCase());

    const dDict = {};
    let dLast = 1;

    replaceFileContent(filePath, content => {
      content = content.replace(
        makeRegExp('/(the-icon=)"\\w+ (\\w+)"/g'),
        (_all, start, kind) => `${start}"${packName} ${kind}"`,
      );

      content = content.replace(svgInnerTagRegs.regExp, (...args) => {
        const chips = svgInnerTagRegs.transform(args);
        const icParts = new Set();
        const unknownAttrs = [];
        const attrs = chips.attrs.split(makeRegExp('/\\s*\\r?\\n\\s*/')).slice(1, -1);
        let dAttr = null;

        for (const attr of attrs) {
          if (typeof attr !== 'string') continue;

          if (attr.startsWith('i-c="')) {
            const icContent = attr.slice(5, -1);
            icContent.split(' ').forEach(part => icParts.add(part));

            continue;
          }

          if (attr.startsWith('d="')) {
            const dContent = attr.slice(3, -1);

            if (dDict[dContent] === undefined) dDict[dContent] = `d${dLast++}`;

            dAttr = `d={d.${dDict[dContent]}}`;

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

          if (dictArrtToIC[attr] !== undefined) {
            icParts.add(dictArrtToIC[attr]);
            continue;
          }

          unknownAttrs.push(attr);
        }

        return `${chips.spaceIndent}<${chips.tagName}\n  ${chips.spaceIndent}${[
          dAttr,
          unknownAttrs,
          `i-c="${Array.from(icParts).join(' ')}"`,
        ]
          .flat()
          .filter(f => f)
          .join('\n  ' + chips.spaceIndent)}\n${chips.spaceIndent}/>`;
      });

      content = content.replace(makeRegExp('/(const d: Record<.+?> = ){[^}]+};?/'), (_all, start) => {
        return `${start}{\n  ${Object.entries(dDict)
          .map(([value, key]) => `${key}: '${value}',`)
          .join('\n  ')}\n};`;
      });

      return content;
    });
  });

console.log(JSON.stringify(iconNames));

var localStorage = {};

///// GET SVG CONTENT
////////////// window.onfocus = () => {
//////////////   navigator.clipboard.writeText(
//////////////     document.querySelector('body div > div > div > svg').innerHTML.trim().split('\n').join(''),
//////////////   );
////////////// };

// window.knownIconsSet = new Set(JSON.parse(localStorage.knownIcons));

////////////// COLLECT ALL ICONS
////////////// window.checkedNodesSet = new Set();
////////////// const postfix = '-stroke-rounded';
////////////
////////////// setInterval(() => {
//////////////   Array.from(document.querySelectorAll('div a:has(div div img)')).forEach(a => {
//////////////     const iconName = a.href.slice(27, -postfix.length);
////////////
//////////////     if (window.checkedNodesSet.has(iconName)) return;
//////////////     window.checkedNodesSet.add(iconName);
//////////////   });
////////////
//////////////   localStorage.knownIcons = JSON.stringify(Array.from(window.checkedNodesSet));
////////////// }, 2000);

// localStorage.___iconsToLS = function iconsToLS() {
//   const firstPostfix = '-stroke-rounded';

//   const nextPostfixDict = {
//     [firstPostfix]: '-duotone-rounded',
//     '-duotone-rounded': '-twotone-rounded',
//     '-twotone-rounded': '-solid-rounded',
//     '-solid-rounded': '-bulk-rounded',
//     '-bulk-rounded': '-stroke-sharp',
//     '-stroke-sharp': '-solid-sharp',
//     '-solid-sharp': firstPostfix,
//   };

//   const postfixAliasDict = {
//     [firstPostfix]: 'A',
//     '-duotone-rounded': 'B',
//     '-twotone-rounded': 'C',
//     '-solid-rounded': 'D',
//     '-bulk-rounded': 'E',
//     '-stroke-sharp': 'F',
//     '-solid-sharp': 'G',
//   };

//   localStorage.__currentIconPostfix ||= firstPostfix;
//   window.unknownIconNames ||= JSON.parse(localStorage.__unknownIconNames);

//   const unknownFirstIconName = window.unknownIconNames[0];
//   const svgNode = document.querySelector('div div div div div div div div svg.injected-svg');
//   const iconName = `${unknownFirstIconName}${localStorage.__currentIconPostfix}`;

//   if (!svgNode?.getAttribute('data-src').includes(iconName)) {
//     console.log('incorrect svg found. try again', {
//       iconName,
//       'data-src': svgNode?.getAttribute('data-src'),
//       svgNode,
//     });
//     setTimeout(iconsToLS, 500);

//     return;
//   }

//   localStorage[`_icon:${unknownFirstIconName}${postfixAliasDict[localStorage.__currentIconPostfix]}`] =
//     svgNode.innerHTML.trim();

//   const nextPostfix = nextPostfixDict[localStorage.__currentIconPostfix];

//   if (nextPostfix === firstPostfix) {
//     window.unknownIconNames.shift();
//     localStorage.__unknownIconNames = JSON.stringify(window.unknownIconNames);
//     localStorage.__currentIconPostfix = nextPostfix;

//     location.pathname = `/icon/${window.unknownIconNames[0]}${nextPostfix}`;

//     return;
//   }

//   document.querySelector(`a[href$="${nextPostfix}"]`).click();
//   localStorage.__currentIconPostfix = nextPostfix;

//   setTimeout(iconsToLS, 300);

//   return `added to LS - ${window.unknownIconNames.length}`;
// };
// iconsToLS();
