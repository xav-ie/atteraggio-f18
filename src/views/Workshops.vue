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
          title: "Engineering with Neural Networks by Raytheon",
          time: "2:00pm - 3:00pm",
          room: "Conference Auditorium"
        },
        {
          title:
            "Intro to Programming for the Robot Operating System (ROS) by Lucas Watson (Software Intern at Piaggio Fast Forward)",
          time: "2:00pm - 3:00pm",
          room: "Terrace Lounge"
        },
        {
          title:
            "Intro to HTTP and WebSocket APIs with Bose SoundTouch speakers by Bose",
          time: "3:00pm - 4:00pm",
          room: "Conference Auditorium"
        },
        {
          title:
            "Intro to the UR Robot Arm by Mass Robotics and Universal Robot",
          time: "3:00pm - 4:00pm",
          room: "Terrace Lounge"
        },
        {
          title:
            "Intro to Web Development with React by Christopher Trinh (BU student developer)",
          time: "3:00pm - 4:00pm",
          room: "Room 312"
        },
        {
          title: "Intro to FinTec by ITG",
          time: "4:00pm - 5:00pm",
          room: "Conference Auditorium"
        },
        {
          title:
            "Intro to Backend Development with Node.js and Express by Open Web",
          time: "4:00pm - 5:00pm",
          room: "Terrace Lounge"
        },
        {
          title: "Code with a Conscience Presented By Hack4Impact",
          time: "4:00pm - 5:00pm",
          room: "Room 312"
        },
        {
          title: "IBM Cloud Function as the backend for your hackathon app",
          time: "5:00pm - 6:00pm",
          room: "Conference Auditorium"
        },
        {
          title: "Simmetri Workshops by BU AR/VR",
          time: "5:00pm - 6:00pm",
          room: "Terrace Lounge"
        },
        {
          title:
            "Intro to Google Cloud Platform by Julia Bighetto (GCP Student Ambassador)",
          time: "5:00pm - 6:00pm",
          room: "Room 312"
        },
        {
          title:
            "Intro to Git by Rudhra Raveendran (Github Student Ambassador)",
          time: "6:00pm - 7:00pm",
          room: "Terrace Lounge"
        },
        {
          title:
            "Intro to Machine Vision by Carlos Asmat (Piaggio Fast Forward)",
          time: "6:00pm - 7:00pm",
          room: "Room 312"
        }
      ]
    };
  }
};
</script>
