import { VueConstructor } from 'vue';

import { prototypeInterceptor } from './prototype';
import { requestInterceptor } from './request';

/**
 * interceptors
 */
export function setupInterceptors(Vue: VueConstructor) {
  Vue.use(prototypeInterceptor);
  Vue.use(requestInterceptor);
}
