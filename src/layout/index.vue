
<template>
  <el-container style="height: 650px">
    <el-aside :width="asideWidth" style="background-color: rgb(238, 241, 246)">
      <h1>标题 <i class="el-icon-arrow-left" @click="closeAside"></i></h1>
      <el-menu
        router
        :collapse="collapse"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1" v-for="(item, i) in routerList" :key="i">
          <template #title
            ><i :class="item.icon"></i><span>{{ item.name }}</span></template
          >
          <el-menu-item v-for="(v, i) in item.children" :key="i" :index="v.path"
            ><i :class="v.meta.icon"></i>{{ v.meta.title }}</el-menu-item
          >
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <div class="page">
        <router-view />
      </div>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { mapGetters } from "vuex";
export default defineComponent({
  name: "Layout",
  computed: { ...mapGetters(["routerList"]) },
  setup() {
    let collapse = ref(false);
    let asideWidth = ref("260px");
    const closeAside = () => {
      collapse.value = !collapse.value;
      if (collapse.value) {
        asideWidth.value = "120px";
      } else {
        asideWidth.value = "260px";
      }
    };
    const handleOpen = (key, keyPath) => {};
    const handleClose = (key, keyPath) => {};
    return {  closeAside, asideWidth, collapse, handleOpen, handleClose };
  },
});
</script>

<style scoped>
.page {
  padding: 20px;
  height: 680px;
  padding-bottom: 100px;
  overflow: hidden;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
}
</style>
