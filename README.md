# acore-reactive-cms
A ReactJS CMS for acore-cms and the azerothcore NestJS API

This is being built with [React Router 7](https://reactrouter.com/home). Using it as a framework.

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

- `app/website/build/server`
- `app/website/build/client`
