<template>
  <div>
    <div id="homeDirectivesContainer">
      <div>
        <h1 id="welcomeMessage" class="homeDirectives">
          Welcome to my Portfolio!
        </h1>
      </div>
      <div>
        <h2 id="linkStatement" class="homeDirectives">
          You'll find links to my projects and Github on the About Me Page.
        </h2>
      </div>
      <div>
        <h2 id="quoteStatement" class="homeDirectives">
          Head to the Contact Me page to request a quote, or to send me a
          message.
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContentComponent",
};
</script>

<style lang="scss" scoped>

    #homeDirectivesContainer {
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-rows: 15vh 15vh 15vh;
    }

    .homeDirectives {
        animation: fadeIn ease 20s;
        -webkit-animation: fadeIn ease 20s;
        -moz-animation: fadeIn ease 20s;
        -o-animation: fadeIn ease 20s;
        -ms-animation: fadeIn ease 20s;
}

</style>