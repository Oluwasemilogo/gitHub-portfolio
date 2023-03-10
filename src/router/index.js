import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ErrorPage from "../views/ErrorPage.vue";
import RepositoriesDetails from "../views/RepositoriesDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/repositories/:name",
    name: "repositoryDetails",
    component: RepositoriesDetails,
    props: true,
  },

  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
