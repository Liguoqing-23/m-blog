import type { Theme } from "vitepress";
// import DefaultTheme from "vitepress/theme";
import DefaultTheme from "vitepress/theme-without-fonts";

import { Quasar } from "quasar";
import AutoDark from "../components/AutoDark.vue";
import "./custom.css";

export default {
    extends: DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.use(
            Quasar,
            {
                config: {},
            },
            // @ts-ignore
            { req: { headers: {} } }
        );
        app.component("AutoDark", AutoDark);
    },
} satisfies Theme;
