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
    ['script', {}, `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-MKVRSF6');
    `],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0'}],
    ['meta', { name: 'theme-color', content: '#45d093' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico'}],
    ['script', { type: 'text/javascript', id: 'hs-script-loader', async: true, defer: true, src: 'https://js.hs-scripts.com/2979748.js'}],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'unikubehq/cli',
    docsRepo: 'unikubehq/docs',
    docsDir: 'src',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: false,
    logo: '/img/Unikube-Logo-H.svg',
    nav: [
      {
        text: 'Getting Started',
        link: '/guides/getting-started/',
      },
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
        text: 'Login',
        link: 'https://app.unikube.io/'
      }
    ],
    sidebar: {
        '/guides/getting-started/': [
          {
            title: 'Getting Started',
            collapsable: false,
            children: [
              'installation',
              'project-setup',
              'developing-with-unikube',
              'next-steps'
            ]
          }
        ],
       '/guides/': [
          {
            title: 'Guides',
            collapsable: false,
            children: [
              [ '/guides/getting-started/', 'Getting Started' ],
              'provision-development-environment',
              'developing-with-unikube',
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
              'cluster-scripts',
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
    'vuepress-plugin-element-tabs-less',
    require('./plugins/global-ui')
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
