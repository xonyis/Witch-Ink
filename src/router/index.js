// define routing rules

import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from '../views/GalleryView.vue'
import ContactView from '../views/ContacView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: "/",
            name: 'home',
            component: HomeView,
        },
        {
            path: "/about/",
            name: 'about',
            component: AboutView,
        },
        {
            path: "/gallery/",
            name: 'gallery',
            component: GalleryView,
        },
        {
            path: "/contact/",
            name: 'contact',
            component: ContactView,
        }
    ],
})

export default router;

// IGQVJXXzRSd1dDdUkxVi1nRnc3UjVMeXFOc2pNVXdlSXBxTHJoTlotcGNpTkFzX3RWXzVmMUoxZAER3R1VmQXpkdk94Um1DSU1tRm9VblMwUjg0TzN4emc4dDJqQUJhVlZAzUVRzNkV1QkxWVWdBMWpLVgZDZD