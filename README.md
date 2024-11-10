# acore-reactive-cms
A ReactJS CMS for acore-cms and the azerothcore NestJS API

This is being built with [Remix](https://remix.run/).

- 📖 [Remix docs](https://remix.run/docs)

The future flags for remix v3 are already enabled.

- 📖 [Remix future flags](https://remix.run/docs/ru/main/start/future-flags#v3_fetcherpersist)

## Development

- Clone the theme repo inside the packages folder
- Install dependencies with: `pnpm install`
- Start the dev server with: `pnpm run dev`

## Deployment

First, build your app for production:

```sh
pnpm run build
```

Make sure to deploy the output of `pnpm run build`

- `build/server`
- `build/client`
