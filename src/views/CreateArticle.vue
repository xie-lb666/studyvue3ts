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
        <el-button type="primary" @click="data.send">立即创建</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";
import { useRouter } from 'vue-router';
import service from "../api/aritcle";

export default defineComponent({
  setup() {
    const router = useRouter()
    let data = reactive({
      ruleForm: {
        title: "",
        body: "",
      },
      send: () => {
        service.addArticle(data.ruleForm)
          .then((res) => {
            if (res.status == 200) {
              ElMessage.success({
                message: "添加成功",
                type: "success",
              });
              router.push({
                  path:'/article/list'
              })
            } else {
              ElMessage.error("添加失败");
            }
          })
          .catch((err) => {

          });
      },
    });
    return { data };
  },
});
</script>

<style lang="scss" scoped>
</style>