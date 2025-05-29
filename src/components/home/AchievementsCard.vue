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

<style lang="scss" scoped>
@use "../../style.scss" as *;

.achievement-card {
  background: white;
  border-radius: 8px;
  padding-top: 1rem;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1); /* Basic shadow */
  transition: all 0.3s ease;
  width: 200px; /* Consistent width for cards in swiper */

  .achievement-value {
    font-size: 1.6rem; /* Adjusted font size */
    font-weight: bold;
    color: $primary-color;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 0.9rem; /* Adjusted font size */
    margin: 0 0 0.5rem 0;
    color: #333;
  }

  p {
    font-size: 0.8rem; /* Adjusted font size */
    padding: 0px 2px;
    margin: 0;
    color: #666;
    height: 2.4em; /* Maintain consistent height */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow-wrap: break-word;
    word-wrap: break-word;
    width: 100%;
    line-height: 1.2em;
  }

  // Optional hover effect (less relevant for touch/swiper, but included for completeness)
  &:hover {
    transform: translateY(-5px); // subtle lift
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15); // larger shadow
  }
}

/* Basic Swiper adjustments (can be overridden by parent CSS) */
.swiper {
  width: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}
</style>
