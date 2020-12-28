<template>
    <div>
        <header-component></header-component>
        <home-content-component></home-content-component>
    </div>
</template>

<script>
import HeaderComponent from "../components/headerComponent.vue";
import HomeContentComponent from "../components/homeComponent.vue";
    export default {
        name: "HomePage",
        components: {
            HeaderComponent,
            HomeContentComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>