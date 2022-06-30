<template>
  <div id="container">
    <Header></Header>
    <main id="container__content">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  // Components
  import Header from '@/components/header/header.vue';
  import Footer from '@/components/footer/footer.vue';

  export default defineComponent({
    components: {
      Header,
      Footer
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
    border: 1px solid black;
    display: flex;
    height: 100vh;

    #container__content {
      border: 1px solid green;
    }
  }
</style>