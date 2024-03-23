import { DefaultTheme } from "vitepress";

const prefix = "/blog/version_control";

export const sidebar_version_control: DefaultTheme.SidebarItem = {
    text: "Version Control",
    items: [
        {
            text: "Git",
            collapsed: true,
            items: [
                {
                    text: "Git 配置代理",
                    link: `${prefix}/git/Git 配置代理`,
                },
                {
                    text: "Git 基本使用",
                    link: `${prefix}/git/Git 基本使用`,
                },
                {
                    text: "Git 验证",
                    link: `${prefix}/git/Git 验证`,
                },
            ],
        },
    ],
};
