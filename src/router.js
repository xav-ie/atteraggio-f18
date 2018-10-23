import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/faq",
      name: "FAQ",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/FAQ.vue")
    },
    {
      path: "/map",
      name: "Map",
      component: () => import("./views/Map.vue")
    },
    {
      path: "/resources",
      name: "Resources",
      component: () => import("./views/Resources.vue")
    },
    {
      path: "/schedule",
      name: "Schedule",
      component: () => import("./views/Schedule.vue")
    },
    {
      path: "/workshops",
      name: "Workshops",
      component: () => import("./views/Workshops.vue")
    },
    {
      path: "/prizes",
      name: "Prizes",
      component: () => import("./views/Prizes.vue")
    }
  ]
});
