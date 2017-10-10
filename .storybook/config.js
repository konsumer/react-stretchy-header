import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'Storybook',
  url: 'https://github.com/konsumer/react-stretchy-header',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
  hierarchySeparator: null,
  sidebarAnimations: true,
  selectedAddonPanel: undefined
})

// webpack trick to glob-require
const req = require.context('../src', true, /(\.story\.js$)|(\.story\.jsx$)/)

configure(() => {
  req.keys().forEach(filename => req(filename))
}, module)
