<template>
    <div>
        <header-component></header-component>
        <about-me-content></about-me-content>
    </div>
</template>

<script>
import HeaderComponent from "../components/headerComponent.vue";
import AboutMeContent from "../components/aboutMeComponent.vue";
    export default {
        name: "AboutMe",
        components: {
            AboutMeContent,
            HeaderComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>