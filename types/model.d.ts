import styledstyled, { css as csscss, keyframes as keyframeskeyframes } from 'styled-components';
import { StameskaIconName } from './name.model';

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

declare const stameskaIconPack = Record<StameskaIconName, StameskaIconPack>;

declare function makeStameskaIconSvgProps(
  icon: StameskaIconName,
  kind?: StameskaIconKind,
  className?: string,
  withoutAnimation?: boolean,
): {
  className: string;
  width: `24`;
  heigh: '24';
  viewBox: '0 0 24 24';
  fill: 'none';
  dangerouslySetInnerHTML: { __html: string };
  'with-animation': '' | undefined;
  'stameska-icon': string;
};
