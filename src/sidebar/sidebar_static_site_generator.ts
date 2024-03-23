import { DefaultTheme } from "vitepress";

const prefix = "/blog/static_site_generator";

export const sidebar_static_site_generator: DefaultTheme.SidebarItem = {
    text: "Static Site Generator",
    items: [
        {
            text: "VitePress",
            collapsed: true,
            items: [
                {
                    text: "VitePress 集成 Quasar",
                    link: `${prefix}/vitepress/VitePress 集成 Quasar`,
                },
                {
                    text: "VitePress 常用网站",
                    link: `${prefix}/vitepress/VitePress 常用网站`,
                },
            ],
        },
    ],
};
