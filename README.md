# vuetify-masonry

A small Vue 3 component providing a simple masonry grid compatible with Vuetify 3's layout primitives.

## Install

As a published package:

npm install vuetify-masonry

Peer dependencies: `vue` and `vuetify` (install those in your app).

## Usage

Global install:

import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import VuetifyMasonry from 'vuetify-masonry'

const app = createApp(App)
app.use(createVuetify())
app.use(VuetifyMasonry)
app.mount('#app')

Or local import:

import { MasonryGrid } from 'vuetify-masonry'

export default { components: { MasonryGrid } }

### Slot API

Use the `item` named slot and read `item`, `index`, `columnIndex` from slot props.

## Build

Install dev dependencies and build:

```bash
cd vuetify-masonry
npm install
npm run build
```

The build outputs `dist` suitable for publishing to npm.
