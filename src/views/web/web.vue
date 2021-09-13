<template>
  <div>
    节流与防抖： 节流和防抖 是 为了减少浏览器的压力， 提高性能的解决方式·
    什么是节流？ 节流就是 在一个时间段内 多次触发只执行最后一次。
    <div class="ietm" @mousemove="monusemove"></div>

    防抖（debounce）
    防抖和节流不同的地方在于，函数在一段时间内的多次调用，仅使得最后一次调用有效。
    <input type="text" @keyup="keyup" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
  data() {
    return {
      timeId: null,
      debounceTime: null,
    };
  },
  methods: {
    monusemove(e: any) {
      if (!this.timeId) {
        this.timeId = setTimeout(() => {
          this.timeId = null;
        }, 2000);
      }
    },
    keyup(e) {
      clearTimeout(this.debounceTime);
      this.debounceTime = setTimeout(() => {
      }, 1000);
    },
  },
});
</script>

<style lang="scss" scoped>
.ietm {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: burlywood;
}
</style>