<script setup lang="ts">
import HomePage from "./components/home/HomePage.vue";
</script>

<template>
  <div id="app">
  <HomePage />  
  <!-- <router-view></router-view> -->
  </div>
</template>

<style lang="scss" scoped>
@use './style.scss' as *;

#app {  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: 100vh;  
  overflow-y: auto;
}
</style>
