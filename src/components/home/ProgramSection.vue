<script setup lang="ts">
import { ref } from "vue";
import basicEducation from "../../assets/programs/basic-education.webp";
import college from "../../assets/programs/college.webp";
import collegeOfMedicine from "../../assets/programs/college-of-medicine.webp";
import alternativeCollege from "../../assets/programs/alternative-college.webp";
import graduateStudies from "../../assets/programs/graduate-studies.webp";

const programs = ref([
  {
    title: "Basic Education (K to 12)",
    description:
      "Foundational education for kindergarten to senior high school.",
    image: basicEducation,
  },
  {
    title: "Colleges",
    description:
      "Explore a variety of undergraduate programs across disciplines.",
    image: college,
  },
  {
    title: "College of Medicine",
    description: "Comprehensive training for future medical professionals.",
    image: collegeOfMedicine,
  },
  {
    title: "Alternative College",
    description:
      "Flexible and innovative education pathways for diverse learners.",
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
  <section class="programs-section">
    <div class="container">
      <h2>Academic Programs</h2>
      <p class="section-description">
        Discover our diverse range of undergraduate and graduate programs
        designed to prepare you for success.
      </p>

      <div class="programs-grid">
        <div
          v-for="(program, index) in programs"
          :key="index"
          class="program-card"
        >
          <div class="program-image">
            <img :src="program.image" :alt="program.title" />
          </div>
          <div class="program-content">
            <div class="text-group">
              <h3>{{ program.title }}</h3>
              <p>{{ program.description }}</p>
            </div>
            <button class="learn-more">Learn More</button>
          </div>
        </div>
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
}

.container {
  width: 100%;
  padding: 0 5%;
}

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
}

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
      font-size: 1.3rem;
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

@media (max-width: 768px) {
  .programs-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .program-card {
    max-width: 100%;
    margin: 0;
  }

  .program-image {
    height: 180px;
  }

  .program-content {
    padding: 1.25rem;
    gap: 18px;

    .text-group {
      h3 {
        font-size: 1.1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }
}

@media (max-width: 576px) {
  .programs-grid {
    grid-template-columns: 1fr;
  }

  .program-card {
    max-width: 450px;
    margin: 0 auto;
  }

  .program-image {
    height: 200px;
  }
}
</style>
