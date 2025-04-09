const { WeappTailwindcssDisabled } = require('./platform');
const { UnifiedWebpackPluginV5 } = require('weapp-tailwindcss/webpack');
const ScriptSetup = require('unplugin-vue2-script-setup/webpack').default;

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const config = {
  parallel: false,
  configureWebpack: {
    plugins: [
      ScriptSetup({
        /* options */
      }),
      new UnifiedWebpackPluginV5({
        rem2rpx: true,
        disabled: WeappTailwindcssDisabled,
      }),
    ],
    resolve: {
      alias: {
        '@vue/composition-api': '@vue/composition-api/dist/vue-composition-api.mjs',
        '@vue/composition-api/dist/vue-composition-api.esm.js':
          '@vue/composition-api/dist/vue-composition-api.mjs',
      },
    },
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
  transpileDependencies: ['uview-ui', 'z-paging'],
  //....
};

module.exports = config;
