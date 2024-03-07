import type { Theme } from "vitepress";
// import DefaultTheme from "vitepress/theme";
import DefaultTheme from "vitepress/theme-without-fonts";

import { Quasar, Dialog } from "quasar";

import AutoDark from "../../src/components/AutoDark.vue";
import ShowImage from "../../src/components/ShowImage.vue";

// About Page Components
import BasicInfo from "../../src/components/about/BasicInfo.vue";
import NavBar from "../../src/components/about/NavBar.vue";

import "./custom.css";

export default {
    extends: DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.use(
            Quasar,
            {
                config: {},
                plugins: { Dialog },
            },
            // @ts-ignore
            { req: { headers: {} } }
        );
        app.component("AutoDark", AutoDark);
        app.component("ShowImage", ShowImage);
        app.component("BasicInfo", BasicInfo);
        app.component("NavBar", NavBar);
    },
} satisfies Theme;
