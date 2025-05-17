<script setup lang="ts">
import HomePage from "./components/home/HomePage.vue";
import Header from "./components/home/Header.vue";
import Footer from "./components/home/Footer.vue";
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <HomePage />
    </main>
    <Footer />
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
