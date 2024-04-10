import type { Theme } from "vitepress";
// import DefaultTheme from "vitepress/theme";
import DefaultTheme from "vitepress/theme-without-fonts";

import { Quasar, Dialog, Notify } from "quasar";

import AutoDarkClientOnly from "../../src/components/AutoDarkClientOnly.vue";
import AutoDark from "../../src/components/AutoDark.vue";
import ShowImage from "../../src/components/ShowImage.vue";

// About Page Components
import BasicInfo from "../../src/components/about/BasicInfo.vue";
import BasicInfoLXW from "../../src/components/about/BasicInfoLXW.vue";
import NavBar from "../../src/components/about/NavBar.vue";
import NewBasicInfo from "../../src/components/about/NewBasicInfo.vue";

import "./custom.css";

export default {
    extends: DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.use(
            Quasar,
            {
                config: {},
                plugins: { Dialog, Notify },
            },
            // @ts-ignore
            { req: { headers: {} } }
        );

        app.component("AutoDarkClientOnly", AutoDarkClientOnly);
        app.component("AutoDark", AutoDark);
        app.component("ShowImage", ShowImage);

        app.component("BasicInfo", BasicInfo);
        app.component("NewBasicInfo", NewBasicInfo);
        app.component("BasicInfoLXW", BasicInfoLXW);
        app.component("NavBar", NavBar);
    },
} satisfies Theme;
