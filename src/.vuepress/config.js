const { description } = require('../../package')
require('dotenv').config()
const webpack = require('webpack')


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
        text: 'Guides',
        link: '/guides/'
      },
      {
        text: 'Knowledge Base',
        link: '/knowledge-base/'
      },
      {
        text: 'Roadmap',
        link: '/roadmap/'
      },
      {
        text: 'Unikube',
        link: 'https://app.unikube.io/'
      }
    ],
    sidebar: {
       '/guides/': [
          {
            title: 'Guides',
            collapsable: false,
            children: [
              'installation',
            ]
          }
      ],
       '/knowledge-base/': [
          {
            title: 'Knowledge Base',
            collapsable: false,
            children: [
              'cloud-native-development',
              'containerization',
              'continuous-integration',
              'docker',
              'microservices',
              'kubernetes',
              'load-balancing',
              'application-cluster',
              'cloud-hosting',
              'kubernetes-tools',
            ]
          }
      ],
       '/roadmap/': [
          {
            title: 'Roadmap',
            collapsable: false,
            children: [
              'application-templating',
              'asset-loader',
              'audit-trail',
              'chart-changelog',
              'dns-resolution',
              'dynamic-deck-creation',
              'env-variable-documentation',
              'env-variable-workflow',
              'git-management',
              'git-webhooks',
              'github-actions',
              'helm-overrides',
              'k8s-manifest-quality-check',
              'k8s-manifest-support',
              'log-access',
              'osx-brew',
              'open-projects',
              'project-health-check',
              'remote-clusters',
              'email-service',
            ]
          },
      ],
    }
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    require('./plugins/custom-footer')
  ],
  configureWebpack: (config) => {
    return {
      plugins: [
          new webpack.EnvironmentPlugin({...process.env})
      ],
     resolve: {
        alias: {
          '@alias': '/'
        }
      }
    }
  }
}
