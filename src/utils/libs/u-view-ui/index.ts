import uView from 'uview-ui';
import { VueConstructor } from 'vue';

/**
 * uView UI
 */
export function setupUViewUI(Vue: VueConstructor) {
  Vue.use(uView);

  uni.$u.setConfig({
    config: {
      // uview官方默认为px
      unit: 'px',
    },
    props: {
      button: {
        hoverStayTime: 100,
      },
    },
  });
}
