import VueCompositionAPI from '@vue/composition-api';
import { VueConstructor } from 'vue';

export function setupVueCompositionApi(Vue: VueConstructor) {
  Vue.use(VueCompositionAPI);
}
