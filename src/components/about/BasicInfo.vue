---
layout: page
---

<template>
    <q-card flat style="background-color: transparent">
        <q-card-section
            horizontal
            class="q-pr-md flex flex-center justify-between"
        >
            <q-list dense>
                <q-item v-for="(item, index) in basic_info" :key="index">
                    <q-item-section avatar>
                        <q-icon :name="item.icon" />
                    </q-item-section>
                    <q-item-section>
                        {{ item.title }}
                    </q-item-section>
                </q-item>
            </q-list>

            <q-img
                class="rounded-borders"
                src="/avatar_mask.jpg"
                :fit="scale - down"
                style="max-width: 110px; height: 100%"
            />
        </q-card-section>
    </q-card>
</template>

<script setup>
import { ref } from "vue";

const basic_info = ref([
    {
        icon: "sentiment_satisfied",
        title: "李*清",
    },
    {
        icon: "email",
        title: "294****430@qq.com",
    },
    {
        icon: "phone",
        title: "153-****-0166",
    },
    {
        icon: "location_on",
        title: "北京市",
    },
    {
        icon: "cake",
        title: "2000 年 2 月",
    },
    // {
    //     icon: "",
    //     title: "党员",
    // },
]);
</script>
