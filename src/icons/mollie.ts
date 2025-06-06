const d = {
  d1: 'M6 18H2V12C2 8.68629 4.68629 6 8 6C9.53671 6 10.9385 6.57771 12 7.52779C13.0615 6.57771 14.4633 6 16 6C19.3137 6 22 8.68629 22 12V18H18V12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12V18H10V12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12V18Z',
  d2: 'M12 7.52779C13.0615 6.57771 14.4633 6 16 6C19.3137 6 22 8.68629 22 12V18H18V12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12V18H12',
  d3: 'M10 18H14V12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12V18H22V12C22 8.68629 19.3137 6 16 6C12.6863 6 10 8.68629 10 12V18Z',
  d4: 'M2 18H6V12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12V18H14V12C14 8.68629 11.3137 6 8 6C4.68629 6 2 8.68629 2 12V18Z'
};

export default [
  'Mollie',
  `< d="${d.d1}"i-c="s sw sj"/>`,
  `< d="${d.d1}"i-c="o7 f"/>< d="${d.d1}"i-c="o7 f s sw sj"/>`,
  `< d="${d.d1}"i-c="o7 s sw sr sj"/>< d="${d.d2}"i-c="o7 s sw sr sj"/>`,
  `< d="${d.d1}"i-c="fr c f"/>`,
  `< d="${d.d3}"i-c="o7 f"/>< d="${d.d4}"i-c="o7 f"/>`,
  `< d="${d.d1}"i-c="s sw"/>`,
  `< d="${d.d1}"i-c="fr c f"/>`
];