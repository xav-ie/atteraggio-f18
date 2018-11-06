<template>
  <div class="Scheduler">
    <b-container fluid>
      <b-row align-h="end">
        <div style="margin-top: -1.5vw; margin-right: 10vw;">
          <div id="redot" style="margin-right: 1vh"></div><span style="font-size: 1.6vw; font-weight: 400;">Live</span>
        </div>
      </b-row>
    </b-container>
    <div class="schedule-block">
      <div class="select-date">
        <div v-on:click="changeDate" class="date-tag" v-bind:class="[sat_day ? 'active-tag' : 'inactive-tag']">
          <span> Saturday </span>
        </div>
        <div v-on:click="changeDate" class="date-tag" v-bind:class="[sat_day ? 'inactive-tag' : 'active-tag']">
          <span> Sunday </span>
        </div>
      </div>
      <Schedule v-if="sat_day" :events="sat_events" :timelines="timelines" />
      <Schedule v-else :events="sun_events" :timelines="timelines" />
    </div>
    <b-container fluid>
      <b-row style="margin-top: 5%;">
        <!-- <Flair /> -->
        <b-row class="FlairRow">
          <b-col>
            <!-- orange ZigZag -->
            <img
              class = "Flair"
              id = "OrangZigLeft"
              src = "../assets/Shapes/ZigZag/CoralZigZag.svg"
            />
          </b-col>
          <b-col>
            <!-- Green triangle -->
            <img
              class = "Flair"
              id = "GreenTrig"
              src = "../assets/Shapes/Triangle/GreenTriangle.svg"
            />
          </b-col>
          <b-col>
            <!-- Pink Grid -->
            <img
              class = "Flair"
              id = "PinkGrid"
              src = "../assets/Shapes/Grid/PinkSquareGrid.svg"
            />
          </b-col>
          <b-col>
            <!-- Orange Zigzag -->
            <img
              class = "Flair"
              id = "OrgZigRight"
              src = "../assets/Shapes/ZigZag/CoralZigZag.svg"
            />
          </b-col>
        </b-row>
        <b-row class="FlairRow">
          <b-col>
            <!-- Blue grid -->
            <img
              class = "Flair"
              id = "BlueCirGrid"
              src = "../assets/Shapes/Grid/BlueCircleGrid.svg"
            />
          </b-col>
          <b-col>
            <!-- Blue Circle -->
            <img
              class = "Flair"
              id = "BlueCircle"
              src = "../assets/Shapes/Circle/BlueThickCircle.svg"
            />
          </b-col>
          <b-col>
            <!-- Thin Orange Circle -->
            <img
              class = "Flair"
              id = "OrgThinCircle"
              src = "../assets/Shapes/Circle/CoralThinCircle.svg"
            />
          </b-col>
          <b-col>
            <!-- Thick Orange Circle -->
            <img
              class = "Flair"
              id = "OrgThickCircle"
              src = "../assets/Shapes/Circle/CoralThickCircle.svg"
            />
          </b-col>
          <b-col>
            <!-- Blue Square Grid -->
            <img
              class = "Flair"
              id = "BlueSqGrid"
              src = "../assets/Shapes/Grid/BlueSqGrid.svg"
            />
          </b-col>
        </b-row>
        <b-row class="FlairRow">
          <b-col>
            <!-- Green Circle -->
            <img
              class = "Flair"
              id = "GreenCircle"
              src = "../assets/Shapes/Circle/GreenThinCircle.svg"
            />
          </b-col>
          <b-col>
            <!-- Orange Grid -->
            <img
              class = "Flair"
              id = "OrgGrid"
              src = "../assets/Shapes/Grid/CoralCircleGrid.svg"
            />
          </b-col>
          <b-col>
            <!-- Blue triangle -->
            <img
              class = "Flair"
              id = "BlueTrig"
              src = "../assets/Shapes/Triangle/BlueTriangle.svg"
            />
          </b-col>
          <b-col>
            <!-- Green zigzag -->
            <img
              class = "Flair"
              id = "GreenZig"
              src = "../assets/Shapes/ZigZag/GreenZigZag.svg"
            />
          </b-col>
          <b-col>
            <!-- Red Circle -->
            <img
              class = "Flair"
              id = "PinkCircle"
              src = "../assets/Shapes/Circle/PinkThickCircle.svg"
            />
          </b-col>
        </b-row>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Schedule from "./Schedule.vue"

  export default {
    name: "SchedulePage",
    components: {
      Schedule
    },
    data() {
      return {
        sat_day: true,
        timelines: [
          "8:30","9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00",
          "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
          "16:00", "16:30", "17:00", "17:30", "18:00"
        ],
        sat_events: [ // three categories
          [
            {
              start: "9:30",
              end: "10:30",
              type: "event-1",
              full_name: "First event"
            },
            {
              start: "11:30",
              end: "12:30",
              type: "event-1",
              full_name: "Second event"
            }
          ],
          [
            {
              start: "10:30",
              end: "12:30",
              type: "event-2",
              full_name: "Third Event"
            }
          ],
          [
            {
              start: "10:30",
              end: "12:30",
              type: "event-2",
              full_name: "Fourth Event"
            }
          ]
        ],
        sun_events:[
          [
            {
              start: "12:30",
              end: "15:30",
              type: "event-1",
              full_name: "Fourth event"
            },
            {
              start: "16:30",
              end: "17:30",
              type: "event-2",
              full_name: "Fifth event"
            }
          ],
          [
            {
              start: "9:30",
              end: "10:30",
              type: "event-3",
              full_name: "Sixth Event"
            }
          ],
          [
            {
              start: "10:30",
              end: "12:30",
              type: "event-2",
              full_name: "Fourth Event"
            }
          ]
        ]
      }
    },
    methods: {
      changeDate: function() {
        this.sat_day = !this.sat_day
      }
    }
  }
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
  .schedule-block{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: 4vh;
    background-color: white;
  }
  .select-date{
    position: relative;
    background-color: #928aa6;
    height: 80px;
    padding-left: 20px;
  }

  .date-tag {
    position: relative;
    top: calc(100% - 60px);
    margin-left: 10px;
    width: 200px;
    height: 60px;
    display: inline-block;
  }
  .date-tag:hover{
    cursor: pointer;
  }

  .date-tag span{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 900;
  }

  .active-tag{
    color: #292760;
    background-color: white;
  }
  .inactive-tag {
    color: white;
    background-color: #a7a1b8;
  }

  .Flair {
    width: 100%;
    height: auto;
    display: flex;
    overflow: visible;
  }

  .FlairRow {
    width: 100%;
  }

  #OrangZigLeft {
    max-width: 20%;
    margin-left: -5%;
  }

  #GreenTrig {
    max-width: 13%;
    margin-top: 20%;
    margin-left: 30%;
  }

  #PinkGrid {
    max-width: 12%;
    margin-left: 50%;
    margin-top: 5%;
  }

  #OrgZigRight {
    max-width: 20%;
    transform: rotate(50deg);
    margin-left: 70%;
  }

  #BlueCirGrid {
    max-width: 25%;
    margin-left: 35%;
  }

  #BlueCircle {
    max-width: 12%;
    margin-top: 40%;

  }

  #OrgThinCircle {
    max-width: 15%;
    margin-left: 30%;
    margin-top: 13%;
  }

  #OrgThickCircle {
    max-width: 13%;
    margin-left: 50%;
    margin-top: 22%;
  }

  #BlueSqGrid {
    max-width: 15%;
    transform: rotate(50deg);
    margin-left: 50%;
    margin-top: 30%;
  }

  #GreenCircle {
    max-width: 14%;
    margin-left: 20%;
    margin-top: 10%;
  }

  #OrgGrid {
    max-width: 30%;
    margin-left: 70%;
    margin-top: 15%;
  }

  #BlueTrig {
    max-width: 15%;
    margin-left: 100%;
    margin-top: -5%
  }

  #GreenZig {
    max-width: 30%;
    margin-left: 100%;
    transform: rotate(210deg);
  }

  #PinkCircle {
    max-width: 12%;
    margin-left: 97%;
  }
</style>
