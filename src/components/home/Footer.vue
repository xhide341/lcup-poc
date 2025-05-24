<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { motion, useReducedMotion } from "motion-v";
import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap } from "leaflet";

const shouldReduceMotion = useReducedMotion();
let map: LeafletMap | null = null;
const mapInitialized = ref(false);

const coordinates = {
  lat: 14.853188118260162,
  lng: 120.8130786288355,
};

// for fixing leaflet marker icons
function fixLeafletMarker() {
  const L = window.L;
  if (!L || !L.Icon || !L.Icon.Default || !L.Icon.Default.prototype) return;

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });
}

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/LaConsolacionU",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>`,
  },
  {
    name: "Twitter",
    url: "#",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.599-.1-.899a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>`,
  },
  {
    name: "Instagram",
    url: "#",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg>`,
  },
  {
    name: "YouTube",
    url: "#",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path></svg>`,
  },
  {
    name: "GitHub",
    url: "https://github.com/xhide341/lcup-poc",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 
    9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 
    1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 
    0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
    0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 6 0c2.28-1.552 
    3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
    1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.429.372.81 
    1.102.81 2.222v3.293c0 .319.21.694.825.576C20.565 
    22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>`,
  },
];

const initMap = () => {
  if (typeof window === "undefined" || !window.L) return;

  const L = window.L;
  fixLeafletMarker();

  if (!map && !mapInitialized.value) {
    const mapElement = document.getElementById("leaflet-map");

    if (mapElement) {
      map = L.map(mapElement, {
        attributionControl: false,
        zoomControl: false,
      }).setView([coordinates.lat, coordinates.lng], 15);

      L.control
        .zoom({
          position: "topright",
        })
        .addTo(map);

      L.control
        .attribution({
          position: "bottomright",
          prefix:
            '<a href="https://leafletjs.com" style="font-size: 9px; opacity: 0.5;">Leaflet</a>',
        })
        .addAttribution(
          '<a href="https://www.openstreetmap.org/copyright" style="font-size: 9px; opacity: 0.5;">© OSM</a>',
        )
        .addTo(map);

      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a>',
        maxZoom: 19,
      }).addTo(map);

      const popupContent = `
        <div class="map-popup">
          <h4>La Consolacion University Philippines</h4>
          <p>Malolos, Bulacan, Philippines</p>
          <a href="https://www.openstreetmap.org/?mlat=${coordinates.lat}&mlon=${coordinates.lng}" target="_blank">View in OpenStreetMap</a>
        </div>
      `;

      L.marker([coordinates.lat, coordinates.lng]).addTo(map).bindPopup(popupContent).openPopup();

      mapInitialized.value = true;
    }
  }
};

const loadLeaflet = async () => {
  if (typeof window !== "undefined" && !window.L) {
    try {
      await import("leaflet");
      initMap();
    } catch (error) {
      console.error("Failed to load Leaflet:", error);
    }
  } else {
    initMap();
  }
};

onMounted(() => {
  loadLeaflet();
});

onUnmounted(() => {
  if (map) {
    map.remove();
    map = null;
  }
});
</script>

<template>
  <footer class="university-info-section" aria-label="footer section">
    <div class="container">
      <div class="info-content">
        <div class="info-text">
          <motion.h2
            :initial="shouldReduceMotion ? false : { opacity: 0, y: 30 }"
            :whileInView="shouldReduceMotion ? undefined : { opacity: 1, y: 0 }"
            :transition="shouldReduceMotion ? {} : { duration: 0.7 }"
            :inViewOptions="{ once: true }"
            id="footer-heading"
          >
            La Consolacion University Philippines
          </motion.h2>

          <motion.p
            :initial="shouldReduceMotion ? false : { opacity: 0, y: 30 }"
            :whileInView="shouldReduceMotion ? undefined : { opacity: 1, y: 0 }"
            :transition="shouldReduceMotion ? {} : { duration: 0.7, delay: 0.2 }"
            :inViewOptions="{ once: true }"
          >
            La Consolacion University Philippines is a Catholic educational institution committed to
            the total formation of the human person according to the Gospel values of faith, hope,
            and love. Through quality education, we aim to develop competent and compassionate
            professionals who will contribute to nation-building and the global community.
          </motion.p>

          <motion.div
            :initial="shouldReduceMotion ? false : { opacity: 0, y: 20 }"
            :whileInView="shouldReduceMotion ? undefined : { opacity: 1, y: 0 }"
            :transition="shouldReduceMotion ? {} : { duration: 0.6, delay: 0.3 }"
            :inViewOptions="{ once: true }"
            class="disclaimer-section disclaimer-desktop"
            role="contentinfo"
            aria-label="copyright and credits"
          >
            <p>
              © {{ new Date().getFullYear() }} La Consolacion University Philippines. All Rights
              Reserved.
            </p>
            <p class="credits">
              Website by <a href="https://github.com/xhide341/lcup-poc" target="_blank">xhide341</a>
            </p>
          </motion.div>
        </div>

        <div class="info-contact">
          <motion.div
            :initial="shouldReduceMotion ? false : { opacity: 0, y: 30 }"
            :whileInView="shouldReduceMotion ? undefined : { opacity: 1, y: 0 }"
            :transition="shouldReduceMotion ? {} : { duration: 0.8, delay: 0.2 }"
            :inViewOptions="{ once: true }"
            class="map-container"
            role="region"
            aria-label="university location map"
          >
            <div id="leaflet-map" class="map-placeholder">
              <div v-if="!mapInitialized" class="map-text">
                <span>Loading Map...</span>
              </div>
            </div>
          </motion.div>

          <div class="contact-details">
            <motion.div
              :initial="shouldReduceMotion ? false : { opacity: 0, y: 20 }"
              :whileInView="shouldReduceMotion ? undefined : { opacity: 1, y: 0 }"
              :transition="shouldReduceMotion ? {} : { duration: 0.6, delay: 0.3 }"
              :inViewOptions="{ once: true }"
              class="address"
              role="region"
              aria-label="university address"
            >
              <h3>Location</h3>
              <p>
                Valenzuela St., Capitol View Park Subdivision, Bulihan, City of Malolos, Bulacan
                3000, Philippines
              </p>
            </motion.div>

            <motion.div
              :initial="shouldReduceMotion ? false : { opacity: 0, y: 20 }"
              :whileInView="shouldReduceMotion ? undefined : { opacity: 1, y: 0 }"
              :transition="shouldReduceMotion ? {} : { duration: 0.6, delay: 0.4 }"
              :inViewOptions="{ once: true }"
              class="phone"
              role="region"
              aria-label="university contact number"
            >
              <h3>Contact</h3>
              <p>+63 919 002 7151</p>
            </motion.div>

            <motion.div
              :initial="shouldReduceMotion ? false : { opacity: 0, y: 20 }"
              :whileInView="shouldReduceMotion ? undefined : { opacity: 1, y: 0 }"
              :transition="shouldReduceMotion ? {} : { duration: 0.6, delay: 0.5 }"
              :inViewOptions="{ once: true }"
              class="social-links"
              role="region"
              aria-label="social media links"
            >
              <h3>Connect With Us</h3>
              <div class="social-icons">
                <motion.a
                  v-for="(link, index) in socialLinks"
                  :key="link.name"
                  :initial="shouldReduceMotion ? false : { opacity: 0, y: 20 }"
                  :whileInView="shouldReduceMotion ? undefined : { opacity: 1, y: 0 }"
                  :transition="
                    shouldReduceMotion ? {} : { duration: 0.5, delay: 0.6 + index * 0.1 }
                  "
                  :inViewOptions="{ once: true }"
                  :href="link.url"
                  :title="link.name"
                  target="_blank"
                  class="social-icon"
                  v-html="link.icon"
                  :aria-label="link.name"
                  tabindex="0"
                ></motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <!-- Mobile disclaimer section -->
      <motion.div
        :initial="shouldReduceMotion ? false : { opacity: 0, y: 20 }"
        :whileInView="shouldReduceMotion ? undefined : { opacity: 1, y: 0 }"
        :transition="shouldReduceMotion ? {} : { duration: 0.6, delay: 0.5 }"
        :inViewOptions="{ once: true }"
        class="disclaimer-section disclaimer-mobile"
        role="contentinfo"
        aria-label="copyright and credits"
      >
        <p>
          © {{ new Date().getFullYear() }} La Consolacion University Philippines. All Rights
          Reserved.
        </p>
        <p class="credits">
          Website by <a href="https://github.com/xhide341/lcup-poc" target="_blank">xhide341</a>
        </p>
      </motion.div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../../style.scss" as *;
@use "sass:color";

.university-info-section {
  padding: 5rem 2rem;
  background-color: #f5f5f5;
  border-top: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    padding: 3rem 1rem 1rem 1rem;
  }

  @media (max-width: 576px) {
    padding: 2rem 1rem 1rem 1rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    .info-content {
      display: flex;
      flex-wrap: wrap;
      gap: 3rem;

      .info-text {
        flex: 1;
        min-width: 300px;

        h2 {
          text-align: left;
          font-size: $section-font;
          color: $primary-color;
          margin-bottom: 1.5rem;

          @media (max-width: 1024px) {
            font-size: 2rem;
          }

          @media (max-width: 768px) {
            text-align: center;
            font-size: 1.875rem;
          }

          @media (max-width: 576px) {
            font-size: 1.5rem;
          }
        }

        // Main description paragraph
        > p {
          font-size: 1.1rem;
          line-height: 1.6;
          text-align: justify;
          color: #555;
          padding-right: 2.5rem;

          @media (max-width: 1024px) {
            padding-right: 0;
            font-size: 1rem;
          }
          @media (max-width: 576px) {
            font-size: 0.875rem;
          }
        }

        .disclaimer-section {
          &.disclaimer-desktop {
            display: block;
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid #eaeaea;
            text-align: left;

            p {
              font-size: 0.9rem;
              color: #777;
              margin: 0.25rem 0;

              &.credits {
                font-size: 0.85rem;
                color: #999;
                margin-top: 0.5rem;

                a {
                  color: $primary-color;
                  text-decoration: none;
                  font-weight: 500;

                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
            }
            // hide desktop version on mobile
            @media (max-width: 768px) {
              display: none;
            }
          }
        }
      }

      .info-contact {
        flex: 1;
        min-width: 300px;

        @media (max-width: 768px) {
          margin-top: 2rem;
        }

        .map-container {
          margin-bottom: 1.5rem;
          .map-placeholder {
            width: 100%;
            height: 250px;
            background-color: #e9e9e9;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #888;
            font-size: 1.2rem;
            border: 1px solid #ddd;
            overflow: hidden;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

            .map-text {
              font-size: 0.9rem;
              color: #888;
            }
          }
        }

        .contact-details {
          h3 {
            color: $primary-color;
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
          }

          .address,
          .phone {
            margin-bottom: 1.5rem;

            p {
              font-size: 0.95rem;
              line-height: 1.5;
              color: #555;
            }
          }

          .social-links {
            .social-icons {
              display: flex;
              gap: 1rem;
              margin-top: 0.75rem;

              .social-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: $primary-color;
                color: white;
                transition: all 0.2s ease;

                &:hover {
                  transform: translateY(-3px);
                  background-color: color.adjust($primary-color, $lightness: -10%);
                }

                :deep(svg) {
                  width: 20px;
                  height: 20px;
                  fill: currentColor;
                }
              }
            }
          }

          @media (max-width: 768px) {
            text-align: center;
            max-width: 50%;
            margin-left: auto;
            margin-right: auto;

            .social-icons {
              justify-content: center;
            }
          }

          @media (max-width: 576px) {
            max-width: 100%;
          }
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0;

        .info-text,
        .info-contact {
          min-width: 50%;
        }
      }

      @media (max-width: 576px) {
        .info-text,
        .info-contact {
          min-width: 100%;
        }
      }
    }

    .disclaimer-mobile {
      display: none;

      // show on mobile
      @media (max-width: 768px) {
        display: block;
        margin-top: 2.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid #eaeaea;
        text-align: center;

        p {
          font-size: 0.9rem;
          color: #777;
          margin: 0.5rem 0;

          &.credits {
            font-size: 0.85rem;
            color: #999;
            margin-top: 1rem;
          }
        }

        a {
          color: $primary-color;
          text-decoration: none;
          font-weight: 500;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      @media (max-width: 576px) {
        margin-top: 1.5rem;
        padding-top: 1rem;

        p {
          font-size: 0.8rem;
          margin: 0.25rem 0;

          &.credits {
            font-size: 0.75rem;
            margin-top: 0.5rem;
          }
        }
      }
    }
  }
}

// global styles for leaflet components
:global(.map-popup h4) {
  color: $primary-color;
  font-size: 1rem;
  margin: 0 0 0.25rem;
  font-weight: 600;
}

:global(.map-popup p) {
  margin: 0 0 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

:global(.map-popup a) {
  color: $primary-color;
  text-decoration: none;
  font-size: 0.85rem;
  display: inline-block;
  margin-top: 0.5rem;
}

:global(.map-popup a:hover) {
  text-decoration: underline;
}

:global(.leaflet-popup-content-wrapper) {
  border-radius: 8px;
  padding: 0.5rem;
}

:global(.leaflet-popup-tip) {
  background-color: white;
}

:global(.leaflet-control-attribution) {
  background-color: rgba(255, 255, 255, 0.4) !important;
  padding: 2px 4px !important;
  font-size: 8px !important;
  backdrop-filter: blur(2px);
}

:global(.leaflet-control-attribution a) {
  opacity: 0.7;
  transition: opacity 0.3s;
}

:global(.leaflet-control-attribution a:hover) {
  opacity: 1;
}
</style>
