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
            <div class="top-info" v-bind:class="[category.name == 'Category 1' ? 'category-one' : '']">
              <span> {{category.name}} </span>
            </div>
            <ul v-if="events.length">
              <Event
                v-for="event in category.event_list"
                :key="event.id"
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
</style>
