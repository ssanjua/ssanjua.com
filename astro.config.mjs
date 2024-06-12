import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: 
  [
    tailwind(), 
  ],
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: [ 'es', 'en' ],
  //   routing: {
  //     prefixDefaultLocale: 'en'
  //   }
});