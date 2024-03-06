<script setup>
// import RaindropFX from "raindrop-fx";
// import { onMounted, onUnmounted, onBeforeUnmount } from "vue";

// let canvas = document.getElementById("canvas");
// if (!canvas) {
//     canvas = document.createElement("canvas");
//     canvas.id = "canvas";
//     canvas.style.position = "fixed";
//     canvas.style.top = "0";
//     canvas.style.left = "0";
//     canvas.style.width = "100%";
//     canvas.style.height = "100%";
//     canvas.style.zIndex = "-1";
//     document.body.appendChild(canvas);
// } else {
//     canvas.style.display = "block";
// }

// const raindrop_fx = new RaindropFX({
//     canvas,
//     background: "/bk_img.png",
// });

// raindrop_fx.start().then(() => {
//     const rect = canvas.getBoundingClientRect();
//     raindrop_fx.resize(rect.width, rect.height);
// });
// window.onresize = () => {
//     const rect = canvas.getBoundingClientRect();
//     raindrop_fx.resize(rect.width, rect.height);
// };

// onBeforeUnmount(() => {
//     raindrop_fx.stop();
//     canvas.style.display = "none";
//     window.onresize = null;
// });
</script>
