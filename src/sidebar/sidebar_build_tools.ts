import { DefaultTheme } from "vitepress";

const prefix = "/blog/build_tools";

export const sidebar_build_tools: DefaultTheme.SidebarItem = {
    text: "Build Tools",
    items: [
        {
            text: "Vite",
            collapsed: true,
            items: [
                {
                    text: "Vite 初体验",
                    link: `${prefix}/vite/Vite 初体验`,
                },
            ],
        },
        {
            text: "Webpack",
            collapsed: true,
            items: [
                {
                    text: "webpack 基本配置",
                    link: `${prefix}/webpack/webpack 基本配置`,
                },
                {
                    text: "搭建 webpack 本地服务器",
                    link: `${prefix}/webpack/搭建 webpack 本地服务器`,
                },
                {
                    text: "source-map",
                    link: `${prefix}/webpack/source-map`,
                },
                {
                    text: "webpack 性能优化",
                    link: `${prefix}/webpack/webpack 性能优化`,
                },
                {
                    text: "webpack 源码分析-01",
                    link: `${prefix}/webpack/webpack 源码分析-01`,
                },
            ],
        },
    ],
};
