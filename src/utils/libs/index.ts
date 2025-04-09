import type { VueConstructor } from 'vue';

import { setupVueCompositionApi } from './composition-api';
import { setupUViewUI } from './u-view-ui';
import { setupZPaging } from './z-paging';

export function setupLibs(Vue: VueConstructor) {
  setupVueCompositionApi(Vue);

  setupZPaging();

  setupUViewUI(Vue);
}
