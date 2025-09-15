import { StameskaIconName } from '../pack/model';

declare type StameskaIconPack = [
  packName: StameskaIconName,
  StrokeRounded: string,
  DuotoneRounded: string,
  TwotoneRounded: string,
  SolidRounded: string,
  BulkRounded: string,
  StrokeSharp: string,
  SolidSharp: string,
];

declare type StameskaIconKind =
  | 'StrokeRounded'
  | 'DuotoneRounded'
  | 'TwotoneRounded'
  | 'SolidRounded'
  | 'BulkRounded'
  | 'StrokeSharp'
  | 'SolidSharp';

declare function makeStameskaIconSvgAttributeProps(props: {
  icon: StameskaIconName;
  kind?: StameskaIconKind;
  className?: string;
  withoutAnimation?: boolean;
}): {
  'with-animation': '' | undefined;
  'stameska-icon': string;
  className: string;
  width: `24`;
  heigh: '24';
  viewBox: '0 0 24 24';
  fill: 'none';
};

declare function makeStameskaIconSvgHTMLProp(
  iconPack: StameskaIconPack,
  kind: StameskaIconKind,
): {
  __html: string;
};
