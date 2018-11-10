<template>
  <b-row class="SingleWorkshop">
    <b-col class="CardTitle">
      <span>
        {{title}}
      </span>
    </b-col>
    <b-col class="CardTime">
      <span>
        {{time}}
      </span>
    </b-col>
    <b-col class="CardRoom">
      <span>
        {{room}}
      </span>
    </b-col>
  </b-row>
</template>

<style scoped>
.SingleWorkshop {
  width: 100%;
  border-top: 1px solid grey;
  text-align: left;
  font-family: "Roboto slab", Helvetica, Arial, sans-serif;
  padding-top: 1em;
  padding-bottom: 1em;
}

.CardTitle {
  font-weight: 600;
  font-size: 1.5rem;
}

.CardTime {
  font-weight: 400;
  font-size: 1.5rem;

}

.CardRoom {
  font-weight: 300;
  font-size: 1.5rem;
}

</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    time: {
      type:String,
      required: true
    },
    room: {
      type: String,
      required: true
    }
  }

}

</script>
