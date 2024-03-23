import { DefaultTheme } from "vitepress";

const prefix = "/blog/container";

export const sidebar_container: DefaultTheme.SidebarItem = {
    text: "Container",
    items: [
        {
            text: "Docker",
            collapsed: true,
            items: [
                {
                    text: "Docker 安装",
                    link: `${prefix}/docker/Docker 安装`,
                },
                {
                    text: "Docker 常用命令",
                    link: `${prefix}/docker/Docker 常用命令`,
                },
                {
                    text: "Docker 基本概念",
                    link: `${prefix}/docker/Docker 基本概念`,
                },
            ],
        },
    ],
};
