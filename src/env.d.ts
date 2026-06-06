/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_MICROCMS_SERVICE_DOMAIN: string;
  readonly PUBLIC_MICROCMS_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}