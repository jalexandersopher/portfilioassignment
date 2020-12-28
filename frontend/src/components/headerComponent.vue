<template>
    <div id="headerContainer">
        <div>
            <h1 id="title">
                Alex Sopher
            </h1>
        </div>
        <div>
            <router-link class="headerLinks" to="/">Home</router-link>
        </div>
        <div>
            <router-link class="headerLinks" to="/aboutme">About Me</router-link>
        </div>
        <div>
            <router-link class="headerLinks" to="/contactme">Contact Me</router-link>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent"
    }
</script>

<style lang="scss" scoped>
    

    #headerContainer {
        display: grid;
        grid-template-columns: 35vw 10vw 10vw 10vw 35vw;
        grid-template-rows: 10vh;
        justify-content: center;
        align-items: center;
        justify-items: center;
        background-color: #4d4d4d;
    }

    .headerLinks {
        text-decoration: none;
        color: white;
        font-size: 20px;
    }

    #title {
        color: white;
    }

</style>