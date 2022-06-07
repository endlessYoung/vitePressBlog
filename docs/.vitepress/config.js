module.exports = {
  title: 'endlessyoung个人博客',
  description: '摸鱼不如烤鱼.',
  lang: 'zh-CN',
  themeConfig: {
    // // repo: 'wushijiang13/vue3-vite-cli',
    // // repoLabel: 'GitHub',
    // // docsDir: 'docs',
    // // docsBranch: 'master',
    // // editLinks: true,
    // // editLinkText: '欢迎帮助我们改善页面!',
    // // lastUpdated: '最近更新时间',
    // nav: [
    //   { text: '入门', link: '/getting/why.html' },
    //   { text: '码云', link: 'https://gitee.com/wushijiang13/vue3-vite-cli' },
    // ],
    // sidebar: {
    //   '/': [
    //     {
    //       text: '入门',
    //       children: [
    //         {
    //           text: '简介',
    //           link: '/getting/why.html'
    //         },
    //         {
    //           text: '模板脚手架简介',
    //           link: '/getting/template_introduction.html'
    //         }
    //       ]
    //     }
    //   ]
    // },
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name'
    }
  }
}