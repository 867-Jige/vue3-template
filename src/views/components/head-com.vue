<template>
  <div class="head-box lh-40">
    <div class="left-box">
      <img class="logo" :src="logoUrl" />
      <span class="name-text ml-4 lh-40 fs-30">华光智云</span>
    </div>
    <div class="centre-box pd-l-20">
      <HeadNav></HeadNav>
    </div>
    <div class="right-box">
      <div class="login-btn">登录注册</div>
    </div>
  </div>
</template>
<script setup lang="ts" name="componets-head-com">
import HeadNav from './head-nav.vue'
import logoUrl from '@/assets/imgs/logo.png'
</script>
<style scoped lang="scss">
.head-box {
  display: flex;
  justify-content: space-between;
  height: 40px;
  background-color: $white;
  position: fixed;
  width: 100%;
  top: 0;
  .left-box {
    width: 180px;

    .logo {
      width: 40px;
    }

    .name-text {
      color: $primary-color;
      font-weight: bold;
      vertical-align: top;
      font-style: italic;
    }
  }

  .centre-box {
    flex: 1;
    max-width: 1200px;
  }

  .right-box {
    width: 160px;
    position: relative;

    .login-btn {
      position: absolute;
      right: 0;
      width: 120px;
      height: 100%;
      background-color: $primary-color;
      color: $white;
      text-align: center;
      cursor: pointer;

      &:hover {
        background-color: $primary-hover-color;
      }
    }
  }
}
</style>
