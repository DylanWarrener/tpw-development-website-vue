<template>
    <nav id="navigation">
        <ul id="navigation__ul">
            <li class="navigation__li">
                <router-link class="navigation__a" :to="homeLink">{{ btnTextHome }}</router-link>
            </li>
            <li class="navigation__li">
                <router-link class="navigation__a" :to="kitchenLink">{{ btnTextKitchen }}</router-link>
            </li>
            <li class="navigation__li">
                <router-link class="navigation__a" :to="bathroomLink">{{ btnTextBathroom }}</router-link>
            </li>
            <li class="navigation__li">
                <router-link class="navigation__a" :to="newbuildLink">{{ btnTextNewbuild }}</router-link>
            </li>
            <li class="navigation__li">
                <router-link class="navigation__a" :to="extensionLink">{{ btnTextExtension }}</router-link>
            </li>
            <li class="navigation__li">
                <router-link class="navigation__a" :to="refurbishmentLink">{{ btnTextRefurbishment }}</router-link>
            </li>
            <li class="navigation__li">
                <router-link class="navigation__a" :to="contactLink">{{ btnTextContact }}</router-link>
            </li>
            <li class="navigation__li">
                <router-link class="navigation__a" :to="aboutLink">{{ btnTextAbout }}</router-link>
            </li>
            <li class="navigation__li">
                <router-link class="navigation__a" :to="signinLink">{{ btnTextSignin }}</router-link>
            </li>
            <li class="navigation__li">
                <router-link class="navigation__a" :to="signoutLink">{{ btnTextSignout }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
         name: 'navigation-component',
         computed: {
            // Links
            homeLink(): string { return this.$store.getters.getTextualData.header.navigation.links.home; },
            kitchenLink(): string { return this.$store.getters.getTextualData.header.navigation.links.kitchen; },
            bathroomLink(): string { return this.$store.getters.getTextualData.header.navigation.links.bathroom; },
            newbuildLink(): string { return this.$store.getters.getTextualData.header.navigation.links.newbuild; },
            extensionLink(): string { return this.$store.getters.getTextualData.header.navigation.links.extension; },
            refurbishmentLink(): string { return this.$store.getters.getTextualData.header.navigation.links.refurbishment; },
            contactLink(): string { return this.$store.getters.getTextualData.header.navigation.links.contact; },
            aboutLink(): string { return this.$store.getters.getTextualData.header.navigation.links.about; },
            signinLink(): string { return this.$store.getters.getTextualData.header.navigation.links.signin; },
            signoutLink(): string { return this.$store.getters.getTextualData.header.navigation.links.signout; },
            
            // Button text
            btnTextHome(): string { return this.$store.getters.getTextualData.header.navigation.text.buttons.home; },
            btnTextKitchen(): string { return this.$store.getters.getTextualData.header.navigation.text.buttons.kitchen; },
            btnTextBathroom(): string { return this.$store.getters.getTextualData.header.navigation.text.buttons.bathroom; },
            btnTextNewbuild(): string { return this.$store.getters.getTextualData.header.navigation.text.buttons.newbuild; },
            btnTextExtension(): string { return this.$store.getters.getTextualData.header.navigation.text.buttons.extension; },
            btnTextRefurbishment(): string { return this.$store.getters.getTextualData.header.navigation.text.buttons.refurbishment; },
            btnTextContact(): string { return this.$store.getters.getTextualData.header.navigation.text.buttons.contact; },
            btnTextAbout(): string { return this.$store.getters.getTextualData.header.navigation.text.buttons.about; },
            btnTextSignin(): string { return this.$store.getters.getTextualData.header.navigation.text.buttons.signin; },
            btnTextSignout(): string { return this.$store.getters.getTextualData.header.navigation.text.buttons.signout; }
         }
    })
</script>

<style scoped lang="scss">
    #navigation {
        border: 2px solid blue;
        flex: 6;

        #navigation__ul {
            border: 2px solid red;
            height: 100%;
            display: flex;
            align-content: center;
            justify-content: space-evenly;

            .navigation__li {
                border: 1px solid orange;
                align-self: center;

                .navigation__a {
                    border: 1px solid blue;
                    text-transform: uppercase;
                }
            }
        }
    }
</style>