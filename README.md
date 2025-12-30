# vuetify-masonry

[![npm version](https://img.shields.io/npm/v/vuetify-masonry.svg)](https://www.npmjs.com/package/vuetify-masonry)
[![npm downloads](https://img.shields.io/npm/dm/vuetify-masonry.svg)](https://www.npmjs.com/package/vuetify-masonry)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3-42b883?logo=vue.js)](https://vuejs.org/)
[![Vuetify 3](https://img.shields.io/badge/Vuetify-3-1867C0?logo=vuetify)](https://vuetifyjs.com/)
[![semantic-release: conventionalcommits](https://img.shields.io/badge/semantic--release-conventionalcommits-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

Lightweight Vue 3 component for responsive masonry-style grids built on Vuetify 3 primitives.

## ✨ Features

- 📱 **Fully responsive** - Automatic column adjustment across all breakpoints
- ⚡ **Lightweight** - Built on Vuetify's native layout components
- 🎯 **Flexible** - Customizable column count per breakpoint
- 🔧 **TypeScript** - Full type support included
- 🎨 **Slot-based** - Complete control over item rendering

## 🚀 Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/vuetify-masonry-demo?file=src%2FApp.vue)

## 📦 Installation

```bash
npm install vuetify-masonry
```

**Peer dependencies:** Vue 3 and Vuetify 3

## 📖 Usage

Import `VMasonry` and simply use it in template.

```js
<script setup>
  import { VMasonry } from 'vuetify-masonry'

  const cards = [
    { title: 'Card 1', description: 'Short' },
    { title: 'Card 2', description: 'Longer content to show varying heights' }
  ]
</script>

<template>
  <v-masonry :items="cards" col="2" sm="3">
    <template #default="{ item }">
      <v-card>
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-text>{{ item.description }}</v-card-text>
      </v-card>
    </template>
  </v-masonry>
</template>
```

## ⚙️ API

### Props

- **items** (`Array<T>`): List of items to render
- **col, xs, sm, md, lg, xl, xxl** (`1 | 2 | 3 | 4 | 6 | 12`): Column count per breakpoint (mobile-first)

### Slot

**Default slot** - Renders each item in the masonry grid

Slot props:

- `item` - The item value from the `items` array
- `index` - The index of the item within its column
- `columnIndex` - The index of the column where the item is placed

## 🏗️ How It Works

The component distributes items across columns using a round-robin algorithm (`columns[index % nbColumns]`), ensuring balanced column heights. It leverages Vuetify's `VRow` and `VCol` components for responsive grid behavior.

## 🌟 Showcase

[![Benim Pencerem Ebru](https://img.shields.io/badge/🌐-benimpenceremebru.com-blue)](https://benimpenceremebru.com/)

_Using vuetify-masonry in your project? [Open a PR](https://github.com/senerh/vuetify-masonry/edit/main/README.md) to add it here!_

## License

MIT
