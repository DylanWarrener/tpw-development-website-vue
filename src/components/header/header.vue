<template>
    <header id="container__header">
        <navigation-component />
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import Navigation from '@/components/navigation/navigation.vue';

export default defineComponent({
    name: 'header-component',
    components: {
        'navigation-component': Navigation
    }
})
</script>