import { defineConfig } from 'astro/config'

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  integrations: 
  [
    tailwind(), 
  ],
  i18n: {
    defaultLocale: 'en',
    locales: [ 'es', 'en' ],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [
      {
        name: 'vite-astro-404',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.method === 'GET' && res.statusCode === 404) {
              req.url = '/404';
              next();
            } else {
              next();
            }
          });
        }
      }
    ]
  }
  
})