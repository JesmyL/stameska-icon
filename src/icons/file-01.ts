const d: Record<string, string> = {
  d1: 'M3.5 10C3.5 6.22876 3.5 4.34315 4.7448 3.17157C5.98959 2 7.99306 2 12 2H12.7727C16.0339 2 17.6645 2 18.7969 2.79784C19.1214 3.02643 19.4094 3.29752 19.6523 3.60289C20.5 4.66867 20.5 6.20336 20.5 9.27273V11.8182C20.5 14.7814 20.5 16.2629 20.0311 17.4462C19.2772 19.3486 17.6829 20.8491 15.6616 21.5586C14.4044 22 12.8302 22 9.68182 22C7.88275 22 6.98322 22 6.26478 21.7478C5.10979 21.3424 4.19875 20.4849 3.76796 19.3979C3.5 18.7217 3.5 17.8751 3.5 16.1818V10Z',
  d2: 'M20.5 12C20.5 13.8409 19.0076 15.3333 17.1667 15.3333C16.5009 15.3333 15.716 15.2167 15.0686 15.3901C14.4935 15.5442 14.0442 15.9935 13.8901 16.5686C13.7167 17.216 13.8333 18.0009 13.8333 18.6667C13.8333 20.5076 12.3409 22 10.5 22',
  d3: 'M8 7H15',
  d4: 'M8 11H11',
  d5: 'M20.7486 13.0101C20.4082 13.8462 18.84 15.5018 15.252 15.5018C14.9505 15.5018 14.1599 15.8051 14.2008 17.4481C14.2175 18.9331 13.6762 21.8709 11.4055 21.9976C10.9555 21.9998 10.4664 21.9998 9.93182 21.9998C8.13275 21.9998 7.23321 21.9998 6.51478 21.7476C5.35979 21.3421 4.44875 20.4847 4.01796 19.3976C3.75 18.7214 3.75 17.8748 3.75 16.1816L3.75 6.99976C3.75 6.07045 3.75 5.60579 3.82686 5.21939C4.14249 3.63263 5.38288 2.39224 6.96964 2.07661C7.35604 1.99976 7.82069 1.99976 8.75 1.99976L13.0227 1.99976C16.2839 1.99976 17.9145 1.99976 19.0469 2.79759C19.3714 3.02619 19.6594 3.29728 19.9023 3.60265C20.75 4.66843 20.75 6.20311 20.75 9.27248V11.8179C20.75 12.2449 20.75 12.6411 20.7486 13.0101Z',
  d6: 'M16.5635 1.35276C15.5812 1.25 14.3484 1.25001 12.8073 1.25003H11.932C10.039 1.25001 8.52512 1.24999 7.33708 1.40088C6.11256 1.55639 5.08724 1.88708 4.26839 2.66059C3.4412 3.44199 3.07982 4.43383 2.91129 5.61793C2.74994 6.75159 2.74997 8.19141 2.75 9.97015V16.12C2.74999 16.9191 2.74999 17.5667 2.78473 18.0953C2.82052 18.6399 2.89613 19.1256 3.0794 19.5897C3.60821 20.929 4.71664 21.9633 6.09319 22.4483C6.952 22.7509 8.42408 22.7505 9.97909 22.75C12.8187 22.7503 14.5054 22.7505 15.8878 22.2635C18.1078 21.4813 19.8815 19.8185 20.7249 17.6825C21.006 16.9705 21.1306 16.2058 21.1908 15.289C21.25 14.3882 21.25 13.2756 21.25 11.8573V9.27383C21.25 7.82574 21.25 6.65309 21.1402 5.71576C21.026 4.74236 20.7828 3.90448 20.213 3.18541C19.9178 2.81293 19.5692 2.48415 19.1789 2.2081C18.4341 1.68144 17.5729 1.45835 16.5635 1.35276ZM5.60307 4.08392C5.99626 3.7125 6.55233 3.47071 7.58157 3.33999C8.63306 3.20645 10.0233 3.2046 12 3.2046H12.7524C14.361 3.2046 15.4922 3.20585 16.3616 3.2968C17.2155 3.38613 17.6994 3.55289 18.0573 3.80593C18.2987 3.97668 18.5111 4.17777 18.6889 4.40212C18.9445 4.72462 19.1139 5.15741 19.2061 5.9442C19.3011 6.75396 19.3026 7.81129 19.3026 9.33474L19.3027 12.2349C19.3027 12.5019 19.3026 13.1405 19.022 13.6127C18.849 13.9037 18.6276 14.1468 18.4002 14.2706C18.0336 14.4701 17.6135 14.5835 17.1668 14.5835L16.1264 14.547C15.7463 14.5391 15.3028 14.5511 14.8746 14.6658C14.0407 14.8893 13.3893 15.5407 13.1658 16.3747C13.0511 16.8028 13.0391 17.2463 13.047 17.6264L13.0835 18.6668C13.0835 19.1345 12.9591 19.5416 12.7417 19.92C12.615 20.1406 12.3943 20.3425 12.0895 20.5198C11.6274 20.7887 11.074 20.7912 10.7358 20.7927C10.3977 20.7943 10.0409 20.7954 9.74284 20.7954C7.90872 20.7954 7.24159 20.7815 6.73823 20.6041C5.8656 20.2967 5.1999 19.655 4.88981 18.8697C4.81217 18.673 4.75733 18.4146 4.72789 17.9667C4.69788 17.51 4.69739 16.927 4.69739 16.0868V10.0455C4.69739 8.17343 4.69971 6.87375 4.83911 5.89437C4.97359 4.94948 5.21822 4.44747 5.60307 4.08392Z',
  d7: 'M7 7C7 6.44772 7.44772 6 8 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H8C7.44772 8 7 7.55228 7 7Z',
  d8: 'M7 11C7 10.4477 7.44772 10 8 10H11C11.5523 10 12 10.4477 12 11C12 11.5523 11.5523 12 11 12H8C7.44772 12 7 11.5523 7 11Z',
  d9: 'M8 7H16',
  d10: 'M8 11H12',
  d11: 'M20.1084 15H13.5V21.4328M20.5 15V2.01C20.5 2.00448 20.4955 2 20.49 2H3.51C3.50448 2 3.5 2.00448 3.5 2.01V21.99C3.5 21.9955 3.50448 22 3.51 22H13.5L20.5 15Z',
  d12: 'M2.75 21.7727C2.75 22.3125 3.18593 22.75 3.72368 22.75H13.8638L21.25 15.3366V2.22727C21.25 1.68754 20.8141 1.25 20.2763 1.25H2.75V21.7727ZM12.4869 20.7954H4.69747V3.2045H19.3027V13.9545H12.4869L12.4869 20.7954Z',
  d13: 'M16 8H8V6H16V8ZM12 12H8V10H12V12Z',
};

export default [
  'File01',
  `< d="${d.d1}"i-c="s sj sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>< d="${d.d4}"i-c="s sj sr sw"/>`,
  `< d="${d.d5}"i-c="f o7"/>< d="${d.d1}"i-c="s sj sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="s sj sr sw"/>< d="${d.d4}"i-c="s sj sr sw"/>`,
  `< d="${d.d1}"i-c="s sj sw"/>< d="${d.d2}"i-c="s sj sr sw"/>< d="${d.d3}"i-c="o7 s sj sr sw"/>< d="${d.d4}"i-c="o7 s sj sr sw"/>`,
  `< d="${d.d6}"i-c="c f fr"/>< d="${d.d7}"i-c="c f fr"/>< d="${d.d8}"i-c="c f fr"/>`,
  `< d="${d.d6}"i-c="c f fr"/>< d="${d.d7}"i-c="c f fr o7"/>< d="${d.d8}"i-c="c f fr o7"/>`,
  `< d="${d.d9}"i-c="s sj sw"/>< d="${d.d10}"i-c="s sj sw"/>< d="${d.d11}"i-c="s sw"/>`,
  `< d="${d.d12}"i-c="c f fr"/>< d="${d.d13}"i-c="c f fr"/>`
];
