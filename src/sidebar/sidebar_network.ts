import { DefaultTheme } from "vitepress";

const prefix = "/blog/network";

export const sidebar_network: DefaultTheme.SidebarItem = {
    text: "Network",
    items: [
        {
            text: "axios",
            collapsed: true,
            items: [
                {
                    text: "axios 配置对象",
                    link: `${prefix}/axios/axios 配置对象`,
                },
                {
                    text: "axios 拦截器",
                    link: `${prefix}/axios/axios 拦截器`,
                },
                {
                    text: "axios 取消请求",
                    link: `${prefix}/axios/axios 取消请求`,
                },
                {
                    text: "axios 源码（一）目录结构",
                    link: `${prefix}/axios/axios 源码（一）目录结构`,
                },
                {
                    text: "axios 源码（二）入口文件",
                    link: `${prefix}/axios/axios 源码（二）入口文件`,
                }
            ],
        },
    ],
};
