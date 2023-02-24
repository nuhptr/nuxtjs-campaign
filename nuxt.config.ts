// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Funded | Startup Website",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "Funded | Startarup Campaign" },
      ],
      link: [
        // <link rel="icon" type="image/x-icon" href="/favicon.ico">
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet", href: "/assets/css/main.css" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
