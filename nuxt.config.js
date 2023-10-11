const settings = { // you may define your apiKey, lang and version or skip this.
  apiKey: 'a2132fca-ccc0-41b4-aee0-be1711d326c6',
  lang: 'ru_RU',
  version: '2.1'
}
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cosmeticks',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant:wght@500;600&family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,500;6..12,600;6..12,700;6..12,800&display=swap'}
    ]
  },


  styleResources: {
    scss: [
        '~/assets/scss/style.scss',
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/icons.js'},
    { src: '@/plugins/vue-js-paginate.js', mode: 'client'},
    { src: '@/plugins/swiper.js', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    'vue-yandex-maps/nuxt'
  ],

  axios: {
    baseURL: 'http://localhost:3000', // Used as fallback if no runtime config is provided
  },



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  }
}
