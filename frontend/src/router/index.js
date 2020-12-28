import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/homePage.vue";
import AboutMe from "../views/aboutMe.vue";
import ContactMe from "../views/contactMe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/aboutme",
    name: "AboutMe",
    component: AboutMe
  },
  {
    path: "/contactme",
    name: "ContactMe",
    component: ContactMe
  }
];

const router = new VueRouter({
  routes
});

export default router;
