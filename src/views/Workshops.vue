<template>
  <div class="Workshops">
    <Live />
    <b-container fluid>
      <b-row id="title">
        <b-col sm="1" />
        <b-col sm="10" md="10">
          <p> Workshops </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="0" md="1" />
        <b-col>
          <Card
            v-for="card in cards"
            :key="card.id"
            :title="card.title"
            :time = "card.time"
            :room = "card.room"
          />
        </b-col>
        <b-col sm="0" md="1" />
      </b-row>
      <Flair />
    </b-container>
  </div>
</template>


<style scoped>
#title {
  margin-top: 10vh;
  font-weight: 300;
  font-size: 3rem;
  padding-bottom: 6vh;
}
</style>

<script>
import Card from "../components/Card.vue";
import Live from "../components/Live.vue";
import Flair from "../components/Flair.vue";

export default {
  name: "Workshops",
  components: {
    Card,
    Live,
    Flair
  },
  data() {
    return {
      cards: [
        {
          title: "Raytheon: Engineering with Neural Networks",
          time: "1:30pm - 2:30pm",
          room: "Room 310"
        },
        {
          title: "BU SHPE: Communicating Beyond The Code",
          time: "1:30pm - 2:30pm",
          room: "Room 315"
        },
        {
          title:
            "BU High Performance Computing: A Hacker's Guide to Parallelization-",
          time: "1:30pm - 2:30pm",
          room: "Room 312"
        },
        {
          title: "AstraZenca",
          time: "2:30pm - 3:30pm",
          room: "Room 310"
        },
        {
          title: "Hack4Impact: Intro to Web Development",
          time: "2:30pm - 3:30pm",
          room: "Room 315"
        },
        {
          title:
            "John Hancock: Reassembling the Web with WebAssembly and WebGL",
          time: "2:30pm - 3:30pm",
          room: "Room 312"
        },
        {
          title:
            "Google: Three Powerful Google Cloud Products for Your Project",
          time: "3:30pm - 4:30pm",
          room: "Room 310"
        },
        {
          title:
            "Leveraging Serverless Compute to Build Cross Platform Applications with Flutter",
          time: "3:30pm - 4:30pm",
          room: "Room 315"
        },
        {
          title: "CapitalOne AWS Lambda",
          time: "4:30pm - 5:30pm",
          room: "Room 310"
        },
        {
          title: "Hack4Impact: iOS Development with Swift",
          time: "4:30pm - 5:30pm",
          room: "Room 315"
        },
        {
          title: "BU AR/VR: Intro to VR Development Using Unity",
          time: "4:30pm - 5:30pm",
          room: "Room 312"
        },
        {
          title: "Bose",
          time: "5:30pm - 6:30pm",
          room: "Room 310"
        },
        {
          title: "BUILDS: p5.js and Graphics on the Web",
          time: "7:30pm - 8:30pm",
          room: "Room 310"
        },
        {
          title: "0xBU: Decompiling Programs with Ghidraw",
          time: "7:30pm - 8:30pm",
          room: "Room 315"
        }
      ]
    };
  }
};
</script>
