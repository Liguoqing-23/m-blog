---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc
---

```js
// rollup.config.js
import { fileURLToPath } from 'node:url';

export default {
	//...,
	external: [
		'some-externally-required-library',
		fileURLToPath(
			new URL(
				'src/some-local-file-that-should-not-be-bundled.js',
				import.meta.url
			)
		),
		/node_modules/
	]
};
```

<q-card class="q-pa-md" dark flat>
    <q-btn color="primary" @click="() => console.log(123)">Hello Quasar</q-btn>
</q-card>