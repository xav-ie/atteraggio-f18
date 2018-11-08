<template>
  <div class="Scheduler">
    <Live />
    <div class="schedule-block" style="margin-top:5%;">
      <div class="select-date">
        <div v-on:click="changeSat" class="date-tag" v-bind:class="[sat_day ? 'active-tag' : 'inactive-tag']">
          <span> Saturday </span>
        </div>
        <div v-on:click="changeSun" class="date-tag" v-bind:class="[sat_day ? 'inactive-tag' : 'active-tag']">
          <span> Sunday </span>
        </div>
      </div>
      <Schedule v-if="sat_day" :events="sat_events" :timelines="timelines" />
      <Schedule v-else :events="sun_events" :timelines="timelines" />
    </div>
    <b-container fluid>
      <Flair />
    </b-container>
  </div>
</template>

<script>
  import Schedule from "./Schedule.vue"
  import Live from "../components/Live.vue"
  import Flair from "../components/Flair.vue"

export default {
  name: "SchedulePage",
  components: {
    Schedule,
    Live,
    Flair
  },
  data() {
    return {
      animating: false,
      sat_day: true,
      timelines: [
        "8:30","9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00",
        "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
        "16:00", "16:30", "17:00", "17:30", "18:00"
      ],
      sat_events: [ // three categories
        {
          name: "Category 1",
          event_list:
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
        },
        {
          name: "Category 2",
          event_list:
          [
            {
              start: "10:30",
              end: "12:30",
              type: "event-2",
              full_name: "Third Event"
            }
          ],
        },
        {
          name: "Category 3",
          event_list:
          [
            {
              start: "10:30",
              end: "12:30",
              type: "event-2",
              full_name: "Fourth Event"
            }
          ]
        }          
      ],
      sun_events:[
        {
          name: "Category 1",
          event_list:
          [
            {
              start: "10:30",
              end: "12:30",
              type: "event-1",
              full_name: "First event"
            },
            {
              start: "13:30",
              end: "14:30",
              type: "event-1",
              full_name: "Second event"
            }
          ],
        },
        {
          name: "Category 2",
          event_list:
          [
            {
              start: "15:30",
              end: "16:30",
              type: "event-2",
              full_name: "Third Event"
            }
          ],
        },
        {
          name: "Category 3",
          event_list:
          [
            {
              start: "10:30",
              end: "12:30",
              type: "event-2",
              full_name: "Fourth Event"
            }
          ]
        }          
      ]
    }
  },
  methods: {
    changeSat: function() {
      this.sat_day = true
    },
    changeSun: function() {
      this.sat_day = false
    }
  }
};
</script>

<style scoped>
#bolder {
  font-weight: 700;
  text-align: center;
}

#redot {
  border: 1px solid #f05352;
  border-radius: 50px;
  background-color: #f05352;
  height: 0.75vw;
  width: 0.75vw;
  display: inline-block;
}

.schedule-block {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  margin-top: 4vh;
  background-color: white;
}

.select-date {
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

.date-tag:hover {
  cursor: pointer;
}

.date-tag span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 900;
}

.active-tag {
  color: #292760;
  background-color: white;
}

.inactive-tag {
  color: white;
  background-color: #a7a1b8;
}
</style>
