<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-left">
        <img alt="login" src="@/assets/images/暂无方向.png"/>
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img alt="" class="login-icon" src="@/assets/images/logo.svg"/>
          <h2 class="logo-text">Vue3</h2>
        </div>
        <LoginForm ref="loginRef"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" name="login" setup>
import LoginForm from "./childComponents/LoginForm.vue";
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 550px;
  height: 100%;
  min-height: 500px;
  background-color: #eeeeee;
  background-image: url("@/assets/images/login_bg.svg");
  background-position: 50%;
  background-size: 100% 100%;
  background-size: cover;

  .dark {
    position: absolute;
    top: 4.5%;
    right: 3.2%;
  }

  .login-box {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding: 0 50px;
    background-color: hsl(0deg 0% 100% / 80%);
    border-radius: 10px;

    .login-left {
      width: 800px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .login-form {
      width: 420px;
      padding: 50px 40px 45px;
      border-radius: 10px;
      box-shadow: 2px 3px 7px rgb(0 0 0 / 20%);

      .login-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 45px;

        .login-icon {
          width: 60px;
          height: 52px;
        }

        .logo-text {
          padding: 0 0 0 25px;
          margin: 0;
          font-size: 42px;
          font-weight: bold;
          color: #34495e;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
