import type { App } from 'vue'
import VMasonry from './components/VMasonry.vue'

const installable = {
  ...VMasonry,
  install(app: App) {
    app.component('VMasonry', VMasonry)
  },
}

export { VMasonry }
export default installable
