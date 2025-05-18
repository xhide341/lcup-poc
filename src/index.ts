import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import AboutPage from "./views/AboutPage.vue";
import MissionVision from "./components/about/MissionVision.vue";
import History from "./components/about/History.vue";
import Leadership from "./components/about/Leadership.vue";
import Facilities from "./components/about/Facilities.vue";

const routes = [
  { path: "/", component: HomePage },
  {
    path: "/about",
    redirect: "/about/mission-vision",
    component: AboutPage,
    children: [
      { path: "mission-vision", component: MissionVision },
      { path: "history", component: History },
      { path: "leadership", component: Leadership },
      { path: "facilities", component: Facilities },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
