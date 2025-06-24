/// <reference types="vite/client" />

interface ViteTypeOptions {
  strictImportMetaEnv: true
}

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_API_URI: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
