const d: Record<string, string> = {
  d1: 'M20 12L10 12',
  d2: 'M20 5L4 5',
  d3: 'M20 19L4 19',
  d4: 'M21 12C21 11.4477 20.5523 11 20 11L10 11C9.44771 11 9 11.4477 9 12C9 12.5523 9.44771 13 10 13L20 13C20.5523 13 21 12.5523 21 12Z',
  d5: 'M21 5C21 4.44772 20.5523 4 20 4L4 4C3.44772 4 3 4.44772 3 5C3 5.55229 3.44772 6 4 6L20 6C20.5523 6 21 5.55228 21 5Z',
  d6: 'M21 19C21 18.4477 20.5523 18 20 18L4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20L20 20C20.5523 20 21 19.5523 21 19Z',
  d7: 'M10 13L20 13L20 11L10 11L10 13Z',
  d8: 'M4 6L20 6L20 4L4 4L4 6Z',
  d9: 'M4 20L20 20L20 18L4 18L4 20Z',
};

export default [
  'Menu11',
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>`,
  `< d="${d.d1}"i-c="o7 s sj sr sw"/>< d="${d.d2}"i-c="o7 s sj sr sw"/>< d="${d.d3}"i-c="o7 s sj sr sw"/>`,
  `< d="${d.d1}"i-c="o7 s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>`,
  `< d="${d.d4}"i-c="c f fr"/>< d="${d.d5}"i-c="c f fr"/>< d="${d.d6}"i-c="c f fr"/>`,
  `< d="${d.d4}"i-c="c f fr o7"/>< d="${d.d5}"i-c="c f fr"/>< d="${d.d6}"i-c="c f fr"/>`,
  `< d="${d.d1}"i-c="s sj sw"/>< d="${d.d2}"i-c="s sj sw"/>< d="${d.d3}"i-c="s sj sw"/>`,
  `< d="${d.d7}"i-c="c f fr"/>< d="${d.d8}"i-c="c f fr"/>< d="${d.d9}"i-c="c f fr"/>`
];
