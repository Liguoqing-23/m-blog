import type { DefaultTheme } from "vitepress";
import { prefix_root } from "./prefix";

const root = prefix_root.cs;

const prefix = {
    dev_lang: root + "/dev_lang",
    environment: root + "/environment",
    version_control: root + "/version_control",
    open_source_project: root + "/open_source_project",
    network: root + "/network",
    algorithm: root + "/algorithm",
    build_tools: root + "/build_tools",
    tools: root + "/tools",
    static_site_generator: root + "/static_site_generator",
    linux: root + "/linux",
    container: root + "/container",
    deployment: root + "/deployment",
};

export const sidebar: DefaultTheme.SidebarItem[] = [
    {
        text: "Dev Language",
        items: [
            {
                text: "JavaScript",
                collapsed: true,
                items: [
                    {
                        text: "变量本质",
                        link: `${prefix.dev_lang}/javascript/变量本质`,
                    },
                    {
                        text: "ECMA-262 3rd 第十章翻译",
                        link: `${prefix.dev_lang}/javascript/ECMA-262 3rd 第十章翻译`,
                    },
                    {
                        text: "JS 执行过程",
                        link: `${prefix.dev_lang}/javascript/JS 执行过程`,
                    },
                    {
                        text: "令我好友无比困惑的 this",
                        link: `${prefix.dev_lang}/javascript/令我好友无比困惑的 this`,
                    },
                    {
                        text: "GC 算法",
                        link: `${prefix.dev_lang}/javascript/GC 算法`,
                    },
                    {
                        text: "细说 apply、call、bind",
                        link: `${prefix.dev_lang}/javascript/细说 apply、call、bind`,
                    },
                    {
                        text: "严格模式",
                        link: `${prefix.dev_lang}/javascript/严格模式`,
                    },
                    {
                        text: "闭包原理",
                        link: `${prefix.dev_lang}/javascript/闭包原理`,
                    },
                    {
                        text: "concat、push 的区别",
                        link: `${prefix.dev_lang}/javascript/concat、push 的区别`,
                    },
                    {
                        text: "浏览器加载过程",
                        link: `${prefix.dev_lang}/javascript/浏览器加载过程`,
                    },
                    {
                        text: "arguments 概念",
                        link: `${prefix.dev_lang}/javascript/arguments 概念`,
                    },
                    {
                        text: "函数的剩余参数",
                        link: `${prefix.dev_lang}/javascript/函数的剩余参数`,
                    },
                    {
                        text: "纯函数",
                        link: `${prefix.dev_lang}/javascript/纯函数`,
                    },
                    {
                        text: "函数柯里化",
                        link: `${prefix.dev_lang}/javascript/函数柯里化`,
                    },
                    {
                        text: "组合函数",
                        link: `${prefix.dev_lang}/javascript/组合函数`,
                    },
                    {
                        text: "原型",
                        link: `${prefix.dev_lang}/javascript/原型`,
                    },
                    {
                        text: "Proxy 和 Reflect",
                        link: `${prefix.dev_lang}/javascript/Proxy 和 Reflect`,
                    },
                    {
                        text: "Promise",
                        link: `${prefix.dev_lang}/javascript/Promise`,
                    },
                    {
                        text: "Iterator 和 Generator",
                        link: `${prefix.dev_lang}/javascript/Iterator 和 Generator`,
                    },
                    {
                        text: "await and async",
                        link: `${prefix.dev_lang}/javascript/await and async`,
                    },
                    {
                        text: "防抖节流",
                        link: `${prefix.dev_lang}/javascript/防抖节流`,
                    },
                    {
                        text: "高性能处理大量数据列表",
                        link: `${prefix.dev_lang}/javascript/高性能处理大量数据列表`,
                    },
                    {
                        text: "reduce 的基本使用及高阶技巧",
                        link: `${prefix.dev_lang}/javascript/reduce 的基本使用及高阶技巧`,
                    },
                ],
            },
            {
                text: "TypeScript",
                collapsed: true,
                items: [
                    {
                        text: "深入理解 TypeScript",
                        link: "https://jkchao.github.io/typescript-book-chinese",
                    },
                    {
                        text: "TS 设计模式",
                        link: `${prefix.dev_lang}/typescript/TS 设计模式`,
                    },
                    {
                        text: "TS 语法基础",
                        link: `${prefix.dev_lang}/typescript/TS 语法基础`,
                    },
                    {
                        text: "TS 面向对象",
                        link: `${prefix.dev_lang}/typescript/TS 面向对象`,
                    },
                    {
                        text: "TS 泛型",
                        link: `${prefix.dev_lang}/typescript/TS 泛型`,
                    },
                    {
                        text: "TS 模块化",
                        link: `${prefix.dev_lang}/typescript/TS 模块化`,
                    },
                ],
            },
            {
                text: "Html",
                collapsed: true,
                items: [
                    {
                        text: "src 和 href 有何区别",
                        link: `${prefix.dev_lang}/html/src 和 href 有何区别`,
                    },
                    {
                        text: "论 html5",
                        link: `${prefix.dev_lang}/html/论 html5`,
                    },
                ],
            },
            {
                text: "css",
                collapsed: true,
                items: [
                    {
                        text: "元素水平垂直居中",
                        link: `${prefix.dev_lang}/css/元素水平垂直居中`,
                    },
                    {
                        text: "关于 BFC",
                        link: `${prefix.dev_lang}/css/关于 BFC`,
                    },
                ],
            },
        ],
    },
    {
        text: "Environment",
        items: [
            {
                text: "NodeJS",
                collapsed: true,
                items: [
                    {
                        text: "nodejs 全局对象",
                        link: `${prefix.environment}/nodejs/nodejs 全局对象`,
                    },
                    {
                        text: "nodejs commonJS 的本质",
                        link: `${prefix.environment}/nodejs/nodejs commonJS 的本质`,
                    },
                    {
                        text: "模块化之 ES Module 规范",
                        link: `${prefix.environment}/nodejs/模块化之 ES Module 规范`,
                    },
                    {
                        text: "package json 基本配置",
                        link: `${prefix.environment}/nodejs/package json 基本配置`,
                    },
                    {
                        text: "pnpm 解决的痛点",
                        link: `${prefix.environment}/nodejs/pnpm 解决的痛点`,
                    },
                    {
                        text: "fs 详解",
                        link: `${prefix.environment}/nodejs/fs 详解`,
                    },
                    {
                        text: "events 详解",
                        link: `${prefix.environment}/nodejs/events 详解`,
                    },
                    {
                        text: "buffer 详解",
                        link: `${prefix.environment}/nodejs/buffer 详解`,
                    },
                    {
                        text: "stream 详解",
                        link: `${prefix.environment}/nodejs/stream 详解`,
                    },
                    {
                        text: "http 详解",
                        link: `${prefix.environment}/nodejs/http 详解`,
                    },
                ],
            },
        ],
    },
    {
        text: "Version Control",
        items: [
            {
                text: "Git",
                collapsed: true,
                items: [
                    {
                        text: "Git 配置代理",
                        link: `${prefix.version_control}/git/Git 配置代理`,
                    },
                    {
                        text: "Git 基本使用",
                        link: `${prefix.version_control}/git/Git 基本使用`,
                    },
                    {
                        text: "Git 验证",
                        link: `${prefix.version_control}/git/Git 验证`,
                    },
                ],
            },
        ],
    },
    {
        text: "Open Source Project",
        items: [
            {
                text: "Hydro",
                collapsed: true,
                items: [
                    {
                        text: "Hydro 项目结构",
                        link: `${prefix.open_source_project}/hydro/Hydro 项目结构`,
                    },
                    {
                        text: "hydrojudge 详细分析",
                        link: `${prefix.open_source_project}/hydro/hydrojudge 详细分析`,
                    },
                ],
            },
        ],
    },
    {
        text: "Network",
        items: [
            {
                text: "axios",
                collapsed: true,
                items: [
                    {
                        text: "TS 对 axios 的二次封装",
                        link: `${prefix.network}/axios/TS 对 axios 的二次封装`,
                    },
                    {
                        text: "axios 配置对象",
                        link: `${prefix.network}/axios/axios 配置对象`,
                    },
                    {
                        text: "axios 拦截器",
                        link: `${prefix.network}/axios/axios 拦截器`,
                    },
                    {
                        text: "axios 取消请求",
                        link: `${prefix.network}/axios/axios 取消请求`,
                    },
                    {
                        text: "axios 源码（一）目录结构",
                        link: `${prefix.network}/axios/axios 源码（一）目录结构`,
                    },
                    {
                        text: "axios 源码（二）入口文件",
                        link: `${prefix.network}/axios/axios 源码（二）入口文件`,
                    },
                ],
            },
        ],
    },
    {
        text: "Algorithm",
        items: [
            {
                text: "Binary Tree",
                collapsed: true,
                items: [
                    {
                        text: "二叉树基础",
                        link: `${prefix.algorithm}/binary_tree/二叉树基础`,
                    },
                    {
                        text: "lc 226 翻转二叉树",
                        link: `${prefix.algorithm}/binary_tree/lc 226 翻转二叉树`,
                    },
                    {
                        text: "lc 101 对称二叉树",
                        link: `${prefix.algorithm}/binary_tree/lc 101 对称二叉树`,
                    },
                    {
                        text: "lc 104 二叉树的最大深度",
                        link: `${prefix.algorithm}/binary_tree/lc 104 二叉树的最大深度`,
                    },
                    {
                        text: "lc 111 二叉树的最小深度",
                        link: `${prefix.algorithm}/binary_tree/lc 111 二叉树的最小深度`,
                    },
                    {
                        text: "lc 222 完全二叉树的节点个数",
                        link: `${prefix.algorithm}/binary_tree/lc 222 完全二叉树的节点个数`,
                    },
                ],
            },
            {
                text: "《代码随想录》",
                link: "https://programmercarl.com/",
            },
        ],
    },
    {
        text: "Build Tools",
        items: [
            {
                text: "Vite",
                collapsed: true,
                items: [
                    {
                        text: "Vite 初体验",
                        link: `${prefix.build_tools}/vite/Vite 初体验`,
                    },
                ],
            },
            {
                text: "Webpack",
                collapsed: true,
                items: [
                    {
                        text: "webpack 基本配置",
                        link: `${prefix.build_tools}/webpack/webpack 基本配置`,
                    },
                    {
                        text: "搭建 webpack 本地服务器",
                        link: `${prefix.build_tools}/webpack/搭建 webpack 本地服务器`,
                    },
                    {
                        text: "source-map",
                        link: `${prefix.build_tools}/webpack/source-map`,
                    },
                    {
                        text: "webpack 性能优化",
                        link: `${prefix.build_tools}/webpack/webpack 性能优化`,
                    },
                    {
                        text: "webpack 源码分析-01",
                        link: `${prefix.build_tools}/webpack/webpack 源码分析-01`,
                    },
                ],
            },
        ],
    },
    {
        text: "Tools",
        items: [
            {
                text: "lodash",
                collapsed: true,
                items: [
                    {
                        text: "lodash 源码-数组-chunk",
                        link: `${prefix.tools}/lodash/lodash 源码-数组-chunk`,
                    },
                ],
            },
            {
                text: "babel",
                collapsed: true,
                items: [
                    {
                        text: "babel 基本使用",
                        link: `${prefix.tools}/babel/babel 基本使用`,
                    },
                ],
            },
            {
                text: "RegExp",
                collapsed: true,
                items: [
                    {
                        text: "RegExp 常用网站",
                        link: `${prefix.tools}/reg_exp/RegExp 常用网站`,
                    },
                ],
            },
            {
                text: "Google Chrome",
                collapsed: true,
                items: [
                    {
                        text: "命令实现网站长截图",
                        link: `${prefix.tools}/google_chrome/命令实现网站长截图`,
                    },
                ],
            },
        ],
    },
    {
        text: "Static Site Generator",
        items: [
            {
                text: "VitePress",
                collapsed: true,
                items: [
                    {
                        text: "VitePress 集成 Quasar",
                        link: `${prefix.static_site_generator}/vitepress/VitePress 集成 Quasar`,
                    },
                    {
                        text: "VitePress 常用网站",
                        link: `${prefix.static_site_generator}/vitepress/VitePress 常用网站`,
                    },
                ],
            },
        ],
    },
    {
        text: "Linux",
        items: [
            {
                text: "Screen 基本使用",
                link: `${prefix.linux}/Screen 基本使用`,
            },
        ],
    },
    {
        text: "Container",
        items: [
            {
                text: "Docker",
                collapsed: true,
                items: [
                    {
                        text: "Docker 安装",
                        link: `${prefix.container}/docker/Docker 安装`,
                    },
                    {
                        text: "Docker 常用命令",
                        link: `${prefix.container}/docker/Docker 常用命令`,
                    },
                    {
                        text: "Docker 基本概念",
                        link: `${prefix.container}/docker/Docker 基本概念`,
                    },
                ],
            },
        ],
    },
    {
        text: "Deployment System", // 有问题
        items: [
            {
                text: "PM2",
                collapsed: true,
                items: [
                    {
                        text: "pm2 基本使用",
                        link: `${prefix.deployment}/pm2/pm2 基本使用`,
                    },
                ],
            },
        ],
    },
];
