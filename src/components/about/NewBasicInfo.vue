<script setup>
const basic_info = [
    {
        icon: "email",
        title: "邮箱",
        content: "2943472430@qq.com",
    },
    {
        icon: "phone",
        title: "联系电话",
        content: "153-2161-0166",
    },
    {
        icon: "cake",
        title: "出生年月",
        content: "2000 年 2 月",
    },
    {
        icon: "person_pin_circle",
        title: "政治面貌",
        content: "中共党员",
    },
];
</script>

<template>
    <q-card flat class="row justify-center items-center q-my-lg">
        <q-card-section class="row about-cont">
            <!-- left -->
            <div class="col-sm-4 col-12 left-bg column items-center">
                <div class="q-my-md" />
                <div class="q-mt-lg" style="overflow: hidden">
                    <q-img
                        class="rounded-borders"
                        src="/avatar.jpg"
                        style="height: 160px; width: 110px; border-radius: 50%"
                    />
                </div>

                <div class="row justify-center items-center q-mt-md">
                    <div class="name text-center">李国清</div>
                </div>

                <div class="q-my-md" />
                <div class="q-my-md" />

                <div
                    class="column info row items-center q-pb-lg"
                    style="font-size: 14px; width: 90%; line-height: 3"
                >
                    <div>
                        <div>政治面貌：中共党员</div>
                        <div>学历学位：本科 | 学士</div>
                        <div>出生年月：2000 年 02 月</div>
                        <div>家庭住址：北京市海淀区远大路</div>
                        <div>联系电话：153-2161-0166</div>
                        <div>电子邮箱：2943472430@qq.com</div>
                    </div>
                </div>
            </div>

            <!-- right -->
            <div class="col-sm-8 col-12 q-pa-md">
                <div class="right-box-item q-pt-md">
                    <div class="title q-mt-md">教育背景</div>

                    <div class="under-line"></div>

                    <div class="bar row justify-between">
                        <div>北京市农学院</div>
                        <div>计算机科学与技术</div>
                        <div>本科 | 学士</div>
                        <div>2019.09-2023.06</div>
                    </div>

                    <div class="bar">
                        <span style="font-weight: 700">学业水平：</span>
                        <span class="bar-project">
                            专业排名全系前三，GPA 3.6 / 4.0
                        </span>
                    </div>

                    <div class="bar">
                        <span style="font-weight: 700">主修课程：</span>
                        <span class="bar-project"
                            >C/C++ 100、数据结构与算法 94、软件工程 97、计网 94
                            等。
                        </span>
                    </div>

                    <div class="bar">
                        <span style="font-weight: 700">毕业设计：</span>
                        <span class="bar-project">
                            《大学生个人知识管理系统的设计与实现》 Vue3 | Quasar
                            | SpringBoot | MySQL</span
                        >
                    </div>

                    <div class="bar">
                        <span style="font-weight: 700">技能清单：</span>
                        <div class="bar-project">
                            ① 熟练使用 Vue3 全家桶，以及 Quasar 开发，熟悉
                            Webpack 和 Vite。
                        </div>
                        <div class="bar-project">
                            ② 熟悉 JavaScript，熟悉 ES6+ 语法。
                        </div>
                        <div class="bar-project">
                            ③ 熟悉数据结构与算法，熟悉打包工具和 Vue 优化。
                        </div>
                        <div class="bar-project">
                            ④ 了解并能够使用 NestJs + TypeORM + MySQL
                            进行后端开发。
                        </div>
                        <div class="bar-project">
                            ⑤ 能够使用 Git 进行版本控制和代码托管。
                        </div>
                    </div>
                </div>

                <div class="right-box-item">
                    <div class="title">项目经历</div>
                    <div class="under-line"></div>

                    <div class="bar row justify-between">
                        <div style="font-weight: 700">红色旅游景点线上展厅</div>
                        <div>校级项目</div>
                        <div>前端</div>
                        <div>2020.03</div>
                    </div>

                    <div class="bar bar-project">
                        基于 Vue2 + ThreeJS 实现北京市红色旅游景点地图分布的 3D
                        可视化项目，可嵌入全景视频实现场景交互，用于校内红色旅游景点及历史文化宣传，
                        负责前端数据可视化、全景视频嵌入等。
                    </div>

                    <div style="border: 1px solid #82cffd44" />

                    <div class="bar row justify-between">
                        <div style="font-weight: 700">MD 客户端编辑器</div>
                        <div>院级项目</div>
                        <div>全栈 | 负责人</div>
                        <div>2021.10</div>
                    </div>

                    <div class="bar bar-project">
                        基于 Vue2 + Electron + NodeJS + Vditor
                        实现的客户端即使渲染 Markdown 编辑器，可作为 Markdown
                        文件管理器和编辑器使用，
                        负责软件框架搭建、文件树、文件流读写等所有实现。
                    </div>

                    <div style="border: 1px solid #82cffd44" />

                    <div class="bar row justify-between">
                        <div style="font-weight: 700">OJ 系统</div>
                        <div>校级项目</div>
                        <div>前端</div>
                        <div>2022.03</div>
                    </div>

                    <div class="bar bar-project">
                        基于 Vue3 + Quasar UI + Monaco Editor
                        实现的在线编程题评测系统，Nginx 部署。
                        负责前端框架搭建、题目列表、题目详情、提交记录、后台管理等所有前端实现及部署。
                        为本校 C/C++、Java 课程及 ACM
                        社团提供校内代码在线评测服务。
                        演示项目部署地址：https://oj.xavierlee.top
                    </div>
                </div>

                <div class="right-box-item">
                    <div class="title">实习经历</div>
                    <div class="under-line"></div>

                    <div class="bar row justify-between">
                        <div style="font-weight: 700">
                            北京市西城区王府培训中心
                        </div>
                        <div>2022.11-2023.02</div>
                    </div>

                    <div class="bar bar-project">
                        参与基于 vue2
                        的内部教育系统后台维护、样式修改、功能开发，以及与后端的数据交互。
                    </div>

                    <div style="border: 1px solid #82cffd44" />

                    <div class="bar row justify-between">
                        <div style="font-weight: 700">
                            北京市驻军某部宣文中心网络工作室
                        </div>
                        <div>2023.02-2023.05</div>
                    </div>

                    <div class="bar bar-project">
                        参与宣文中心所属网站的维护与管理。
                    </div>

                    <div style="border: 1px solid #82cffd44" />

                    <div class="bar row justify-between">
                        <div style="font-weight: 700">
                            金砖国家健康医疗国际合作委员会山东代表处（济南）
                        </div>
                        <div>2024.02-至今</div>
                    </div>

                    <div class="bar bar-project">
                        参与集采中心技术部数据库运维，行政管理实习。
                    </div>
                </div>

                <div class="right-box-item">
                    <div class="title">荣誉奖励</div>
                    <div class="under-line" />

                    <div class="bar bar-project">
                        <div>
                            校级特等奖学金 1 次、校级三等奖学金 1
                            次、蓝桥杯二等奖 1 次。
                        </div>
                        <div>
                            校园提案大赛优秀奖（“关于改善网络科普环境及真实性”的提案作品）。
                        </div>
                    </div>
                </div>

                <div class="right-box-item">
                    <div class="title">个人自评</div>
                    <div class="under-line" />

                    <div class="bar-project">
                        <div>
                            ①
                            坚定的政治信仰。注重用习近平新时代中国特色社会主义思想武装头脑，对党绝对忠诚。
                        </div>
                        <div>
                            ②
                            较好的专业素养。能快速学习并掌握新知识，热爱编程、算法和前端，对专业有独到见解。
                        </div>
                        <div>
                            ③
                            较强的抗压能力。自立自强，乐观向上，认真负责，不怕困难，敢于担当。
                        </div>
                        <div>
                            ④
                            良好的团队意识。集体荣誉感强，能与团队成员密切协作形成合力。
                        </div>
                    </div>
                </div>
            </div>
            
        </q-card-section>
    </q-card>
</template>

<style scoped>
* {
    font-family: "Times New Roman", "Microsoft YaHei", sans-serif !important;
}

.about-cont {
    width: 830px !important;
}

.body--light .left-bg {
    background: #82cffd;
}

.body--dark .left-bg {
    background: #3a4349;
}

.name {
    letter-spacing: 2px;
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
}

.info {
    font-size: 12px;
    margin-top: 10px;
}

.certificate {
    font-size: 16px;
    text-align: left;
    color: #000000;
    margin-top: 10px;
    width: 100%;
}

.right-box-item {
    width: 100%;
    margin-bottom: 10px;

    .title {
        font-weight: 700;
        color: #3780aa;
    }

    .under-line {
        border-bottom: 2px solid #3780aa;
        width: 100%;
    }

    .bar {
        font-size: 12px;
    }

    .bar-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .bar-project {
        font-size: 12px;
    }
}
</style>
