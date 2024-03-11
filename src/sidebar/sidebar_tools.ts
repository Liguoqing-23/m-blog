const prefix = "/blog/tools";

export const sidebar_tools = {
    text: "Tools",
    items: [
        {
            text: "Git",
            items: [
                {
                    text: "Git 基本使用",
                    link: `${prefix}/git/Git 基本使用`,
                },
            ],
        },
        {
            text: "RegExp",
            items: [
                {
                    text: "RegExp 常用网站",
                    link: `${prefix}/reg_exp/RegExp 常用网站`,
                },
            ],
        },
        {
            text: "Google Chrome",
            items: [
                {
                    text: "命令实现网站长截图",
                    link: `${prefix}/google_chrome/命令实现网站长截图`,
                }
            ]
        }
    ],
};
