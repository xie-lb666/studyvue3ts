<template>
  <div>
    <div>
      浏览的渲染原理： 1.解析文档 生成 DOM树， DOM树由dom节点和属性构成
      <br />
      2.解析css构成 CSSOM规则树 <br />
      3.根据DOM树，CSSOM规则树构建渲染树。渲染树的节点叫做渲染对象，渲染对象包括 css相关属性并与dom元素对应
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContentLayout from "../../components/ContentLayout.vue";

export default defineComponent({
  components: { ContentLayout },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
</style>