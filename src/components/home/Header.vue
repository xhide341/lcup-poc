<script setup lang="ts">
import lcupLogo from "../../assets/logos/lcup-logo.webp";
import DropdownIcon from "../../assets/icons/DropdownIcon.vue";
import HamburgerIcon from "../../assets/icons/HamburgerIcon.vue";
import CloseIcon from "../../assets/icons/CloseIcon.vue";
import { ref, onMounted, onUnmounted } from "vue";

const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "Mission & Vision", href: "#" },
      { label: "History", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Facilities", href: "#" },
    ],
  },
  {
    label: "Admission",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "Requirements", href: "#" },
      { label: "Application Process", href: "#" },
      { label: "Financial Aid", href: "#" },
      { label: "Scholarships", href: "#" },
    ],
  },
  {
    label: "Services",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "Student Services", href: "#" },
      { label: "Library", href: "#" },
      { label: "Health Services", href: "#" },
      { label: "Career Services", href: "#" },
    ],
  },
  {
    label: "Research",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "Research Publications", href: "#" },
      { label: "Research Centers", href: "#" },
      { label: "Academic Journals", href: "#" },
      { label: "Research Opportunities", href: "#" },
    ],
  },
  {
    label: "Integral Evangelization",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "Community Outreach", href: "#" },
      { label: "Spiritual Formation", href: "#" },
      { label: "Service Learning", href: "#" },
      { label: "Values Integration", href: "#" },
    ],
  },
  {
    label: "Internationalization",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "Exchange Programs", href: "#" },
      { label: "International Partners", href: "#" },
      { label: "Global Initiatives", href: "#" },
      { label: "Study Abroad", href: "#" },
    ],
  },
];

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeDropdown = ref<string | null>(null);

const checkScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const toggleDropdown = (label: string) => {
  if (activeDropdown.value === label) {
    activeDropdown.value = null;
  } else {
    activeDropdown.value = label;
  }
};

// close mobile menu when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const mobileMenu = document.querySelector(".mobile-nav");
  const hamburgerButton = document.querySelector(".hamburger-menu");
  const dropdownIcon = target.closest(".mobile-dropdown-icon");

  if (dropdownIcon) {
    return;
  }

  if (
    mobileMenu &&
    !mobileMenu.contains(target) &&
    hamburgerButton &&
    !hamburgerButton.contains(target) &&
    isMobileMenuOpen.value
  ) {
    isMobileMenuOpen.value = false;
  }

  if (!target.closest(".nav-item") && !target.closest(".mobile-nav-item")) {
    activeDropdown.value = null;
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
  <header :class="{ scrolled: isScrolled }" role="banner" aria-label="site header">
    <div class="logo">
      <img :src="lcupLogo" alt="LCUP Logo" width="60" height="60" role="img" />
      <div class="logo-text-container">
        <span>La Consolacion</span>
        <span>University Philippines</span>
      </div>
    </div>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav" aria-label="main navigation">
      <ul>
        <li
          v-for="item in menuItems"
          :key="item.label"
          class="nav-item"
          :class="{ 'has-dropdown': item.hasDropdown, active: activeDropdown === item.label }"
          @click="item.hasDropdown && toggleDropdown(item.label)"
        >
          <a
            :href="item.href"
            class="nav-link"
            @click="item.hasDropdown && $event.preventDefault()"
            :aria-haspopup="item.hasDropdown ? 'true' : undefined"
            :aria-expanded="
              item.hasDropdown ? (activeDropdown === item.label ? 'true' : 'false') : undefined
            "
            :aria-controls="item.hasDropdown ? `dropdown-${item.label}` : undefined"
            :tabindex="0"
          >
            {{ item.label }}
            <span v-show="item.hasDropdown" class="dropdown-icon-wrapper">
              <DropdownIcon class="dropdown-icon" />
            </span>
          </a>

          <div
            v-show="item.hasDropdown"
            class="dropdown-menu"
            :class="{ show: activeDropdown === item.label }"
            :id="`dropdown-${item.label}`"
            role="menu"
            :aria-label="`${item.label} submenu`"
          >
            <a
              v-for="child in item.children"
              :key="child.label"
              :href="child.href"
              class="dropdown-item"
              role="menuitem"
              tabindex="0"
            >
              {{ child.label }}
            </a>
          </div>
        </li>
      </ul>
    </nav>

    <!-- Hamburger Menu Icon -->
    <div
      class="menu-icon-container hamburger-menu"
      @click="toggleMobileMenu"
      :class="{ 'is-active': isMobileMenuOpen }"
      role="button"
      aria-label="toggle mobile menu"
      tabindex="0"
      :aria-pressed="isMobileMenuOpen ? 'true' : 'false'"
    >
      <HamburgerIcon v-show="!isMobileMenuOpen" />
      <CloseIcon v-show="isMobileMenuOpen" />
    </div>

    <!-- Mobile Navigation -->
    <div
      class="mobile-nav"
      :class="{ 'mobile-nav-open': isMobileMenuOpen }"
      aria-label="mobile navigation"
      role="navigation"
    >
      <ul>
        <li
          v-for="item in menuItems"
          :key="item.label"
          :class="{ 'has-dropdown': item.hasDropdown }"
        >
          <div class="mobile-nav-item">
            <a
              :href="item.href"
              @click.stop="
                item.hasDropdown ? toggleDropdown(item.label) : (isMobileMenuOpen = false)
              "
              :aria-haspopup="item.hasDropdown ? 'true' : undefined"
              :aria-expanded="
                item.hasDropdown ? (activeDropdown === item.label ? 'true' : 'false') : undefined
              "
              :aria-controls="item.hasDropdown ? `mobile-dropdown-${item.label}` : undefined"
              :tabindex="0"
            >
              {{ item.label }}
            </a>
            <div
              v-show="item.hasDropdown"
              class="mobile-dropdown-icon"
              :class="{ rotate: activeDropdown === item.label }"
              @click.stop="toggleDropdown(item.label)"
              role="button"
              aria-label="toggle submenu"
              tabindex="0"
              :aria-pressed="activeDropdown === item.label ? 'true' : 'false'"
            >
              <DropdownIcon />
            </div>
          </div>

          <div
            v-show="item.hasDropdown"
            class="mobile-dropdown"
            :class="{ show: activeDropdown === item.label }"
            :id="`mobile-dropdown-${item.label}`"
            role="menu"
            :aria-label="`${item.label} submenu`"
          >
            <a
              v-for="child in item.children"
              :key="child.label"
              :href="child.href"
              class="mobile-dropdown-item"
              @click="isMobileMenuOpen = false"
              role="menuitem"
              tabindex="0"
            >
              {{ child.label }}
            </a>
          </div>
        </li>
      </ul>
      <button class="student-portal-btn" type="button" aria-label="open student portal">
        Student Portal
      </button>
    </div>

    <button class="desktop-button" type="button" aria-label="open student portal">
      Student Portal
    </button>
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
  height: 75px;
  transition: all 0.3s ease;
  /* important: overflow-x must be 'visible' to allow dropdowns to extend outside the header
   * when set to 'auto' or 'hidden', child elements (like dropdowns) that extend outside 
   * the parent container get clipped regardless of z-index settings */
  overflow-x: visible;
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
  font-weight: 500;
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

    li.nav-item {
      display: flex;
      align-items: center;
      position: relative;

      &.has-dropdown {
        cursor: pointer;

        .nav-link {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .dropdown-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .dropdown-icon {
          width: 100%;
          height: 100%;

          :deep(path) {
            stroke: $primary-color;
          }
        }

        &.active .dropdown-icon-wrapper {
          transform: rotate(180deg);
        }
      }

      a.nav-link {
        text-decoration: none;
        color: black;
        padding: 10px 15px;
        border-radius: 6px;
        font-weight: 500;
        transition: all 0.2s ease;

        &:hover {
          color: $primary-color;
        }
      }

      .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        width: 220px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        padding: 8px 0;
        opacity: 0;
        visibility: hidden;
        transform: translateY(10px);
        transition: all 0.3s ease;
        z-index: 1000;

        &.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          display: block;
          padding: 10px 16px;
          color: #333;
          text-decoration: none;
          transition: all 0.2s ease;
          font-size: 0.95rem;

          &:hover {
            background-color: #f5f5f5;
            color: $primary-color;
          }
        }
      }
    }
  }
}

// menu icon
.menu-icon-container {
  display: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 8px;
  align-self: center;
  z-index: 1001;
  box-sizing: border-box;
  color: $primary-color;
  transition: all 0.3s ease;

  :deep(svg) {
    width: 24px;
    height: 24px;
    color: inherit;
    transition: transform 0.3s ease;
    background-color: transparent;
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
  overflow-x: hidden;

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
    width: 100%;

    li {
      border-bottom: 1px solid #eee;
      width: 100%;

      .mobile-nav-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }

      a {
        text-decoration: none;
        color: #333;
        padding: 15px 0;
        display: block;
        font-weight: 500;
        transition: all 0.2s ease;
        flex: 1;

        &:hover {
          color: $primary-color;
        }
      }

      .mobile-dropdown-icon {
        width: 32px;
        height: 32px;
        min-width: 32px;
        margin-right: 10px;
        cursor: pointer;
        transition: transform 0.3s ease;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        :deep(svg) {
          width: 100%;
          height: 100%;

          path {
            stroke: $primary-color;
          }
        }

        &.rotate {
          transform: rotate(180deg);
        }
      }

      .mobile-dropdown {
        max-height: 0;
        overflow: hidden;
        transition: all 0.3s ease;
        background-color: #f9f9f9;
        border-radius: 0 0 8px 8px;
        opacity: 0;
        transform: translateY(-10px);

        &.show {
          max-height: 1000px;
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-dropdown-item {
          padding: 12px 20px;
          font-size: 0.9rem;
          display: block;
          color: #555;
          text-decoration: none;
          border-top: 1px solid #eee;

          &:hover {
            color: $primary-color;
          }

          &:last-child {
            border-radius: 0 0 8px 8px;
          }
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

  .logo-text-container span:first-child {
    font-size: 1.3rem;
  }

  .logo-text-container span:last-child {
    font-size: 0.9rem;
  }

  .desktop-nav {
    ul li.nav-item {
      a.nav-link {
        font-size: 0.9rem;
        padding: 8px 12px;
      }

      .dropdown-menu .dropdown-item {
        font-size: 0.85rem;
        padding: 8px 12px;
      }
    }
  }

  .desktop-button {
    font-size: 0.9rem;
    height: 36px;
    padding: 0 14px;
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
    background-color: white;
  }
}

@media screen and (max-width: 768px) {
  header {
    padding: 0 15px;
  }

  .mobile-nav {
    max-width: 280px;
  }
}

@media screen and (max-width: 576px) {
  .logo img {
    width: 50px;
    height: 50px;
  }

  .logo-text-container span:first-child {
    font-size: 1.2rem;
  }

  .logo-text-container span:last-child {
    font-size: 0.8rem;
  }

  .mobile-nav {
    max-width: 100%;
  }
}
</style>
