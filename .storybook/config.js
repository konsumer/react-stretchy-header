import { configure } from '@storybook/react'

// webpack trick to glob-require
const req = require.context('../src', true, /(\.story\.js$)|(\.story\.jsx$)/)

configure(() => {
  req.keys().forEach(filename => req(filename))
}, module)
