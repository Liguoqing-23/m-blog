---
layout: page
---

<template>
    <q-card flat style="background-color: transparent">
        <q-card-section horizontal class="flex flex-center justify-between">
            <!-- /avatar_mask.jpg -->
            <q-card-section style="height: 100%; width: 100%;">
                <q-img
                    class="rounded-borders"
                    src="/avatar.jpg"
                />
            </q-card-section>

            <q-card-section class="col-md-10 col-xs-8">
                <q-list class="row">
                    <q-item class="text-weight-bolder text-h6">
                        {{ status.name }}
                    </q-item>
                    <q-item class="items-center">
                        意向岗位：{{ status.intention }}
                    </q-item>
                </q-list>
                <q-list dense class="row">
                    <q-item
                        v-for="(item, index) in status.basic_info"
                        :key="index"
                        class="col-md-6 col-xs-12"
                    >
                        <q-item-section>
                            <q-item-label class="text-no-wrap">
                                <q-icon :name="item.icon" color="teal" />
                                {{ item.title + "：" }}
                                {{ item.content }}
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-card-section>
        </q-card-section>
    </q-card>
</template>

<script setup>
import { ref, reactive } from "vue";

const status = reactive({
    name: "李国清",
    intention: "前端开发 随时到岗",
    basic_info: [
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
        // {
        //     icon: "location_on",
        //     title: "地址",
        //     content: "北京市",
        // },
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
    ],
});
</script>
