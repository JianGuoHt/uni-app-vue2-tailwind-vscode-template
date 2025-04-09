import ZPInterceptor from 'z-paging/components/z-paging/js/z-paging-interceptor';

/**]
 * 安装 z-paging
 */
export function setupZPaging() {
  uni.$zp = {
    config: {
      //配置分页默认pageSize为15
      'default-page-size': '15',
      //配置空数据图默认描述文字为：空空如也~~
      'empty-view-text': '空空如也~~',
    },
  };

  // z-paging 针对全局@query的参数进行拦截&修改
  ZPInterceptor.handleQuery((pageNo, pageSize, from) => {
    return [pageNo, pageSize, from];
  });
}
