<template>
  <div>
    <el-form
      :model="data.ruleForm"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章标题" prop="name">
        <el-input v-model="data.ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容" prop="region">
        <el-input v-model="data.ruleForm.body"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="data.send">保存</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import service from "../api/aritcle";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    let id = route.query.id || "";
    let data = reactive({
      ruleForm: {
        title: "",
        body: "",
      },
      send: () => {
        service
          .editArticle(id, data.ruleForm)
          .then((res) => {
            if (res.status) {
              ElMessage.success({
                message: "修改成功",
                type: "success",
              });
              router.push({
                path: "/article/list",
              });
            } else {
              ElMessage.error("修改失败");
            }
          })
          .catch((err) => {
            // console.log(err);
          });
      },
      getData: (id: any) => {
        service
          .getArticleData(id)
          .then((res) => {
            if (res.status == 200) {
              data.ruleForm = res.data;
            } else {
              ElMessage.error("添加失败");
            }
          })
          .catch((err) => {
            // console.log(err);
          });
      },
    });
    data.getData(id);
    return { data, id };
  },
});
</script>
  
  <style lang="scss" scoped>
    
</style>