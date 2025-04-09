declare module 'uview-ui';

declare module 'uview-ui' {
  /**
   * uview-u 全局配置
   * - uni.$u
   */
  interface $u {
    /**
     * 全局配置
     */
    setConfig: (config: Record<string, any>) => void;

    timeFormat: (time: number, format: string) => string;
  }

  global {
    interface Uni {
      $u: $u;
    }
  }
}
