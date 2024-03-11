<template>
    <q-card class="row q-py-xs" flat style="background-color: transparent">
        <div
            :class="`col-md-${
                12 / props.info_list.length
            } col-xs-12 text-weight-bolder text-no-wrap column ${
                $q.screen.gt.sm
                    ? index > Math.floor(props.info_list.length / 2)
                        ? 'text-right'
                        : 'text-left'
                    : 'text-right'
            }`"
            v-for="(item, index) in props.info_list"
            :key="index"
        >
            {{ item }}
        </div>
    </q-card>
</template>

<script setup>
import { useQuasar } from "quasar";
const $q = useQuasar();

const props = defineProps({
    info_list: {
        type: Array,
        required: true,
    },
});
</script>
