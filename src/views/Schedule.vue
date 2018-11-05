<template>
  <div class="schedule">
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
          <li class="events-group">
            <div class="top-info category-one"><span> Category 1 </span></div>
            <ul v-if="events.length">
              <Event
                v-for="event in events[0]"
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

          <li class="events-group">
            <div class="top-info"><span>Category 2</span></div>
            <ul>
              <Event
                v-for="event in events[1]"
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

          <li class="events-group">
            <div class="top-info"><span>Category 3</span></div>
            <ul>
              <Event
                v-for="event in events[2]"
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
