import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

const req = require.context('../stories', true, /\.story\.js$/)

setOptions({
  name: 'fox-tail',
  url: '#',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: false,
  hierarchySeparator: null,
  hierarchyRootSeparator: true,
  sidebarAnimations: true,
  selectedAddonPanel: undefined,
});


function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);