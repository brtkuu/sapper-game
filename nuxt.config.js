export default {
  ssr: false,
  head: {
    title: 'sapper',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'
      }
    ]
  },
  css: [
    '~/assets/scss/main.scss'
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [
  ],
  build: {
  }
}
