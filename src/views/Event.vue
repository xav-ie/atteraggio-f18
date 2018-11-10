<template>
  <li class="single-event" v-bind:data-event="type" v-bind:style="{ top: eventTop + 'px', height: eventHeight + 'px' }"> <!-- might remove some of these later -->
    <a href="#0">
      <span class="event-date"> {{start}}-{{end}} </span>
      <span class="event-name">{{ full_name }}</span>
    </a>
  </li>
</template>

<script>
  function getScheduleTimestamp(time) {
    //accepts hh:mm format - convert hh:mm to timestamp
    time = time.replace(/ /g,'');
    var timeArray = time.split(':');
    var timeStamp = parseInt(timeArray[0])*60 + parseInt(timeArray[1]);
    return timeStamp;
  }

  export default {
    props: {
      start: {
        type: String,
        required: true
      },
      end: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      type: {
        type: String,
        required: true
      },
      full_name: {
        type: String,
        required: true
      },
      timeline_start: {
        type: String,
        required: true
      },
      event_slot_height: {
        type: Number,
        required: true
      },
      unit_duration: {
        type: Number,
        required: true
      }
    },
    computed: {
      eventTop: function() {
        let start = getScheduleTimestamp(this.start);
        return (this.event_slot_height * (start - getScheduleTimestamp(this.timeline_start)) / this.unit_duration) - 1;
      },

      eventHeight: function() {
        let start = getScheduleTimestamp(this.start);
        let duration = getScheduleTimestamp(this.end) - start;
        return (this.event_slot_height * duration / this.unit_duration) + 1;
      }
    }
  }
</script>

 <style scoped>

  .cd-schedule .event-name,
  .cd-schedule .event-date {
    display: block;
    color: white;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .cd-schedule .event-name {
    font-size: 2.2vw;
  }

  @media only screen and (max-width: 800px) {
    .single-event {
      height: 10vw !important;
    }
  }

  .cd-schedule .event-date {
    font-size: 1.5vw;
    opacity: .7;
    line-height: 1.2;
    margin-bottom: .2em;
  }

  a {
    color: #A2B9B2;
    text-decoration: none;
    display: block;
    height: 100%;
    padding: 3vw;
  }

  @media only screen and (min-width: 800px) {
    .event-name {
      font-size: 1.5vw;
    }

    a {
      padding: 1em;
    }
  }

</style>
