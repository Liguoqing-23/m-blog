<script setup>
import { watch } from "vue";
import { useData } from "vitepress";
import { useQuasar } from "quasar";

const { isDark } = useData();
const $q = useQuasar();

$q.dark.set(isDark.value);

// const _html = document.documentElement;
// const _is_dark = _html.classList.contains("dark");

// console.log(_is_dark);

// $q.dark.set(_is_dark);

watch(isDark, (newVal) => {
    $q.dark.set(newVal);
});
</script>
