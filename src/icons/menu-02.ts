const d: Record<string, string> = {
  d1: 'M4 5L16 5',
  d2: 'M4 12L20 12',
  d3: 'M4 19L12 19',
  d4: 'M3 5C3 4.44772 3.44772 4 4 4L16 4C16.5523 4 17 4.44772 17 5C17 5.55229 16.5523 6 16 6L4 6C3.44772 6 3 5.55228 3 5Z',
  d5: 'M3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12Z',
  d6: 'M3 19C3 18.4477 3.44772 18 4 18L12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20L4 20C3.44772 20 3 19.5523 3 19Z',
  d7: 'M16 6L4 6L4 4L16 4L16 6Z',
  d8: 'M20 13L4 13L4 11L20 11L20 13Z',
  d9: 'M12 20L4 20L4 18L12 18L12 20Z',
};

export default [
  'Menu02',
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>`,
  `< d="${d.d1}"i-c="o7 s sj sr sw"/>< d="${d.d2}"i-c="o7 s sj sr sw"/>< d="${d.d3}"i-c="o7 s sj sr sw"/>`,
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="o7 s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>`,
  `< d="${d.d4}"i-c="c f fr"/>< d="${d.d5}"i-c="c f fr"/>< d="${d.d6}"i-c="c f fr"/>`,
  `< d="${d.d4}"i-c="c f fr"/>< d="${d.d5}"i-c="c f fr o7"/>< d="${d.d6}"i-c="c f fr"/>`,
  `< d="${d.d1}"i-c="s sj sw"/>< d="${d.d2}"i-c="s sj sw"/>< d="${d.d3}"i-c="s sj sw"/>`,
  `< d="${d.d7}"i-c="c f fr"/>< d="${d.d8}"i-c="c f fr"/>< d="${d.d9}"i-c="c f fr"/>`
];
