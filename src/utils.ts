import {
  makeStameskaIconSvgAttributeProps as makeStameskaIconSvgAttributePropsType,
  makeStameskaIconSvgHTMLProp as makeStameskaIconSvgHTMLPropFunc,
  StameskaIconKind,
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
  E: 'ellipse',
  R: 'rect',
};
const tagAliasReplacer = (_all: string, tagAlias: string) => `<${tagAliasDict[tagAlias as '']} `;
const tagAliasReg = RegExp(`<(${Object.keys(tagAliasDict).join('|')}) `, 'g');

export const makeStameskaIconSvgAttributeProps: typeof makeStameskaIconSvgAttributePropsType = ({
  icon,
  kind = 'StrokeRounded',
  className = '',
  withoutAnimation = false,
}) => {
  return {
    className: `${className} stameska-icon`,
    'with-animation': withoutAnimation ? undefined : '',
    'stameska-icon': `${icon} ${kind}`,
    width: `24`,
    heigh: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
  };
};

export const makeStameskaIconSvgHTMLProp: typeof makeStameskaIconSvgHTMLPropFunc = (pack, kind = 'StrokeRounded') => {
  return {
    __html: (pack ?? iconPackOfHelpSquare)[iconNamePostfixList[kind]].replace(tagAliasReg, tagAliasReplacer),
  };
};
