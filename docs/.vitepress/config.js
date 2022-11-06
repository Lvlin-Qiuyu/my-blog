// .vitepress/config.js
import { getAllArticles } from './theme/serverUtils.js';

async function config() {
    return {
        title: 'LvLin 的前端小站',
        description: '分享我的学习笔记与成长收获',
        head: [
            ['link', { rel: 'icon', href: '/favicon.ico' }]
        ],
        base: '/my-blog/',
        themeConfig: {
            logo: '/logo.png',
            allArticles: await getAllArticles(),
            lastUpdatedText: '最近更新',
            outlineTitle: '本页目录',
            docFooter: {
                prev: '上一篇',
                next: '下一篇'
            },
            footer: {
                message: 'Released under the MIT License.',
                copyright: 'Copyright © 2022-present LvLin'
            },
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
                },
                {
                    text: '算法',
                    items: [
                        {
                            text: '动态规划',
                            collapsible: true,
                            link: '/algorithm/动态规划.md'
                        }
                    ]
                },
                {
                    text: '其它',
                    items: [
                        {
                            text: 'vitpress 搭建静态博客',
                            collapsible: true,
                            link: '/others/vitepress静态博客搭建.md'
                        }
                    ]
                }
            ],
            nav: [
                {
                    text: "📃归档",
                    link: "/archives",
                },
            ],
        }
    }
}

export default config();