export default defineNuxtConfig({

  extends: [
    '@nuxt/ui-pro',
    'anneleenvernaillen-base-layer',
    // '../anneleenvernaillen.com/base',
    './woonuxt_base'
  ],

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  components: [{ path: './components', pathPrefix: false }],

  colorMode: {
    preference: 'light'
  },

  future: {
    compatibilityVersion: 4,
  },

  wpNuxt: {
    wordpressUrl: 'http://localhost:4000',
  },

  runtimeConfig: {
    public: {
      mainUrl: 'https://anneleenvernaillen.com',
    }
  },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/prose.css'
  ],

  /**
   * Depending on your servers capabilities, you may need to adjust the following settings.
   * It will affect the build time but also increase the reliability of the build process.
   * If you have a server with a lot of memory and CPU, you can remove the following settings.
   * @property {number} concurrency - How many pages to prerender at once
   * @property {number} interval - How long to wait between prerendering pages
   * @property {boolean} failOnError - This stops the build from failing but the page will not be statically generated
   */
  nitro: {
    prerender: {
      concurrency: 10,
      interval: 1000,
      failOnError: false,
    },
  },
});
