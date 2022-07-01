<template>
    <nav id="container__navigation">
        <router-link to="/">Home</router-link>
        <router-link to="/kitchens">Kitchens</router-link>
        <router-link to="/bathrooms">Bathrooms</router-link>
        <router-link to="/newbuilds">Newbuilds</router-link>
        <router-link to="/extensions">Extensions</router-link>
        <router-link to="/refurbishments">Refurbishments</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/about">About</router-link>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
         name: 'navigation-component',
    })
</script>

<style scoped>
    #container__navigation {
        border: 1px solid red;
    }
</style>