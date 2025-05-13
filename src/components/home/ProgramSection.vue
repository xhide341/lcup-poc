<script setup lang="ts">
import { ref } from 'vue';

const programs = ref([
  { title: 'Business Administration', description: 'Develop essential skills for the modern business landscape.', image: 'https://placehold.co/600x400/003D7C/FFF' },
  { title: 'Computer Science', description: 'Learn programming, software development and information technology.', image: 'https://placehold.co/600x400/003D7C/FFF' },
  { title: 'Education', description: 'Prepare for a career in teaching and educational leadership.', image: 'https://placehold.co/600x400/003D7C/FFF' },
  { title: 'Nursing', description: 'Gain clinical experience and patient care skills.', image: 'https://placehold.co/600x400/003D7C/FFF' },
  { title: 'Engineering', description: 'Study technical design and problem-solving.', image: 'https://placehold.co/600x400/003D7C/FFF' },
  { title: 'Arts & Sciences', description: 'Explore a broad range of academic disciplines.', image: 'https://placehold.co/600x400/003D7C/FFF' }
]);
</script>

<template>
  <section class="programs-section">
    <div class="container">
      <h2>Academic Programs</h2>
      <p class="section-description">Discover our diverse range of undergraduate and graduate programs designed to prepare you for success.</p>
      
      <div class="programs-grid">
        <div v-for="(program, index) in programs" :key="index" class="program-card">
          <div class="program-image">
            <img :src="program.image" :alt="program.title">
          </div>
          <div class="program-content">
            <h3>{{ program.title }}</h3>
            <p>{{ program.description }}</p>         
            <button class="learn-more">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../style.scss' as *;
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
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.program-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
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
  padding: 1.5rem;
  
  h3 {
    color: $primary-color;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }
  
  p {
    color: #555;
    margin-bottom: 1.2rem;
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

@media (max-width: 768px) {
  .programs-grid {
    grid-template-columns: 1fr;
  }
  
  .program-card {
    max-width: 450px;
    margin: 0 auto;
  }
}
</style> 