<template>
    <nav id="navigation">
        <router-link to="/"></router-link>
        <router-link to="/kitchens"></router-link>
        <router-link to="/bathrooms"></router-link>
        <router-link to="/newbuilds"></router-link>
        <router-link to="/extensions"></router-link>
        <router-link to="/refurbishments"></router-link>
        <router-link to="/contact"></router-link>
        <router-link to="/about"></router-link>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        
    })
</script>

<style scoped>
    #navigation {
        border: 1px solid red;
    }
</style>