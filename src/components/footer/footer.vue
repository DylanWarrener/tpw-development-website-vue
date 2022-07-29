<template>
    <footer id="footer">
        footer
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'footer-component'
})
</script>

<style scoped>
    #footer {
        border: 2px solid blue;
        flex: 1;
    }
</style>