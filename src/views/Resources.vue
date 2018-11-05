<template>
  <div class="resources">
    <b-container>
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
        </b-row>
        <b-row class="info">
          <b-col cols=1 />
          <b-col>
            Links and Resources go here
          </b-col>
        </b-row>
      </b-row>
        <b-row class="sectionHeader">
          <b-col cols=1 />
          <b-col>
            Track Specific Resources
          </b-col>
        </b-row>
        <b-row class="subtext">
          <b-col cols=1 />
          <b-col>
            Web and Mobile Development:
          </b-col>
        </b-row>
        <b-row class="info">
          <b-col cols=1 />
          <b-col>
            Javascript Basics: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics <br/>
            Google Chrome DevTools: https://www.youtube.com/watch?v=x8u0n4dT-WI <br />
            React Native with Redux: https://www.packtpub.com/books/content/how-get-started-redux-react-native <br />
            React Native with Firebase: https://firebase.googleblog.com/2016/01/the-beginners-guide-to-react-native-and_84.html
          </b-col>
        </b-row>
        <b-row class="subtext">
          <b-col cols=1 />
          <b-col>
            Machine Learning
          </b-col>
        </b-row>
        <b-row class="info">
          <b-col cols=1 />
          <b-col>
            Scikit: scikit-learn.org <br />
            Keras: https://keras.io <br />
            Pytorch: http://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html <br />
          </b-col>
        </b-row>
        <b-row class="subtext">
          <b-col cols=1 />
          <b-col>
            Virtual and Augmented Reality
          </b-col>
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


</style>
