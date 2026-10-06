// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  runtimeConfig: {
    public: {
      apiBase: ''
    }
  },

  devtools: { enabled: true },

  modules: [
    '@nuxt/icon',
    '@nuxt/hints',
    '@nuxt/image',
    '@pinia/nuxt',
    'vuetify-nuxt-module'
  ]
})