<script setup lang="ts">
import { ref } from "vue";
import news1 from "../../assets/news/news-1.webp";
import news2 from "../../assets/news/news-2.webp";
import news3 from "../../assets/news/news-3.webp";
import news4 from "../../assets/news/news-4.webp";

interface NewsItem {
  id: number;
  title: string;
  image: string;
  tags: string[];
}

const newsItems = ref<NewsItem[]>([
  {
    id: 1,
    title:
      "University Orchestra Wins National Competition with Stunning Performance",
    image: news1,
    tags: ["Arts", "Student Achievement", "Music"],
  },
  {
    id: 2,
    title:
      "New Science Building Opens Doors to Future Innovators and Researchers",
    image: news2,
    tags: ["Campus Development", "Science", "Facilities"],
  },
  {
    id: 3,
    title: "Student Team Develops Award-Winning App to Support Local Community",
    image: news3,
    tags: ["Technology", "Community Service", "Innovation"],
  },
  {
    id: 4,
    title:
      "University Celebrates 50 Years of Academic Excellence with Alumni Homecoming Event",
    image: news4,
    tags: ["Anniversary", "Alumni", "Celebration", "History"],
  },
]);
</script>

<template>
  <section class="featured-news-section">
    <div class="container">
      <h2 class="section-title">Featured Stories</h2>
      <p class="section-description">
        Discover recent stories showcasing student excellence, groundbreaking
        research, and events shaping our campus community.
      </p>

      <div class="news-layout">
        <div class="small-cards-column">
          <div
            v-for="item in newsItems.slice(0, 3)"
            :key="item.id"
            class="news-card small-card"
            :style="{
              backgroundImage: `linear-gradient(rgba(7, 63, 119, 0.3), rgba(7, 63, 119, 0.9)), url(${item.image})`,
            }"
          >
            <div class="arrow-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                width="16"
                height="16"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>

            <div class="card-content">
              <h3 class="card-title">{{ item.title }}</h3>
              <div class="card-tags">
                <span
                  v-for="(tag, index) in item.tags"
                  :key="index"
                  class="tag"
                  >{{ tag }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="large-card-column">
          <div
            class="news-card large-card"
            :style="{
              backgroundImage: `linear-gradient(rgba(7, 63, 119, 0.3), rgba(7, 63, 119, 0.9)), url(${newsItems[3].image})`,
            }"
          >
            <div class="arrow-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                width="16"
                height="16"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>

            <div class="card-content">
              <h3 class="card-title">{{ newsItems[3].title }}</h3>
              <div class="card-tags">
                <span
                  v-for="(tag, index) in newsItems[3].tags"
                  :key="index"
                  class="tag"
                  >{{ tag }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../style.scss" as *;

.featured-news-section {
  padding: 5rem 0;
  background-color: $body-color;
  max-height: 100dvh;
}

.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.5rem;
  color: $primary-color;
  align-self: center;
  margin-bottom: 1rem;
}

.section-description {
  align-self: center;
  max-width: 700px;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  color: #555;
}

.news-layout {
  text-align: start;
  display: flex;
  gap: 1.5rem;
  height: 600px;
}

.small-cards-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 40%;

  .small-card {
    flex: 1;
  }
}

.large-card-column {
  width: 60%;

  .large-card {
    height: 100%;
  }
}

.news-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

    .card-title {
      overflow: visible;
      text-overflow: clip;
      white-space: normal;
      display: block;
      line-clamp: unset;
      -webkit-line-clamp: unset;
      max-height: none;
    }

    .card-tags {
      max-height: 100px;
      margin-top: 0.75rem;
      opacity: 1;
    }
  }

  .arrow-icon {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 2;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      color: white;
    }
  }

  .card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem;
    background: linear-gradient(transparent, rgba(7, 63, 119, 0.8));
    color: white;
    z-index: 1;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.3s ease;
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.3s ease;

    .tag {
      font-size: 0.75rem;
      background: rgba(7, 63, 119, 0.8);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
    }
  }
}

@media (max-width: 768px) {
  .news-layout {
    flex-direction: column;
    height: auto;
  }

  .small-cards-column,
  .large-card-column {
    width: 100%;
  }

  .small-cards-column {
    gap: 1rem;
  }

  .news-card {
    height: 250px;
  }
}
</style>
