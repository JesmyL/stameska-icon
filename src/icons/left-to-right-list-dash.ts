const d: Record<string, string> = {
  d1: 'M9 5L21 5',
  d2: 'M3 5L5 5',
  d3: 'M9 12L21 12',
  d4: 'M3 12L5 12',
  d5: 'M9 19L21 19',
  d6: 'M3 19L5 19',
  d7: 'M8 5C8 4.44772 8.44772 4 9 4L21 4C21.5523 4 22 4.44772 22 5C22 5.55229 21.5523 6 21 6L9 6C8.44772 6 8 5.55228 8 5Z',
  d8: 'M2 5C2 4.44772 2.44772 4 3 4L5 4C5.55228 4 6 4.44772 6 5C6 5.55229 5.55228 6 5 6L3 6C2.44772 6 2 5.55228 2 5Z',
  d9: 'M8 12C8 11.4477 8.44772 11 9 11L21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13L9 13C8.44772 13 8 12.5523 8 12Z',
  d10: 'M2 12C2 11.4477 2.44772 11 3 11L5 11C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13L3 13C2.44772 13 2 12.5523 2 12Z',
  d11: 'M8 19C8 18.4477 8.44772 18 9 18L21 18C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20L9 20C8.44772 20 8 19.5523 8 19Z',
  d12: 'M2 19C2 18.4477 2.44772 18 3 18L5 18C5.55228 18 6 18.4477 6 19C6 19.5523 5.55228 20 5 20L3 20C2.44772 20 2 19.5523 2 19Z',
  d13: 'M3 5L6 5',
  d14: 'M3 12L6 12',
  d15: 'M3 19L6 19',
  d16: 'M21 6L9 6L9 4L21 4L21 6Z',
  d17: 'M6 6L3 6L3 4L6 4L6 6Z',
  d18: 'M21 13L9 13L9 11L21 11L21 13Z',
  d19: 'M6 13L3 13L3 11L6 11L6 13Z',
  d20: 'M21 20L9 20L9 18L21 18L21 20Z',
  d21: 'M6 20L3 20L3 18L6 18L6 20Z',
};

export default [
  'LeftToRightListDash',
  `< d="${d.d1}"i-c="s sr sw"/>< d="${d.d2}"i-c="s sr sw"/>< d="${d.d3}"i-c="s sr sw"/>< d="${d.d4}"i-c="s sr sw"/>< d="${d.d5}"i-c="s sr sw"/>< d="${d.d6}"i-c="s sr sw"/>`,
  `< d="${d.d1}"i-c="o7 s sr sw"/>< d="${d.d2}"i-c="s sr sw"/>< d="${d.d3}"i-c="o7 s sr sw"/>< d="${d.d4}"i-c="s sr sw"/>< d="${d.d5}"i-c="o7 s sr sw"/>< d="${d.d6}"i-c="s sr sw"/>`,
  `< d="${d.d1}"i-c="s sr sw"/>< d="${d.d2}"i-c="o7 s sr sw"/>< d="${d.d3}"i-c="o7 s sr sw"/>< d="${d.d4}"i-c="o7 s sr sw"/>< d="${d.d5}"i-c="s sr sw"/>< d="${d.d6}"i-c="o7 s sr sw"/>`,
  `< d="${d.d7}"i-c="c f fr"/>< d="${d.d8}"i-c="c f fr"/>< d="${d.d9}"i-c="c f fr"/>< d="${d.d10}"i-c="c f fr"/>< d="${d.d11}"i-c="c f fr"/>< d="${d.d12}"i-c="c f fr"/>`,
  `< d="${d.d7}"i-c="c f fr o7"/>< d="${d.d8}"i-c="c f fr"/>< d="${d.d9}"i-c="c f fr o7"/>< d="${d.d10}"i-c="c f fr"/>< d="${d.d11}"i-c="c f fr o7"/>< d="${d.d12}"i-c="c f fr"/>`,
  `< d="${d.d1}"i-c="s sw"/>< d="${d.d13}"i-c="s sw"/>< d="${d.d3}"i-c="s sw"/>< d="${d.d14}"i-c="s sw"/>< d="${d.d5}"i-c="s sw"/>< d="${d.d15}"i-c="s sw"/>`,
  `< d="${d.d16}"i-c="c f fr"/>< d="${d.d17}"i-c="c f fr"/>< d="${d.d18}"i-c="c f fr"/>< d="${d.d19}"i-c="c f fr"/>< d="${d.d20}"i-c="c f fr"/>< d="${d.d21}"i-c="c f fr"/>`
];
