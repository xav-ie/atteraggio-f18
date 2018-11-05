<template>
  <div class="Prizes">
    <b-container fluid>
      <b-row align-h="end">
        <div style="margin-top: -1.5vw; margin-right: 10vw;">
          <div id="redot" style="margin-right: 1vh"></div><span style="font-size: 1.6vw; font-weight: 400;">Live</span>
        </div>
      </b-row>
      <b-row id="title">
        <b-col cols=1 />
        <b-col id="header">
          <p> Challenges & Prizes </p>
        </b-col>
      </b-row>
      <b-row id="infoRow">
        <b-col cols=1 />
        <b-col>
          <p class="category"> Track Title </p>
          <p class="prizeItem"> Prize </p>
          <p class="info"> Place holder text.
          </p>
        </b-col>
        <b-col>
          <p class="category"> Track Title </p>
          <p class="prizeItem"> Prize </p>
          <p class="info">Place holder text.
          </p>
        </b-col>
        <b-col>
          <p class="category"> Track Title </p>
          <p class="prizeItem">Prize</p>
          <p class="info"> Place holder text.
          </p>
        </b-col>
        <b-col cols=1 />
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.Prizes {
  height: 81.3vh;
}

.category {
  margin-top: 4vh;
  font-size: 1.3vw;
}

.info{
  font-weight: 300;
  font-size: 1.1vw;
  margin-top: -2vh;
}
.prizeItem {
  font-size: 1.25vw;
  margin-top: 3vh;
}
#header {
  font-weight: 300;
  font-size: 2vw;
}

#title{
  margin-top: 10vh;
}

#infoRow {
  margin-top: 6vh;
}

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

<script>
  export default {
    name: "Faq",
    Components: {
    }
  };
</script>
