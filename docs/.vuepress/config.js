module.exports = {
  title: 'han\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '个人知识总结', link: '/home/personal/1' },
      {text: '编程书籍', link: '/home/book/1' },
      {text: '常用小工具', link: '/home/tool/1'},
    ],
    sidebar: {
      // 侧边栏在 /foo/ 上
      '/home/personal/': [
        {
          title:'个人知识总结',
          collapsable: false,
          children: [
            '1',
            '2',
            '3'
          ]
        }
      ],
      '/home/book/': [
        {
          title:'编程书籍',
          collapsable: false,
          children: [
            '1',
            '2',
            '3'
          ]
        }
      ],
      '/home/tool/': [
        {
          title:'常用小工具',
          collapsable: false,
          children: [
            '1',
            '2'
          ]
        }
      ],
      // // 侧边栏在 /bar/ 上
      // '/bar/': [
      //   '',
      //   'three',
      //   'four'
      // ]
    }
    // sidebar: 'auto', // 侧边栏配置
    // sidebarDepth: 2, // 侧边栏显示2级
  }
}