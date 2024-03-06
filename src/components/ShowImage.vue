<template>
    <q-img :src="props.src" @click="show = true" />
    <q-dialog v-model="show">
        <q-card class="mb-shadow">
            <q-card-section>
                <img :src="props.src" alt="Image" />
            </q-card-section>

            <!-- download img -->
            <q-card class="absolute-top-right">
                <q-card-section>
                    <q-btn
                        round
                        icon="file_download"
                        @click="downloadImage"
                    />
                </q-card-section>
            </q-card>
            <!-- download img -->
        </q-card>
    </q-dialog>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    src: {
        type: String,
        required: true,
    },
});
const show = ref(false);

const downloadImage = () => {
    const link = document.createElement("a");
    link.href = props.src;
    link.download = props.src.split("/").pop();
    console.log(link.download);
    link.click();
};
</script>
