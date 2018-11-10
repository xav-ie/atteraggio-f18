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

      component: () => import("./views/FAQ.vue")
    },
    {
      path: "/map",
      name: "Map",
      component: () => import("./views/Map.vue")
    },
    // {
    //   path: "/resources",
    //   name: "Resources",
    //   component: () => import("./views/Resources.vue")
    // },
    {
      path: "/schedule",
      name: "SchedulePage",
      component: () => import("./views/SchedulePage.vue")
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
