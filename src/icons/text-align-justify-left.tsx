const d: Record<string, string> = {
  d1: 'M3 3H11',
  d2: 'M3 9H11',
  d3: 'M3 15H21',
  d4: 'M3 21H21',
  d5: 'M2 3C2 2.44772 2.44772 2 3 2H11C11.5523 2 12 2.44772 12 3C12 3.55228 11.5523 4 11 4H3C2.44772 4 2 3.55228 2 3Z',
  d6: 'M2 9C2 8.44772 2.44772 8 3 8H11C11.5523 8 12 8.44772 12 9C12 9.55228 11.5523 10 11 10H3C2.44772 10 2 9.55228 2 9Z',
  d7: 'M2 15C2 14.4477 2.44772 14 3 14H21C21.5523 14 22 14.4477 22 15C22 15.5523 21.5523 16 21 16H3C2.44772 16 2 15.5523 2 15Z',
  d8: 'M2 21C2 20.4477 2.44772 20 3 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21Z',
  d9: 'M11 4H3V2H11V4Z',
  d10: 'M11 10H3V8H11V10Z',
  d11: 'M21 16H3V14H21V16Z',
  d12: 'M21 22H3V20H21V22Z',
};

export default [
  'TextAlignJustifyLeft',
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>< d="${d.d4}"i-c="s sj sr sw"/>`,
  `<g i-c="o7">< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>< d="${d.d4}"i-c="s sj sr sw"/></g>`,
  `< d="${d.d1}"i-c="o7 s sj sr sw"/>< d="${d.d2}"i-c="o7 s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>< d="${d.d4}"i-c="s sj sr sw"/>`,
  `< d="${d.d5}"i-c="c f fr"/>< d="${d.d6}"i-c="c f fr"/>< d="${d.d7}"i-c="c f fr"/>< d="${d.d8}"i-c="c f fr"/>`,
  `< d="${d.d5}"i-c="c f fr o7"/>< d="${d.d6}"i-c="c f fr"/>< d="${d.d7}"i-c="c f fr o7"/>< d="${d.d8}"i-c="c f fr"/>`,
  `< d="${d.d1}"i-c="s sj sw"/>< d="${d.d2}"i-c="s sj sw"/>< d="${d.d3}"i-c="s sj sw"/>< d="${d.d4}"i-c="s sj sw"/>`,
  `< d="${d.d9}"i-c="c f fr"/>< d="${d.d10}"i-c="c f fr"/>< d="${d.d11}"i-c="c f fr"/>< d="${d.d12}"i-c="c f fr"/>`
];
