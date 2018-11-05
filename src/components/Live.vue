<template>
  <b-container fluid>
    <b-row align-h="end">
      <div style="margin-top: -1.5vw; margin-right: 10vw;">
        <div id="redot" style="margin-right: 1vh"></div><span style="font-size: 1.6vw; font-weight: 400;">Live</span>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "live",
  components: {}
};
</script>

<style scoped>
  #bolder {
    font-weight: 700;
    text-align: center;
  }

  #redot{
    border: 1px solid #f05352;
    border-radius: 50px;
    background-color: #f05352;
    height: 0.75vw;
    width: 0.75vw;
    display: inline-block;

  }

</style>
