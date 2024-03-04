<script setup>
import { watch } from "vue";
import { useData } from "vitepress";
import { useQuasar } from "quasar";

const { isDark } = useData();
const $q = useQuasar();

console.log(123);
watch(isDark, (newVal) => {
    $q.dark.set(newVal);
});
</script>
