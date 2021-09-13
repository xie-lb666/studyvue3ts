<template>
  <div class="page">
    <el-form ref="form" inline :model="form" size="medium" label-width="120px">
      <el-row :gutter="20">
        <el-col
          v-for="(item, i) in 8"
          :key="i"
          :span="12"
          style="margin-bottom: 50px"
        >
          <div>
            <el-form-item :label="`商品${i + 1}名称：`">
              <el-input v-model="form[i].name"></el-input>
            </el-form-item>
            <el-form-item :label="`商品${i + 1}概率：`">
              <el-input v-model="form[i].per"></el-input>
            </el-form-item>
          </div>
          <div>
            <UpLoad :ref="'img' + item" />
          </div>
        </el-col>
        <el-col :span="24" style="margin-bottom: 50px">
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-col>
        <el-form-item> </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElMessage } from "element-plus";
import service from "../../api/luckydraw";
import { defineComponent, reactive } from "vue";
import UpLoad from "../../components/upload/upload.vue";

export default defineComponent({
  setup() {
    //   let form =reactive( {
    //       name:''
    //   });
    //   return { form };
  },
  components: {
    UpLoad,
  },
  data() {
    return {
      form: [
        {
          name: "",
          per: "",
          type: 1,
          imgurl: "",
        },
        {
          name: "",
          per: "",
          type: 2,
          imgurl: "",
        },
        {
          name: "",
          per: "",
          type: 3,
          imgurl: "",
        },
        {
          name: "",
          per: "",
          type: 4,
          imgurl: "",
        },
        {
          name: "",
          per: "",
          type: 5,
          imgurl: "",
        },
        {
          name: "",
          per: "",
          type: 6,
          imgurl: "",
        },
        {
          name: "",
          per: "",
          type: 7,
          imgurl: "",
        },
        {
          name: "",
          per: "",
          type: 8,
          imgurl: "",
        },
      ],
      fileList: [],
      imgurl: "",
    };
  },
  methods: {
    onSubmit() {
      for (let i = 0; i < this.form.length; i++) {
        let num = i + 1;
        let refname = "img" + num;
        let url = this.$refs[refname].imgurl;
        this.form[i].imgurl = url;
      }
      let perarr = this.form.map((item) => {
        return item.per;
      });
      let sum = 0;
      perarr.forEach((val) => {
        sum += parseInt(val);
      });
      if (sum == 100) {
        service
          .addPrize(this.form)
          .then((res) => {
            if (res.status == 200) {
              ElMessage({
                type: "success",
                message: "创建成功",
              });
            }
          })
          .catch((err) => {
          });
      } else {
        ElMessage.error("请设置完整的百分比");
      }
    },
  },
});
</script>

<style scoped>
.page {
  height: 600px;
  padding-bottom: 50px;
  overflow: hidden;
  overflow-y: scroll;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.el-input__inner {
  width: 220px !important;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>