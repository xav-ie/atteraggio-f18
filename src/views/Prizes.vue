<template>
  <div class="Prizes">
    <b-container fluid>
      <b-row align-h="end">
        <div style="margin-top: -1.5vw; margin-right: 10vw;">
          <div id="redot" style="margin-right: 1vh"></div><span style="font-size: 1.6vw; font-weight: 400;">Live</span>
        </div>
      </b-row>
      <b-row id="title">
        <b-col cols=1 />
        <b-col id="header">
          <p> Challenges & Prizes </p>
        </b-col>
      </b-row>
      <b-row id="infoRow">
        <b-col cols=1 />
        <b-col>
          <p class="category"> Track Title </p>
          <p class="prizeItem"> Prize </p>
          <p class="info"> Place holder text.
          </p>
        </b-col>
        <b-col>
          <p class="category"> Track Title </p>
          <p class="prizeItem"> Prize </p>
          <p class="info">Place holder text.
          </p>
        </b-col>
        <b-col>
          <p class="category"> Track Title </p>
          <p class="prizeItem">Prize</p>
          <p class="info"> Place holder text.
          </p>
        </b-col>
        <b-col cols=1 />
      </b-row>

      <b-row style="margin-top: 10%;">
        <!-- <Flair /> -->
        <b-row class="FlairRow">
          <b-col>
            <!-- orange ZigZag -->
            <img
              class = "Flair"
              id = "OrangZigLeft"
              src = "../assets/Shapes/ZigZag/CoralZigZag.svg"
            />
          </b-col>
          <b-col>
            <!-- Green triangle -->
            <img
              class = "Flair"
              id = "GreenTrig"
              src = "../assets/Shapes/Triangle/GreenTriangle.svg"
            />
          </b-col>
          <b-col>
            <!-- Pink Grid -->
            <img
              class = "Flair"
              id = "PinkGrid"
              src = "../assets/Shapes/Grid/PinkSquareGrid.svg"
            />
          </b-col>
          <b-col>
            <!-- Orange Zigzag -->
            <img
              class = "Flair"
              id = "OrgZigRight"
              src = "../assets/Shapes/ZigZag/CoralZigZag.svg"
            />
          </b-col>
        </b-row>
        <b-row class="FlairRow">
          <b-col>
            <!-- Blue grid -->
            <img
              class = "Flair"
              id = "BlueCirGrid"
              src = "../assets/Shapes/Grid/BlueCircleGrid.svg"
            />
          </b-col>
          <b-col>
            <!-- Blue Circle -->
            <img
              class = "Flair"
              id = "BlueCircle"
              src = "../assets/Shapes/Circle/BlueThickCircle.svg"
            />
          </b-col>
          <b-col>
            <!-- Thin Orange Circle -->
            <img
              class = "Flair"
              id = "OrgThinCircle"
              src = "../assets/Shapes/Circle/CoralThinCircle.svg"
            />
          </b-col>
          <b-col>
            <!-- Thick Orange Circle -->
            <img
              class = "Flair"
              id = "OrgThickCircle"
              src = "../assets/Shapes/Circle/CoralThickCircle.svg"
            />
          </b-col>
          <b-col>
            <!-- Blue Square Grid -->
            <img
              class = "Flair"
              id = "BlueSqGrid"
              src = "../assets/Shapes/Grid/BlueSqGrid.svg"
            />
          </b-col>
        </b-row>
        <b-row class="FlairRow">
          <b-col>
            <!-- Green Circle -->
            <img
              class = "Flair"
              id = "GreenCircle"
              src = "../assets/Shapes/Circle/GreenThinCircle.svg"
            />
          </b-col>
          <b-col>
            <!-- Orange Grid -->
            <img
              class = "Flair"
              id = "OrgGrid"
              src = "../assets/Shapes/Grid/CoralCircleGrid.svg"
            />
          </b-col>
          <b-col>
            <!-- Blue triangle -->
            <img
              class = "Flair"
              id = "BlueTrig"
              src = "../assets/Shapes/Triangle/BlueTriangle.svg"
            />
          </b-col>
          <b-col>
            <!-- Green zigzag -->
            <img
              class = "Flair"
              id = "GreenZig"
              src = "../assets/Shapes/ZigZag/GreenZigZag.svg"
            />
          </b-col>
          <b-col>
            <!-- Red Circle -->
            <img
              class = "Flair"
              id = "PinkCircle"
              src = "../assets/Shapes/Circle/PinkThickCircle.svg"
            />
          </b-col>
        </b-row>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.Prizes {
}

.category {
  margin-top: 4vh;
  font-size: 1.3vw;
}

.info{
  font-weight: 300;
  font-size: 1.1vw;
  margin-top: -2vh;
}
.prizeItem {
  font-size: 1.25vw;
  margin-top: 3vh;
}
#header {
  font-weight: 300;
  font-size: 2vw;
}

#title{
  margin-top: 10vh;
}

#infoRow {
  margin-top: 6vh;
}

#bolder {
  font-weight: 700;
  text-align: center;
}

#redot{
  border: 1px solid #f05352;
  border-radius: 50px;
  background-color: #f05352;
  height: 0.75vw;
  width: 0.75vw;
  display: inline-block;

}

.Flair {
  width: 100%;
  height: auto;
  display: flex;
  overflow: visible;
}

.FlairRow {
  width: 100%;
}

#OrangZigLeft {
  max-width: 20%;
  margin-left: -5%;
}

#GreenTrig {
  max-width: 13%;
  margin-top: 20%;
  margin-left: 30%;
}

#PinkGrid {
  max-width: 12%;
  margin-left: 50%;
  margin-top: 5%;
}

#OrgZigRight {
  max-width: 20%;
  transform: rotate(50deg);
  margin-left: 70%;
}

#BlueCirGrid {
  max-width: 25%;
  margin-left: 35%;
}

#BlueCircle {
  max-width: 12%;
  margin-top: 40%;

}

#OrgThinCircle {
  max-width: 15%;
  margin-left: 30%;
  margin-top: 13%;
}

#OrgThickCircle {
  max-width: 13%;
  margin-left: 50%;
  margin-top: 22%;
}

#BlueSqGrid {
  max-width: 15%;
  transform: rotate(50deg);
  margin-left: 50%;
  margin-top: 30%;
}

#GreenCircle {
  max-width: 14%;
  margin-left: 20%;
  margin-top: 10%;
}

#OrgGrid {
  max-width: 30%;
  margin-left: 70%;
  margin-top: 15%;
}

#BlueTrig {
  max-width: 15%;
  margin-left: 100%;
  margin-top: -5%
}

#GreenZig {
  max-width: 30%;
  margin-left: 100%;
  transform: rotate(210deg);
}

#PinkCircle {
  max-width: 12%;
  margin-left: 97%;
}

</style>

<script>
  export default {
    name: "Faq",
    Components: {
    }
  };
</script>
