import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import HelloWorld from "./pages/HelloWorld.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/hello-world", name: "helloWorld", component: HelloWorld },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
