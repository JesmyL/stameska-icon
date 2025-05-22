const d: Record<string, string> = {
  d1: 'M3 3H21',
  d2: 'M8 9H16',
  d3: 'M3 15H21',
  d4: 'M8 21H16',
  d5: 'M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4H3C2.44772 4 2 3.55228 2 3Z',
  d6: 'M7 9C7 8.44772 7.44772 8 8 8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H8C7.44772 10 7 9.55228 7 9Z',
  d7: 'M2 15C2 14.4477 2.44772 14 3 14H21C21.5523 14 22 14.4477 22 15C22 15.5523 21.5523 16 21 16H3C2.44772 16 2 15.5523 2 15Z',
  d8: 'M7 21C7 20.4477 7.44772 20 8 20H16C16.5523 20 17 20.4477 17 21C17 21.5523 16.5523 22 16 22H8C7.44772 22 7 21.5523 7 21Z',
  d9: 'M21 4H3V2H21V4Z',
  d10: 'M16 10H8V8H16V10Z',
  d11: 'M21 16H3V14H21V16Z',
  d12: 'M16 22H8V20H16V22Z',
};

export default [
  'TextAlignCenter',
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>< d="${d.d4}"i-c="s sj sr sw"/>`,
  `<g i-c="o7">< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>< d="${d.d4}"i-c="s sj sr sw"/></g>`,
  `< d="${d.d1}"i-c="o7 s sj sr sw"/>< d="${d.d2}"i-c="o7 s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>< d="${d.d4}"i-c="s sj sr sw"/>`,
  `< d="${d.d5}"i-c="c f fr"/>< d="${d.d6}"i-c="c f fr"/>< d="${d.d7}"i-c="c f fr"/>< d="${d.d8}"i-c="c f fr"/>`,
  `< d="${d.d5}"i-c="c f fr o7"/>< d="${d.d6}"i-c="c f fr"/>< d="${d.d7}"i-c="c f fr o7"/>< d="${d.d8}"i-c="c f fr"/>`,
  `< d="${d.d1}"i-c="s sj sw"/>< d="${d.d2}"i-c="s sj sw"/>< d="${d.d3}"i-c="s sj sw"/>< d="${d.d4}"i-c="s sj sw"/>`,
  `< d="${d.d9}"i-c="c f fr"/>< d="${d.d10}"i-c="c f fr"/>< d="${d.d11}"i-c="c f fr"/>< d="${d.d12}"i-c="c f fr"/>`
];
