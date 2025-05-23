import { makeStameskaIconSvgProps as makeStameskaIconSvgPropsFunc, StameskaIconKind } from '../types/model';
import iconPackOfHelpSquare from './icons/help-square';
import { stameskaIconPack } from './pack';

const iconNamePostfixList: Record<StameskaIconKind, number> = {
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
const tagAliasReg = RegExp(`<(${Object.keys(tagAliasDict).join('|')}) `, 'g');

export const makeStameskaIconSvgProps: typeof makeStameskaIconSvgPropsFunc = (
  icon,
  kind = 'StrokeRounded',
  className = '',
  withoutAnimation = false,
) => {
  return {
    className: `${className} stameska-icon`,
    'with-animation': withoutAnimation ? '' : undefined,
    'stameska-icon': `${icon} ${kind}`,
    width: `24`,
    heigh: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    dangerouslySetInnerHTML: (usedIcons[`${icon}${kind}`] ??= {
      __html: (stameskaIconPack[icon] ?? iconPackOfHelpSquare)[iconNamePostfixList[kind]].replace(
        tagAliasReg,
        tagAliasReplacer,
      ),
    }),
  };
};
