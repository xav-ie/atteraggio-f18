<template>
  <div class="map-item">
    <b-row>
      <b-col cols="3" class="no-padding"> 
        <div class="numbering"> {{numbering}} </div>
      </b-col>
      <b-col class="no-padding">
        <span class="title"> {{title}} </span>
        <span class="desc"> {{description}} </span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    numbering: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }  
}
</script>

<style scoped>
.map-item {
  background-color: white;
  height: 75px;
  width: 200px;
  color: black;
}

span {
  display: block;
}

.title {
  font-weight: bold;
}

.numbering {
  display: block;
  width: 30px;
  height: 30px;
  
  /* make it round */
  border-radius: 50%;

  background-color: #42b5e3;
  color: white;
  margin-left: auto;
  margin-right: 10px;

  /* vertically and horizontally align */
  text-align: center;
  line-height: 30px;
}

.no-padding {
  padding: 0px;
}
</style>