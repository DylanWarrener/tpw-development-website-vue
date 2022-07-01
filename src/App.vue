<template>
  <div id="container">
    <header-component />
    <main id="container__content">
      <router-view></router-view>
    </main>
    <footer-component />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  // Components
  import Header from '@/components/header/header.vue';
  import Footer from '@/components/footer/footer.vue';

  export default defineComponent({
    name: 'App',
    components: {
      'header-component': Header,
      'footer-component': Footer
    }
  });
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #container {
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    height: 100vh;

    #container__content {
      border: 1px solid green;
    }
  }
</style>