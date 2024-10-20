// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/trello-mock/" : "/",
  },
  ssr: false, // Disable SSR for GitHub Pages
});
