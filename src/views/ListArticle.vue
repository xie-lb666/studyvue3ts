<template>
  <div>
    <h1>哈哈哈哈哈</h1>
    <el-table :data="data.tableData">
      <el-table-column prop="title" label="标题" width="140"> </el-table-column>
      <el-table-column prop="body" label="内容" width="120"> </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.row._id)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row._id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
  import ContentLayout from "../components/ContentLayout.vue";
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import service from "../api/aritcle";
export default defineComponent({
  components:{
    ContentLayout
  },
  setup() {
    const router = useRouter();
    const data = reactive({
      tableData: [],
      getList: () => {
        service.getArticleList().then((res) => {
          if (res.status == 200) {
            data.tableData = res.data;
          }
        });
      },
    });
    let handleEdit = (id: string) => {
      router.push({
        path: "/article/edit",
        query: {
          id: id,
        },
      });
    };
    let handleDelete = (id: string) => {
      service
        .delArticle(id)
        .then((res) => {
          if (res.status) {
            ElMessage.success({
              message: "删除成功",
              type: "success",
            });
            data.getList();
          }
        })
        .catch((err) => {
          // console.log(err);
        });
    };

    data.getList();
    return {
      data,
      handleEdit,
      handleDelete,
    };
  },
});
</script>

<style lang="scss" scoped>
  .h1{
    color: blue;
  }
</style>