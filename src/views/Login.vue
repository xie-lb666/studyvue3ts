<template>
  <div>
    <el-form ref="form" :model="fromdata" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="fromdata.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="fromdata.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
      {{ tokne }}
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { mapGetters, useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  computed: {
    ...mapGetters(["tokne"]),
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const fromdata = reactive({
      name: "",
      password: "",
    });
    const onSubmit = () => {
      store
        .dispatch("user/LoginByUsername", fromdata)
        .then(() => {
          router.push({
            path: "/",
          });
        })
        .catch((err: any) => {
          // console.error(err); //登录失败提示错误
        });
    };

    const form = toRefs(fromdata);
    return {
      fromdata,
      form,
      onSubmit,
    };
  },
});
</script>

<style scoped>
</style>