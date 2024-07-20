<template>
  <div class="nav-box">
    <div class="left-box">
      <div
        class="nav-item"
        :class="{ 'act-nav-item': actNav === item.id }"
        v-for="item in navList"
        :key="item.id"
        @click="selectNav(item.id)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="right-box">
      <div
        class="nav-item"
        :class="{ 'act-nav-item': actNav === control_console_nav.id }"
        @click="selectNav(control_console_nav.id)"
      >
        {{ control_console_nav.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="components-head-nav">
import { NAV_ID } from '@/enums/nav-enum.ts'
let navList = [
  {
    id: NAV_ID.HOME_PAGE,
    name: '首页'
  },
  {
    id: NAV_ID.COMPUT_POWER_MARKET,
    name: '算力市场'
  },
  {
    id: NAV_ID.SOLUTION,
    name: '解决方案'
  },
  {
    id: NAV_ID.NEWS_INFO,
    name: '新闻资讯'
  },
  {
    id: NAV_ID.ABOUT_US,
    name: '关于我们'
  }
]
let control_console_nav = {
  id: NAV_ID.CONTRL_CONSOLE,
  name: '账号后台'
}
// 当前菜单
let actNav = ref(NAV_ID.HOME_PAGE)
function selectNav(id: string): void {
  actNav.value = id
}
</script>

<style scoped lang="scss">
/* Scoped CSS */
.nav-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .left-box {
    display: flex;
  }

  .nav-item {
    width: 100px;
    text-align: center;
    cursor: pointer;
    position: relative;

    &:hover {
      color: $primary-color;
    }
  }

  .act-nav-item {
    color: $primary-color;
    // font-weight: bold;
    &::after {
      content: '';
      width: 60%;
      background-color: $primary-color;
      height: 2px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
}
</style>
