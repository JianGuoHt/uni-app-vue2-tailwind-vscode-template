const { WeappTailwindcssDisabled } = require('./platform');
const { UnifiedWebpackPluginV5 } = require('weapp-tailwindcss/webpack');

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const config = {
  //....
  configureWebpack: {
    plugins: [
      new UnifiedWebpackPluginV5({
        rem2rpx: true,
        disabled: WeappTailwindcssDisabled,
      }),
    ],
  },
  chainWebpack: (config) => {
    // 去除ts类型检测，因为uni-app ts type 支持其实不咋好
    config.plugins.delete('fork-ts-checker');
    // 禁用 Prettier
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.prettify = false;
        return options;
      });
  },
  transpileDependencies: ['uview-ui'],
  //....
};

module.exports = config;
