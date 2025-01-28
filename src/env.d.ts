/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly AWEBER_FORM_ID: string;
  readonly AWEBER_LIST_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}