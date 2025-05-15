<script setup lang="ts">
import lcupLogo from "../../assets/logos/lcup-logo.webp";
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const checkScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Close mobile menu when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const mobileMenu = document.querySelector(".mobile-nav");
  const hamburgerButton = document.querySelector(".hamburger-menu");

  if (
    mobileMenu &&
    !mobileMenu.contains(target) &&
    hamburgerButton &&
    !hamburgerButton.contains(target) &&
    isMobileMenuOpen.value
  ) {
    isMobileMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  document.addEventListener("click", handleClickOutside);
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="logo">
      <img :src="lcupLogo" alt="LCUP Logo" width="60" height="60" />
      <div class="logo-text-container">
        <span>La Consolacion</span>
        <span>University Philippines</span>
      </div>
    </div>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Admission</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Research</a></li>
        <li><a href="#">Integral Evangelization</a></li>
        <li><a href="#">Internationalization</a></li>
      </ul>
    </nav>

    <!-- Hamburger Menu Icon -->
    <div
      class="menu-icon-container"
      @click="toggleMobileMenu"
      :class="{ 'is-active': isMobileMenuOpen }"
    >
      <svg
        v-if="!isMobileMenuOpen"
        class="menu-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 17H21M3 12H21M3 7H21"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        v-else
        class="menu-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" :class="{ 'mobile-nav-open': isMobileMenuOpen }">
      <ul>
        <li><a href="#" @click="isMobileMenuOpen = false">Home</a></li>
        <li><a href="#" @click="isMobileMenuOpen = false">About</a></li>
        <li><a href="#" @click="isMobileMenuOpen = false">Admission</a></li>
        <li><a href="#" @click="isMobileMenuOpen = false">Services</a></li>
        <li><a href="#" @click="isMobileMenuOpen = false">Research</a></li>
        <li>
          <a href="#" @click="isMobileMenuOpen = false"
            >Integral Evangelization</a
          >
        </li>
        <li>
          <a href="#" @click="isMobileMenuOpen = false">Internationalization</a>
        </li>
      </ul>
      <button class="student-portal-btn">Student Portal</button>
    </div>

    <button class="desktop-button">Student Portal</button>
  </header>
</template>

<style lang="scss" scoped>
@use "../../style.scss" as *;
@use "sass:color";

header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0px 20px;
  box-sizing: border-box;
  width: 100%;
  gap: 10px;
  color: $primary-color;
  overflow-x: auto;
  height: 75px;
  transition: all 0.3s ease;
}

header.scrolled {
  padding: 5px 20px;
  height: 65px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.logo {
  display: flex;
  gap: 10px;
  transition: all 0.3s ease;
  align-items: center;
}

.logo img {
  width: 60px;
  height: 60px;
  transition: all 0.3s ease;
}

header.scrolled .logo img {
  width: 45px;
  height: 45px;
}

.logo-text-container {
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;
  letter-spacing: 0.0125em;
  height: 100%;
  line-height: 1.2;
  transition: all 0.3s ease;
}

.logo-text-container span:first-child {
  font-size: 1.5rem;
  font-weight: bold;
  transition: font-size 0.3s ease;
}

.logo-text-container span:last-child {
  font-size: 1rem;
  transition: font-size 0.3s ease;
}

header.scrolled .logo-text-container span:first-child {
  font-size: 1.3em;
}

header.scrolled .logo-text-container span:last-child {
  font-size: 0.8em;
}

// desktop navigation
.desktop-nav {
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2rem;
    transition: all 0.3s ease;

    li {
      a {
        text-decoration: none;
        color: black;
        padding: 10px 15px;
        border-radius: 6px;
        font-weight: 500;
      }
    }
  }
}

// menu icon
.menu-icon-container {
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px;
  align-self: center;
  z-index: 1001;
  box-sizing: border-box;
  .menu-icon {
    width: 24px;
    height: 24px;
    color: $primary-color;
    transition: transform 0.3s ease;
  }
}

// mobile navigation
.mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  max-width: 300px;
  height: 100vh;
  background: white;
  padding: 80px 20px 20px;
  transition: all 0.3s ease;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: auto;

  &.mobile-nav-open {
    right: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0;

    li {
      border-bottom: 1px solid #eee;

      a {
        text-decoration: none;
        color: #333;
        padding: 15px 0;
        display: block;
        font-weight: 500;
        transition: all 0.2s ease;

        &:hover {
          color: $primary-color;
          padding-left: 5px;
        }
      }
    }
  }

  .student-portal-btn {
    margin-top: 20px;
    width: 100%;
    background-color: $primary-color;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
  }
}

header.scrolled .desktop-nav ul {
  gap: 1.5rem;
}

.desktop-button {
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  margin: 0;
  background-color: $primary-color;
  height: 40px;
  padding: 0 16px;
  max-height: 40px;
  border: 0;
  border-radius: 4px;
  transition: all 0.3s ease;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  text-align: center;
  cursor: pointer;
}

header.scrolled .desktop-button {
  font-size: 0.9em;
}

@media screen and (max-width: 1440px) {
  .desktop-nav ul {
    gap: 1rem;
  }

  header.scrolled .desktop-nav ul {
    gap: 0.8rem;
  }
}

@media screen and (max-width: 1024px) {
  .desktop-nav {
    display: none;
  }

  .desktop-button {
    display: none;
  }

  .menu-icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header {
    justify-content: space-between;
  }
}
</style>
