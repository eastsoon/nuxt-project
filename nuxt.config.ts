// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  modules: [
    '@nuxt/eslint',
    'nuxt-quasar-ui'
  ],
  quasar: {
    // Quasar 설정
  },
  eslint: {
    config: {
      stylistic: {
        indent: 'tab',
        semi: true,
      }
    }
  }
})