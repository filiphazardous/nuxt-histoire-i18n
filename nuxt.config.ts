import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n'
  ],
  components: {
    dirs: [
      {
        path: '~/components',
        pattern: ['**/*.vue', '!**/*.story.vue'],
        pathPrefix: false,
      },
    ],
  },
  typescript: {
    shim: false,
  },
  vite: {
    resolve: {
      preserveSymlinks: true,
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  compatibilityDate: '2024-07-25',
})
