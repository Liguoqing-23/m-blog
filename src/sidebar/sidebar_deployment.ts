import { DefaultTheme } from "vitepress";

const prefix = "/blog/deployment";

export const sidebar_deployment: DefaultTheme.SidebarItem = {
    text: "Deployment System",
    items: [
        {
            text: "PM2",
            collapsed: true,
            items: [
                {
                    text: "pm2 基本使用",
                    link: `${prefix}/pm2/pm2 基本使用`,
                },
            ],
        },
    ],
};
