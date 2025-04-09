<template>
  <view class="w-screen">
    <view>
      <view class="text-lg font-semibold">uview-ui 2 控件示例</view>
      <view>
        <u-button :custom-style="{ width: '200px' }" text="月落"></u-button>
        <u-cell-group>
          <u-cell icon="setting-fill" title="个人设置"></u-cell>
          <u-cell icon="integral-fill" title="会员等级" value="新版本"></u-cell>
          <u-cell value="内容">
            <template #title>
              <view class="u-slot-title">
                <text class="u-cell-text text-[#00aaaa]">单元格</text>
              </view>
            </template>
          </u-cell>
        </u-cell-group>
      </view>
    </view>

    <view class="mt-2 text-lg font-semibold">写法示例</view>
    <!-- <view :class="classArray">classArray bg-url</view> -->
    <view>title: {{ title }}</view>
    <view>time: {{ time }}</view>

    <view class="mt-2 bg-red-300">
      <view>请求示例</view>
      <view>请求状态: {{ requestLoading }}</view>
      {{ stringRequestData }}
      <button @click="() => runAsync()">重新发起请求</button>
    </view>
    <!-- css 数字不换行 -->

    <view class="mt-2 whitespace-break-spaces bg-blue-300">
      <view v-for="(value, key) in env" :key="key">{{ key }}:{{ value }}</view>
    </view>

    <view class="mt-2">
      <view class="ifdef-[MP-WEIXIN]:bg-blue-500 ifndef-[MP-WEIXIN]:bg-red-500">
        样式的条件编译:微信小程序为蓝色，不是微信小程序为红色
      </view>

      <view class="wx:bg-blue-500 -wx:bg-red-500">
        <view>自定义配置的方式进行样式条件编译</view>
        <view>相关配置见根目录下的tailwind.config.js</view>
      </view>

      <view class="apply-class-0">@apply 条件编译方式0</view>
      <view class="apply-class-1">@apply 条件编译方式1</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from '@vue/composition-api';
import { useIntervalFn } from '@vueuse/core';
import { useRequest } from 'vue-request';

import { http } from '@/utils/http';
console.log('🚀 ~ useIntervalFn:', useIntervalFn);

const title = ref('Hello');

const time = ref('');

const env = ref(process.env);

const apiHttp = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return http.get('/json/test.json');
};

const { data: requestData, loading: requestLoading, runAsync } = useRequest(apiHttp, {});

const stringRequestData = computed(() => {
  return JSON.stringify(requestData.value);
});

function setTime() {
  time.value = uni.$u.timeFormat(new Date().getTime(), 'yyyy年mm月dd日 hh时MM分ss秒');
}

const { resume } = useIntervalFn(
  () => {
    setTime();
  },
  1000,
  {
    immediate: false,
    immediateCallback: true,
  },
);

onMounted(() => {
  resume();
});
</script>

<!-- <script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      title: 'Hello',
      flag: true,
      // https://uniapp.dcloud.net.cn/tutorial/vue-basics.html#class-%E4%B8%8E-style-%E7%BB%91%E5%AE%9A
      // 小程序端不支持 classObject 和 styleObject 语法。
      classObj: {
        'bg-[#123456]': true,
        'text-[#654321]': true,
      },
      classArray: ['bg-[#123456]', 'text-[#ffaaaa]', "bg-[url('https://xxx.com/xx.webp')]"],
    };
  },
  methods: {},
});
</script> -->

<style lang="scss">
.apply-class-0 {
  @apply ifdef-[MP-WEIXIN]:bg-blue-500 ifndef-[MP-WEIXIN]:bg-red-500;
}

.apply-class-1 {
  // 这个需要在 tailwind.config.js 里进行自定义配置
  @apply wx:bg-blue-500 -wx:bg-red-500;
}
</style>
