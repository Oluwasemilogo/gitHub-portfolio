import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ErrorPage from "../views/ErrorPage.vue";
import RepositoriesDetails from "../views/RepositoriesDetails.vue";
import ReposComponent from "../views/ReposComponent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/",
    name: ReposComponent,
    component: ReposComponent,
  },

  {
    path: "/repositories:id",
    name: "repositories",
    component: RepositoriesDetails,
    props: true,
  },

  {
    path: "/:catchAll(.*)",
    name: "error",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
