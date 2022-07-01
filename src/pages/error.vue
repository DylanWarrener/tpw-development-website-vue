<template>
    <div id="container__error">
        Error page
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'error-component',
    components: {

    }
})
</script>

<style scoped>
    #container__error {
        border: 1px solid orange;
    }
</style>