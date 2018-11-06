<template>
  <div class="FAQ">
    <Live />
    <b-container fluid>
      <b-row id="title">
        <b-col cols=1 />
        <b-col id="header">
          <p> Frequently Asked Questions </p>
        </b-col>
      </b-row>
      <b-row id="infoRow">
        <b-col cols=1 />
        <b-col>
          <p class="infoTitle"> Are there any rules? </p>
          <p class="info"> We want to ensure a positive experience for every
            participant. We encourage you to read out <b>code of conduct</b>.
          </p>
        </b-col>
        <b-col>
          <p class="infoTitle"> Can we form teams? </p>
          <p class="info">Of course you can! We encourage people to work in teams
            of up to 5 people. You can work alone, but it won't be the same.
          </p>
        </b-col>
        <b-col>
          <p class="infoTitle">How/When do I need to submit my project?</p>
          <p class="info"> All projects will need to be submitted on Devpost by 10AM on Sunday,
            altough you can continue to work on your demmonstration after you submit.
          </p>
        </b-col>
        <b-col cols=1 />
      </b-row>

      <Flair />
    </b-container>
  </div>
</template>

<style scoped>
.FAQ {
  /* height: 92vh; */
}

.info{
  font-weight: 300;
  font-size: 1.1vw;
}
.infoTitle {

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
    components: {
      Live,
      Flair
    }
  };
  import Live from "../components/Live.vue"
  import Flair from "../components/Flair.vue"
</script>
