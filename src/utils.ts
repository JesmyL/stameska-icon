import { makeRegExp } from 'regexpert';
import { makeKnownIconSvgProps as makeKnownIconSvgPropsFunc, TheIconNameKind } from '../types/model';
import iconPackOfHelpSquare from './icons/help-square';
import { knownIconPack } from './pack';

const theIconNamePostfixList: Record<TheIconNameKind, number> = {
  StrokeRounded: 1,
  DuotoneRounded: 2,
  TwotoneRounded: 3,
  SolidRounded: 4,
  BulkRounded: 5,
  StrokeSharp: 6,
  SolidSharp: 7,
};

const usedIcons: Record<string, { __html: string }> = {};
const tagAliasDict = {
  '': 'path',
  C: 'circle',
  R: 'rect',
  E: 'ellipse',
};
const tagAliasReplacer = (_all: string, tagAlias: string) => `<${tagAliasDict[tagAlias as '']} `;
const tagAliasReg = makeRegExp(`/<(${Object.keys(tagAliasDict).join('|')}) /g`);

export const makeKnownIconSvgProps: typeof makeKnownIconSvgPropsFunc = (
  icon,
  kind = 'StrokeRounded',
  className = '',
  withoutAnimation = false,
) => {
  return {
    className: `${className} the-icon`,
    'with-animation': withoutAnimation ? '' : undefined,
    'the-icon': `${icon} ${kind}`,
    width: `24`,
    heigh: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    dangerouslySetInnerHTML: (usedIcons[`${icon}${kind}`] ??= {
      __html: (knownIconPack[icon] ?? iconPackOfHelpSquare)[theIconNamePostfixList[kind]].replace(
        tagAliasReg,
        tagAliasReplacer,
      ),
    }),
  };
};
