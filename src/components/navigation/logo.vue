<template>
    <div id="container__logo">
        <img id="logo" src="@/assets/static/svg/logo.svg" alt="logo" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'logo-component'
})
</script>

<style scoped lang="scss">
    #container__logo {
        border: 2px solid orange;
        flex: 1;

        #logo {
            border: 1px solid red;
            width: 100%;
            height: 100%;
        }
    }
</style>