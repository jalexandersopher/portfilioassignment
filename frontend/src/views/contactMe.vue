<template>
    <div>
        <header-component></header-component>
        <contact-me-component></contact-me-component>
    </div>
</template>

<script>
import HeaderComponent from "../components/headerComponent.vue";
import ContactMeComponent from "../components/contactMeComponent.vue";
    export default {
        name: "ContactMe",
        components: {
            HeaderComponent,
            ContactMeComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>