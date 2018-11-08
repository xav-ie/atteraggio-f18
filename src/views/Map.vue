<template>
  <div class="map">
    <div class="select-floor">
      <div v-on:click="changeFloor(0)" class="floor-tag" v-bind:class="[current_floor == 0 ? 'active-tag' : 'inactive-tag']">
        <span> Basement </span>
      </div>
      <div v-on:click="changeFloor(1)" class="floor-tag" v-bind:class="[current_floor == 1 ? 'active-tag' : 'inactive-tag']">
        <span> Floor 1 </span>
      </div>
      <div v-on:click="changeFloor(2)" class="floor-tag" v-bind:class="[current_floor == 2 ? 'active-tag' : 'inactive-tag']">
        <span> Floor 2 </span>
      </div>
      <div v-on:click="changeFloor(3)" class="floor-tag" v-bind:class="[current_floor == 3 ? 'active-tag' : 'inactive-tag']">
        <span> Floor 3 </span>
      </div>
    </div>
    <div class="map-body">
      <MapFloor
        v-for="map in maps"
        v-if="current_floor == map.number"
        :number="map.number"
        :restrooms="map.restrooms"
        :itemList="map.itemList"
        :map="map.map_image"
      />
    </div>
  </div>
</template>

<script>
  import MapFloor from "./MapFloor.vue"

  export default {
    name: "Map",
    components: {
      MapFloor
    },
    data () {
      return {
        current_floor: 0,
        maps: 
        [
          {
            number: 0,
            restrooms: false,
            itemList:
            [
              {
                numbering: "1",
                title: "BU Central",
                description: "Food, food, food"
              },
              {
                numbering: "2",
                title: "The Alley",
                description: "More food"
              }
            ],
            map_image: require("../assets/Maps/Floor0.svg")
          },
          {
            number: 1,
            restrooms: true,
            itemList:
            [
              {
                numbering: "1",
                title: "GSU Student Link",
                description: "Main check in"
              },
              {
                numbering: "2",
                title: "GSU Back Court",
                description: "Team formation"
              }
            ],
            map_image: require("../assets/Maps/Floor1.svg")
          },
          {
            number: 2,
            restrooms: true,
            itemList:
            [
              {
                numbering: "3",
                title: "Metcalf Ballroom",
                description: "Main hacking floor"
              },
              {
                numbering: "6",
                title: "Ziskind Lounge",
                description: "Sponsors' Zone"
              },
              {
                numbering: "7",
                title: "Terrace Lounge",
                description: "Surprise!"
              }
            ],
            map_image: require("../assets/Maps/Floor2.svg")
          },
          {
            number: 3,
            restrooms: true,
            itemList:
            [
              {
                numbering: "4",
                title: "GSU 3rd floor rooms",
                description: "Breakdown rooms"
              }
            ],
            map_image: require("../assets/Maps/Floor3.svg")
          }
        ]       
      }
    },
    methods: {
      changeFloor: function(number) {
        this.current_floor = number;
      }
    }
  }
</script>

<style scoped>
.map {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 7vh;
  margin-top: 4vh;
  background-color: white;
}

.select-floor {
  position: relative;
  background-color: #928aa6;
  height: 80px;
  padding-left: 20px;
  
}

.floor-tag {
  position: relative;
  top: calc(100% - 60px);
  margin-left: 10px;
  width: 200px;
  height: 60px;
  display: inline-block;
}

.floor-tag:hover {
  cursor: pointer;
}

.floor-tag span {
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

.map-body {
  margin-top: 60px;
  padding: 30px 80px;
  border-top: 1px solid #b8b8b8;
}
</style>