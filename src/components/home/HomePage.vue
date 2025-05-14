<script setup lang="ts">
import Header from "./Header.vue";
import HeroSection from "./HeroSection.vue";
import ProgramSection from "./ProgramSection.vue";
import JoinSection from "./JoinSection.vue";
import FeaturedSection from "./FeaturedSection.vue";
import UniversityInfo from "./university_info.vue";
</script>

<template>
  <body class="home-page">
    <Header />
    <main>
      <HeroSection />
      <ProgramSection />
      <JoinSection />
      <FeaturedSection />
      <UniversityInfo />
    </main>
  </body>
</template>

<style lang="scss" scoped></style>
