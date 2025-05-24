Object.keys(localStorage).forEach(s => {
  if (s.startsWith('_icon:')) delete localStorage[s];
});
