window.onfocus = () =>
  navigator.clipboard.writeText(
    JSON.stringify(
      Object.keys(localStorage)
        .filter(s => s.startsWith('_icon:'))
        .reduce((acc, key) => {
          acc[key.slice(6)] = localStorage[key];
          return acc;
        }, {}),
    ),
  );
