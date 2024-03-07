<template>
    <q-card flat style="background-color: transparent">
        <q-list dense class="row">
            <q-item
                :class="`col-sm-${
                    12 / props.info_list.length
                } col-xs-12 text-weight-bolder text-no-wrap`"
                v-for="(item, index) in props.info_list"
                :key="index"
            >
                {{ item }}
            </q-item>
        </q-list>
    </q-card>
</template>

<script setup>
const props = defineProps({
    info_list: {
        type: Array,
        required: true,
    },
});
</script>
