import Feed from "../views/Feed.vue";
import Upload from "../views/Upload.vue";
import About from "../views/About.vue";
import MapCard from "../views/MapCard.vue";

export const routes = [
  // {
  //   path: "*",
  //   name: "ஊட்டம்",
  //   component: () =>
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.

  //     import(/* webpackChunkName: "about" */ "../views/Feed.vue"),
  // },
  // {
  //   path: "/",
  //   name: "முகப்பு",
  //   component: AppView,
  // },
  // {
  //   path: "/login",
  //   name: "உள்நுழைவு பக்கம்",
  //   component: LandingPage,
  // },
  {
    path: "/feed",
    name: "ஊட்டம்",
    component: Feed,
  },
  {
    path: "/upload",
    name: "பதிவேற்றம்",
    component: Upload,
  },
  {
    path: "/about",
    name: "இச்சேவைப்பற்றி",
    component: About,
  },
  {
    path: "/map",
    name: "வரைபடம்",
    component: MapCard,
  },
];
