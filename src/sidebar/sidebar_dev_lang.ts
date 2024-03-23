import { DefaultTheme } from "vitepress";

const prefix = "/blog/dev_lang";

export const sidebar_dev_lang: DefaultTheme.SidebarItem = {
    text: "Dev Language",
    items: [
        {
            text: "JavaScript",
            collapsed: true,
            items: [
                {
                    text: "变量本质",
                    link: `${prefix}/javascript/变量本质`,
                },
                {
                    text: "ECMA-262 3rd 第十章翻译",
                    link: `${prefix}/javascript/ECMA-262 3rd 第十章翻译`,
                },
                {
                    text: "JS 执行过程",
                    link: `${prefix}/javascript/JS 执行过程`,
                },
                {
                    text: "令我好友无比困惑的 this",
                    link: `${prefix}/javascript/令我好友无比困惑的 this`,
                },
                {
                    text: "GC 算法",
                    link: `${prefix}/javascript/GC 算法`,
                },
                {
                    text: "细说 apply、call、bind",
                    link: `${prefix}/javascript/细说 apply、call、bind`,
                },
                {
                    text: "严格模式",
                    link: `${prefix}/javascript/严格模式`,
                },
                {
                    text: "闭包原理",
                    link: `${prefix}/javascript/闭包原理`,
                },
                {
                    text: "concat、push 的区别",
                    link: `${prefix}/javascript/concat、push 的区别`,
                },
                {
                    text: "浏览器加载过程",
                    link: `${prefix}/javascript/浏览器加载过程`,
                },
                {
                    text: "arguments 概念",
                    link: `${prefix}/javascript/arguments 概念`,
                },
                {
                    text: "函数的剩余参数",
                    link: `${prefix}/javascript/函数的剩余参数`,
                },
                {
                    text: "纯函数",
                    link: `${prefix}/javascript/纯函数`,
                },
                {
                    text: "函数柯里化",
                    link: `${prefix}/javascript/函数柯里化`,
                },
                {
                    text: "组合函数",
                    link: `${prefix}/javascript/组合函数`,
                },
                {
                    text: "原型",
                    link: `${prefix}/javascript/原型`,
                },
                {
                    text: "Proxy 和 Reflect",
                    link: `${prefix}/javascript/Proxy 和 Reflect`,
                },
                {
                    text: "Promise",
                    link: `${prefix}/javascript/Promise`,
                },
                {
                    text: "Iterator 和 Generator",
                    link: `${prefix}/javascript/Iterator 和 Generator`,
                },
                {
                    text: "await and async",
                    link: `${prefix}/javascript/await and async`,
                },
                {
                    text: "防抖节流",
                    link: `${prefix}/javascript/防抖节流`,
                },
                {
                    text: "高性能处理大量数据列表",
                    link: `${prefix}/javascript/高性能处理大量数据列表`,
                },
                {
                    text: "reduce 的基本使用及高阶技巧",
                    link: `${prefix}/javascript/reduce 的基本使用及高阶技巧`,
                },
            ],
        },
        {
            text: "Html",
            collapsed: true,
            items: [
                {
                    text: "src 和 href 有何区别",
                    link: `${prefix}/html/src 和 href 有何区别`,
                },
                {
                    text: "论 html5",
                    link: `${prefix}/html/论 html5`,
                },
            ],
        },
        {
            text: "css",
            collapsed: true,
            items: [
                {
                    text: "元素水平垂直居中",
                    link: `${prefix}/css/元素水平垂直居中`,
                },
                {
                    text: "关于 BFC",
                    link: `${prefix}/css/关于 BFC`,
                },
            ],
        },
    ],
};
