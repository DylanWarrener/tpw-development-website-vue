<template>
    <div id="container__error">
        Error page
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'error-component'
})
</script>

<style scoped lang="scss">
    #container__error {
        border: 1px solid orange;
    }
</style>