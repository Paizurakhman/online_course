import {createRouter, createWebHistory} from "vue-router";
import {loadLayoutMiddleware} from "@/router/loadLayout.middleware.js";
import {AppLayoutsEnum} from "@/layouts/layouts.types.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/MainView.vue")
        },
        {
            path: "/lessons",
            name: "lessons",
            component: () => import("@/views/LessonsView.vue")
        },
        {
            path: "/lessons/:id",
            name: "lessons-id",
            component: () => import("@/views/LessonDetails.vue"),
            meta:{
                layout: AppLayoutsEnum.empty
            },
            children: [{
                path: ":slug",
                name: "lessons-detail",
                component: () => import("@/components/pages/LessonSlug.vue"),
            }]
        },
        {
            path: "/about-us",
            name: "about-us",
            component: () => import("@/views/AboutView.vue")
        },
        {
            path: "/contact-us",
            name: "contact-us",
            component: () => import("@/views/ContactView.vue")
        },

    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        if (savedPosition) {
            return savedPosition
        }
        return { top: 0 }
    }
})

router.beforeEach(loadLayoutMiddleware)

export default router