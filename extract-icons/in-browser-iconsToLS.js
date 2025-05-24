function iconsToLS() {
  const firstPostfix = '-stroke-rounded';

  const nextPostfixDict = {
    [firstPostfix]: '-duotone-rounded',
    '-duotone-rounded': '-twotone-rounded',
    '-twotone-rounded': '-solid-rounded',
    '-solid-rounded': '-bulk-rounded',
    '-bulk-rounded': '-stroke-sharp',
    '-stroke-sharp': '-solid-sharp',
    '-solid-sharp': firstPostfix,
  };

  const postfixAliasDict = {
    [firstPostfix]: 'A',
    '-duotone-rounded': 'B',
    '-twotone-rounded': 'C',
    '-solid-rounded': 'D',
    '-bulk-rounded': 'E',
    '-stroke-sharp': 'F',
    '-solid-sharp': 'G',
  };

  localStorage.__currentIconPostfix ||= firstPostfix;
  window.unknownIconNames ||= JSON.parse(localStorage.__unknownIconNames);

  const unknownFirstIconName = window.unknownIconNames[0];
  const svgNode = document.querySelector('div div div div div div div div svg.injected-svg');
  const iconName = `${unknownFirstIconName}${localStorage.__currentIconPostfix}`;

  if (!svgNode?.getAttribute('data-src').includes(iconName)) {
    console.log('incorrect svg found. try again', {
      iconName,
      'data-src': svgNode?.getAttribute('data-src'),
      svgNode,
    });
    setTimeout(iconsToLS, 500);

    return;
  }

  localStorage[`_icon:${unknownFirstIconName}${postfixAliasDict[localStorage.__currentIconPostfix]}`] =
    svgNode.innerHTML.trim();

  const nextPostfix = nextPostfixDict[localStorage.__currentIconPostfix];

  if (nextPostfix === firstPostfix) {
    window.unknownIconNames.shift();
    localStorage.__unknownIconNames = JSON.stringify(window.unknownIconNames);
    localStorage.__currentIconPostfix = nextPostfix;

    location.pathname = `/icon/${window.unknownIconNames[0]}${nextPostfix}`;

    return;
  }

  document.querySelector(`a[href$="${nextPostfix}"]`).click();
  localStorage.__currentIconPostfix = nextPostfix;

  setTimeout(iconsToLS, 300);

  return `added to LS - ${window.unknownIconNames.length}`;
}
iconsToLS();
