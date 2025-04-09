import Vue from 'vue';

import App from './App.vue';
import { setupInterceptors } from './interceptors';
import { setupLibs } from './utils/libs';

function bootstrap() {
  Vue.config.productionTip = false;

  setupLibs(Vue);

  setupInterceptors(Vue);

  new Vue({
    render: (h) => h(App),
  }).$mount('#app');
}

bootstrap();
