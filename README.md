# vuetify-masonry

Lightweight Vue 3 component that provides a responsive masonry-style grid built on Vuetify 3 layout primitives (`VRow`, `VCol`). Use it to render lists of variable-height items in evenly balanced columns.

## Installation

Install the package and ensure peer dependencies are present:

```bash
npm install vuetify-masonry
# or
# yarn add vuetify-masonry
```

Peer dependencies: Vue 3 and Vuetify 3 (see `package.json`).

## Usage

Import the component locally when you need it:

```js
import { VMasonry } from 'vuetify-masonry'
```

## Props

- `items` (Array<T>, default `[]`): the list of items to render into the masonry columns.
- `col` (1 | 2 | 3 | 4 | 6 | 12 or string): default number of columns fallback.
- `xs`, `sm`, `md`, `lg`, `xl`, `xxl` (same as `col`): responsive column count overrides for each breakpoint.

The component uses Vuetify's `useDisplay` breakpoints to pick the appropriate column count.

## Slot API

Provide a named slot `item` to render each item. The slot receives these props:

- `item`: the item value from the `items` array
- `index`: the index of the item within its column
- `columnIndex`: the index of the column the item was placed into

Example:

```vue
<template>
  <v-masonry :items="cards" col="3">
    <template #item="{ item }">
      <v-card>
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-text>{{ item.description }}</v-card-text>
      </v-card>
    </template>
  </v-masonry>
</template>

<script setup>
const cards = [
  { title: 'One', description: 'Short' },
  {
    title: 'Two',
    description: 'Longer content to demonstrate varying heights',
  },
  // ...
]
</script>
```

## Notes

- The component implementation lives in `src/components/VMasonry.vue` and relies on Vuetify's `VRow` and `VCol` for layout.
- Column distribution places items round-robin into columns: `columns[index % nbColumns]`.
- This package targets Vue 3 + Vuetify 3 (see `peerDependencies` in `package.json`).

## Development

Run the dev server or build for publishing:

```bash
npm install
npm run dev     # start example / dev server
npm run build   # produce files in dist/
```

## License

MIT
