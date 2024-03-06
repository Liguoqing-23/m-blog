---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc
---

```js
// rollup.config.js
import { fileURLToPath } from "node:url";

export default {
    //...,
    external: [
        "some-externally-required-library",
        fileURLToPath(
            new URL(
                "src/some-local-file-that-should-not-be-bundled.js",
                import.meta.url
            )
        ),
        /node_modules/,
    ],
};
```

<auto-dark />

<q-card class="q-pa-md" bordered flat>
    <q-btn color="primary" @click="() => console.log(123)">Hello Quasar</q-btn>
</q-card>

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
    // ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
    // ...
};

export default config;
```

:::

````vue
# ComA 我是ComA ```vue
<template>
    <div>{{ msg }}</div>
</template>

<script setup>
const msg = "我是ComA组件";
</script>
````
