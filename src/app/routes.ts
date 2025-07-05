import type { RouteConfig } from '@react-router/dev/routes'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  index,
  layout,
  route,
} from '@react-router/dev/routes'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default [
  layout(path.resolve(__dirname, '../layouts/base.tsx'), [
    route('/login', path.resolve(__dirname, './routes/login.tsx')),
    route('/logout', path.resolve(__dirname, './routes/logout.tsx')),
  ]),
  layout(path.resolve(__dirname, '../layouts/with-nav.tsx'), [
    index(path.resolve(__dirname, './routes/home.tsx')),
    route('/posts', path.resolve(__dirname, './routes/posts.tsx')),
    route('/posts/:slug', path.resolve(__dirname, './routes/post.tsx')),
  ]),
] satisfies RouteConfig
