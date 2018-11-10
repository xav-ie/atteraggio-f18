<template>

  <div>

    <Live/>
    <b-container fluid>
        <b-row class="homeHead">
            <b-col class="mobileHide">
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

            <b-col id="heroText" style="max-width: 100% !important;">
              <div >
                <p class="heroText"> Boston<span id="bolder">Hacks</span> 2018 </p>
                <img
                  class="Flair mobileHide"
                  id="BlueCircle"
                  src="../assets/Shapes/Circle/BlueThickCircle.svg"
                />
                <p class="date">November 10 &#8211; November 11, 2018<br>
                775 Commonwealth Avenue, Boston University</p>
              </div>
            </b-col>

            <b-col class="mobileHide">
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

    <b-container id="links" class="container-fluid">
      <b-row id="links" class="links container-fluid">
        <b-col sm="12" md="4">
          <div>
            <img class="icon" src="../assets/Icons/wifi.svg"/>
          </div>

          <div>
            <p class="headInfo"><span id="bolder">Wifi</span></p>
            <p class="info"><span id="bolder">Network:</span> Bostonhacks</p>
            <p class="info"><span id="bolder">Password:</span> Hackaway18</p>
          </div>
        </b-col>

        <b-col sm="12" md="4">
          <div>
            <img class="icon" src="../assets/Icons/slack.svg"/>
          </div>
          <div>
            <p class="headInfo"><span id="bolder">Slack</span></p>
            <p class="info">
              <a href="https://join.slack.com/t/bostonhacksfall18/shared_invite/enQtNDc0MzEzMjc0NTEzLWZkMmQ4ZTUyMzg1MmQzNzFiZmI0OTJiOWVjNTI5Yjg5MDY0YTFkMDcyNjQyNGExNzYyYzVjODNlMzk5ZDg1ZWE"> Click here  </a>
              to join our Slack channel!</p>
          </div>
        </b-col>

        <b-col sm="12" md="4">
          <div>
            <img class="icon" src="../assets/Icons/link.svg"/>
          </div>

          <div>
            <p class="headInfo"><span id="bolder">Devpost</span></p>
            <p class="info">
              <a href="https://bostonhacks-f2018.devpost.com/"> Click here  </a>
                for project submission</p>
            <p class="info">and prize info</p>
          </div>
        </b-col>

        <b-col sm="12" md="3">
          <div>
            <img class="icon" src="../assets/Icons/wifi.svg"/>
          </div>
          <div>
              <p class="headInfo"><span id="bolder">HelpQ</span></p>
              <p class="info"> <a href="https://helpq.bostonhacks.io"> Click here </a>
                to get help
              </p>
          </div>
        </b-col>
        
      </b-row>
    </b-container>

    <b-container  style="margin-top: 15vw;">
        <hr>
        <p id="bolder">Thank you to our sponsors!</p>
    </b-container>

    <b-container fluid >
      <b-row class="logos" style="padding: 3vw 5vw 0 5vw;">
        <b-col><img class="logoThin" src="../assets/Logos/Bose/BoseLogo.png"/></b-col>
        <b-col><img class="logo" src="../assets/Logos/BUCS/BucsLogo.jpg"/></b-col>
        <b-col><img class="logo" src="../assets/Logos/Giphy/giphyEngineeringLogo.jpg"/></b-col>
        <b-col><img class="logoTall" src="../assets/Logos/Github/githubLogo.png"/></b-col>
        <b-col><img class="logo" src="../assets/Logos/IBM/ibmLogo.png"/></b-col>
        <b-col><img class="logoTall" src="../assets/Logos/ITG/itgWhiteLogo.png"/></b-col>
      </b-row>

      <b-row class="logos" style="padding: 4vw 5vw 4vw 5vw;">
        <b-col><img class="logoThin" src="../assets/Logos/Liberty/libertyLogo.png"/></b-col>
        <b-col><img class="logoThin" src="../assets/Logos/MassRobotics/massRoboLogo.png"/></b-col>
        <b-col><img class="logo" src="../assets/Logos/OneDB/onedbLogo.svg"/></b-col>
        <b-col><img class="logoThin" src="../assets/Logos/Raytheon/raytheonLogo.png"/></b-col>
        <b-col><img class="logo" src="../assets/Logos/Google/googleLogo.png"/></b-col>
        <b-col><img class="logo" src="../assets/Logos/Spark/SparkLogo.png"/></b-col>
      </b-row>

      <b-row class="logos" style="padding: 4vw 5vw 4vw 5vw;">
        <b-col><img class="logoThin" src="../assets/Logos/Stratis/StratisLogo.png"/></b-col>
        <b-col><img class="logo" src="../assets/Logos/Twilio/twilioBW.png"/></b-col>
        <b-col><img class="logoThin" src="../assets/Logos/UniRobot/uniRobotsLogo.png"/></b-col>
        <b-col><img class="logo" src="../assets/Logos/Unity/unityWhiteLogo.png"/></b-col>
        <!-- <b-col></b-col> -->
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
a {
  color: #ffffff;
  font-weight: 700;
}


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
  font-size: 3rem;
  text-align: center;
  padding-bottom: 40px;
}

.date{
  margin-top: -3vh;
  font-weight: 300;
  text-align: center;
  max-width: 100% !important;
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

  .mobileHide {
    display: none;
  }
}

#links {
  padding-top: 7vw;
  margin-left: auto;
  margin-right: auto;
}

.links{
  width: 90%;
  margin: 0;
  text-align: start;
}


.icon {
  height: 2rem;
  width: 2rem;
  margin-bottom: 2vh;
  margin-top: 50px;
}

.headInfo{
  margin-bottom: 0.1vw;
}

.info{
  margin-bottom: -0.2vw;
  font-family: 'Roboto Slab', 'Times New Roman', Times, serif;
  font-size: 1.2rem;
}

hr {
background-color: #ffffff;
width: 40%;
margin-left: auto;
margin-right: auto;
}

#redot{
  border: 1px solid #f05352;
  border-radius: 50px;
  background-color: #f05352;
  height: 0.75vw;
  width: 0.75vw;
  display: inline-block;

}

.logo {
  width: 9vw;
  height: auto;
}

.logoTall {
  height: 5vw;
  width:auto;
}

.logoThin {
  width: 12vw;
  height: auto;
}

.logos {
  align-items:center;

}



</style>
