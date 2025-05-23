const d: Record<string, string> = {
  d1: 'M16 10V9C16 8.05719 16 7.58579 16.2929 7.29289C16.5858 7 17.0572 7 18 7C18.9428 7 19.4142 7 19.7071 7.29289C20 7.58579 20 8.05719 20 9V10M16 10V14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V10M16 10H20M20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V10M8 10V9C8 8.05719 8 7.58579 7.70711 7.29289C7.41421 7 6.94281 7 6 7C5.05719 7 4.58579 7 4.29289 7.29289C4 7.58579 4 8.05719 4 9V10M8 10L4 10',
  d2: 'M12.5 1.99976L10.625 4.99976H13.625L11.75 7.99976',
  d3: 'M12 17.9998C14.2091 17.9998 16 16.2089 16 13.9998V9.99976H20V13.9998C20 18.418 16.4183 21.9998 12 21.9998C7.58172 21.9998 4 18.418 4 13.9998V9.99976H8V13.9998C8 16.2089 9.79086 17.9998 12 17.9998Z',
  d4: 'M7.19738 6.29306C6.87457 6.24966 6.43299 6.24971 6.00018 6.24976C5.56736 6.24971 5.12578 6.24966 4.80297 6.29306C4.44749 6.34086 4.07176 6.4533 3.76274 6.76233C3.45378 7.07128 3.34126 7.44693 3.29341 7.80244C3.24991 8.12559 3.24995 8.52284 3.25 8.95617L3.25001 9.24976L8.75018 9.24976V8.95502V8.95501C8.75023 8.52219 8.75028 8.12537 8.70688 7.80256C8.65908 7.44708 8.54664 7.07135 8.23761 6.76233C7.92859 6.4533 7.55287 6.34086 7.19738 6.29306ZM8.75018 10.7498L3.25006 10.7498L3.25018 13.9998C3.25019 18.8323 7.16769 22.7498 12.0002 22.7498C16.8327 22.7498 20.7502 18.8323 20.7502 13.9998L20.7502 10.7498H15.2502L15.2502 13.9998C15.2502 15.7947 13.7951 17.2498 12.0002 17.2498C10.2053 17.2498 8.75018 15.7947 8.75018 13.9998L8.75018 10.7498ZM15.2502 9.24976H20.7502V8.95502C20.7502 8.5222 20.7503 8.12537 20.7069 7.80256C20.6591 7.44708 20.5466 7.07135 20.2376 6.76233C19.9286 6.4533 19.5529 6.34086 19.1974 6.29306C18.8746 6.24966 18.4777 6.24971 18.0449 6.24976C17.6121 6.24971 17.1258 6.24966 16.803 6.29306C16.4475 6.34086 16.0718 6.4533 15.7627 6.76233C15.4537 7.07135 15.3413 7.44707 15.2935 7.80255C15.2501 8.12536 15.2501 8.52219 15.2502 8.955V8.95501V8.95502V9.24976Z',
  d5: 'M12.8975 1.36386C13.2488 1.58339 13.3555 2.0461 13.136 2.39736L11.9782 4.24986H13.625C13.8976 4.24986 14.1488 4.39781 14.281 4.63628C14.4132 4.87475 14.4055 5.16615 14.261 5.39736L12.386 8.39736C12.1665 8.74861 11.7038 8.85539 11.3525 8.63586C11.0012 8.41632 10.8945 7.95361 11.114 7.60236L12.2718 5.74986H10.625C10.3524 5.74986 10.1012 5.6019 9.96902 5.36343C9.83685 5.12497 9.8445 4.83356 9.989 4.60236L11.864 1.60236C12.0835 1.2511 12.5462 1.14432 12.8975 1.36386Z',
  d6: 'M8.75011 10.7495L3.25 10.7495L3.25011 13.9995C3.25013 18.832 7.16763 22.7495 12.0001 22.7495C16.8326 22.7495 20.7501 18.832 20.7501 13.9995L20.7501 10.7495H15.2501L15.2501 13.9995C15.2501 15.7944 13.795 17.2495 12.0001 17.2495C10.2052 17.2495 8.75011 15.7944 8.75011 13.9995L8.75011 10.7495Z',
  d7: 'M7.19738 6.29306C6.87457 6.24966 6.43299 6.24971 6.00018 6.24976C5.56736 6.24971 5.12578 6.24966 4.80297 6.29306C4.44749 6.34086 4.07176 6.4533 3.76274 6.76233C3.45378 7.07128 3.34126 7.44693 3.29341 7.80244C3.24991 8.12559 3.24995 8.52283 3.25 8.95617L3.25001 9.24976L8.75018 9.24976V8.95502C8.75023 8.52221 8.75028 8.12537 8.70688 7.80256C8.65908 7.44708 8.54664 7.07135 8.23761 6.76233C7.92859 6.4533 7.55287 6.34086 7.19738 6.29306Z',
  d8: 'M15.2502 9.24976H20.7502V8.95502C20.7502 8.5222 20.7503 8.12537 20.7069 7.80256C20.6591 7.44708 20.5466 7.07135 20.2376 6.76233C19.9286 6.4533 19.5529 6.34086 19.1974 6.29306C18.8746 6.24966 18.4777 6.24971 18.0449 6.24976C17.6121 6.24971 17.1258 6.24966 16.803 6.29306C16.4475 6.34086 16.0718 6.4533 15.7627 6.76233C15.4537 7.07135 15.3413 7.44707 15.2935 7.80255C15.2501 8.12536 15.2501 8.52219 15.2502 8.955V9.24976Z',
  d9: 'M16 10V7H20V10M16 10V14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V10M16 10H20M20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V10M8 10V7H4V10M8 10L4 10',
  d10: 'M4 6.25C3.80108 6.25 3.61032 6.32902 3.46966 6.46968C3.32901 6.61033 3.24999 6.8011 3.25 7.00002L3.25006 9.25L8.75006 9.25L8.75 6.99998C8.74999 6.58578 8.41421 6.25 8 6.25H4Z',
  d11: 'M8.75009 10.75H3.2501L3.25018 14C3.25019 18.8325 7.16769 22.75 12.0002 22.75C16.8327 22.75 20.7502 18.8325 20.7502 14V10.75H15.2502V14C15.2502 15.7949 13.7951 17.25 12.0002 17.25C10.2053 17.25 8.75018 15.7949 8.75018 14L8.75009 10.75Z',
  d12: 'M15.2502 9.25H20.7502V7C20.7502 6.58579 20.4144 6.25 20.0002 6.25H16.0002C15.586 6.25 15.2502 6.58579 15.2502 7V9.25Z',
  d13: 'M13.5332 2.045L11.9779 4.5335H14.9779L11.9882 9.317L10.7162 8.522L12.2715 6.0335H9.27148L12.2612 1.25L13.5332 2.045Z',
};

export default [
  'Magnet02',
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>`,
  `< d="${d.d3}"i-c="f o7"/>< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sj sr sw"/>`,
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="o7 s sj sr sw"/>`,
  `< d="${d.d4}"i-c="c f fr"/>< d="${d.d5}"i-c="c f fr"/>`,
  `< d="${d.d6}"i-c="f o7"/>< d="${d.d7}"i-c="f"/>< d="${d.d8}"i-c="f"/>< d="${d.d5}"i-c="c f fr"/>`,
  `< d="${d.d9}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s ss sw"/>`,
  `< d="${d.d10}"i-c="f"/>< d="${d.d11}"i-c="f"/>< d="${d.d12}"i-c="f"/>< d="${d.d13}"i-c="c f fr"/>`
];
