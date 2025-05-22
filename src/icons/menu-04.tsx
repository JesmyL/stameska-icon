const d: Record<string, string> = {
  d1: 'M7 5L17 5',
  d2: 'M4 12L20 12',
  d3: 'M7 19L17 19',
  d4: 'M6 5C6 4.44772 6.44772 4 7 4L17 4C17.5523 4 18 4.44772 18 5C18 5.55229 17.5523 6 17 6L7 6C6.44772 6 6 5.55228 6 5Z',
  d5: 'M3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12Z',
  d6: 'M6 19C6 18.4477 6.44772 18 7 18L17 18C17.5523 18 18 18.4477 18 19C18 19.5523 17.5523 20 17 20L7 20C6.44772 20 6 19.5523 6 19Z',
  d7: 'M17 6L7 6L7 4L17 4L17 6Z',
  d8: 'M20 13L4 13L4 11L20 11L20 13Z',
  d9: 'M17 20L7 20L7 18L17 18L17 20Z',
};

export default [
  'Menu04',
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>`,
  `< d="${d.d1}"i-c="o7 s sj sr sw"/>< d="${d.d2}"i-c="o7 s sj sr sw"/>< d="${d.d3}"i-c="o7 s sj sr sw"/>`,
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="o7 s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>`,
  `< d="${d.d4}"i-c="c f fr"/>< d="${d.d5}"i-c="c f fr"/>< d="${d.d6}"i-c="c f fr"/>`,
  `< d="${d.d4}"i-c="c f fr"/>< d="${d.d5}"i-c="c f fr o7"/>< d="${d.d6}"i-c="c f fr"/>`,
  `< d="${d.d1}"i-c="s sj sw"/>< d="${d.d2}"i-c="s sj sw"/>< d="${d.d3}"i-c="s sj sw"/>`,
  `< d="${d.d7}"i-c="c f fr"/>< d="${d.d8}"i-c="c f fr"/>< d="${d.d9}"i-c="c f fr"/>`
];
