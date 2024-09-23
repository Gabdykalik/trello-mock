// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  ssr: false,
  compatibilityDate: "2024-08-26",
  target: "static",
  app: {
    baseURL: "https://github.com/Gabdykalik/trello-mock",
  },
  generate: {
    fallback: true,
  },
});
