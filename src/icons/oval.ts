const d: Record<string, string> = {
  d1: 'M22 12C22 16.9706 17.5228 21 12 21C6.47715 21 2 16.9706 2 12C2 7.02944 6.47715 3 12 3C17.5228 3 22 7.02944 22 12Z',
  d2: 'M12 21C6.47715 21 2 16.9706 2 12C2 7.02944 6.47715 3 12 3',
  d3: 'M1.25 12C1.25 6.54285 6.13922 2.25 12 2.25C17.8608 2.25 22.75 6.54285 22.75 12C22.75 17.4572 17.8608 21.75 12 21.75C6.13922 21.75 1.25 17.4572 1.25 12Z',
  d4: 'M22.75 11.9987C22.75 17.4559 17.8608 21.7487 12 21.7487C8.84987 21.7487 5.98043 20.5085 4 18.5139L18.3694 4.14453C21.0133 5.9075 22.75 8.74633 22.75 11.9987Z',
};

export default [
  'Oval',
  `< d="${d.d1}"i-c="s sj sw"/>`,
  `< d="${d.d1}"i-c="f o7"/>< d="${d.d1}"i-c="s sj sw"/>< d="${d.d1}"i-c="s sj sw"/>`,
  `< d="${d.d1}"i-c="o7 s sj sw"/>< d="${d.d2}"i-c="s sj sr sw"/>`,
  `< d="${d.d3}"i-c="c f fr"/>`,
  `< d="${d.d3}"i-c="c f fr o7"/>< d="${d.d4}"i-c="f"/>`,
  `< d="${d.d1}"i-c="s sj sw"/>`,
  `< d="${d.d3}"i-c="f"/>`
];
