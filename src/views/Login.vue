<template>
  <div class="logInPage">
    <div
      :class="{ fromPage: true, 'fade-out': loginout, 'fade-in': loginin }"
      v-if="loginvue"
    >
      <div class="from__login">
        <h2>登录</h2>
        <div class="iconWrap">
          <div class="icon__item"></div>
          <div class="icon__item"></div>
          <div class="icon__item"></div>
        </div>
        <el-form
          ref="form"
          :model="fromdata"
          label-width="80px"
          style="width: 80%"
        >
          <el-form-item>
            <el-input v-model="fromdata.name" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="fromdata.password" placeholder="密码"></el-input>
          </el-form-item>
          <div class="margbox">
            <el-button type="primary" @click="onSubmit" round>登录</el-button>
          </div>

          <div class="link margbox">忘记密码?</div>

          {{ tokne }}
        </el-form>
      </div>
      <div class="FlexBox from__description">
        <div class="desc__panel">
          <h1>hello word</h1>
          <el-button round @click="register">注册</el-button>
        </div>
      </div>
    </div>
    <div
      :class="{ fromPage: true, 'fade-in': registin, 'fade-out': registout }"
      v-if="registvue"
    >
      <div class="FlexBox from__description">
        <div class="desc__panel">
          <h1>hello word</h1>
          <el-button round @click="login">登录</el-button>
        </div>
      </div>
      <div class="from__login">
        <h2>注册</h2>
        <div class="iconWrap">
          <div class="icon__item"></div>
          <div class="icon__item"></div>
          <div class="icon__item"></div>
        </div>
        <el-form
          ref="form"
          :model="fromdata"
          label-width="80px"
          style="width: 80%"
        >
          <el-form-item>
            <el-input v-model="fromdata.name" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="fromdata.password" placeholder="密码"></el-input>
          </el-form-item>
          <div class="margbox">
            <el-button type="primary" round>登录</el-button>
          </div>

          <div class="link margbox">忘记密码?</div>

          {{ tokne }}
        </el-form>
      </div>
    </div>
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
        });
    };

    const form = toRefs(fromdata);
    return {
      fromdata,
      form,
      onSubmit,
    };
  },
  data() {
    return {
      loginout: false,
      loginvue: true,
      loginin: true,
      registout: false,
      registvue: false,
      registin: false,
    };
  },
  methods: {
    register() {
      this.loginout = true;
      setTimeout(() => {
        this.registvue = true;
        this.loginvue = false;
        this.registin = true;
      }, 1000);
    },
    login() {
      this.registout = true;
      setTimeout(() => {
        this.loginvue = true;
        this.registvue = false;
        this.loginvue = true;
      }, 1000);
    },
  },
});
</script>

<style  lang="scss" scoped>
.FlexBox {
  display: flex;
  align-items: center;
}
.logInPage {
  width: 100%;
  h1,
  h2 {
    text-align: center;
  }
}
.fromPage {
  width: 800px;
  height: 480px;
  margin: auto;
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  .from__login {
    flex-basis: 50%;
    padding: 20px;
  }
  .from__description {
    flex-basis: 50%;
    background: #ff416c;
    background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
    background: linear-gradient(to right, #ff4b2b, #ff416c);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    border-radius: 0px 10px 10px 0px;
    .desc__panel {
      flex: 1;
      text-align: center;
      color: #ffffff;
      h1 {
        text-align: center;
      }
    }
  }
}
.margbox {
  text-align: center;
  margin-bottom: 20px;
}
.link {
  cursor: pointer;
}
.iconWrap {
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-evenly;
  .icon__item {
    flex-basis: 40px;
    height: 40px;
    background-color: red;
    border-radius: 50%;
  }
}
</style>
<style lang="scss" scoped>
.fade-out {
  animation: fade-out 1s ease-out both;
}
.fade-in {
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
/* ----------------------------------------------
 * Generated by Animista on 2021-9-7 0:31:28
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-out
 * ----------------------------------------
 */
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2021-9-7 0:32:49
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-in
 * ----------------------------------------
 */
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>