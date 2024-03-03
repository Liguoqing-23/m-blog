import { defineConfig } from "vitepress";
import VueJsx from "@vitejs/plugin-vue-jsx";
import type { UserConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    title: "MYQ 博客笔记",
    description: "探索|记录|学习|思考",
    // cleanUrls: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "主页", link: "/" },
            { text: "博客", link: "/algorithm/" },
        ],
        logo: {
            light: "/logo-light.png",
            dark: "/logo-dark.png",
        },
        sidebar: {
            "/algorithm/": [
                {
                    text: "Algorithm",
                    collapsed: false,
                    items: [
                        { text: "算法篇介绍", link: "/algorithm/index.html" },
                    ],
                },
            ],
        },
    },
    vite: {
        plugins: [VueJsx()],
        //   optimizeDeps: {
        //     exclude: ['quasar'],
        //   },
        //   resolve: {
        //     dedupe: ['vue', 'quasar', 'Quasar', 'pubsub-js'], // avoid error when using dependencies that also use Vue
        //   },
        //   build: {
        //     rollupOptions: {
        //       external: [/quasar\/.+/, 'vue']
        //     },
        //   },
    },
    markdown: {
        lineNumbers: false,
        theme: {
            // https://shiki.style/themes
            light: "monokai",
            dark: "monokai",
        },
    },
} as UserConfig);
