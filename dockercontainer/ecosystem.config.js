module.exports = {
  apps: [
    {
      name: 'strapi',
      script: 'node_modules/.bin/strapi',
      args: 'start',
      cwd: './strapi',
      env: {
        PORT: 1337,
      },
    },
    {
      name: 'nuxtapp',
      script: 'node',
      args: '.output/server/index.mjs',
      cwd: './nuxtapp',

      env: {
        PORT: 3000,
      },
    },
  ],
};
