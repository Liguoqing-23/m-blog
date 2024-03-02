import { defineConfig } from "vitepress";
import type { UserConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    title: "MYQ 博客笔记",
    description: "探索|记录|学习|思考",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "主页", link: "/" },
            { text: "博客", link: "/algorithm/" },
        ],
        logo: {
            light: "/public/logo-light.png",
            dark: "/public/logo-dark.png",
        },
        sidebar: [
            {
                "/algorithm/": [
                    {
                        text: "Algorithm",
                        items: [
                            { text: "Index", link: "/guide/" },
                        ],
                    },
                ],
                text: "Examples",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
    },
} as UserConfig);
