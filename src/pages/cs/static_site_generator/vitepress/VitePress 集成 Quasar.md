# VitePress 集成 Quasar

## 安装 VitePress

前置准备

-   [Node.js](https://nodejs.org/en) 18 及以上版本。

VitePress 可以单独使用，也可以安装到现有项目中。在这两种情况下，都可以使用以下方式安装它：

::: code-group

```bash [npm]
npm install -D vitepress
```

```bash [yarn]
yarn add -D vitepress
```

<auto-dark />

<q-card class="mb-shadow">
<q-card-section>
    <q-card-title>提示</q-card-title>
    <q-card-main>
        如果你的项目使用了 Vite，你可以使用 VitePress 的 Vite 插件。
    </q-card-main>
</q-card-section>
</q-card>

:::

## 执行 VitePress 安装向导

```bash
npx vitepress init
```

```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./src
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◆  Theme:
│  ● Default Theme (Out of the box, good-looking docs)
│  ○ Default Theme + Customization
│  ○ Custom Theme
└
```

## 组织文件结构

```
.
├─ src
│  ├─ .vitepress
│  │  ├─ theme
│  │  │  ├─ custom.css
│  │  │  └─ index.ts
│  │  └─ config.js
│  ├─ HelloQuasar.md
│  └─ index.md
└─ package.json
```

## 集成 Quasar

```bash
npm install -D vue quasar @quasar/extras
```

## 配置 Quasar

-   Quasar 文档 https://quasar.dev/start/vite-plugin#installation

::: code-group

```ts [.vitepress / theme / index.ts]
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { Quasar } from "quasar"; // [!code focus]
import "./custom.css"; // [!code focus]

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // @ts-ignore
        app.use(Quasar, {}, { req: { headers: {} } }); // [!code focus]
    },
} satisfies Theme;
```

```css [.vitepress / theme / custom.css]
/* Import Quasar css */
@import "quasar/dist/quasar.css"; /* [!code focus] */

/* Import icon libraries */
@import "@quasar/extras/material-icons/material-icons.css"; /* [!code focus] */
```

:::

## 使用 Quasar 组件

```markdown
# Hello Quasar

<q-btn color="primary" label="Hello Quasar" />
```

## 最终效果

<q-btn color="primary" label="Hello Quasar" />
