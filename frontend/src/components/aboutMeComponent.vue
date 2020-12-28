<template>
  <div>
    <div id="aboutMeUpperContainer">
      <div>

      </div>
      <div>
        <a id="gitHubLink" href="https://github.com/jalexandersopher/">GitHub Link</a>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMeComponent",
};
</script>

<style lang="scss" scoped>

    #aboutMeUpperContainer {
        display: grid;
        grid-template-rows: 15vh 10vh 10vh;
    }

    #gitHubLink {
        font-size: 32px;
        color: #2c3e50;
    }

    #gitHubLink:hover {
        opacity: 50%;
    }

</style>