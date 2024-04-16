import { defineConfig } from "vitepress";
import type { UserConfig } from "vitepress";

import { sidebar_config } from "../src/sidebar";
import mathjax3 from "markdown-it-mathjax3";

// import { quasar } from "@quasar/vite-plugin";

const customElements = [
    "math",
    "maction",
    "maligngroup",
    "malignmark",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mi",
    "mlongdiv",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mscarries",
    "mscarry",
    "mscarries",
    "msgroup",
    "mstack",
    "mlongdiv",
    "msline",
    "mstack",
    "mspace",
    "msqrt",
    "msrow",
    "mstack",
    "mstack",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "semantics",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mspace",
    "mtext",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "msqrt",
    "mstyle",
    "mmultiscripts",
    "mover",
    "mprescripts",
    "msub",
    "msubsup",
    "msup",
    "munder",
    "munderover",
    "none",
    "maligngroup",
    "malignmark",
    "mtable",
    "mtd",
    "mtr",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "msline",
    "msrow",
    "mstack",
    "maction",
    "semantics",
    "annotation",
    "annotation-xml",
    "mjx-container",
    "mjx-assistive-mml",
];
const theme_config = {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
        { text: "主页", link: "/" },
        { text: "CS", link: "/cs/welcome" },
        { text: "GEE", link: "/gee/welcome" },
        { text: "Adobe", link: "/adobe/welcome" },
        { text: "关于", link: "/new-about" },
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
    head: [["link", { rel: "icon", href: "/logo.png" }]],
    lang: "zh",
    title: "MYQ 博客笔记",
    description: "探索|记录|学习|思考",
    // lastUpdated: true,
    srcDir: "src/pages/",
    cleanUrls: true,
    themeConfig: theme_config,
    cacheDir: "cache",
    outDir: "dist",
    sitemap: {
        hostname: "https://www.myqblog.top",
        lastmodDateOnly: false,
    },
    vite: {
        plugins: [
            // quasar({
            //     devTreeshaking: true,
            // }),
        ],
        optimizeDeps: {
            exclude: ["quasar"],
        },
        resolve: {
            dedupe: ["vue", "quasar", "Quasar", "pubsub-js"], // avoid error when using dependencies that also use Vue
        },
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
        config: (md) => {
            md.use(mathjax3);
        },
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.includes(tag),
            },
        },
    },
} as UserConfig);
