<script setup lang="ts">
import { motion } from "motion-v";
import { ref } from "vue";
import basicEducation from "../../assets/programs/basic-education.webp";
import college from "../../assets/programs/college.webp";
import collegeOfMedicine from "../../assets/programs/college-of-medicine.webp";
import alternativeCollege from "../../assets/programs/alternative-college.webp";
import graduateStudies from "../../assets/programs/graduate-studies.webp";

const programs = ref([
  {
    title: "Basic Education (K to 12)",
    description: "Core learning for elementary and high school students.",
    image: basicEducation,
  },
  {
    title: "Colleges",
    description: "Explore a variety of undergraduate programs across disciplines.",
    image: college,
  },
  {
    title: "College of Medicine",
    description: "Comprehensive training for future medical professionals.",
    image: collegeOfMedicine,
  },
  {
    title: "Alternative College",
    description: "Flexible and innovative education pathways for diverse learners.",
    image: alternativeCollege,
  },
  {
    title: "Graduate Studies",
    description: "Advanced academic degrees for career growth.",
    image: graduateStudies,
  },
]);
</script>

<template>
  <section class="programs-section" aria-label="academic programs section">
    <div class="container">
      <motion.h2
        :initial="{ opacity: 0, y: 30 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.3 }"
        :inViewOptions="{ once: true }"
        id="programs-heading"
      >
        Academic Programs
      </motion.h2>
      <motion.p
        :initial="{ opacity: 0, y: 30 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.3, delay: 0.1 }"
        :inViewOptions="{ once: true }"
        class="section-description"
      >
        Discover our diverse range of undergraduate and graduate programs designed to prepare you
        for success.
      </motion.p>

      <div class="programs-grid" role="list" aria-labelledby="programs-heading">
        <motion.div
          v-for="(program, index) in programs"
          :key="index"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.3, delay: 0.6 + index * 0.15 }"
          :inViewOptions="{ once: true }"
          class="program-card"
          role="listitem"
          tabindex="0"
          :aria-label="`${program.title}. ${program.description}`"
        >
          <div class="program-image">
            <img :src="program.image" :alt="program.title" role="img" />
          </div>
          <div class="program-content">
            <div class="text-group">
              <h3>{{ program.title }}</h3>
              <p>{{ program.description }}</p>
            </div>
            <button
              class="learn-more"
              type="button"
              aria-label="learn more about {{ program.title }}"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../style.scss" as *;
@use "sass:color";

.programs-section {
  padding: 5rem 2rem;
  background-color: $body-color;

  .container {
    width: 100%;
    padding: 0 5%;

    h2 {
      font-size: $section-font;
      color: $primary-color;
      text-align: left;
      margin-bottom: 1rem;
    }

    .section-description {
      text-align: left;
      max-width: 700px;
      margin-bottom: 3rem;
      font-size: 1.1rem;
      color: #555;
    }

    .programs-grid {
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;

      .program-card {
        display: flex;
        flex-direction: column;
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        height: 100%;
        transition:
          transform 0.3s ease,
          box-shadow 0.3s ease;

        &:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .program-image {
          height: 200px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;

            &:hover {
              transform: scale(1.05);
            }
          }
        }

        .program-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          padding: 1.5rem;
          gap: 24px;

          .text-group {
            h3 {
              margin-bottom: 0.5rem;
              color: $primary-color;
              font-size: 1.2rem;
            }

            p {
              color: #555;
              line-height: 1.5;
            }
          }

          .learn-more {
            background-color: $primary-color;
            color: white;
            border: none;
            padding: 0.6rem 1.2rem;
            border-radius: 4px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s ease;

            &:hover {
              background-color: color.adjust($primary-color, $lightness: -10%);
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    & {
      padding: 3rem 2rem;
    }

    .container {
      h2 {
        font-size: 1.875rem;
        text-align: center;
      }

      .section-description {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 1rem;
        text-wrap: pretty;
      }

      .programs-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;

        .program-card {
          max-width: 100%;
          margin: 0;

          .program-image {
            height: 180px;
          }

          .program-content {
            padding: 1.25rem;
            gap: 18px;

            .text-group {
              h3 {
                font-size: 1rem;
              }

              p {
                font-size: 0.9rem;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    & {
      padding: 2rem 1rem;
    }

    .container {
      h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      .section-description {
        font-size: 0.875rem;
      }

      .programs-grid {
        grid-template-columns: 1fr;

        .program-card {
          max-width: 450px;
          margin: 0 auto;

          .program-image {
            height: 200px;
          }
        }
      }
    }
  }
}
</style>
