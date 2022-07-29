// Required imports
import { createApp } from 'vue';

// Stores
import store from '@/store';

// Routes
import router from '@/router';

// Parent component
import App from './App.vue';

const app = createApp(App);  // Create the app

app.use(store);              // Use vuex store
app.use(router);             // Use vue router

app.mount('#app');           // Mount the app