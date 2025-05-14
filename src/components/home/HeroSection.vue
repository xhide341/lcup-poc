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
    description: "Passing rate above national average",
  },
  {
    id: 3,
    title: "Local Ranking",
    value: "#3",
    description: "Among regional universities",
  },
  {
    id: 4,
    title: "Scholarship Grants",
    value: "850+",
    description: "Awarded to students for academic excellence",
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
        <p>In partnership with</p>
        <div class="logos-row">
          <img
            v-for="(logo, index) in logos"
            :key="index"
            :src="logo"
            alt="Partner Logo"
            width="75"
            height="75"
            loading="eager"
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

// for cut-out
$radius: 32px;
$inner-curve-size: 20px;
$horizontal-offset: 56em;
$vertical-offset: 12em;
// values for mask
$mask-dimension: 2 * $radius;
$inner-dimension: $inner-curve-size + $radius;

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

  mask:
    calc(100% - #{$inner-dimension} - #{$horizontal-offset})
      100% /#{$mask-dimension} #{$mask-dimension}
      radial-gradient(#000 70%, #0000 72%),
    100%
      calc(100% - #{$inner-dimension} - #{$vertical-offset}) /#{$mask-dimension}
      #{$mask-dimension} radial-gradient(#000 70%, #0000 72%),
    radial-gradient(
        #{$inner-curve-size} at 100% 100%,
        #0000 100%,
        #000 calc(100% + 1px)
      )
      calc(-1 *#{$radius} - #{$horizontal-offset})
      calc(-1 *#{$radius} - #{$vertical-offset}),
    conic-gradient(
        from 90deg at calc(100% - #{$radius}) calc(100% - #{$radius}),
        #0000 25%,
        #000 0
      )
      calc(-1 *#{$inner-dimension} - #{$horizontal-offset}) 0,
    conic-gradient(
        from 90deg at calc(100% - #{$radius}) calc(100% - #{$radius}),
        #0000 25%,
        #000 0
      )
      0 calc(-1 *#{$inner-dimension} - #{$vertical-offset});
  mask-repeat: no-repeat;
}

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
  }

  h1 {
    font-size: 4rem;
    margin: 0 0 1rem 0;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
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

.floating-card {
  position: absolute;
  bottom: 0;
  right: 0;
  width: calc(#{$horizontal-offset} + #{$inner-dimension});
  height: calc(#{$inner-curve-size} + #{$vertical-offset} + #{$radius});
  margin-right: 1em;
  border-top-left-radius: $inner-curve-size;
  display: flex;
  align-items: center;
  justify-content: center;

  .achievements-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    width: 100%;
    height: 100%;
    padding-right: 1rem;

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

.announcements-glass {
  position: absolute;
  top: 35%;
  right: 8rem;
  transform: translateY(-50%);
  width: 450px;
  max-height: 50%;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;

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
  }

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

.partnership-logos {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-size: 0.9rem;
    margin: 0;
    opacity: 0.8;
    font-weight: 500;
  }

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

@media (max-width: 768px) {
  .hero-content {
    padding-left: 5%;
    padding-right: 5%;
  }

  .announcements-glass {
    position: relative;
    top: auto;
    right: auto;
    transform: none;
    width: 90%;
    max-height: none;
  }

  .floating-card {
    position: relative;
    width: 100%;
    height: auto;
    margin: 0;
    border-radius: 0;
    padding: 2rem 0;

    .achievements-wrapper {
      flex-direction: column;
      padding: 0;
      gap: 1rem;

      .achievement-card {
        width: 80%;
      }
    }
  }

  .partnership-logos {
    position: relative;
    bottom: auto;
    left: auto;
    margin-top: 2rem;
    align-items: center;

    .logos-row {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>
