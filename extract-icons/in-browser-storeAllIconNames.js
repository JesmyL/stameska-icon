window.checkedNodesSet = new Set();
const postfix = '-stroke-rounded';

setInterval(() => {
  Array.from(document.querySelectorAll('div a:has(div div img)')).forEach(a => {
    const iconName = a.href.slice(27, -postfix.length);

    if (window.checkedNodesSet.has(iconName)) return;
    window.checkedNodesSet.add(iconName);
  });

  localStorage.__unknownIconNames = JSON.stringify(Array.from(window.checkedNodesSet));
  console.info('Stored Icons', window.checkedNodesSet.size);
}, 2000);
