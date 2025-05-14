<script setup lang="ts">
import lcupLogo from "../../assets/logos/lcup-logo.webp";
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const checkScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
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
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Admission</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Research</a></li>
        <li><a href="#">Integral Evangelization</a></li>
        <li><a href="#">Internalization</a></li>
      </ul>
    </nav>
    <button>Student Portal</button>
  </header>
</template>

<style lang="scss" scoped>
@use "../../style.scss" as *;

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

/* Styles for when header is scrolled */
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

nav {
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

header.scrolled nav ul {
  gap: 1.5rem;
}

button {
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 0;
  background-color: $primary-color;
  height: auto;
  max-height: 50px;
  transition: all 0.3s ease;
}

header.scrolled button {
  padding: 0.4em 1em;
  font-size: 0.9em;
}

@media screen and (max-width: 768px) {
  nav ul {
    gap: 1rem;
  }

  header.scrolled nav ul {
    gap: 0.8rem;
  }
}
</style>
