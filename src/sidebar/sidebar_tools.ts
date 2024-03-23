import { DefaultTheme } from "vitepress";

const prefix = "/blog/tools";

export const sidebar_tools: DefaultTheme.SidebarItem = {
    text: "Tools",
    items: [
        {
            text: "Git",
            collapsed: true,
            items: [
                {
                    text: "Git 基本使用",
                    link: `${prefix}/git/Git 基本使用`,
                },
            ],
        },
        {
            text: "RegExp",
            collapsed: true,
            items: [
                {
                    text: "RegExp 常用网站",
                    link: `${prefix}/reg_exp/RegExp 常用网站`,
                },
            ],
        },
        {
            text: "Google Chrome",
            collapsed: true,
            items: [
                {
                    text: "命令实现网站长截图",
                    link: `${prefix}/google_chrome/命令实现网站长截图`,
                }
            ]
        }
    ],
};
