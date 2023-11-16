// .vitepress/config.js
import { getAllArticles } from './theme/serverUtils.js';
import { globbySync } from "globby";

const sidebar = {
    '/feNote/': sidebarFeNote(),
    '/tools/': sidebarTools()
}

const nav = [
    {
        text: "技术文章",
        activeMatch: `/feNote/`,
        link: sidebar['/feNote/'][0].items[0].link
    },
    {
        text: "工具",
        activeMatch: `/tools/`,
        link: "/tools/textTools/"
    },
    {
        text: "📃文章归档",
        activeMatch: `/archives`,
        link: "/archives"
    }
];

async function config() {
    return {
        title: 'LvLin 的个人网站',
        description: '不积跬步，无以至千里；不积小流，无以成江海。',
        head: [
            ['link', { rel: 'icon', href: '/favicon.ico' }]
        ],
        base: '/my-blog/',
        lastUpdated: true,
        themeConfig: {
            logo: '/logo.png',
            allArticles: await getAllArticles(),
            lastUpdatedText: '更新时间',
            outlineTitle: '本页目录',
            docFooter: {
                prev: '上一篇',
                next: '下一篇'
            },
            footer: {
                message: 'Released under the MIT License.',
                copyright: 'Copyright © 2022-present LvLin'
            },
            sidebar,
            nav,
        }
    }
}

export default config();

function sidebarFeNote() {
    // 有新的文件夹修改该 Map 即可
    let pathMap = {
        JavaScript: 'JavaScript',
        others: '其它',
        Rust: 'Rust 相关'
    }
    let config = [];

    Object.keys(pathMap).map((type) => {
        let obj = {
            text: pathMap[type],
            collapsible: true,
            items: []
        };

        let paths = globbySync([`docs/feNote/${type}/**.md`]);
        paths.map((path) => {
            let link = path.replaceAll(/docs|\.md/g, '');
            obj.items.push({
                text: path.split('/').at(-1).replace('.md', ''),
                link
            })
        });

        config.push(obj);
    });
    return config;
}

function sidebarTools() {
    return [
        {
            text: '字符编解码',
            link: '/tools/textTools/'
        },
        {
            text: '文本比对工具',
            link: '/tools/textDiff/'
        }
    ]
}