<template>
  <div class="content-box">
    <RouterView />
  </div>
</template>

<script setup lang="ts" name="views-index"></script>

<style scoped lang="scss">
.content-box {
  height: calc(100vh - 40px);
  overflow-y: auto;
  margin-top: 40px;
}
</style>
