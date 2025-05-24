const d: Record<string, string> = {
  d1: 'M3 3H21',
  d2: 'M13 9H21',
  d3: 'M3 15H21',
  d4: 'M13 21H21',
  d5: 'M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4H3C2.44772 4 2 3.55228 2 3Z',
  d6: 'M12 9C12 8.44772 12.4477 8 13 8H21C21.5523 8 22 8.44772 22 9C22 9.55228 21.5523 10 21 10H13C12.4477 10 12 9.55228 12 9Z',
  d7: 'M2 15C2 14.4477 2.44772 14 3 14H21C21.5523 14 22 14.4477 22 15C22 15.5523 21.5523 16 21 16H3C2.44772 16 2 15.5523 2 15Z',
  d8: 'M12 21C12 20.4477 12.4477 20 13 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21Z',
  d9: 'M21 4H3V2H21V4Z',
  d10: 'M21 10H13V8H21V10Z',
  d11: 'M21 16H3V14H21V16Z',
  d12: 'M21 22H13V20H21V22Z',
};

export default [
  'TextAlignRight',
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>< d="${d.d4}"i-c="s sj sr sw"/>`,
  `<g i-c="o7">< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>< d="${d.d4}"i-c="s sj sr sw"/></g>`,
  `< d="${d.d1}"i-c="o7 s sj sr sw"/>< d="${d.d2}"i-c="o7 s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>< d="${d.d4}"i-c="s sj sr sw"/>`,
  `< d="${d.d5}"i-c="c f fr"/>< d="${d.d6}"i-c="c f fr"/>< d="${d.d7}"i-c="c f fr"/>< d="${d.d8}"i-c="c f fr"/>`,
  `< d="${d.d5}"i-c="c f fr o7"/>< d="${d.d6}"i-c="c f fr"/>< d="${d.d7}"i-c="c f fr o7"/>< d="${d.d8}"i-c="c f fr"/>`,
  `< d="${d.d1}"i-c="s sj sw"/>< d="${d.d2}"i-c="s sj sw"/>< d="${d.d3}"i-c="s sj sw"/>< d="${d.d4}"i-c="s sj sw"/>`,
  `< d="${d.d9}"i-c="c f fr"/>< d="${d.d10}"i-c="c f fr"/>< d="${d.d11}"i-c="c f fr"/>< d="${d.d12}"i-c="c f fr"/>`
];
