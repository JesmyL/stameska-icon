import { StameskaIconKind } from '../types/model';
import {
  makeStameskaIconSvgDynamicProps as makeStameskaIconSvgDynamicPropsType,
  makeStameskaIconSvgProps as makeStameskaIconSvgPropsFunc,
} from '../types/utils/model';
import iconPackOfHelpSquare from './icons/help-square';

const iconNamePostfixList: Record<StameskaIconKind, number> = {
  StrokeRounded: 1,
  DuotoneRounded: 2,
  TwotoneRounded: 3,
  SolidRounded: 4,
  BulkRounded: 5,
  StrokeSharp: 6,
  SolidSharp: 7,
};

const tagAliasDict = {
  '': 'path',
  C: 'circle',
  R: 'rect',
  E: 'ellipse',
};
const tagAliasReplacer = (_all: string, tagAlias: string) => `<${tagAliasDict[tagAlias as '']} `;
const tagAliasReg = RegExp(`<(${Object.keys(tagAliasDict).join('|')}) `, 'g');

export const makeStameskaIconSvgDynamicProps: typeof makeStameskaIconSvgDynamicPropsType = ({
  icon,
  kind = 'StrokeRounded',
  className = '',
  withoutAnimation = false,
}) => {
  return {
    className: `${className} stameska-icon`,
    'with-animation': withoutAnimation ? '' : undefined,
    'stameska-icon': `${icon} ${kind}`,
  };
};

export const makeStameskaIconSvgProps: typeof makeStameskaIconSvgPropsFunc = (pack, kind = 'StrokeRounded') => {
  return {
    width: `24`,
    heigh: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    dangerouslySetInnerHTML: {
      __html: (pack ?? iconPackOfHelpSquare)[iconNamePostfixList[kind]].replace(tagAliasReg, tagAliasReplacer),
    },
  };
};
