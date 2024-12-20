import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  optimizeDeps: {
    // This will exclude the package to be cached in vite during development
    exclude: ['acore-reactive-cms-theme'],
  },
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/acore-reactive-cms-theme/lib/public/*',
          dest: '',
        },
      ],
    }),
  ],

})
