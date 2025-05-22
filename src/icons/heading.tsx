const d: Record<string, string> = {
  d1: 'M6 4V20',
  d2: 'M18 4V20',
  d3: 'M6 12H18',
  d4: 'M6 3C6.55228 3 7 3.44772 7 4V20C7 20.5523 6.55228 21 6 21C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3Z',
  d5: 'M18 3C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V4C17 3.44772 17.4477 3 18 3Z',
  d6: 'M5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12Z',
  d7: 'M5 20V4H7V20H5Z',
  d8: 'M17 20V4H19V20H17Z',
  d9: 'M18 13H6V11H18V13Z',
};

export default [
  'Heading',
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>`,
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>`,
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="o7 s sj sr sw"/>`,
  `< d="${d.d4}"i-c="c f fr"/>< d="${d.d5}"i-c="c f fr"/>< d="${d.d6}"i-c="c f fr"/>`,
  `< d="${d.d4}"i-c="c f fr"/>< d="${d.d5}"i-c="c f fr"/>< d="${d.d6}"i-c="c f fr o7"/>`,
  `< d="${d.d1}"i-c="s sj sw"/>< d="${d.d2}"i-c="s sj sw"/>< d="${d.d3}"i-c="s sj sw"/>`,
  `< d="${d.d7}"i-c="c f fr"/>< d="${d.d8}"i-c="c f fr"/>< d="${d.d9}"i-c="c f fr"/>`
];
