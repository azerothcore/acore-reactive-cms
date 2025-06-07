import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
import devtoolsJson from 'vite-plugin-devtools-json'
import tsconfigPaths from 'vite-tsconfig-paths'

const defaultConfig = {
  plugins: [
    devtoolsJson(),
    reactRouter(),
    tsconfigPaths(),
  ],
}

export { defaultConfig }

export default defineConfig({
  ...defaultConfig,
})
