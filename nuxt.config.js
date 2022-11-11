export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  generate :{
    dir:'dist'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "The Ideapreneurship",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "description",
        name: "description",
        content:
          "THE IDEAPRENEUR - is Entrepreneurship Club in Computer Science and Engineering Department of Government Engineering College Patan, A Entrepreneurship club will help students to turn their ideas and passions into businesses and will help to develop future business leaders."
      },
      {
        property: "apple-mobile-web-app-title",
        content: "The Ideapreneurship"
      },
      {
        property: "og:url",
        content: "https://codehives.gecpatan.ac.in"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:title",
        content: "The Ideapreneurship"
      },
      {
        property: "og:description",
        content:
          "Is Entrepreneurship Club in Computer Science and Engineering Department of Government Engineering College Patan, A Entrepreneurship club will help students to turn their ideas and passions into businesses and will help to develop future business leaders."
      },
      {
        property: "og:image",
        content: "https://codehives.gecpatan.ac.in/_nuxt/img/logo1.e8c1f3f.png"
      },
          ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/styles/global.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/v-waypoint.js",
      mode: "client"
    },
    {
      src: "~/plugins/v-waves.js",
      mode: "client"
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],

  /// Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-webfontloader"],
  webfontloader: {
    google: {
      families: ["Poppins:400,600,700,800"]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  styleResources: {
    scss: ["./assets/styles/setup/_mixins.scss"]
  },

  server: {
    port: 8000 // default: 3000
  }
};
