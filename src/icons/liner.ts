const d: Record<string, string> = {
  d1: 'M3 20L21 4',
  d2: 'M3 20L12 12',
  d3: 'M21.7474 3.33565C22.1143 3.74843 22.0772 4.3805 21.6644 4.74742L3.66437 20.7474C3.25159 21.1143 2.61952 21.0772 2.2526 20.6644C1.88568 20.2516 1.92286 19.6195 2.33565 19.2526L20.3356 3.2526C20.7484 2.88568 21.3805 2.92286 21.7474 3.33565Z',
  d4: 'M12.7474 11.3356C13.1143 11.7484 13.0772 12.3805 12.6644 12.7474L3.66437 20.7474C3.25159 21.1143 2.61952 21.0772 2.2526 20.6644C1.88568 20.2516 1.92286 19.6195 2.33565 19.2526L11.3356 11.2526C11.7484 10.8857 12.3805 10.9229 12.7474 11.3356Z',
  d5: 'M3.41421 21.9999L22 3.41421L20.5858 2L2 20.5857L3.41421 21.9999Z',
};

export default [
  'Liner',
  `< d="${d.d1}"i-c="s sj sr sw"/>`,
  `< d="${d.d1}"i-c="o7 s sj sr sw"/>`,
  `< d="${d.d1}"i-c="o7 s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>`,
  `< d="${d.d3}"i-c="c f fr"/>`,
  `< d="${d.d3}"i-c="c f fr o7"/>< d="${d.d4}"i-c="c f fr"/>`,
  `< d="${d.d1}"i-c="s sj sw"/>`,
  `< d="${d.d5}"i-c="f"/>`
];
