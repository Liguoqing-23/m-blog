import { defineConfig } from "vitepress";
import type { UserConfig } from "vitepress";

import { sidebar_config } from "../src/sidebar";

const theme_config = {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
        { text: "主页", link: "/" },
        { text: "博客", link: "/blog/welcome" },
        { text: "关于", link: "/about" },
    ],
    logo: {
        light: "/logo-light.png",
        dark: "/logo-dark.png",
    },
    sidebar: sidebar_config,
    search: {
        provider: "local",
    },
    footer: {
        message: "© 2022-2024 MYQ 博客笔记",
        copyright: "京ICP备2024053736号",
    },
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
    head: [
        ["link", { rel: "icon", href: "/logo.png" }],
    ],
    lang: "zh",
    title: "MYQ 博客笔记",
    description: "探索|记录|学习|思考",
    // lastUpdated: true,
    srcDir: "src/pages/",
    cleanUrls: true,
    themeConfig: theme_config,
    vite: {
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
        // https://github.com/vuejs/vitepress/blob/main/src/node/markdown/markdown.ts
        lineNumbers: false,
        theme: {
            // https://shiki.style/themes
            light: "monokai",
            dark: "monokai",
        },
    },
} as UserConfig);
