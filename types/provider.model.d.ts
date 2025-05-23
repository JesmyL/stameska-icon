import styledstyled, { css as csscss, keyframes as keyframeskeyframes } from 'styled-components';

declare function makeStameskaIconStyledProvider(
  styled: typeof styledstyled,
  css: typeof csscss,
  keyframes: typeof keyframeskeyframes,
): ReturnType<typeof styledstyled.div>;
