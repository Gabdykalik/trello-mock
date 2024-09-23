// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  ssr: false,
  compatibilityDate: "2024-08-26",
  target: "static",
  app: {
    baseURL: "https://gabdykalik.github.io/trello-mock/", // Set to the name of your GitHub repo
  },
  generate: {
    fallback: "404.html", // Ensure proper handling of 404 errors
  },
});
