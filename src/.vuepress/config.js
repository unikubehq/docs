const { description } = require('../../package')

module.exports = {
  /**
   * Webpack Stuff
   */
  base: "/docs/",

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Unikube Wiki',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0'}],
    ['meta', { name: 'theme-color', content: '#45d093' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico'}]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/img/Unikube-Logo-H.svg',
    nav: [
      {
        text: 'Kubernetes',
        link: '/kubernetes/'
      },
      {
        text: 'Knowledge Base',
        link: '/knowledge-base/'
      },
      {
        text: 'Unikube',
        link: 'https://app.unikube.io/'
      }
    ],
    sidebar: {
      '/kubernetes/': [
          {
            title: 'Kubernetes',
            collapsable: false,
            children: [
              '',
              'k8s-in-prod',
            ]
          }
      ],
       '/knowledge-base/': [
          {
            title: 'Knowledge Base',
            collapsable: false,
            children: [
              '',
              'cloud-native-development',
              'containerization',
              'continuos-integration',
            ]
          }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
