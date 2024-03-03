import type { Theme } from "vitepress";
// import DefaultTheme from "vitepress/theme";
import DefaultTheme from "vitepress/theme-without-fonts";
import { Quasar } from "quasar";
import "./custom.css";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.use(
            Quasar,
            {
                config: {
                    // dark: true,
                },
            },
            // @ts-ignore
            { req: { headers: {} } }
        );
    },
} satisfies Theme;
