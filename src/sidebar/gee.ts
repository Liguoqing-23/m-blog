import type { DefaultTheme } from "vitepress";
import { prefix_root } from "./prefix";

const root = prefix_root.gee;

const prefix = {
    fouroheight: `${root}/408`,
    math: `${root}/math`,
};

export const sidebar: DefaultTheme.SidebarItem[] = [
    {
        text: "408",
        items: [
            {
                text: "408 指北",
                link: `${prefix.fouroheight}/408 指北`,
            },
            {
                text: "Data Structure",
                collapsed: true,
                items: [
                    {
                        text: "数据结构基本概念",
                        link: `${prefix.fouroheight}/data_structure/数据结构基本概念`,
                    },
                    {
                        text: "算法基本概念",
                        link: `${prefix.fouroheight}/data_structure/算法基本概念`,
                    },
                ],
            },
            {
                text: "C",
                collapsed: true,
                items: [
                    {
                        text: "C 语言基础",
                        link: `${prefix.fouroheight}/C/C 语言基础`,
                    },
                ],
            },
        ],
    },
    {
        text: "math",
        items: [
            {
                text: "数学指北",
                link: `${prefix.math}/数学指北`,
            },
            {
                text: "高等数学",
                collapsed: true,
                items: [
                    {
                        text: "basic-ch1-函数、极限、连续",
                        link: `${prefix.math}/higher_mathematics/basic-ch1-函数、极限、连续`,
                    },
                ],
            },
        ],
    },
];
