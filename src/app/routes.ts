import type { RouteConfig } from '@react-router/dev/routes'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  index,
  layout,
} from '@react-router/dev/routes'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default [
  layout(path.resolve(__dirname, '../layouts/with-nav.tsx'), [
    index(path.resolve(__dirname, './routes/home.tsx')),
  ]),
] satisfies RouteConfig
