// Require imports
import { createApp } from 'vue';
import { 
    createRouter, 
    createWebHistory 
} from 'vue-router';

// Parent component
import App from './App.vue';

// Child components
import Home from '@/pages/home.vue';
import Kitchens from '@/pages/kitchen.vue';
import Bathrooms from '@/pages/bathroom.vue';
import Newbuilds from '@/pages/newbuild.vue';
import Extensions from '@/pages/extension.vue';
import Refurbishments from '@/pages/refurbishment.vue';
import Contact from '@/pages/contact.vue';
import About from '@/pages/about.vue';

// Required client routes
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
        { path: '/about', component: About }
    ]
});

// Create the app
const app = createApp(App);

// Use vue router
app.use(router);

// Mount the app
app.mount('#app');
