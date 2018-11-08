<template>
  <b-container fluid >
    <b-row align-h="end">
      <div style="margin-top: -1.5vw; margin-right: 10vw;" class="mobileHide">
        <div class="blink_me" id="redot" style="margin-right: 1vh"></div><span style="font-size: 1.5rem; font-weight: 400;">Live</span>
      </div>
      <div style="margin-top: -47px; margin-right: 10vw; z-index: 1000" class="desktopHide">
        <div class="blink_me" id="redot" style="margin-right: 1vh"></div><span style="font-size: 1.5rem; font-weight: 400;">Live</span>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "live",
  components: {}
};
</script>

<style scoped>

@media (max-width: 750px) {
  .mobileHide {
    display: none !important;
  }

}
@media (min-width: 751px) {
  .desktopHide {
    display: none !important;
  }

}
  #bolder {
    font-weight: 700;
    text-align: center;
  }

  #redot{
    border: 1px solid #f05352;
    border-radius: 50px;
    background-color: #f05352;
    height: .75rem;
    width: .75rem;
    display: inline-block;

  }

.blink_me {
  animation: blinker 1.5s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

</style>
