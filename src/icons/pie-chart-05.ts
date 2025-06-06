const d = {
  d1: 'M2 12C2 17.5228 6.47715 22 12 22V17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7V2C6.47715 2 2 6.47715 2 12Z',
  d2: 'M12 17L12 22',
  d3: 'M12 2L12 7',
  d4: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2',
  d5: 'M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7',
  d6: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2',
  d7: 'M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7',
  d8: 'M11.25 1.25C5.66285 1.63597 1.25 6.30141 1.25 12C1.25 17.6986 5.66285 22.364 11.25 22.75V17.7152C8.42873 17.3468 6.25 14.9285 6.25 12C6.25 9.07154 8.42873 6.65317 11.25 6.28478V1.25Z',
  d9: 'M12.75 6.28478C15.5713 6.65317 17.75 9.07154 17.75 12C17.75 14.9285 15.5713 17.3468 12.75 17.7152V22.75C18.3372 22.364 22.75 17.6986 22.75 12C22.75 6.30141 18.3372 1.63597 12.75 1.25V6.28478Z'
};

export default [
  'PieChart05',
  `<C cx="12"cy="12"r="10"i-c="s sw"/><C cx="12"cy="12"r="10"cx="12"cy="12"r="5"i-c="s sw"/>< d="${d.d2}"cx="12"cy="12"r="10"cx="12"cy="12"r="5"i-c="s sw sr sj"/>< d="${d.d3}"cx="12"cy="12"r="10"cx="12"cy="12"r="5"i-c="s sw sr sj"/>`,
  `< d="${d.d1}"i-c="o7 f"/><C d="${d.d1}"cx="12"cy="12"r="10"i-c="o7 f s sw"/><C d="${d.d1}"cx="12"cy="12"r="10"cx="12"cy="12"r="5"i-c="o7 f s sw"/>< d="${d.d2}"cx="12"cy="12"r="10"cx="12"cy="12"r="5"i-c="o7 f s sw sr sj"/>< d="${d.d3}"cx="12"cy="12"r="10"cx="12"cy="12"r="5"i-c="o7 f s sw sr sj"/>`,
  `< d="${d.d4}"i-c="s sw"/>< d="${d.d5}"i-c="s sw"/>< d="${d.d6}"i-c="s sw o7"/>< d="${d.d7}"i-c="s sw o7"/>< d="${d.d2}"i-c="s sw o7 sr sj"/>< d="${d.d3}"i-c="s sw o7 sr sj"/>`,
  `< d="${d.d8}"i-c="f"/>< d="${d.d9}"i-c="f"/>`,
  `< d="${d.d9}"i-c="o7 f"/>< d="${d.d8}"i-c="o7 f"/>`,
  `<C cx="12"cy="12"r="10"i-c="s sw ss"/><C cx="12"cy="12"r="10"cx="12"cy="12"r="5"i-c="s sw ss"/>< d="${d.d2}"cx="12"cy="12"r="10"cx="12"cy="12"r="5"i-c="s sw ss"/>< d="${d.d3}"cx="12"cy="12"r="10"cx="12"cy="12"r="5"i-c="s sw ss"/>`,
  `< d="${d.d8}"i-c="f"/>< d="${d.d9}"i-c="f"/>`
];