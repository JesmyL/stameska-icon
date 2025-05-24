const d = {
  d1: 'M4 9L20 9',
  d2: 'M4 15L14 15',
  d3: 'M3 9C3 8.44772 3.44772 8 4 8L20 8C20.5523 8 21 8.44772 21 9C21 9.55229 20.5523 10 20 10L4 10C3.44772 10 3 9.55228 3 9Z',
  d4: 'M3 15C3 14.4477 3.44772 14 4 14L14 14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16L4 16C3.44772 16 3 15.5523 3 15Z',
  d5: 'M3 8L21 8L21 10L3 10L3 8Z',
  d6: 'M3 14L15 14L15 16L3 16L3 14Z'
};

export default [
  'MenuTwoLine',
  `< d="${d.d1}"i-c="s sw sr sj"/>< d="${d.d2}"i-c="s sw sr sj"/>`,
  `< d="${d.d1}"i-c="s sw sr sj"/>< d="${d.d2}"i-c="s sw sr sj"/>`,
  `< d="${d.d1}"i-c="o7 s sw sr sj"/>< d="${d.d2}"i-c="o7 s sw sr sj"/>`,
  `< d="${d.d3}"i-c="fr c f"/>< d="${d.d4}"i-c="fr c f"/>`,
  `< d="${d.d3}"i-c="o7 fr c f"/>< d="${d.d4}"i-c="o7 fr c f"/>`,
  `< d="${d.d1}"i-c="s sw ss"/>< d="${d.d2}"i-c="s sw ss"/>`,
  `< d="${d.d5}"i-c="fr c f"/>< d="${d.d6}"i-c="fr c f"/>`
];