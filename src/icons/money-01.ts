const d: Record<string, string> = {
  d1: 'M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z',
  d2: 'M14.551 12C14.551 13.3807 13.4317 14.5 12.051 14.5C10.6703 14.5 9.55099 13.3807 9.55099 12C9.55099 10.6193 10.6703 9.5 12.051 9.5C13.4317 9.5 14.551 10.6193 14.551 12Z',
  d3: 'M5 12L6 12',
  d4: 'M18 12L19 12',
  d5: 'M3.0528 5.5129C2 6.69377 2 8.46252 2 12C2 15.5375 2 17.3062 3.0528 18.4871C3.22119 18.676 3.40678 18.8506 3.60746 19.0091C4.86213 20 6.74142 20 10.5 20H13.5C17.2586 20 19.1379 20 20.3925 19.0091C20.5932 18.8506 20.7788 18.676 20.9472 18.4871C22 17.3062 22 15.5375 22 12C22 8.46252 22 6.69377 20.9472 5.5129C20.7788 5.32403 20.5932 5.14935 20.3925 4.99087C19.1379 4 17.2586 4 13.5 4H10.5C6.74142 4 4.86213 4 3.60746 4.99087C3.40678 5.14935 3.22119 5.32403 3.0528 5.5129ZM12.051 14.5C13.4317 14.5 14.551 13.3807 14.551 12C14.551 10.6193 13.4317 9.5 12.051 9.5C10.6703 9.5 9.55099 10.6193 9.55099 12C9.55099 13.3807 10.6703 14.5 12.051 14.5Z',
  d6: 'M17.9694 3.3786C16.8308 3.24998 15.3865 3.24999 13.5475 3.25H10.4525C8.61345 3.24999 7.16917 3.24998 6.03058 3.3786C4.86842 3.50988 3.926 3.78362 3.14263 4.40229C2.90811 4.58749 2.69068 4.79205 2.49298 5.0138C1.82681 5.76101 1.52932 6.66669 1.38763 7.77785C1.24997 8.85727 1.24999 10.2233 1.25 11.9473V11.9473V12.0527V12.0527C1.24999 13.7768 1.24997 15.1427 1.38763 16.2222C1.52932 17.3333 1.82681 18.239 2.49298 18.9862C2.69068 19.2079 2.90811 19.4125 3.14263 19.5977C3.926 20.2164 4.86842 20.4901 6.03058 20.6214C7.16917 20.75 8.61345 20.75 10.4525 20.75H13.5475C15.3866 20.75 16.8308 20.75 17.9694 20.6214C19.1316 20.4901 20.074 20.2164 20.8574 19.5977C21.0919 19.4125 21.3093 19.208 21.507 18.9862C22.1732 18.239 22.4707 17.3333 22.6124 16.2222C22.75 15.1427 22.75 13.7768 22.75 12.0528V11.9473C22.75 10.2232 22.75 8.85727 22.6124 7.77785C22.4707 6.66669 22.1732 5.76101 21.507 5.0138C21.3093 4.79205 21.0919 4.58749 20.8574 4.40229C20.074 3.78362 19.1316 3.50988 17.9694 3.3786ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H6C6.41421 11.25 6.75 11.5858 6.75 12C6.75 12.4142 6.41421 12.75 6 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12ZM18 11.25C17.5858 11.25 17.25 11.5858 17.25 12C17.25 12.4142 17.5858 12.75 18 12.75H19C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25H18Z',
  d7: 'M13.5475 3.25C15.3865 3.24999 16.8308 3.24998 17.9694 3.3786C19.1316 3.50988 20.074 3.78362 20.8574 4.40229C21.0919 4.58749 21.3093 4.79205 21.507 5.0138C22.1732 5.76101 22.4707 6.66669 22.6124 7.77785C22.75 8.85727 22.75 10.2232 22.75 11.9473V12.0528C22.75 13.7768 22.75 15.1427 22.6124 16.2222C22.4707 17.3333 22.1732 18.239 21.507 18.9862C21.3093 19.208 21.0919 19.4125 20.8574 19.5977C20.074 20.2164 19.1316 20.4901 17.9694 20.6214C16.8308 20.75 15.3866 20.75 13.5475 20.75H10.4525C8.61345 20.75 7.16917 20.75 6.03058 20.6214C4.86842 20.4901 3.926 20.2164 3.14263 19.5977C2.90811 19.4125 2.69068 19.2079 2.49298 18.9862C1.82681 18.239 1.52932 17.3333 1.38763 16.2222C1.24997 15.1427 1.24999 13.7768 1.25 12.0527V12.0527V11.9473V11.9473C1.24999 10.2233 1.24997 8.85727 1.38763 7.77785C1.52932 6.66669 1.82681 5.76101 2.49298 5.0138C2.69068 4.79205 2.90811 4.58749 3.14263 4.40229C3.926 3.78362 4.86842 3.50988 6.03058 3.3786C7.16917 3.24998 8.61345 3.24999 10.4525 3.25H13.5475Z',
  d8: 'M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z',
  d9: 'M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25L6 11.25C6.41421 11.25 6.75 11.5858 6.75 12C6.75 12.4142 6.41421 12.75 6 12.75L5 12.75C4.58579 12.75 4.25 12.4142 4.25 12Z',
  d10: 'M17.25 12C17.25 11.5858 17.5858 11.25 18 11.25L19 11.25C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75L18 12.75C17.5858 12.75 17.25 12.4142 17.25 12Z',
  d11: 'M22 4V20H2V4H22Z',
  d12: 'M5 12L7 12',
  d13: 'M17 12L19 12',
  d14: 'M1.25 4C1.25 3.58579 1.58579 3.25 2 3.25H22C22.4142 3.25 22.75 3.58579 22.75 4V20C22.75 20.4142 22.4142 20.75 22 20.75H2C1.58579 20.75 1.25 20.4142 1.25 20V4ZM8.80078 12C8.80078 10.2051 10.2559 8.75 12.0508 8.75C13.8457 8.75 15.3008 10.2051 15.3008 12C15.3008 13.7949 13.8457 15.25 12.0508 15.25C10.2559 15.25 8.80078 13.7949 8.80078 12ZM3.5 12.75H6.5V11.25H3.5L3.5 12.75ZM17.5 12.75H20.5V11.25H17.5V12.75Z',
};

export default [
  'Money01',
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sw"/>< d="${d.d3}"i-c="s sr sw"/>< d="${d.d4}"i-c="s sr sw"/>`,
  `< d="${d.d5}"i-c="c f fr o7"/>< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="s sw"/>< d="${d.d3}"i-c="s sr sw"/>< d="${d.d4}"i-c="s sr sw"/>`,
  `< d="${d.d1}"i-c="s sj sr sw"/>< d="${d.d2}"i-c="o7 s sw"/>< d="${d.d3}"i-c="o7 s sr sw"/>< d="${d.d4}"i-c="o7 s sr sw"/>`,
  `< d="${d.d6}"i-c="c f fr"/>`,
  `< d="${d.d7}"i-c="f o7"/>< d="${d.d8}"i-c="f"/>< d="${d.d9}"i-c="c f fr"/>< d="${d.d10}"i-c="c f fr"/>`,
  `< d="${d.d11}"i-c="s sj sw"/>< d="${d.d2}"i-c="s sj sw"/>< d="${d.d12}"i-c="s sj sw"/>< d="${d.d13}"i-c="s sj sw"/>`,
  `< d="${d.d14}"i-c="c f fr"/>`
];
