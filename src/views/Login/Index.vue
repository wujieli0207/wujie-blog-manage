<template>
  <div class="flex justify-center items-center h-screen bg-cover bg-login-banner">
    <div class="flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-2xl">
      <div class="p-4 text-2xl">个人博客管理后台</div>
      <div class="w-96">
        <el-form ref="loginRef" :rules="loginRules">
          <el-form-item>
            <el-input v-model="loginInfo.userName" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginInfo.password" type="password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item>
            <div class="flex justify-around">
              <div>
                <el-checkbox>自动登录</el-checkbox>
              </div>
              <div>
                <a>忘记密码</a>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="w-full" type="primary" size="large" @click="handleLogin"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";
  import useMessage from "/@/hooks/elementPlus/useMessage";
  import useState from "./hooks/useState";
  export default defineComponent({
    name: "Login",
    setup: (props, context) => {
      const router = useRouter();

      const message = useMessage();

      const { loginRef, loginInfo, loginRules } = useState();

      /**
       * @description 用户登录
       */
      const handleLogin = (e) => {
        e.preventDefault();
        // loginRef.value.validate(async (errors) => {
        //   if (error) {
        //     message.error("请填写完整信息");
        //     return;
        //   }
        // });
        message.success("登录成功！");
        router.push({
          name: "home",
        });
      };
      return {
        loginRef,
        loginInfo,
        loginRules,
        handleLogin,
      };
    },
  });
</script>
