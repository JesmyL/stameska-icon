import styledstyled, { css as csscss, keyframes as keyframeskeyframes } from 'styled-components';

declare global {
  type makeStameskaIconStyledProvider = (
    styled: typeof styledstyled,
    css: typeof csscss,
    keyframes: typeof keyframeskeyframes,
  ) => ReturnType<typeof styledstyled.div>;
}

export type StameskaIconPack = [
  packName: string,
  StrokeRounded: string,
  DuotoneRounded: string,
  TwotoneRounded: string,
  SolidRounded: string,
  BulkRounded: string,
  StrokeSharp: string,
  SolidSharp: string,
];

export type StameskaIconKind =
  | 'StrokeRounded'
  | 'DuotoneRounded'
  | 'TwotoneRounded'
  | 'SolidRounded'
  | 'BulkRounded'
  | 'StrokeSharp'
  | 'SolidSharp';

declare const stameskaIconPack = Record<string, StameskaIconPack>;
