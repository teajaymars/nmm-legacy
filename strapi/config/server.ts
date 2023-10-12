export default ({ env }) => {
  // Development defaults
  let host = '127.0.0.1';
  let port = env.int('PORT', 1337);

  // URL is NOT DYNAMIC. Changing this requires a rebuild.
  // Dockerfile must pass PUBLIC_URL and NODE_ENV=production at build time.
  let url: string;
  if (process.env.NODE_ENV !== 'development') {
    host = env('HOST', '0.0.0.0');
    const publicUrl = env('PUBLIC_URL', '');
    if (!publicUrl) {
      throw new Error(
        'Strapi: PUBLIC_URL must be set outside of development mode.'
      );
    }
    url = publicUrl + '/backend';
  }

  // console.log(`Strapi: NODE_ENV=${process.env.NODE_ENV}. Binding ${host}:${port}`);
  // if (url) {
  //   console.log(`Strapi: Admin URL=${url}`);
  // }

  return {
    host,
    port,
    url,
    app: {
      keys: env.array('APP_KEYS'),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  };
};
