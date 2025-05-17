<script setup lang="ts">
import { motion, useReducedMotion } from "motion-v";
import churchImage from "../../assets/backgrounds/university-church.webp";

const shouldReduceMotion = useReducedMotion();
</script>

<template>
  <section class="join-section" aria-label="join section">
    <div class="container">
      <div class="join-content">
        <div class="text-content">
          <motion.h2
            :initial="shouldReduceMotion ? false : { opacity: 0, y: 20 }"
            :whileInView="shouldReduceMotion ? undefined : { opacity: 1, y: 0 }"
            :transition="shouldReduceMotion ? {} : { duration: 0.6, delay: 0.1 }"
            :inViewOptions="{ once: true }"
            id="join-heading"
          >
            Answer the Call to Learn, Lead, and Serve
          </motion.h2>
          <motion.p
            :initial="shouldReduceMotion ? false : { opacity: 0, y: 20 }"
            :whileInView="shouldReduceMotion ? undefined : { opacity: 1, y: 0 }"
            :transition="shouldReduceMotion ? {} : { duration: 0.6, delay: 0.3 }"
            :inViewOptions="{ once: true }"
            class="description"
          >
            Join a faith-centered academic community where knowledge is nurtured, values are lived,
            and purpose is discovered. Our programs integrate Catholic teachings with practical
            skills to prepare you for a life of service, leadership, and spiritual growth.
          </motion.p>
          <motion.button
            :initial="shouldReduceMotion ? false : { opacity: 0, y: 20 }"
            :whileInView="shouldReduceMotion ? undefined : { opacity: 1, y: 0 }"
            :transition="shouldReduceMotion ? {} : { duration: 0.6, delay: 0.5 }"
            :inViewOptions="{ once: true }"
            class="view-courses"
            type="button"
            aria-label="view student handbook"
          >
            View Student Handbook
          </motion.button>
        </div>

        <motion.div
          :initial="shouldReduceMotion ? false : { opacity: 0, y: 20 }"
          :whileInView="shouldReduceMotion ? undefined : { opacity: 1, y: 0 }"
          :transition="shouldReduceMotion ? {} : { duration: 0.6, delay: 0.7 }"
          :inViewOptions="{ once: true }"
          class="image-card"
          role="region"
          aria-label="university church image"
        >
          <div class="image-container">
            <img :src="churchImage" alt="University Church" role="img" />
          </div>
        </motion.div>
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

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 576px) {
    padding: 2rem 1rem;
  }

  .container {
    width: 100%;
    padding: 0 5%;

    .join-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;

      @media (max-width: 1024px) {
        flex-direction: column-reverse;
        text-align: center;
        gap: 2rem;
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

          @media (max-width: 768px) {
            font-size: 1.875rem;
          }

          @media (max-width: 576px) {
            font-size: 1.5rem;
          }
        }

        p {
          text-align: justify;
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          letter-spacing: 0.01em;
          text-wrap: pretty;

          @media (max-width: 768px) {
            font-size: 1rem;
          }

          @media (max-width: 576px) {
            font-size: 0.875rem;
          }
        }

        .view-courses {
          align-self: flex-start;
          background-color: #ffc107;
          color: #333;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;

          &:hover {
            background-color: #ffd54f;
          }

          @media (max-width: 1024px) {
            align-self: center;
          }

          @media (max-width: 768px) {
            padding: 0.9rem 2rem;
            font-size: 1.05rem;
          }
        }

        @media (max-width: 1024px) {
          max-width: 90%;
          margin: 0 auto;
        }
      }

      .join-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
      }

      .image-card {
        position: relative;
        width: 45%;

        .image-container {
          position: relative;
          width: 100%;

          img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            display: block;
            object-fit: cover;
          }
        }

        @media (max-width: 1024px) {
          width: 75%;
          max-width: 600px;
          margin: 0 auto 1rem;
        }

        @media (max-width: 768px) {
          width: 100%;
          max-width: 450px;
          margin: 0 auto 1.5rem;
        }
      }
    }
  }
}
</style>
