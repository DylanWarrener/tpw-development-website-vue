<template>
    <div id="home">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Paragraph</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'home-component'
})
</script>

<style scoped lang="scss">
    #home {
        border: 2px solid purple;
        display: flex;
        flex-direction: column;
        height: 100%;

        
    }
</style>