export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  ssr: false,
  compatibilityDate: "2024-08-26",
  app: {
    baseURL: "/trello-mock/",
  },
});
