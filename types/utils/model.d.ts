import { StameskaIconKind, StameskaIconPack } from '../model';
import { StameskaIconName } from '../pack/model';

declare function makeStameskaIconSvgDynamicProps(props: {
  icon: StameskaIconName;
  kind?: StameskaIconKind;
  className?: string;
  withoutAnimation?: boolean;
}): {
  'with-animation': '' | undefined;
  'stameska-icon': string;
  className: string;
};

declare function makeStameskaIconSvgProps(
  iconPack: StameskaIconPack,
  kind: StameskaIconKind,
): {
  width: `24`;
  heigh: '24';
  viewBox: '0 0 24 24';
  fill: 'none';
  dangerouslySetInnerHTML: { __html: string };
};
