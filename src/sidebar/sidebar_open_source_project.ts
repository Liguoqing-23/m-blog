import { DefaultTheme } from "vitepress";

const prefix = "/blog/open_source_project";

export const sidebar_open_source_project: DefaultTheme.SidebarItem = {
    text: "Open Source Project",
    items: [
        {
            text: "Hydro",
            collapsed: true,
            items: [
                {
                    text: "Hydro 项目结构",
                    link: `${prefix}/hydro/Hydro 项目结构`,
                },
                {
                    text: "hydrojudge 详细分析",
                    link: `${prefix}/hydro/hydrojudge 详细分析`,
                },
            ],
        },
    ],
};
