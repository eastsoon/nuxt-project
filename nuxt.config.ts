// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
    typeCheck: true,
  },
  ssr: true,
  modules: [
    "nuxt-quasar-ui",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  quasar: {
    /* */
  },
  imports: {
    presets: [
      {
        from: "vue-i18n",
        imports: ["useI18n"],
      },
    ],
  },
});
