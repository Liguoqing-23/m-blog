import type { Theme } from "vitepress";
// import DefaultTheme from "vitepress/theme";
import DefaultTheme from 'vitepress/theme-without-fonts'
import { Quasar } from "quasar";
import "./custom.css";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // @ts-ignore
        app.use(Quasar, {}, { req: { headers: {} } });
    },
} satisfies Theme;
