// https://nuxt.com/docs/api/configuration/nuxt-config
console.log('Loading Nuxt Config with NODE_ENV=' + process.env.NODE_ENV);
export default defineNuxtConfig({
  css: ['~/assets/compiled.css'],
  modules: ['@nuxtjs/strapi'],

  // Add google font
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Commissioner:wght@200;300;400;600',
        },
      ],
    },
  },

  runtimeConfig: {
    strapi: {
      // Server-side, we don't use "localhost" because Nuxt struggles to resolve it
      url: 'http://127.0.0.1:1337',
    },

    public: {
      strapi:
        process.env.NODE_ENV === 'development'
          ? undefined
          : {
              // nuxt/strapi options available client-side, when running
              // inside a Docker container where nginx is proxying these requests.
              url: '/backend',
            },
    },
  },
});
