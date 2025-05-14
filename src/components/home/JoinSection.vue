<script setup lang="ts">
import { ref } from "vue";
import studentImage from "../../assets/university-example.jpg";
</script>

<template>
  <section class="join-section">
    <div class="container">
      <div class="join-content">
        <div class="text-content">
          <h2>Answer the Call to Learn, Lead, and Serve</h2>
          <p class="description">
            Join a faith-centered academic community where knowledge is
            nurtured, values are lived, and purpose is discovered. Our programs
            integrate Catholic teachings with practical skills to prepare you
            for a life of service, leadership, and spiritual growth.
          </p>
          <button class="view-courses">Explore Our Programs</button>
        </div>

        <div class="image-card">
          <div class="image-container">
            <img
              :src="studentImage"
              alt="Student engaged in study and service"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../style.scss" as *;
@use "sass:color";

.join-section {
  padding: 5rem 2rem;
  background-color: $primary-color;
}

.container {
  width: 100%;
  padding: 0 5%;
}

.join-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.text-content {
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    font-size: $section-font;
    color: white;
    font-weight: bold;
    line-height: 1.2;
  }

  .description {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    letter-spacing: 0.01em;
  }

  .view-courses {
    align-self: flex-start;
    background-color: white;
    color: $primary-color;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
      transform: translateY(-2px);
    }
  }
}

.image-card {
  position: relative;
  width: 45%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background-color: white;

  &::before {
    content: "";
    position: absolute;
    width: 80%;
    height: 80%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    z-index: -1;
    right: -20%;
    bottom: -20%;
  }

  .image-container {
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.5s ease;
    }
  }
}

@media (max-width: 768px) {
  .join-content {
    flex-direction: column-reverse;
    text-align: center;
  }

  .text-content {
    max-width: 100%;

    .view-courses {
      align-self: center;
      padding: 0.9rem 2rem;
      font-size: 1.05rem;
    }
  }

  .image-card {
    width: 100%;
    max-width: 450px;
    margin: 0 auto 1.5rem;
  }
}
</style>
