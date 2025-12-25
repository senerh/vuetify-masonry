import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'VuetifyMasonry',
      fileName: 'vuetify-masonry'
    },
    rollupOptions: {
      external: ['vue', 'vuetify', 'vuetify/components'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          vuetify: 'Vuetify',
          'vuetify/components': 'Vuetify'
        }
      }
    }
  }
})
