<template>
  <div id="app">
    <!-- <Layout/> -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "./layout/index.vue";
export default defineComponent({
  name: "App",
  setup() {
    return {};
  },
  components: {
    Layout,
  },
});
</script>

<style>
html,
body {
  padding: 0;
}
</style>
