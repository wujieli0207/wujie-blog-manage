<template>
  <div class="flex justify-center items-center h-screen bg-login-banner">
    <!-- TODO banner 无法展示 -->
    <div class="login__header"></div>
    <!-- <img class="bg-cover" :src="banner" alt="Login Logo" /> -->
    <div class="">
      <div class="flex flex-col items-center">
        <div class="p-4 text-2xl">个人博客管理后台</div>
        <div class="w-96">
          <el-form>
            <el-form-item label="用户名：">
              <el-input placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item label="密码：">
              <el-input type="password" placeholder="请输入密码" />
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
              <el-button class="w-full" type="primary" size="large">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import banner from "/@/assets/images/banner.jpg";
  export default defineComponent({
    name: "Login",
    setup: (props, context) => {
      return {
        banner,
      };
    },
  });
</script>
