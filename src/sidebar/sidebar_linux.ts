import { DefaultTheme } from "vitepress";

const prefix = "/blog/linux";

export const sidebar_linux: DefaultTheme.SidebarItem = {
    text: "Linux",
    items: [
        {
            text: "Screen 基本使用",
            link: `${prefix}/Screen 基本使用`,
        },
    ],
};
