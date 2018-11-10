<template>
  <div class="schedule" v-bind:style="{height: (timelines.length + 1) * event_slot_height + 'px'}">
    <div class="cd-schedule"> <!-- if add loading, events won't be shown -->
      <div class="timeline">
        <ul>
          <li v-for="time in timelines">
            <span> {{time}} </span>
          </li>
        </ul>
      </div>

      <div class="events">
        <ul>
          <!-- 3 categories -->
          <li v-for="category in events" v-bind:key="category.id" class="events-group">
            <div class="top-info" v-bind:class="[category.name == 'General' ? 'category-one' : '']">
              <span> {{category.name}} </span>
            </div>
            <ul v-if="events.length">
              <Event
                v-for="event in category.event_list"
                :key="event.id"
                :location="event.location"
                :start="event.start"
                :end="event.end"
                :type="event.type"
                :full_name="event.full_name"
                :timeline_start="timelines[0]"
                :event_slot_height="event_slot_height"
                :unit_duration="unit_duration"
              />
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Event from "./Event.vue"

  export default {
    name: "Schedule",
    components: {
      Event
    },
    props: {
      timelines: {
        type: Array,
        required: true
      },
      events: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        event_slot_height: 50, // = height of a time slot, hard coded for now
        unit_duration: 30, // unit duration is 30 mins
      }
    }
  }
</script>

<style scoped src="../assets/css/schedule.css"></style>
<style scoped>
  ol, ul {
    list-style: none;
  }

  .events-group ul::-webkit-scrollbar {
    height: 7px;
    background-color: #ffffff;
  }

  .events-group ul::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0.6vw rgba(0,0,0,0.3);
    border-radius: 5px;
    background-color: #e2dddd;
  }

  .events-group ul::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 0.6vw rgba(0,0,0,.3);
    background-color: #928f8f;
  }

  @media only screen and (max-width: 800px) {
    .schedule {
      height: initial !important;
      padding-bottom: 2vw;
    }

    .events ul {
      padding-left: 2vw;
      padding-right: 3vw;
    }

    .top-info span {
      font-size: 2.4vw;
    }

    .cd-schedule {
      margin: 2vw 0;
    }

    .cd-schedule .events .events-group {
      margin-bottom: 3vw;
    }
  }
</style>
