import initStoryshots from '@storybook/addon-storyshots'

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0)
}

initStoryshots()
