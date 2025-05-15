<script setup lang="ts">
import npcLogo from "../../assets/logos/npc-logo.webp";
import iso9001Logo from "../../assets/logos/iso9001-logo.webp";
import depedLogo from "../../assets/logos/deped-logo.webp";
import chedLogo from "../../assets/logos/ched-logo.webp";
import pacucoaLogo from "../../assets/logos/pacucoa-logo.webp";
import bagongPilipinasLogo from "../../assets/logos/bagong-pilipinas-logo.webp";

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
}

interface Achievement {
  id: number;
  title: string;
  value: string;
  description: string;
}

const logos = [
  npcLogo,
  iso9001Logo,
  depedLogo,
  chedLogo,
  pacucoaLogo,
  bagongPilipinasLogo,
];

const announcements: Announcement[] = [
  {
    id: 1,
    title: "Enrollment Now Open",
    content: "Registration for the new semester starts on June 15",
    date: "May 28, 2025",
  },
  {
    id: 2,
    title: "Campus Renovation",
    content: "Library will be closed on weekends due to renovations",
    date: "May 25, 2025",
  },
  {
    id: 3,
    title: "New Online Courses",
    content: "Explore our expanded digital learning options",
    date: "May 20, 2025",
  },
];

const achievements: Achievement[] = [
  {
    id: 1,
    title: "1st Placers",
    value: "127+",
    description: "Board exam top performers",
  },
  {
    id: 2,
    title: "Top Notchers",
    value: "93%",
    description: "Above average passing rate",
  },
  {
    id: 3,
    title: "Local Ranking",
    value: "#3",
    description: "Among regional universities",
  },
  {
    id: 4,
    title: "Student Grants",
    value: "850+",
    description: "Given for academic merit",
  },
];
</script>

<template>
  <main>
    <div class="hero-banner">
      <div class="hero-content">
        <span>Proof of Concept</span>
        <h1>Transforming Lives Through Education</h1>
        <p>
          Empowering students with values, knowledge, and skills for a better
          future
        </p>
        <div class="cta-buttons">
          <button class="primary">Enroll Now</button>
          <button class="secondary">Enter Student Portal</button>
        </div>
      </div>
      <div class="announcements-glass">
        <h3>Latest Announcements</h3>
        <div class="announcements-list">
          <div
            v-for="announcement in announcements"
            :key="announcement.id"
            class="announcement-card"
          >
            <div class="announcement-date">{{ announcement.date }}</div>
            <h4>{{ announcement.title }}</h4>
            <p>{{ announcement.content }}</p>
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
          </div>
        </div>
      </div>
      <div class="partnership-logos">
        <div class="logos-row">
          <img
            v-for="(logo, index) in logos"
            :key="index"
            :src="logo"
            alt="Partner Logo"
            width="75"
            height="75"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <div class="floating-card">
      <div class="achievements-wrapper">
        <div
          v-for="achievement in achievements"
          :key="achievement.id"
          class="achievement-card"
        >
          <div class="achievement-value">{{ achievement.value }}</div>
          <h4>{{ achievement.title }}</h4>
          <p>{{ achievement.description }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../../style.scss" as *;

// Apply default variables (large desktop)
@include hero-large-desktop;

main {
  position: relative;
  flex: 1;
  max-width: 100dvw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
}

.hero-banner {
  position: relative;
  width: 100%;
  min-height: 90dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  background: $primary-color;
  color: white;
  background-image:
    linear-gradient(rgba($primary-color, 0.85), rgba($primary-color, 0.75)),
    url("../../assets/university-example.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: $radius;
  overflow: hidden;
  @include hero-mask;

  .hero-content {
    max-width: 800px;
    text-align: left;
    padding-left: 10%;

    span {
      padding: 6px 10px;
      border-width: 1px;
      border-style: solid;
      border-color: white;
      border-radius: 24px;
      font-size: 0.75rem;
      display: inline-block;
    }

    h1 {
      font-size: 4rem;
      margin: 0 0 1rem 0;
    }

    p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;

      button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;

        &.primary {
          background-color: #ffc107;
          color: #333;
          border: none;

          &:hover {
            background-color: #ffd54f;
          }
        }

        &.secondary {
          background-color: transparent;
          color: white;
          border: 2px solid white;

          &:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
        }
      }
    }
  }

  .announcements-glass {
    position: absolute;
    top: 35%;
    right: 8rem;
    transform: translateY(-50%);
    width: 450px;
    max-height: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 16px;
    padding: 1.5rem 1.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 1.5rem;
      position: relative;
      margin: 0 0 1.5rem 0;

      &:after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 40px;
        height: 3px;
        background-color: #ffc107;
      }
    }

    .announcements-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      cursor: pointer;
      overflow-y: auto;
      max-height: calc(100% - 3rem);

      .announcement-card {
        padding: 0.5rem 0.75rem;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
        position: relative;

        &:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.15);
        }

        .arrow-icon {
          position: absolute;
          top: 12px;
          right: 12px;
          opacity: 0.7;
          transition: all 0.2s ease;
        }

        &:hover .arrow-icon {
          opacity: 1;
        }

        .announcement-date {
          font-size: 0.8rem;
          opacity: 0.8;
          margin-bottom: 0.125rem;
        }

        h4 {
          font-size: 1.1rem;
          margin: 0 0 0.25rem 0;
        }

        p {
          font-size: 0.9rem;
          margin: 0;
          opacity: 0.9;
        }
      }
    }
  }

  .partnership-logos {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 2;

    .logos-row {
      display: flex;
      align-items: center;
      gap: 1rem;

      img {
        width: 75px;
        height: 75px;
        object-fit: contain;
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
}

.floating-card {
  position: absolute;
  bottom: 0;
  right: 0;
  width: calc(#{$horizontal-offset} + #{$inner-dimension});
  height: calc(#{$inner-curve-size} + #{$vertical-offset} + #{$radius});
  border-top-left-radius: $inner-curve-size;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  .achievements-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    width: 100%;
    height: 100%;
    padding-right: 2rem;

    .achievement-card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      text-align: center;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      width: 200px;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
      }

      .achievement-value {
        font-size: 2.5rem;
        font-weight: bold;
        color: $primary-color;
        margin-bottom: 0.5rem;
      }

      h4 {
        font-size: 1rem;
        margin: 0 0 0.5rem 0;
        color: #333;
      }

      p {
        font-size: 0.8rem;
        margin: 0;
        color: #666;
      }
    }
  }
}

@media (max-width: 1440px) {
  @include hero-desktop;

  .hero-banner {
    @include hero-mask;

    .hero-content {
      span {
        display: inline-block;
      }

      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 1rem;
      }
    }

    .announcements-glass {
      padding: 1rem;
      top: 30%;
      right: 6rem;
      width: 400px;

      .announcements-list {
        max-height: calc(100% - 2.75rem);
      }
    }

    .partnership-logos {
      bottom: 1.5rem;
      left: 1.5rem;

      .logos-row {
        img {
          width: 64px;
          height: 64px;
        }
      }
    }
  }

  .floating-card {
    width: calc(#{$horizontal-offset} + #{$inner-dimension});
    height: calc(#{$inner-curve-size} + #{$vertical-offset} + #{$radius});
    border-top-left-radius: $inner-curve-size;

    .achievements-wrapper {
      gap: 1rem;
      padding-right: 2.125rem;

      .achievement-card {
        width: 170px;
        padding: 1.2rem;

        .achievement-value {
          font-size: 2.2rem;
        }

        h4 {
          font-size: 0.9rem;
        }

        p {
          font-size: 0.75rem;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  @include hero-tablet;

  .hero-banner {
    min-height: 80dvh;
    mask: none;
    border-radius: $radius;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .hero-content {
      max-width: 700px;
      text-align: center;
      padding: 0 2rem;
      margin: 0 auto;
      z-index: 2;

      span {
        margin-bottom: 0.75rem;
        display: inline-block;
      }

      h1 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1rem;
      }

      .cta-buttons {
        justify-content: center;
      }
    }

    .partnership-logos {
      position: absolute;
      top: 2rem;
      right: 2rem;
      bottom: auto;
      left: auto;

      .logos-row {
        img {
          width: 42px;
          height: 42px;
        }
      }
    }

    .announcements-glass {
      display: none;
    }
  }

  .floating-card {
    position: relative;
    width: 100%;
    height: auto;
    margin-top: -6rem;
    border-radius: 0;
    padding: 2rem 0;
    border-top-left-radius: 0;
    z-index: 3;

    .achievements-wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      padding: 0 2rem;
      flex-wrap: nowrap;
      justify-content: center;

      .achievement-card {
        width: 100%;
        margin-bottom: 0;
        padding: 1rem;

        .achievement-value {
          font-size: 1.8rem;
        }

        h4 {
          font-size: 0.8rem;
        }

        p {
          font-size: 0.75rem;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .hero-banner {
    mask: none;
    border-radius: $radius;
    min-height: 80dvh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 12rem;

    .hero-content {
      padding: 0 1.5rem;
      text-align: center;
      max-width: 80%;
      margin: 0 auto;

      span {
        margin-bottom: 0.6rem;
        display: inline-block;
      }

      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 0.9rem;
      }

      .cta-buttons {
        justify-content: center;
        flex-direction: row;
        align-items: center;
        gap: 0.75rem;

        button {
          width: 100%;
          padding: 0.6rem 1.2rem;
        }
      }
    }

    .partnership-logos {
      position: absolute;
      top: 1.125rem;
      right: 1.125rem;
      margin: 0;
      align-items: flex-end;

      .logos-row {
        flex-wrap: nowrap;
        justify-content: flex-end;
        overflow-x: visible;
        padding-bottom: 0.5rem;

        img {
          width: 42px;
          height: 42px;
          min-width: 42px;
        }
      }
    }

    .announcements-glass {
      display: none;
    }
  }

  .floating-card {
    position: relative;
    width: 100%;
    height: auto;
    margin-top: -6.5rem;
    border-radius: 0;
    padding: 1.5rem 0;
    z-index: 3;

    .achievements-wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      padding: 0 1rem;
      justify-content: center;

      .achievement-card {
        width: 100%;
        padding: 1rem;
        margin: 0;

        .achievement-value {
          font-size: 1.6rem;
        }

        h4 {
          font-size: 0.9rem;
        }

        p {
          font-size: 0.8rem;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .hero-banner {
    min-height: 90dvh;
    padding-top: 8rem;
    align-items: flex-start;
    justify-content: flex-start;

    .hero-content {
      margin-top: 0;
      padding-top: 0;

      span {
        margin-bottom: 0.5rem;
        display: inline-block;
      }

      h1 {
        font-size: 1.75rem;
      }

      p {
        font-size: 0.85rem;
      }

      .cta-buttons {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;

        button {
          width: 100%;
          padding: 0.6rem 1.2rem;
        }
      }
    }

    .partnership-logos {
      position: absolute;
      top: 1rem;
      right: auto;
      left: 50%;
      transform: translateX(-50%);
      margin: 0;
      align-items: center;

      .logos-row {
        flex-wrap: nowrap;
        justify-content: center;
        gap: 0.5rem;
        max-width: 180px;

        img {
          width: 38px;
          height: 38px;
          min-width: 38px;
        }
      }
    }
  }

  .floating-card {
    margin-top: -18rem;
    padding-top: 2rem;

    .achievements-wrapper {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      padding: 0 1.5rem;

      .achievement-card {
        padding: 0.8rem;

        .achievement-value {
          font-size: 1.4rem;
        }

        h4 {
          font-size: 0.8rem;
        }

        p {
          font-size: 0.7rem;
        }
      }
    }
  }
}
</style>
