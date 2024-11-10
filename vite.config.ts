import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import tsconfigPaths from 'vite-tsconfig-paths'

declare module '@remix-run/node' {
  interface Future {
    v3_singleFetch: true
  }
}

export default defineConfig({
  optimizeDeps: {
    // This will exclude the package to be cached in vite during development
    exclude: ['acore-reactive-cms-theme'],
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/acore-reactive-cms-theme/dist/public/*',
          dest: '',
        },
      ],
    }),
  ],
})
