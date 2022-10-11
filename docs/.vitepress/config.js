// .vitepress/config.js
export default {
    title: 'LvLin 的前端小站',
    description: '分享我的学习笔记与成长收获',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    base: '/my-blog/',
    themeConfig: {
        logo: '/logo.png',
        sidebar: [
            {
              text: 'JavaScript',
              items: [
                { 
                  text: 'Math对象',
                  collapsible: true,
                  link: '/JavaScript/Math对象'
                },
              ]
            }
          ]
    }
  }