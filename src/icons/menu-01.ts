const d: Record<string, string> = {
  d1: 'M4 5L20 5',
  d2: 'M4 12L20 12',
  d3: 'M4 19L20 19',
  d4: 'M3 5C3 4.44772 3.44772 4 4 4L20 4C20.5523 4 21 4.44772 21 5C21 5.55229 20.5523 6 20 6L4 6C3.44772 6 3 5.55228 3 5Z',
  d5: 'M3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12Z',
  d6: 'M3 19C3 18.4477 3.44772 18 4 18L20 18C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20L4 20C3.44772 20 3 19.5523 3 19Z',
  d7: 'M20 6L4 6L4 4L20 4L20 6Z',
  d8: 'M20 13L4 13L4 11L20 11L20 13Z',
  d9: 'M20 20L4 20L4 18L20 18L20 20Z',
};

export default [
  'Menu01',
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>`,
  `< d="${d.d1}"i-c="o7 s sj sr sw"/>< d="${d.d2}"i-c="o7 s sj sr sw"/>< d="${d.d3}"i-c="o7 s sj sr sw"/>`,
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="o7 s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>`,
  `< d="${d.d4}"i-c="c f fr"/>< d="${d.d5}"i-c="c f fr"/>< d="${d.d6}"i-c="c f fr"/>`,
  `< d="${d.d4}"i-c="c f fr"/>< d="${d.d5}"i-c="c f fr o7"/>< d="${d.d6}"i-c="c f fr"/>`,
  `< d="${d.d1}"i-c="s sj sw"/>< d="${d.d2}"i-c="s sj sw"/>< d="${d.d3}"i-c="s sj sw"/>`,
  `< d="${d.d7}"i-c="c f fr"/>< d="${d.d8}"i-c="c f fr"/>< d="${d.d9}"i-c="c f fr"/>`
];
