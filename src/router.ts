import { createRouter, createWebHistory } from 'vue-router';

// Child components
import Home from '@/pages/pages-home.vue';
import Kitchens from '@/pages/pages-kitchen.vue';
import Bathrooms from '@/pages/pages-bathroom.vue';
import Newbuilds from '@/pages/pages-newbuild.vue';
import Extensions from '@/pages/pages-extension.vue';
import Refurbishments from '@/pages/pages-refurbishment.vue';
import Contact from '@/pages/pages-contact.vue';
import About from '@/pages/pages-about.vue';
import SignIn from '@/pages/pages-sign-in.vue';
import SignOut from '@/pages/pages-sign-out.vue';

// Routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/kitchens', component: Kitchens },
        { path: '/bathrooms', component: Bathrooms },
        { path: '/newbuilds', component: Newbuilds },
        { path: '/extensions', component: Extensions }, 
        { path: '/refurbishments', component: Refurbishments },
        { path: '/contact', component: Contact },
        { path: '/about', component: About },
        { path: '/signin', component: SignIn },
        { path: '/signout', component: SignOut }
    ]
});

export default router;