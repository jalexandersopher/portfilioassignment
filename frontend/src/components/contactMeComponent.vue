<template>
  <div>
    <div id="emailFormContainer">
      <div>
        <h1>Request a quote or send me a message!</h1>
      </div>
      <div>
        <form
          action="mailto:someone@example.com"
          method="post"
          enctype="text/plain"
        >
          Name:<br />
          <input type="text" name="name" /><br />
          Email:<br />
          <input type="text" name="mail" /><br />
          Content:<br />
          <input type="text" name="comment" size="50" /><br /><br />
          <input type="submit" value="Send" />
        </form>
      </div>
      <div>
        <a id="linkedInLink" href="https://www.linkedin.com/in/j-alex-sopher-a4a65719b/">LinkedIn</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMeComponent",
};
</script>

<style lang="scss" scoped>

    #emailFormContainer {
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-rows: 15vh 15vh 15vh;
    }

    #linkedInLink {
      font-size: 32px;
      color: #2c3e50;
    }

</style>