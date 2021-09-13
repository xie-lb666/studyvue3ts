<template>
  <div class="page">
    <div class="mainbox" v-if="prizeList.length != 0">
      <div :class="{ item: true, active: index == prizeList[0].type }">
        <el-image
          style="width: 60px; height: 60px"
          :src="BaseUrl + prizeList[0].imgurl"
        ></el-image>
        <div style="width: 100%">
          {{ prizeList[0].name }}
        </div>
      </div>
      <div :class="{ item: true, active: index == prizeList[1].type }">
        <el-image
          style="width: 60px; height: 60px"
          :src="BaseUrl + prizeList[1].imgurl"
        ></el-image>
        <div style="width: 100%">
          {{ prizeList[1].name }}
        </div>
      </div>
      <div :class="{ item: true, active: index == prizeList[2].type }">
        <el-image
          style="width: 60px; height: 60px"
          :src="BaseUrl + prizeList[2].imgurl"
        ></el-image>
        <div style="width: 100%">
          {{ prizeList[2].name }}
        </div>
      </div>
      <div :class="{ item: true, active: index == prizeList[7].type }">
        <el-image
          style="width: 60px; height: 60px"
          :src="BaseUrl + prizeList[7].imgurl"
        ></el-image>
        <div style="width: 100%">
          {{ prizeList[7].name }}
        </div>
      </div>
      <div class="item btnbox" @click="luck">
        <div class="btnbox__fontsize">抽奖</div>
        <div class="btntext">200/次</div>
      </div>
      <div :class="{ item: true, active: index == prizeList[3].type }">
        <el-image
          style="width: 60px; height: 60px"
          :src="BaseUrl + prizeList[3].imgurl"
        ></el-image>
        <div style="width: 100%">
          {{ prizeList[3].name }}
        </div>
      </div>
      <div :class="{ item: true, active: index == prizeList[6].type }">
        <el-image
          style="width: 60px; height: 60px"
          :src="BaseUrl + prizeList[6].imgurl"
        ></el-image>
        <div style="width: 100%">
          {{ prizeList[6].name }}
        </div>
      </div>
      <div :class="{ item: true, active: index == prizeList[5].type }">
        <el-image
          style="width: 60px; height: 60px"
          :src="BaseUrl + prizeList[5].imgurl"
        ></el-image>
        <div style="width: 100%">
          {{ prizeList[5].name }}
        </div>
      </div>
      <div :class="{ item: true, active: index == prizeList[4].type }">
        <el-image
          style="width: 60px; height: 60px"
          :src="BaseUrl + prizeList[4].imgurl"
        ></el-image>
        <div style="width: 100%">
          {{ prizeList[4].name }}
        </div>
      </div>
    </div>

    <el-dialog title="恭喜你中奖了" v-model="dialogWinVisible">
      <div class="dialogbox">
        <el-image
          style="width: 60px; height: 60px"
          :src="BaseUrl + winData.imgurl"
        ></el-image>
        <div class="dialogbox__text">恭喜获得 {{ winData.name }} ！！</div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogWinVisible = false"
            >再抽一次</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import service from "../../api/luckydraw";

export default defineComponent({
  setup() {
    const BaseUrl = "http://127.0.0.1:8081/";
    let flag = ref(true); //控制不能多次点击抽奖；
    let index = ref(0); //模拟选中哪一个
    let prizeList = ref([]);
    let dialogWinVisible = ref(false); //中奖显示
    let winData = ref({});

    // 此处可优化
    const luck = async () => {
      if (flag.value) {
        flag.value = false;
        let data = await setData();
        let timeId = setInterval(() => {
          let i = index.value;
          i = i + 1;
          if (i > 8) {
            i = 1;
          }
          index.value = i;
        }, 100);
        setTimeout(() => {
          clearInterval(timeId);
          let timeIdTwo = setInterval(() => {
            let i = index.value;
            i = i + 1;
            if (i > 8) {
              i = 1;
            }
            // 停下来 , 找到商品了
            if (i == data.type) {
              winData.value = data;
              clearInterval(timeIdTwo);
              flag.value = true;
              dialogWinVisible.value = true;
            } else {
            }
            index.value = i;
          }, 200);
        }, 4000);
      }
    };
    // 获取结果
    const setData = async () => {
      let data = await service.getLuckydraw();
      return data.data;
    };

    // 获取奖品列表
    const getData = async () => {
      let data = await service.getPrizeList();
      if (data.status === 200) {
        prizeList.value = data.data;
      }
    };
    getData();
    return {
      BaseUrl,
      luck,
      index,
      getData,
      prizeList,
      dialogWinVisible,
      winData,
    };
  },
});
</script>

<style scoped >
.page {
  width: 100%;
  height: 900px;
  padding-top: 30px;
}
.mainbox {
  width: 360px;
  /* height: 300px; */
  padding: 20px;
  margin: auto;
  background-color: coral;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.item {
  width: 100px;
  height: 100px;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: #d25f00;
  border-radius: 4px;

  flex-direction: column;
}
.btnbox {
  background: #ffe6a6;
  box-shadow: inset 0 0 16px #ffa800;
  cursor: pointer;
}
.btnbox__fontsize {
  font-size: 32px;
  line-height: 42px;
  font-weight: 600;
  color: #a74b00;
}
.btntext {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #d25f00;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.active {
  width: 100px;
  height: 100px;
  background: #ffe6a6;
  box-shadow: inset 0 0 16px #ffa800;
}
.dialogbox{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.dialogbox__text{
  text-align: center;
}
</style>