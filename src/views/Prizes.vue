<template>
  <div class="Prizes">
    <Live />
    <b-container fluid>
      <b-row id="title">
        <b-col cols=1 />
        <b-col id="header">
          <p> Challenges & Prizes </p>
        </b-col>
      </b-row>
      <b-row id="infoRow">
        <b-col cols=1 />
        <b-col sm="10" md="3">
          <p class="category"> Track Title </p>
          <p class="prizeItem"> Prize </p>
          <p class="info"> Place holder text.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Track Title </p>
          <p class="prizeItem"> Prize </p>
          <p class="info">Place holder text.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Track Title </p>
          <p class="prizeItem">Prize</p>
          <p class="info"> Place holder text.
          </p>
        </b-col>
        <b-col cols=1 />
      </b-row>

      <Flair />
    </b-container>
  </div>
</template>

<style scoped>
.Prizes {
}

@media (max-width: 750px) {
  .mobileHide {
    display: none !important;
  }
}
@media (min-width: 751px) {
  .desktopHide {
    display: none !important;
  }
}


.category {
  margin-top: 4vh;
  font-size: 1rem;
}

.info{
  font-weight: 300;
  font-size: 1rem;
  margin-top: -2vh;
}
.prizeItem {
  font-size: 1.2rem;
  margin-top: 3vh;
}
#header {
  font-weight: 300;
  font-size: 2rem;
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
    components: {
      Live,
      Flair
    }
  };

  import Live from "../components/Live.vue"
  import Flair from "../components/Flair.vue"
</script>
