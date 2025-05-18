<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
@use "./style.scss" as *;

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  font-family:
    Poppins,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
}
</style>
