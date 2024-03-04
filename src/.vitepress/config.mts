import { defineConfig } from "vitepress";
import type { UserConfig } from "vitepress";

import { sidebar_algorithm } from "./sidebar/sidebar_algorithm";
import { sidebar_build_tools } from "./sidebar/sidebar_build_tools";
import { sidebar_tools } from "./sidebar/sidebar_tools";
import { sidebar_static_site_generator } from "./sidebar/sidebar_static_site_generator";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    title: "MYQ 博客笔记",
    description: "探索|记录|学习|思考",
    lastUpdated: true,
    // cleanUrls: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "主页", link: "/" },
            { text: "博客", link: "/blog/algorithm/" },
        ],
        logo: {
            light: "/logo-light.png",
            dark: "/logo-dark.png",
        },
        sidebar: {
            "/blog/": [
                sidebar_algorithm,
                sidebar_build_tools,
                sidebar_tools,
                sidebar_static_site_generator,
            ],
        },
        search: {
            provider: "local",
        },
    },
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
