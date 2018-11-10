<template>
  <div class="map-floor">
    <b-container>
      <b-row>
        <b-col lg="7" md="12">
          <b-row class="title">
            <span> George Sherman Union: {{floor_name}} </span>
          </b-row>
          <b-row>
            <div>
              <span> 775 Commonwealth Avenue </span>
              <span> Boston, MA, 02215 </span>
            </div>
          </b-row>
          <b-row class="items">
            <b-col cols="5">
              <MapItem
                v-for="item in itemList"
                v-bind:key="item.id"
                :numbering="item.numbering"
                :title="item.title"
                :description="item.description"
              />
            </b-col>
            <b-col>
              <b-row class="elevator">
                <b-col>
                  Elevator
                </b-col>
              </b-row>
              <b-row class="restroom" v-if="restrooms">
                <b-col cols="1">
                  <div class="restroom-icon">
                    R
                  </div>
                </b-col>
                <b-col class="restroom-info">
                  <span class="bold"> Restrooms </span>
                  <span> M = Men*; W = Women* </span>

                  <span class="bold explain-text">
                    *In Massachusetts, transgender
                    people have the legal right to use
                    restrooms consistent with their
                    gender identities.
                  </span>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <img :src="map" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MapItem from "./MapItem"

export default {
  name: "MapFloor",
  components: {
    MapItem
  },
  props: {
    number: {
      type: Number,
      required: true
    },
    restrooms: {
      type: Boolean,
      required: true
    },
    itemList: {
      type: Array,
      required: true
    },
    map: {
      type: String,
      required: true
    }
  },
  computed: {
    floor_name: function() {
      if (this.number == 0) {
        return "Basement";
      } else if (this.number == 1) {
        return "First Floor";
      } else if (this.number == 2) {
        return "Second Floor";
      } else if (this.number == 3) {
        return "Third Floor"
      }
    }
  }
}
</script>

<style scoped>
.map-floor {
  background-color: white;
  color: black;
}

span {
  display: block;
}

.title {
  font-weight: bold;
  margin-bottom: 10px;
}

.items {
  margin-top: 5vw;
}

.elevator {
  height: 9vw;
}

.restroom div {
  display: inline-block;
}

.restroom-icon {
  vertical-align: top;

  width: 2.3vw;
  height: 2.3vw;
  font-size: 1.3vw;
  
  /* make it round */
  border-radius: 50%;

  background-color: #465051;
  color: white;

  text-align: center;
  line-height: 2.3vw;
}

@media only screen and (max-width: 990px) {
  .restroom-icon {
    font-size: 2.3vw;
    width: 3.3vw;
    height: 3.3vw;
    line-height: 3.3vw;
  }
}

.restroom-info {
  margin-left: 1vw;
}

.col {
  padding-left: 1.3vw;
}

.bold {
  font-weight: bold;
}

.explain-text {
  margin-top: 10px;
}
</style>