<template>
    <header id="container__header">
        <navigation-logo />
        <navigation-content />
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import NavigationLogo from '@/components/navigation/logo.vue';
import NavigationContent from '@/components/navigation/navigation.vue';

export default defineComponent({
    name: 'header-component',
    components: {
        'navigation-logo': NavigationLogo,
        'navigation-content': NavigationContent
    }
})
</script>

<style scoped>
    #container__header {
        background-color: grey;
        display: flex;
        position: relative;
        max-height: 10vh;
    }
</style>