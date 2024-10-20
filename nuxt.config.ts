// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/nuxt3-gh-pages/" : "/", // repo name
  },
  build: {
    transpile: ["vuedraggable"], // Ensure vuedraggable works properly in build
  },
});
