// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Compile assets/main.scss into the site
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
          // href: "https://fonts.googleapis.com/css2?family=Commissioner:wght@200&family=Poppins:ital,wght@0,200;0,400;0,600;1,400;1,600&display=swap",
          href: "https://fonts.googleapis.com/css2?family=Commissioner:wght@200;300;400&family=Poppins:ital,wght@0,200;0,400;0,600;1,400;1,600&display=swap",
          // href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;1,400;1,600&display=swap",
        },
      ],
      script: [
        {
          // <script type="text/javascript" src="https://www.juicer.io/embed/nenamager_massagetherapy/embed-code.js" async defer></script>
          type: "text/javascript",
          src: "https://www.juicer.io/embed/nenamager_massagetherapy/embed-code.js?per=4",
          async: true,
          defer: true,
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
