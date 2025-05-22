const d: Record<string, string> = {
  d1: 'M4 5L20 5',
  d2: 'M18 12L6 12',
  d3: 'M8 19L16 19',
  d4: 'M3 5C3 4.44772 3.44772 4 4 4L20 4C20.5523 4 21 4.44772 21 5C21 5.55229 20.5523 6 20 6L4 6C3.44772 6 3 5.55228 3 5Z',
  d5: 'M18 13L6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44771 11 6 11L18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13Z',
  d6: 'M7 19C7 18.4477 7.44772 18 8 18L16 18C16.5523 18 17 18.4477 17 19C17 19.5523 16.5523 20 16 20L8 20C7.44771 20 7 19.5523 7 19Z',
  d7: 'M20 6L4 6L4 4L20 4L20 6Z',
  d8: 'M18 13L6 13L6 11L18 11L18 13Z',
  d9: 'M16 20L8 20L8 18L16 18L16 20Z',
};

export default [
  'Menu08',
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>`,
  `< d="${d.d1}"i-c="o7 s sj sr sw"/>< d="${d.d2}"i-c="o7 s sj sr sw"/>< d="${d.d3}"i-c="o7 s sj sr sw"/>`,
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="o7 s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>`,
  `< d="${d.d4}"i-c="c f fr"/>< d="${d.d5}"i-c="c f fr"/>< d="${d.d6}"i-c="c f fr"/>`,
  `< d="${d.d4}"i-c="c f fr"/>< d="${d.d5}"i-c="c f fr o7"/>< d="${d.d6}"i-c="c f fr"/>`,
  `< d="${d.d1}"i-c="s sj sw"/>< d="${d.d2}"i-c="s sj sw"/>< d="${d.d3}"i-c="s sj sw"/>`,
  `< d="${d.d7}"i-c="c f fr"/>< d="${d.d8}"i-c="c f fr"/>< d="${d.d9}"i-c="c f fr"/>`
];
