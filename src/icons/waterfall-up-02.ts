const d: Record<string, string> = {
  d1: 'M2 21H22',
  d2: 'M4 18L4 15',
  d3: 'M8 14L8 9',
  d4: 'M12 11L12 9',
  d5: 'M16 11L16 5',
  d6: 'M20 5L20 3',
  d7: 'M1 21C1 20.4477 1.44772 20 2 20H22C22.5523 20 23 20.4477 23 21C23 21.5523 22.5523 22 22 22H2C1.44772 22 1 21.5523 1 21Z',
  d8: 'M4 19C3.44772 19 3 18.5523 3 18L3 15C3 14.4477 3.44772 14 4 14C4.55228 14 5 14.4477 5 15L5 18C5 18.5523 4.55228 19 4 19Z',
  d9: 'M8 15C7.44772 15 7 14.5523 7 14L7 9C7 8.44772 7.44771 8 8 8C8.55228 8 9 8.44772 9 9L9 14C9 14.5523 8.55228 15 8 15Z',
  d10: 'M12 12C11.4477 12 11 11.5523 11 11L11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9L13 11C13 11.5523 12.5523 12 12 12Z',
  d11: 'M16 12C15.4477 12 15 11.5523 15 11L15 5C15 4.44771 15.4477 4 16 4C16.5523 4 17 4.44771 17 5L17 11C17 11.5523 16.5523 12 16 12Z',
  d12: 'M20 6C19.4477 6 19 5.55228 19 5L19 3C19 2.44772 19.4477 2 20 2C20.5523 2 21 2.44772 21 3L21 5C21 5.55228 20.5523 6 20 6Z',
  d13: 'M22 21.5H2V19.5H22V21.5Z',
  d14: 'M5 14.5L5 17.5L3 17.5L3 14.5L5 14.5Z',
  d15: 'M9 8.5L9 13.5L7 13.5L7 8.5L9 8.5Z',
  d16: 'M13 8.5L13 10.5L11 10.5L11 8.5L13 8.5Z',
  d17: 'M17 4.5L17 10.5L15 10.5L15 4.5L17 4.5Z',
  d18: 'M21 2.5L21 4.5L19 4.5L19 2.5L21 2.5Z',
};

export default [
  'WaterfallUp02',
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>< d="${d.d4}"i-c="s sj sr sw"/>< d="${d.d5}"i-c="s sj sr sw"/>< d="${d.d6}"i-c="s sj sr sw"/>`,
  `< d="${d.d1}"i-c="o7 s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>< d="${d.d4}"i-c="s sj sr sw"/>< d="${d.d5}"i-c="s sj sr sw"/>< d="${d.d6}"i-c="s sj sr sw"/>`,
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="o7 s sj sr sw"/>< d="${d.d4}"i-c="s sj sr sw"/>< d="${d.d5}"i-c="o7 s sj sr sw"/>< d="${d.d6}"i-c="s sj sr sw"/>`,
  `< d="${d.d7}"i-c="c f fr"/>< d="${d.d8}"i-c="c f fr"/>< d="${d.d9}"i-c="c f fr"/>< d="${d.d10}"i-c="c f fr"/>< d="${d.d11}"i-c="c f fr"/>< d="${d.d12}"i-c="c f fr"/>`,
  `< d="${d.d7}"i-c="c f fr"/>< d="${d.d8}"i-c="c f fr o7"/>< d="${d.d9}"i-c="c f fr"/>< d="${d.d10}"i-c="c f fr o7"/>< d="${d.d11}"i-c="c f fr"/>< d="${d.d12}"i-c="c f fr o7"/>`,
  `< d="${d.d1}"i-c="s sj sw"/>< d="${d.d2}"i-c="s sj sw"/>< d="${d.d3}"i-c="s sj sw"/>< d="${d.d4}"i-c="s sj sw"/>< d="${d.d5}"i-c="s sj sw"/>< d="${d.d6}"i-c="s sj sw"/>`,
  `< d="${d.d13}"i-c="c f fr"/>< d="${d.d14}"i-c="c f fr"/>< d="${d.d15}"i-c="c f fr"/>< d="${d.d16}"i-c="c f fr"/>< d="${d.d17}"i-c="c f fr"/>< d="${d.d18}"i-c="c f fr"/>`
];
