<template>
    <q-card class="q-py-xs row" flat style="background-color: transparent">
        <div
            v-for="(item, index) in props.info_list"
            class="col-xs-12 text-weight-bolder text-no-wrap"
            :class="`col-sm-${12 / props.info_list.length} 
            ${
                is_greater_than_sm
                    ? index < props.info_list.length / 2
                        ? 'text-left'
                        : 'text-right'
                    : 'text-left'
            }`"
            :key="index"
        >
            {{ item }}
        </div>
    </q-card>
</template>

<script setup>
import { Screen } from "quasar";
import { ref, watch } from "vue";

// 如果大于 xs 则 12 / 2 = 6 前面的 text-left 后面的 text-right
// 如果小于 xs 则 12 / 1 = 12 全部 text-left

const is_greater_than_sm = ref(Screen.gt.xs);

watch(
    () => Screen.width,
    (width) => {
        is_greater_than_sm.value = Screen.gt.xs;
    }
);

const props = defineProps({
    info_list: {
        type: Array,
        required: true,
    },
});
</script>
