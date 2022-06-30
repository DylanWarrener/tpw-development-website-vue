<template>
  <div class="container">
    <p>Test</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App'
  });
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    border: 1px solid red;
    display: flex;
    height: 100vh;

    p {
      border: 1px solid black;
    }
  }
</style>