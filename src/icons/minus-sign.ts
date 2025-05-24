const d: Record<string, string> = {
  d1: 'M20 12L4 12',
  d2: 'M4 12H12',
  d3: 'M21.25 12C21.25 12.6904 20.6904 13.25 20 13.25H4C3.30964 13.25 2.75 12.6904 2.75 12C2.75 11.3096 3.30964 10.75 4 10.75L20 10.75C20.6904 10.75 21.25 11.3096 21.25 12Z',
  d4: 'M4 10.75L20 10.75V13.25H4V10.75Z',
};

export default [
  'MinusSign',
  `< d="${d.d1}"i-c="s sj sr sw"/>`,
  `< d="${d.d1}"i-c="o7 s sj sr sw"/>`,
  `< d="${d.d1}"i-c="o7 s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>`,
  `< d="${d.d3}"i-c="c f fr"/>`,
  `< d="${d.d3}"i-c="c f fr o7"/>`,
  `< d="${d.d1}"i-c="s sj sw"/>`,
  `< d="${d.d4}"i-c="c f fr"/>`
];
