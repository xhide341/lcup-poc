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
        <!-- Small Cards Column -->
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

        <!-- Large Card Column -->
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
  max-height: none;
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
  text-wrap: pretty;
}

.news-layout {
  text-align: start;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-areas: "small large";
  gap: 1.5rem;
  height: 600px;
}

.small-cards-column {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 1.5rem;
  grid-area: small;
}

.large-card-column {
  grid-area: large;
  height: 100%;
}

.small-card {
  min-height: 120px;
}

.large-card {
  height: 100%;
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
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

    .card-title {
      overflow: visible;
      text-overflow: clip;
      display: block;
      line-clamp: 2;
      -webkit-line-clamp: 2;
      max-height: none;
    }

    .card-tags {
      max-height: 26px;
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
    text-align: left;
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
    text-wrap: pretty;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.3s ease;
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  .card-tags {
    display: flex;
    flex-wrap: nowrap;
    gap: 0.5rem;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.3s ease;
    white-space: nowrap;
    max-width: 100%;
    overflow-x: hidden;

    .tag {
      font-size: 0.75rem;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      padding: 0.25rem 0.75rem;
      color: $primary-color;
      font-weight: 600;
      border-radius: 20px;
      display: inline-block;
      white-space: nowrap;
    }
  }
}

@media (max-width: 768px) {
  .featured-news-section {
    padding: 3rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .news-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "small1 small2"
      "small3 large";
    height: auto;
    gap: 1rem;
  }

  .small-cards-column {
    display: contents;
  }

  .small-card:nth-child(1) {
    grid-area: small1;
  }

  .small-card:nth-child(2) {
    grid-area: small2;
  }

  .small-card:nth-child(3) {
    grid-area: small3;
  }

  .large-card-column {
    grid-area: large;
  }

  .small-card,
  .large-card {
    height: 200px;
    min-height: 200px;
  }

  .news-card {
    margin: 0;

    .card-title {
      font-size: 1.1rem;
      display: -webkit-box;
      line-clamp: 2;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .card-tags {
      max-height: 26px;
      margin-top: 0.5rem;
      opacity: 1;
      overflow-x: auto;
      flex-wrap: nowrap;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */

      &::-webkit-scrollbar {
        display: none;
      }

      .tag {
        flex-shrink: 0;
      }
    }
  }
}

@media (max-width: 576px) {
  .featured-news-section {
    padding: 2rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .news-layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "small1"
      "small2"
      "small3"
      "large";
    gap: 0.8rem;
  }

  .small-card:nth-child(1) {
    grid-area: small1;
  }

  .small-card:nth-child(2) {
    grid-area: small2;
  }

  .small-card:nth-child(3) {
    grid-area: small3;
  }

  .large-card-column {
    grid-area: large;
  }

  .small-card {
    height: 180px;
    min-height: 180px;
  }

  .large-card {
    height: 240px;
  }
}
</style>
