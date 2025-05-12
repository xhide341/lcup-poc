<script setup lang="ts">
import Header from "./Header.vue";
import HeroSection from "./HeroSection.vue";
</script>

<template>
  <div class="home-page">
    <Header />
    <main>
      <HeroSection />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}
</style>