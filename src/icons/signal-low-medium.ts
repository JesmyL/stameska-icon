const d: Record<string, string> = {
  d1: 'M5 10L5 19',
  d2: 'M5.80844 9.28111C5.43534 9.76037 5.2488 10 5 10C4.7512 10 4.56466 9.76037 4.19156 9.28112L3.44578 8.32312C2.37255 6.94451 1.83594 6.25521 2.04429 5.68812C2.06552 5.63034 2.0916 5.57458 2.12224 5.52145C2.423 5 3.282 5 5 5C6.718 5 7.577 5 7.87776 5.52145C7.9084 5.57458 7.93448 5.63034 7.95571 5.68812C8.16406 6.25521 7.62745 6.94451 6.55422 8.32312L5.80844 9.28111Z',
  d3: 'M9 13V19',
  d4: 'M13 11L13 19',
  d5: 'M17 19L18 19',
  d6: 'M21 19L22 19',
  d7: 'M4.94126 4.25C4.13124 4.24996 3.44377 4.24993 2.92457 4.32238C2.40094 4.39545 1.80255 4.57213 1.47113 5.14674C1.41903 5.23707 1.3748 5.33168 1.33887 5.42948C1.11338 6.04322 1.34661 6.61855 1.61509 7.07905C1.88288 7.53838 2.31089 8.08813 2.8184 8.73999L3.62355 9.77426C3.74709 9.93306 3.87332 10.0953 3.99805 10.2332L3.99805 19C3.99805 19.5523 4.44576 20 4.99805 20C5.55033 20 5.99805 19.5523 5.99805 19L5.99805 10.2343C6.12311 10.0962 6.2497 9.9335 6.37359 9.77426L7.17874 8.73999C7.68624 8.08815 8.11426 7.53837 8.38205 7.07905C8.65053 6.61855 8.88376 6.04322 8.65827 5.42948C8.62234 5.33168 8.57811 5.23707 8.52601 5.14674C8.19459 4.57213 7.5962 4.39545 7.07257 4.32238C6.55337 4.24993 5.86596 4.24996 5.05593 4.25H4.94126Z',
  d8: 'M9 12C9.55228 12 10 12.4477 10 13V19C10 19.5523 9.55228 20 9 20C8.44772 20 8 19.5523 8 19V13C8 12.4477 8.44772 12 9 12Z',
  d9: 'M13 10C13.5523 10 14 10.4477 14 11L14 19C14 19.5523 13.5523 20 13 20C12.4477 20 12 19.5523 12 19L12 11C12 10.4477 12.4477 10 13 10Z',
  d10: 'M16 19C16 18.4477 16.4477 18 17 18L18 18C18.5523 18 19 18.4477 19 19C19 19.5523 18.5523 20 18 20H17C16.4477 20 16 19.5523 16 19Z',
  d11: 'M20 19C20 18.4477 20.4477 18 21 18L22 18C22.5523 18 23 18.4477 23 19C23 19.5523 22.5523 20 22 20H21C20.4477 20 20 19.5523 20 19Z',
  d12: 'M22 18.2168L19.5 18.2168M18 18.2168L15.5 18.2168',
  d13: 'M5 10L5 19M5 10L8 5H2L5 10Z',
  d14: 'M16.5 17L18.5 17V19L16.5 19V17ZM20.5 17L22.5 17V19L20.5 19V17Z',
  d15: 'M6.5 9.5L9.5 5H1.5L4.5 9.5L4.5 19H6.5L6.5 9.5Z',
  d16: 'M8.5 19V14H10.5V19H8.5Z',
  d17: 'M12.5 19L12.5 11L14.5 11L14.5 19L12.5 19Z',
};

export default [
  'SignalLowMedium',
  `< d="${d.d1}"i-c="s sr sw"/>< d="${d.d2}"i-c="s sr sw"/>< d="${d.d3}"i-c="s sr sw"/>< d="${d.d4}"i-c="s sr sw"/>< d="${d.d5}"i-c="s sr sw"/>< d="${d.d6}"i-c="s sr sw"/>`,
  `< d="${d.d1}"i-c="s sr sw"/>< d="${d.d2}"i-c="f o7"/>< d="${d.d2}"i-c="s sr sw"/>< d="${d.d3}"i-c="s sr sw"/>< d="${d.d4}"i-c="s sr sw"/>< d="${d.d5}"i-c="s sr sw"/>< d="${d.d6}"i-c="s sr sw"/>`,
  `< d="${d.d1}"i-c="s sr sw"/>< d="${d.d2}"i-c="s sr sw"/>< d="${d.d3}"i-c="o7 s sr sw"/>< d="${d.d4}"i-c="o7 s sr sw"/>< d="${d.d5}"i-c="o7 s sr sw"/>< d="${d.d6}"i-c="o7 s sr sw"/>`,
  `< d="${d.d7}"i-c="c f fr"/>< d="${d.d8}"i-c="c f fr"/>< d="${d.d9}"i-c="c f fr"/>< d="${d.d10}"i-c="c f fr"/>< d="${d.d11}"i-c="c f fr"/>`,
  `< d="${d.d7}"i-c="c f fr"/>< d="${d.d8}"i-c="c f fr"/>< d="${d.d9}"i-c="c f fr"/>< d="${d.d10}"i-c="c f fr o7"/>< d="${d.d11}"i-c="c f fr o7"/>`,
  `< d="${d.d12}"i-c="s sj sw"/>< d="${d.d13}"i-c="s sj sw"/>< d="${d.d3}"i-c="s sj sw"/>< d="${d.d4}"i-c="s sj sw"/>`,
  `< d="${d.d14}"i-c="c f fr"/>< d="${d.d15}"i-c="f"/>< d="${d.d16}"i-c="c f fr"/>< d="${d.d17}"i-c="c f fr"/>`
];
