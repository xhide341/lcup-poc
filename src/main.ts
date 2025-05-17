import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";

// motion-v is imported directly in components where needed
// import { motion } from "motion-v";

const app = createApp(App);
app.mount("#app");
