// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/compiled.css"],

  // Add google font
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Commissioner:wght@200;300;400",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      // Bookings link
      bookings:
        "https://nena-mager-massage-therapy.uk2.cliniko.com/bookings?embedded=true",
    },
  },
});
