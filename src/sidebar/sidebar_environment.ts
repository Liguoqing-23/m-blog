import { DefaultTheme } from "vitepress";

const prefix = "/blog/environment";

export const sicebar_environment: DefaultTheme.SidebarItem = {
    text: "Environment",
    items: [
        {
            text: "NodeJS",
            collapsed: true,
            items: [
                {
                    text: "nodejs 全局对象",
                    link: `${prefix}/nodejs/nodejs 全局对象`,
                },
                {
                    text: "nodejs commonJS 的本质",
                    link: `${prefix}/nodejs/nodejs commonJS 的本质`,
                },
                {
                    text: "模块化之 ES Module 规范",
                    link: `${prefix}/nodejs/模块化之 ES Module 规范`,
                },
                {
                    text: "package json 基本配置",
                    link: `${prefix}/nodejs/package json 基本配置`,
                },
                {
                    text: "pnpm 解决的痛点",
                    link: `${prefix}/nodejs/pnpm 解决的痛点`,
                }
            ],
        },
    ],
};
