const d = {
  d1: 'M3 3C3.55229 3 4 3.44772 4 4V14C4 15.4425 4.00213 16.4237 4.10092 17.1586C4.19585 17.8646 4.36322 18.1916 4.58579 18.4142C4.80836 18.6368 5.13538 18.8042 5.84143 18.8991C6.57625 18.9979 7.55752 19 9 19H21C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H8.92946C7.57533 21 6.4587 21.0001 5.57494 20.8812C4.64711 20.7565 3.82768 20.4845 3.17158 19.8284C2.51547 19.1723 2.2435 18.3529 2.11875 17.4251C1.99994 16.5413 1.99997 15.4247 2 14.0706L2 4C2 3.44772 2.44772 3 3 3Z',
  d2: 'M6 16C6 15.4477 6.44772 15 7 15L16 15C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17L7 17C6.44772 17 6 16.5523 6 16Z',
  d3: 'M6 12C6 11.4477 6.44772 11 7 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L7 13C6.44772 13 6 12.5523 6 12Z',
  d4: 'M6 8C6 7.44772 6.44772 7 7 7L13 7C13.5523 7 14 7.44772 14 8C14 8.55229 13.5523 9 13 9L7 9C6.44772 9 6 8.55228 6 8Z',
  d5: 'M3 4V14C3 16.8284 3 18.2426 3.87868 19.1213C4.75736 20 6.17157 20 9 20H21',
  d6: 'M7 16L16 16',
  d7: 'M7 12L20 12',
  d8: 'M7 8L13 8',
  d9: 'M3 4V20H21',
  d10: 'M4 3V19H22V21H2V3H4Z',
  d11: 'M6 15L17 15L17 17L6 17L6 15Z',
  d12: 'M6 11L21 11V13L6 13L6 11Z',
  d13: 'M6 7L14 7L14 9L6 9L6 7Z'
};

export default [
  'BarChartHorizontal',
  `< d="${d.d5}"i-c="s sw sr sj"/>< d="${d.d6}"i-c="s sw sr sj"/>< d="${d.d7}"i-c="s sw sr sj"/>< d="${d.d8}"i-c="s sw sr sj"/>`,
  `< d="${d.d5}"i-c="s sw sr sj"/>< d="${d.d6}"i-c="s sw sr sj o7"/>< d="${d.d7}"i-c="s sw sr sj o7"/>< d="${d.d8}"i-c="s sw sr sj o7"/>`,
  `< d="${d.d5}"i-c="s sw sr sj"/>< d="${d.d6}"i-c="s sw sr sj o7"/>< d="${d.d7}"i-c="s sw sr sj o7"/>< d="${d.d8}"i-c="s sw sr sj o7"/>`,
  `< d="${d.d1}"i-c="fr c f"/>< d="${d.d2}"i-c="fr c f"/>< d="${d.d3}"i-c="fr c f"/>< d="${d.d4}"i-c="fr c f"/>`,
  `< d="${d.d1}"i-c="fr c f"/>< d="${d.d2}"i-c="fr c f o7"/>< d="${d.d3}"i-c="fr c f o7"/>< d="${d.d4}"i-c="fr c f o7"/>`,
  `< d="${d.d9}"i-c="s sw ss"/>< d="${d.d6}"i-c="s sw ss"/>< d="${d.d7}"i-c="s sw ss"/>< d="${d.d8}"i-c="s sw ss"/>`,
  `< d="${d.d10}"i-c="fr c f"/>< d="${d.d11}"i-c="fr c f"/>< d="${d.d12}"i-c="fr c f"/>< d="${d.d13}"i-c="fr c f"/>`
];