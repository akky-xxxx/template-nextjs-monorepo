import { initialize, mswLoader } from 'msw-storybook-addon'
import type { Preview } from '@storybook/react'

initialize()

const preview: Preview = {
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    layout: "fullscreen",
  },
};

export default preview;
