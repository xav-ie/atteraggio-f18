<template>
  <div>
    <Live/>
    <b-container fluid>
        <b-row class="homeHead">
            <b-col>
              <b-row>
                <b-col>
                  <img
                    class="Flair"
                    id="BlueGridLeft"
                    src="../assets/Shapes/Grid/BlueSqGrid.svg"
                  />
                </b-col>
                <b-col>
                  <img
                    class="Flair"
                    id="GreenZigZag"
                    src="../assets/Shapes/ZigZag/GreenZigZag.svg"
                  />
                </b-col>
                <b-col>
                  <img
                    class="Flair"
                    id="PinkTriangle"
                    src="../assets/Shapes/Triangle/PinkTriangle.svg"
                  />
                </b-col>
              </b-row>

              <b-row>
                <b-col/>
                <b-col>
                  <img
                    class="Flair"
                    id="CoralTrig"
                    src="../assets/Shapes/Triangle/CoralTriangle.svg"
                  />
                </b-col>
                <b-col/>
              </b-row>

              <b-row>
                <b-col>
                  <img
                    class="Flair"
                    id="CoralZigLeft"
                    src="../assets/Shapes/ZigZag/CoralZigZag.svg"
                  />
                </b-col>
                <b-col>
                  <img
                    class="Flair"
                    id="GreenThinCircle"
                    src="../assets/Shapes/Circle/GreenThinCircle.svg"
                  />
                </b-col>
                <b-col>
                  <img
                    class="Flair"
                    id="CoralGrid"
                    src="../assets/Shapes/Grid/CoralCircleGrid.svg"
                  />
                </b-col>
              </b-row>
            </b-col>

            <b-col cols="5" id="heroText">
              <div >
                <p class="heroText"> Boston<span id="bolder">Hacks</span> 2018 </p>
                <img
                  class="Flair"
                  id="BlueCircle"
                  src="../assets/Shapes/Circle/BlueThickCircle.svg"
                />
                <p class="date">November 10 &#8211; November 11, 2018<br>
                775 Commonwealth Avenue, Boston University</p>
              </div>
            </b-col>

            <b-col>
              <b-row>
                <b-col>
                  <img
                    class="Flair"
                    id="BlueGridCircle"
                    src="../assets/Shapes/Grid/BlueCircleGrid.svg"
                  />
                </b-col>
                <b-col>
                  <img
                    class="Flair"
                    id="CoralCircle"
                    src="../assets/Shapes/Circle/CoralThinCircle.svg"
                  />
                </b-col>
                <b-col>
                  <img
                    class="Flair"
                    id="PinkCircle"
                    src="../assets/Shapes/Circle/PinkThinCircle.svg"
                  />
                </b-col>
                <b-col>
                  <img
                    class="Flair"
                    id="BlueGridRight"
                    src="../assets/Shapes/Grid/BlueSqGrid.svg"
                  />
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <img
                    class="Flair"
                    id="CoralZigRight"
                    src="../assets/Shapes/ZigZag/CoralZigZag.svg"
                  />
                </b-col>
                <b-col>
                  <img
                    class="Flair"
                    id="BlueTrig"
                    src="../assets/Shapes/Triangle/BlueTriangle.svg"
                  />
                </b-col>
                <b-col>
                  <img
                    class="Flair"
                    id="GreenThickCircle"
                    src="../assets/Shapes/Circle/GreenThickCircle.svg"
                  />
                </b-col>
                <b-col>
                  <img
                    class="Flair"
                    id="GreenZigRight"
                    src="../assets/Shapes/ZigZag/GreenZigZag.svg"
                  />
                </b-col>
              </b-row>
            </b-col>
        </b-row>
    </b-container>

    <b-container id="links" >
      <b-row id="links" class="links">
        <b-col cols="auto" md="4">
          <div>
            <img class="icon" src="../assets/Icons/wifi.svg"/>
          </div>

          <div>
            <p class="headInfo"><span id="bolder">Wifi</span></p>
            <p class="info"><span id="bolder">Network:</span> BU Event Guest</p>
            <p class="info"><span id="bolder">Password:</span> w!flP/ss%#rd</p>
          </div>
        </b-col>

        <b-col cols="auto" md="4">
          <div>
            <img class="icon" src="../assets/Icons/slack.svg"/>
          </div>
          <div>
            <p class="headInfo"><span id="bolder">Slack</span></p>
            <p class="info">Click here to join our Slack channel!</p>
            <p class="info">(link here)</p>
          </div>
        </b-col>

        <b-col cols="auto" md="4">
          <div>
            <img class="icon" src="../assets/Icons/link.svg"/>
          </div>

          <div>
            <p class="headInfo"><span id="bolder">Devpost</span></p>
            <p class="info">Click here for project submission</p>
            <p class="info">and prize info (link here)</p>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container  style="margin-top: 15vw;">
        <hr>
        <p id="bolder">Thank you to our sponsors!</p>
    </b-container>

    <b-container>
      <b-row>
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
      </b-row>

      <b-row>
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
      </b-row>

    </b-container>

  </div>

</template>

<script>
export default {
  name: "home",
  components: {
    Live
  }
};
import Live from "../components/Live.vue"
</script>

<style scoped lang="scss">

.Flair {
  display: flex;
  overflow: visible;
}

#BlueGridLeft {
  max-width: 43%;
  margin-top: 30%;
}

#GreenZigZag {
  max-width: 85%;
  margin-left: 10%;
}

#PinkTriangle {
  max-width: 43%;
  margin-left: 40%;
}

#CoralTrig {
  max-width: 40%;
}

#BlueCircle {
  max-width: 5%;
}

#CoralZigLeft {
  max-width: 80%;
  margin-left: -70%;
}

#GreenThinCircle{
  max-width: 38%;
  margin-left: -80%;
  margin-top: 50%;
}

#CoralGrid {
  max-width: 75%;
  margin-left: -50%;
}

#BlueGridCircle {
  max-width: 90%;
  margin-left: -20%;
}

#CoralCircle {
  max-width: 60%;
  margin-left: 40%;
  margin-top: 30%;
}

#PinkCircle {
  max-width: 40%;
  margin-left: 30%;
  margin-top: 110%;
}

#BlueGridRight {
  max-width: 65%;
}

#GreenZigRight {
  margin-left: 20%;
  min-width: 90%;
}

#BlueTrig {
  max-width: 68%;
  margin-left: 10%;
  margin-top: 40%;
}

#GreenThickCircle {
  max-width: 55%;
  margin-left: 50%;
  margin-top: 120%;
}

#CoralZigRight {
  margin-top: 80%;
}

.heroText {
  color: white;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 3.7vw;
  text-align: center;
}

.date{
  margin-top: -3vh;
  line-height: 1.75vw;
  font-weight: 300;
  text-align: center;
}

#bolder {
  font-weight: 700;
  text-align: center;
}

.homeHead{
  padding-top: 14vh;
}

@media (max-width: 750px) {
  .homeHead {
    margin-top: -12vw;
  }
}

#links {
  padding-top: 8vw;
  margin-left: auto;
  margin-right: auto;
}

.links{
  width: 90%;
  margin: 0;
  text-align: start;
}


.icon {
  height: 2vw;
  width: 2vw;
  margin-bottom: 2vh;
}

.headInfo{
  margin-bottom: 0.1vw;
}

.info{
  margin-bottom: -0.2vw;
  font-family: 'Roboto Slab', 'Times New Roman', Times, serif;
  font-size: 1.1vw;
}

hr {
background-color: #ffffff;
width: 40%;
margin-left: auto;
margin-right: auto;
}

</style>
