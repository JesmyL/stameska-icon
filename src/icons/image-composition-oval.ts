const d: Record<string, string> = {
  d1: 'M2 8.35581C2 6.81202 2 6.04013 2.44924 5.31447C2.89849 4.58881 3.45675 4.31073 4.57327 3.75459C9.26988 1.41517 14.7302 1.41511 19.4268 3.75458C20.5433 4.31073 21.1015 4.5888 21.5508 5.31445C22 6.04011 22 6.81199 22 8.35575V15.6444C22 17.1883 22 17.9602 21.5507 18.6859C21.1014 19.4116 20.5431 19.6896 19.4265 20.2457C14.73 22.5848 9.26995 22.5848 4.57349 20.2457C3.45688 19.6896 2.89857 19.4116 2.44929 18.6859C2 17.9602 2 17.1883 2 15.6444V8.35581Z',
  d2: 'M2 14.1354C2.66663 14.0455 3.3406 14.0011 4.01569 14.0027C6.87163 13.9466 9.65761 14.7729 11.8765 16.3342C13.9345 17.7821 15.3805 19.7749 16 22',
  d3: 'M22 16.8962C20.8246 16.3009 19.6088 15.9988 18.3862 16.0001C16.5345 15.9928 14.7015 16.6733 13 18',
  d4: 'M2 8.35581C2 6.81202 2 6.04013 2.44924 5.31447C2.89849 4.58881 3.45675 4.31073 4.57327 3.75459C9.26988 1.41517 14.7302 1.41511 19.4268 3.75458C20.5433 4.31073 21.1015 4.5888 21.5508 5.31445C22 6.04011 22 6.81199 22 8.35575V15.6444C22 16.1275 22 16.5352 21.9862 16.8893C20.8151 16.2986 19.604 15.9989 18.3862 16.0001C16.6969 15.9935 15.0233 16.5593 13.4508 17.6659C12.9767 17.1841 12.4504 16.738 11.8765 16.3342C9.65761 14.7729 6.87163 13.9466 4.01569 14.0027C3.3406 14.0011 2.66663 14.0468 2 14.1367V8.35581ZM6.5 9C7.32843 9 8 8.32843 8 7.5C8 6.67157 7.32843 6 6.5 6C5.67157 6 5 6.67157 5 7.5C5 8.32843 5.67157 9 6.5 9Z',
  d5: 'M18.9812 4.64968C14.5654 2.45008 9.43522 2.45013 5.01939 4.64969C3.85615 5.22911 3.57491 5.39639 3.29976 5.84084C3.03186 6.27357 3.00026 6.71513 3.00026 8.35581V15.6444C3.00026 17.2852 3.03187 17.7267 3.29979 18.1595C3.57497 18.604 3.85622 18.7712 5.01956 19.3506C9.43526 21.5498 14.5653 21.5498 18.981 19.3506C20.1443 18.7712 20.4256 18.604 20.7007 18.1595C20.9687 17.7267 21.0003 17.2852 21.0003 15.6444V8.35575C21.0003 6.7151 20.9687 6.27355 20.7008 5.84083C20.4256 5.39637 20.1444 5.2291 18.9812 4.64968ZM4.12767 2.85948C9.10506 0.380206 14.8955 0.380138 19.8729 2.85948C19.912 2.87894 19.9507 2.89821 19.9892 2.91732C21.0034 3.42158 21.8007 3.81799 22.4013 4.78808C23.0028 5.75978 23.0018 6.80758 23.0004 8.15809C23.0003 8.22326 23.0003 8.28914 23.0003 8.35575V15.6444C23.0003 15.711 23.0003 15.7769 23.0004 15.842C23.0018 17.1927 23.0028 18.2405 22.4012 19.2123C21.8006 20.1824 21.0032 20.5788 19.9888 21.083C19.9504 21.1021 19.9116 21.1214 19.8726 21.1409C14.8954 23.6197 9.10517 23.6197 4.12794 21.1409C4.08888 21.1214 4.05013 21.1021 4.01169 21.083C2.99734 20.5788 2.19994 20.1824 1.59931 19.2123C0.997691 18.2405 0.998756 17.1927 1.00013 15.8421C1.0002 15.7769 1.00026 15.711 1.00026 15.6444V8.35581C1.00026 8.28921 1.0002 8.22333 1.00013 8.15816C0.998756 6.80762 0.997691 5.75979 1.59925 4.78809C2.19983 3.81799 2.99716 3.42158 4.01142 2.91731C4.04986 2.8982 4.08861 2.87894 4.12767 2.85948Z',
  d6: 'M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75C7.85457 5.75 8.75 6.64543 8.75 7.75C8.75 8.85457 7.85457 9.75 6.75 9.75C5.64543 9.75 4.75 8.85457 4.75 7.75Z',
  d7: 'M4.14473 12.5027C7.02153 12.4452 9.8336 13.322 12.08 14.9864C14.1544 16.5234 15.6247 18.6425 16.264 21.0208C16.3231 21.2407 16.277 21.4749 16.1387 21.6577C16.0003 21.8404 15.7846 21.9519 15.5523 21.9608C14.5311 22 13.342 22 11.966 22H11.8946C9.65426 22 7.89457 22 6.5207 21.8194C6.27758 21.7208 6.03967 21.6279 5.80732 21.5372C4.82906 21.1555 3.94918 20.8121 3.19298 20.236C2.4302 19.4901 1.95314 18.7283 1.73646 17.5928C1.52426 16.4809 1.48061 15.1023 1.47072 13.3897C1.46855 13.0155 1.74877 12.697 2.12746 12.6432C2.79472 12.5485 3.46918 12.5014 4.14473 12.5027ZM15.0911 15.7082C14.8565 15.4404 14.9483 15.02 15.2917 14.9122C16.1683 14.637 17.066 14.4968 17.9742 14.5001C19.3201 14.499 20.6484 14.8169 21.9199 15.4305C22.2003 15.5658 22.3686 15.8539 22.3453 16.1588C22.2069 17.9726 21.7743 19.2889 20.7141 20.3255C19.7333 20.9948 18.9847 21.38 17.7479 21.5832C17.8427 21.218 17.8483 21.0129 17.7479 20.6394C17.2585 18.8187 16.3447 17.1393 15.0911 15.7082Z',
  d8: 'M22 5C15.6761 0.99995 8.32389 1.00005 2 5V19C8.32389 22.9999 15.6761 23 22 19V5Z',
  d9: 'M1.94429 4.51146C8.29234 0.496233 15.7077 0.496123 22.0557 4.51147L22.5 4.79249V19.2075L22.0557 19.4885C15.7077 23.5039 8.29234 23.5038 1.94429 19.4885L1.5 19.2075V4.79248L1.94429 4.51146ZM3.40909 5.8522V13.2631C3.60851 13.2558 3.80816 13.2523 4.00789 13.2527C7.01149 13.1954 9.9524 14.0642 12.3068 15.7208C13.9512 16.8778 15.2395 18.3704 16.0625 20.0632C16.5474 19.936 17.0298 19.7858 17.5087 19.6127C16.886 18.2674 16.0131 17.0384 14.9375 15.972C16.0534 15.4929 17.2112 15.2457 18.387 15.2501C19.1295 15.2495 19.8664 15.3504 20.5909 15.5486V5.85219C15.1185 2.59469 8.88157 2.59476 3.40909 5.8522Z',
};

export default [
  'ImageCompositionOval',
  `< d="${d.d1}"i-c="s sw"/>< d="${d.d2}"i-c="s sj sw"/>< d="${d.d3}"i-c="s sj sw"/><C cx="6.5"cy="7.5"r="1.5"i-c="s sj sr sw"/>`,
  `< d="${d.d4}"i-c="c f fr o7"/>< d="${d.d1}"i-c="s sw"/>< d="${d.d2}"i-c="s sj sw"/>< d="${d.d3}"i-c="s sj sw"/><C cx="6.5"cy="7.5"r="1.5"i-c="s sj sr sw"/>`,
  `< d="${d.d2}"i-c="s sj sw"/>< d="${d.d3}"i-c="o7 s sj sw"/>< d="${d.d1}"i-c="s sw"/><C cx="6.5"cy="7.5"r="1.5"i-c="o7 s sj sr sw"/>`,
  `< d="${d.d5}"i-c="c f fr"/>< d="${d.d6}"i-c="f"/>< d="${d.d7}"i-c="c f fr"/>`,
  `< d="${d.d6}"i-c="f o7"/>< d="${d.d5}"i-c="c f fr"/>< d="${d.d7}"i-c="c f fr o7"/>`,
  `< d="${d.d8}"i-c="s sw"/>< d="${d.d2}"i-c="s sj sw"/>< d="${d.d3}"i-c="s sj sw"/><C cx="7.5"cy="8.5"r="1.5"i-c="s sj sr sw"/>`,
  `<C cx="8"cy="9"r="2"i-c="f"/>< d="${d.d9}"i-c="c f fr"/>`
];
