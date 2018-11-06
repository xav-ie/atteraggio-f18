<template>
  <div class="resources">
    <b-container fluid>
      <b-row align-h="end">
        <div style="margin-top: -1.5vw; margin-right: 10vw;">
          <div id="redot" style="margin-right: 1vh"></div><span style="font-size: 1.6vw; font-weight: 400;">Live</span>
        </div>
      </b-row>
      <b-row id="title">
        <b-col cols=1 />
        <b-col id="header">
          <p> Resources </p>
        </b-col>
      </b-row>
        <b-row class="sectionHeader">
          <b-col cols=1 />
          <b-col>
            API Resources
          </b-col>
        </b-row>
        <b-row class="subtext">
          <b-col cols=1 />
          <b-col>
            The following links are dummy links since I have no idea what type of
            content API Resources contsists of, and it’s not included in the
            content doc. If there needs to be any body content it will go in this text box.
          </b-col>
          <b-col cols=2 />
        </b-row>
        <b-row class="info">
          <b-col cols=1 />
          <b-col>
            Links and Resources go here
          </b-col>
          <b-col cols=2 />
        </b-row>
      </b-row>
        <b-row class="sectionHeader">
          <b-col cols=1 />
          <b-col>
            Track Specific Resources
          </b-col>
          <b-col cols=2 />
        </b-row>
        <b-row class="subtext">
          <b-col cols=1 />
          <b-col>
            Web and Mobile Development:
          </b-col>
          <b-col cols=2 />
        </b-row>
        <b-row class="info">
          <b-col cols=1 />
          <b-col>
            Javascript Basics: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics <br/>
            Google Chrome DevTools: https://www.youtube.com/watch?v=x8u0n4dT-WI <br />
            React Native with Redux: https://www.packtpub.com/books/content/how-get-started-redux-react-native <br />
            React Native with Firebase: https://firebase.googleblog.com/2016/01/the-beginners-guide-to-react-native-and_84.html
          </b-col>
          <b-col cols=2 />
        </b-row>
        <b-row class="subtext">
          <b-col cols=1 />
          <b-col>
            Machine Learning
          </b-col>
          <b-col cols=2 />
        </b-row>
        <b-row class="info">
          <b-col cols=1 />
          <b-col>
            Scikit: scikit-learn.org <br />
            Keras: https://keras.io <br />
            Pytorch: http://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html <br />
          </b-col>
          <b-col cols=2 />
        </b-row>
        <b-row class="subtext">
          <b-col cols=1 />
          <b-col>
            Virtual and Augmented Reality
          </b-col>
          <b-col cols=2 />
        </b-row>
        <b-row class="info">
          <b-col cols=1 />
          <b-col>
            Simmetri: http://simmetri.com/tutorials.html <br />
            Simmetri Youtube Channel: https://www.youtube.com/channel/UCLhvQir_XFbmMnmODLFQqqA <br />
            Unity: https://unity3d.com/learn <br/>
            Unity and Android: https://docs.unity3d.com/Manual/android-GettingStarted.html <br/>
            Unity and OpenVR (Vive and Oculus Rift): https://www.assetstore.unity3d.com/en/#!/content/32647 <br/>
          </b-col>
          <b-col cols=2 />
        </b-row>

        <b-row>
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

.resources {
    height: 100%
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

#header {
  margin-top: 11vh;
  font-weight: 300;
  font-size: 2vw;
}

.sectionHeader {
  font-weight: 700;
  margin-top: 4%;
}

.subtext {
  margin-top: 3%;
  font-weight: 700;
}

.info {
  margin-top: 2%;
  font-weight: 300;
  font-size: 1.1vw;
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
