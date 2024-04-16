import type { DefaultTheme } from "vitepress";
import { prefix_root } from "./prefix";

const root = prefix_root.adobe;

const prefix = {
    photoshop: root + "/photoshop",
};

export const sidebar: DefaultTheme.SidebarItem[] = [
    {
        text: "Photoshop",
        items: [
            {
                text: "前置理论知识",
                link: `${prefix.photoshop}/前置理论知识`,
            },
        ],
    },
];
