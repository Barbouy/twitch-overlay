import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Page from "@/views/Page.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/page",
        name: "page",
        component: Page
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;