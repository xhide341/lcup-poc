<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    achievements: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination],
    };
  },
};
</script>
<template>
  <swiper
    :slides-per-view="1"
    :space-between="20"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :pagination="{ clickable: true }"
    :modules="modules"
  >
    <swiper-slide v-for="achievement in achievements" :key="achievement.id">
      <div class="achievement-card">
        <div class="achievement-value">{{ achievement.value }}</div>
        <h4>{{ achievement.title }}</h4>
        <p>{{ achievement.description }}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>
