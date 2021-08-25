<template>
  <div>
    <el-upload
      style="margin-bottom: 10px"
      class="upload-demo"
      action="http://127.0.0.1:8081/upload"
      :on-success="handleSuccess"
      :show-file-list="false"
      multiple
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传奖品图片</el-button>
    </el-upload>
    <el-image
    v-if="imgurl!=''"
      style="width: 100px; height: 100px"
      :src="'http://127.0.0.1:8081/' + imgurl"
    ></el-image>
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
      fileList: [],
      imgurl: "",
    };
  },
  methods: {
    handleSuccess(response, file, fileList) {
      this.imgurl = response.data.url;
    },
  },
});
</script>

<style scoped>
</style>