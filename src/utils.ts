import { TheIconKnownName, TheIconNameKind } from '../types/model';
import { knownIconPack } from './pack';

export const theIconNamePostfixList: Record<TheIconNameKind, number> = {
  StrokeRounded: 1,
  DuotoneRounded: 2,
  TwotoneRounded: 3,
  SolidRounded: 4,
  BulkRounded: 5,
  StrokeSharp: 6,
  SolidSharp: 7,
};

export const takeIconFromKnownPack = (icon: TheIconKnownName, kind: TheIconNameKind = 'StrokeRounded') => {
  return knownIconPack[icon]?.[theIconNamePostfixList[kind]];
};
