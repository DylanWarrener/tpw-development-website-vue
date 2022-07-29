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

  // Textual en-gb.json data
  import engbTextualData from '@/data/en-gb.json';

  // Components
  import Header from '@/components/header/header.vue';
  import Footer from '@/components/footer/footer.vue';

  export default defineComponent({
    name: 'App',
    components: {
      'header-component': Header,
      'footer-component': Footer
    },
    created() {
      this.$store.commit('setTextualDataInitial', engbTextualData); // Set the database textual data
      this.$store.commit('setTextualData', engbTextualData);        // Set the local textual data
    }
  });
</script>

<style lang="scss">
  @use "@/styles/defaults";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: defaults.$html;
    font-family: defaults.$font-family;
  }

  body {
    font-size: defaults.$font-size-normal;
  }

  h1 {
    font-size: defaults.$font-size-heading-1;
  }

  h2 {
    font-size: defaults.$font-size-heading-2;
  }

  h3 {
    font-size: defaults.$font-size-heading-3;
  }

  h4 {
    font-size: defaults.$font-size-heading-4;
  }

  h5 {
    font-size: defaults.$font-size-heading-5;
    font-variant: small-caps;
  }

  h6 {
    font-size: defaults.$font-size-heading-6;
    font-variant: small-caps;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  #container {
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    height: 100vh;

    #container__content {
      border: 2px solid black;
      flex: 8;
    }
  }
</style>