const d: Record<string, string> = {
  d1: 'M5.5 3V8M8 5.5L3 5.5',
  d2: 'M8 16L6 18M6 18L4 20M6 18L8 20M6 18L4 16',
  d3: 'M20 6L16 6',
  d4: 'M20 18.5L16 18.5M20 15.5L16 15.5',
  d5: 'M22 12L2 12',
  d6: 'M12 22L12 2',
  d7: 'M22 12H2M12 22L12 2',
  d8: 'M5.5 2C6.05228 2 6.5 2.44772 6.5 3V4.5H8C8.55228 4.5 9 4.94772 9 5.5C9 6.05228 8.55228 6.5 8 6.5H6.5V8C6.5 8.55228 6.05228 9 5.5 9C4.94772 9 4.5 8.55228 4.5 8V6.5H3C2.44772 6.5 2 6.05228 2 5.5C2 4.94771 2.44772 4.5 3 4.5L4.5 4.5V3C4.5 2.44772 4.94772 2 5.5 2Z',
  d9: 'M3.29289 15.2929C3.68342 14.9024 4.31658 14.9024 4.70711 15.2929L6 16.5858L7.29289 15.2929C7.68342 14.9024 8.31658 14.9024 8.70711 15.2929C9.09763 15.6834 9.09763 16.3166 8.70711 16.7071L7.41421 18L8.70711 19.2929C9.09763 19.6834 9.09763 20.3166 8.70711 20.7071C8.31658 21.0976 7.68342 21.0976 7.29289 20.7071L6 19.4142L4.70711 20.7071C4.31658 21.0976 3.68342 21.0976 3.29289 20.7071C2.90237 20.3166 2.90237 19.6834 3.29289 19.2929L4.58579 18L3.29289 16.7071C2.90237 16.3166 2.90237 15.6834 3.29289 15.2929Z',
  d10: 'M21 6C21 6.55228 20.5523 7 20 7L16 7C15.4477 7 15 6.55228 15 6C15 5.44771 15.4477 5 16 5L20 5C20.5523 5 21 5.44772 21 6Z',
  d11: 'M15 15.5C15 14.9477 15.4477 14.5 16 14.5L20 14.5C20.5523 14.5 21 14.9477 21 15.5C21 16.0523 20.5523 16.5 20 16.5L16 16.5C15.4477 16.5 15 16.0523 15 15.5ZM15 18.5C15 17.9477 15.4477 17.5 16 17.5L20 17.5C20.5523 17.5 21 17.9477 21 18.5C21 19.0523 20.5523 19.5 20 19.5H16C15.4477 19.5 15 19.0523 15 18.5Z',
  d12: 'M12 1C12.5523 1 13 1.44772 13 2V11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H11V2C11 1.44772 11.4477 1 12 1Z',
  d13: 'M4.5 4.5V3H6.5V4.5L8 4.5V6.5H6.5V8H4.5V6.5H3V4.5L4.5 4.5Z',
  d14: 'M6.00008 19.4143L7.29297 20.7072L8.70718 19.293L7.41429 18.0001L8.70718 16.7072L7.29297 15.293L6.00008 16.5859L4.70718 15.293L3.29297 16.7072L4.58586 18.0001L3.29297 19.293L4.70718 20.7072L6.00008 19.4143Z',
  d15: 'M16 5L20 5L20 7L16 7L16 5Z',
  d16: 'M16 14.5L20 14.5V16.5L16 16.5V14.5ZM16 17.5L20 17.5V19.5H16V17.5Z',
  d17: 'M2 11L22 11L22 13L2 13L2 11Z',
  d18: 'M13 2L13 22L11 22L11 2L13 2Z',
};

export default [
  'Calculator',
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>< d="${d.d4}"i-c="s sj sr sw"/>< d="${d.d5}"i-c="s sj sr sw"/>< d="${d.d6}"i-c="s sj sr sw"/>`,
  `< d="${d.d1}"i-c="o7 s sj sr sw"/>< d="${d.d2}"i-c="o7 s sj sr sw"/>< d="${d.d3}"i-c="o7 s sj sr sw"/>< d="${d.d4}"i-c="o7 s sj sr sw"/>< d="${d.d5}"i-c="s sj sr sw"/>< d="${d.d6}"i-c="s sj sr sw"/>`,
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>< d="${d.d4}"i-c="s sj sr sw"/>< d="${d.d7}"i-c="o7 s sj sr sw"/>`,
  `< d="${d.d8}"i-c="c f fr"/>< d="${d.d9}"i-c="c f fr"/>< d="${d.d10}"i-c="c f fr"/>< d="${d.d11}"i-c="c f fr"/>< d="${d.d12}"i-c="c f fr"/>`,
  `< d="${d.d8}"i-c="c f fr"/>< d="${d.d9}"i-c="c f fr"/>< d="${d.d10}"i-c="c f fr"/>< d="${d.d11}"i-c="c f fr"/>< d="${d.d12}"i-c="c f fr o7"/>`,
  `< d="${d.d1}"i-c="s sj sw"/>< d="${d.d2}"i-c="s sj sw"/>< d="${d.d3}"i-c="s sj sw"/>< d="${d.d4}"i-c="s sj sw"/>< d="${d.d5}"i-c="s sj sw"/>< d="${d.d6}"i-c="s sj sw"/>`,
  `< d="${d.d13}"i-c="c f fr"/>< d="${d.d14}"i-c="c f fr"/>< d="${d.d15}"i-c="c f fr"/>< d="${d.d16}"i-c="c f fr"/>< d="${d.d17}"i-c="c f fr"/>< d="${d.d18}"i-c="c f fr"/>`
];
