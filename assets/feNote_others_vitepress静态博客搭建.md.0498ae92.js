import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.98be4c9c.js";const l="/my-blog/assets/dev.17ff4347.png",o="/my-blog/assets/begin.8cff16f4.png",e="/my-blog/assets/sidebar.f9847715.png",c="/my-blog/assets/foldSidebar.228874fa.png",t="/my-blog/assets/pageOne.ec80b86c.png",r="/my-blog/assets/image-20220923003828441.71140171.png",E="/my-blog/assets/image-20220923004630167.bb4ceccf.png",y="/my-blog/assets/image-20220923005035420.cc873849.png",D=JSON.parse('{"title":"vitepress 静态博客搭建","description":"","frontmatter":{},"headers":[],"relativePath":"feNote/others/vitepress静态博客搭建.md","filePath":"feNote/others/vitepress静态博客搭建.md","lastUpdated":1700148230000}'),i={name:"feNote/others/vitepress静态博客搭建.md"},d=p(`<h1 id="vitepress-静态博客搭建" tabindex="-1">vitepress 静态博客搭建 <a class="header-anchor" href="#vitepress-静态博客搭建" aria-label="Permalink to &quot;vitepress 静态博客搭建&quot;">​</a></h1><p><a href="https://vitepress.vuejs.org/" target="_blank" rel="noreferrer">vitePress</a> 是一个基于 vite 和 vue 的静态博客生成器。简单、强大且高性能。</p><h3 id="_1-本地化搭建" tabindex="-1">1. 本地化搭建 <a class="header-anchor" href="#_1-本地化搭建" aria-label="Permalink to &quot;1. 本地化搭建&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-blog</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-blog</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span>
<span class="line"><span style="color:#6A737D;"># 或者 npm init</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vitepress</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vue</span></span>
<span class="line"><span style="color:#6A737D;"># 或者 npm i -D vitepress vue</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-blog</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-blog</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span>
<span class="line"><span style="color:#6A737D;"># 或者 npm init</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vitepress</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vue</span></span>
<span class="line"><span style="color:#6A737D;"># 或者 npm i -D vitepress vue</span></span></code></pre></div><p>创建一个文档在 docs 文件夹中，或者放入已有的文档：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;# Hello VitePress&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs/index.md</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;# Hello VitePress&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs/index.md</span></span></code></pre></div><p>添加一些脚本到 <code>package.json</code> 中：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;docs:dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress dev docs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;docs:build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress build docs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;docs:serve&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;docs:dev&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress dev docs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;docs:build&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress build docs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;docs:serve&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>启动开发环境服务：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:dev</span></span>
<span class="line"><span style="color:#6A737D;"># 或者 npm run docs:dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:dev</span></span>
<span class="line"><span style="color:#6A737D;"># 或者 npm run docs:dev</span></span></code></pre></div><p><img src="`+l+'" alt="image.png"></p><p>从浏览器访问页面：</p><p><img src="'+o+`" alt="image.png"></p><p>接下来所有的变更都能够实时在页面上看到效果（即热更新）。</p><h3 id="_2-主题及导航配置" tabindex="-1">2. 主题及导航配置 <a class="header-anchor" href="#_2-主题及导航配置" aria-label="Permalink to &quot;2. 主题及导航配置&quot;">​</a></h3><p>在配置文档目录及页面导航之前，需要先配置一下主题。</p><p><code>vitepress</code> 都是在 <code>docs/.vitepress</code> 目录下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">├─ docs</span></span>
<span class="line"><span style="color:#E1E4E8;">│  ├─ .vitepress </span></span>
<span class="line"><span style="color:#E1E4E8;">│  │  ├─ theme   </span></span>
<span class="line"><span style="color:#E1E4E8;">│  │  │  └─ index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">│  │  └─ config.js </span></span>
<span class="line"><span style="color:#E1E4E8;">│  └─ index.md</span></span>
<span class="line"><span style="color:#E1E4E8;">└─ package.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">├─ docs</span></span>
<span class="line"><span style="color:#24292E;">│  ├─ .vitepress </span></span>
<span class="line"><span style="color:#24292E;">│  │  ├─ theme   </span></span>
<span class="line"><span style="color:#24292E;">│  │  │  └─ index.js</span></span>
<span class="line"><span style="color:#24292E;">│  │  └─ config.js </span></span>
<span class="line"><span style="color:#24292E;">│  └─ index.md</span></span>
<span class="line"><span style="color:#24292E;">└─ package.json</span></span></code></pre></div><p><code>config.js</code> 下是基本配置，<code>theme</code> 下是主题配置。</p><p>配置默认主题：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// .vitepress/theme/index.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> DefaultTheme </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> DefaultTheme;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// .vitepress/theme/index.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> DefaultTheme </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> DefaultTheme;</span></span></code></pre></div><p>在基本配置中配置标题与侧边栏导航：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// .vitepress/config.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&#39;LvLin 的前端小站&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  description: </span><span style="color:#9ECBFF;">&#39;分享我的学习笔记与成长收获&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    sidebar: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;JavaScript&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Math对象&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/JavaScript/Math对象&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// .vitepress/config.js</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  title: </span><span style="color:#032F62;">&#39;LvLin 的前端小站&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  description: </span><span style="color:#032F62;">&#39;分享我的学习笔记与成长收获&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    sidebar: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;JavaScript&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Math对象&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/JavaScript/Math对象&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这里我把自己的一篇文章<code>Math对象.md</code>放到了 <code>docs/JavaScrip</code> 目录下，在 <code>themeConfig.sidebar</code> 中，配置了一个指向 <code>JavaScript/Math对象.md</code> 文件的侧边栏导航。</p><p>页面效果如下：</p><p><img src="`+e+`" alt="image.png"></p><p>如果希望侧边栏可折叠，就加一个配置项 <code>collapsible: true</code>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//...</span></span>
<span class="line"><span style="color:#B392F0;">sidebar</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    text: </span><span style="color:#9ECBFF;">&#39;JavaScript&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { </span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Math对象&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        collapsible: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        link: </span><span style="color:#9ECBFF;">&#39;/JavaScript/Math对象&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#6A737D;">//...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//...</span></span>
<span class="line"><span style="color:#6F42C1;">sidebar</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    text: </span><span style="color:#032F62;">&#39;JavaScript&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    items: [</span></span>
<span class="line"><span style="color:#24292E;">      { </span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Math对象&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        collapsible: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        link: </span><span style="color:#032F62;">&#39;/JavaScript/Math对象&#39;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6A737D;">//...</span></span></code></pre></div><p>侧边栏就会有个折叠按钮：</p><p><img src="`+c+`" alt="image.png"></p><h3 id="_3-首页配置" tabindex="-1">3. 首页配置 <a class="header-anchor" href="#_3-首页配置" aria-label="Permalink to &quot;3. 首页配置&quot;">​</a></h3><p>修改一下 <code>docs/index.md</code> 文件，作为博客首页 👇。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">hero</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">LvLin</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">的前端小站</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">tagline</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">分享我在学习过程中的笔记与收获感悟。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">actions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#85E89D;">theme</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">brand</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">开始阅读</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">link</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/JavaScript/Math对象</span></span>
<span class="line"><span style="color:#85E89D;">features</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">🦏</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">JavaScript</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">JavaScript 相关知识积累。</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">🐍</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Node</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">NodeJs 相关知识积累。</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">hero</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">LvLin</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">的前端小站</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">tagline</span><span style="color:#24292E;">: </span><span style="color:#032F62;">分享我在学习过程中的笔记与收获感悟。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">actions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#22863A;">theme</span><span style="color:#24292E;">: </span><span style="color:#032F62;">brand</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">开始阅读</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">link</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/JavaScript/Math对象</span></span>
<span class="line"><span style="color:#22863A;">features</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">🦏</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">JavaScript</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">details</span><span style="color:#24292E;">: </span><span style="color:#032F62;">JavaScript 相关知识积累。</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">🐍</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Node</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">details</span><span style="color:#24292E;">: </span><span style="color:#032F62;">NodeJs 相关知识积累。</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div><p>简单的静态博客页面就搭建完成了 👇。</p><p><img src="`+t+`" alt="image.png"></p><h3 id="_4-首页样式优化" tabindex="-1">4. 首页样式优化 <a class="header-anchor" href="#_4-首页样式优化" aria-label="Permalink to &quot;4. 首页样式优化&quot;">​</a></h3><h5 id="增加图片与图标" tabindex="-1">增加图片与图标 <a class="header-anchor" href="#增加图片与图标" aria-label="Permalink to &quot;增加图片与图标&quot;">​</a></h5><p>创建文件夹 <code>docs/public</code>，放入文件<code>logo.png</code> 和 <code>favicon.ico</code>。可以在 <a href="https://www.iconfont.cn/illustrations/detail?spm=a313x.7781069.1998910419.d9df05512&amp;cid=40323" target="_blank" rel="noreferrer">iconfont</a> 看看有没有喜欢的图标。使用 <a href="https://www.aconvert.com/cn/icon/png-to-ico/" target="_blank" rel="noreferrer">aconvert.com</a> 可以将 <code>png</code> 图片转成 <code>ico</code> 图标文件。大小建议 <code>16x16</code> 或者 <code>24x24</code>。</p><p>在首页 <code>docs/index.md</code> 增加个 <code>image</code> 配置 👇：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">hero</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">LvLin</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">的前端小站</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">tagline</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">分享我在学习过程中的笔记与收获感悟。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">src</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/logo.png</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">alt</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Logo</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">actions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#85E89D;">theme</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">brand</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">开始阅读</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">link</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/JavaScript/Math对象</span></span>
<span class="line"><span style="color:#85E89D;">features</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">🦏</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">JavaScript</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">JavaScript 相关知识积累。</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">🐍</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Node</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">NodeJs 相关知识积累。</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">hero</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">LvLin</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">的前端小站</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">tagline</span><span style="color:#24292E;">: </span><span style="color:#032F62;">分享我在学习过程中的笔记与收获感悟。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">src</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/logo.png</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">alt</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Logo</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">actions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#22863A;">theme</span><span style="color:#24292E;">: </span><span style="color:#032F62;">brand</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">开始阅读</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">link</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/JavaScript/Math对象</span></span>
<span class="line"><span style="color:#22863A;">features</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">🦏</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">JavaScript</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">details</span><span style="color:#24292E;">: </span><span style="color:#032F62;">JavaScript 相关知识积累。</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">🐍</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Node</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">details</span><span style="color:#24292E;">: </span><span style="color:#032F62;">NodeJs 相关知识积累。</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div><p><img src="`+r+`" alt="image-20220923003828441"></p><p>在导航栏加上图片，在浏览器标签栏加上图标 ，修改 <code>docs/.vitepress/config.js</code> 文件配置 👇：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// docs/.vitepress/config.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//...</span></span>
<span class="line"><span style="color:#E1E4E8;">    head: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        [</span><span style="color:#9ECBFF;">&#39;link&#39;</span><span style="color:#E1E4E8;">, { rel: </span><span style="color:#9ECBFF;">&#39;icon&#39;</span><span style="color:#E1E4E8;">, href: </span><span style="color:#9ECBFF;">&#39;/favicon.ico&#39;</span><span style="color:#E1E4E8;"> }]</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        logo: </span><span style="color:#9ECBFF;">&#39;/logo.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//...</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// docs/.vitepress/config.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//...</span></span>
<span class="line"><span style="color:#24292E;">    head: [</span></span>
<span class="line"><span style="color:#24292E;">        [</span><span style="color:#032F62;">&#39;link&#39;</span><span style="color:#24292E;">, { rel: </span><span style="color:#032F62;">&#39;icon&#39;</span><span style="color:#24292E;">, href: </span><span style="color:#032F62;">&#39;/favicon.ico&#39;</span><span style="color:#24292E;"> }]</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">        logo: </span><span style="color:#032F62;">&#39;/logo.png&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//...</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><img src="`+E+`" alt="image-20220923004630167"></p><h5 id="设置渐变色" tabindex="-1">设置渐变色 <a class="header-anchor" href="#设置渐变色" aria-label="Permalink to &quot;设置渐变色&quot;">​</a></h5><p>接下来给首页的标题和图标设置渐变色。</p><p>创建文件<code>docs/.vitepress/theme/style/custom.css</code> 👇：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">:root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* 标题 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">--vp-home-hero-name-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">transparent</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">--vp-home-hero-name-background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">linear-gradient</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">135</span><span style="color:#F97583;">deg</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">#70F570</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">#42b883</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* 图标背景 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">--vp-home-hero-image-background-image</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">linear-gradient</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">135</span><span style="color:#F97583;">deg</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">#70F570</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">#42b883</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">--vp-home-hero-image-filter</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">blur</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">150</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">:root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* 标题 */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-home-hero-name-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">transparent</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-home-hero-name-background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">linear-gradient</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">135</span><span style="color:#D73A49;">deg</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">#70F570</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">#42b883</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* 图标背景 */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-home-hero-image-background-image</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">linear-gradient</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">135</span><span style="color:#D73A49;">deg</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">#70F570</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">#42b883</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-home-hero-image-filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">blur</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">150</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>具体效果如下所示：</p><p><img src="`+y+'" alt="image.png"></p>',50),F=[d];function h(g,v,m,u,C,b){return n(),a("div",null,F)}const A=s(i,[["render",h]]);export{D as __pageData,A as default};
