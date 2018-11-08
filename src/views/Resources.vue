<template>
  <div class="resources">
    <Live />
    <b-container fluid>
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
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics">Javascript Basics</a> <br/>
            <a href="https://www.youtube.com/watch?v=x8u0n4dT-WI">Google Chrome DevTools</a> <br />
            <a href="https://www.packtpub.com/books/content/how-get-started-redux-react-native">React Native with Redux</a> <br />
            <a href="https://firebase.googleblog.com/2016/01/the-beginners-guide-to-react-native-and_84.html">React Native with Firebase</a>
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
            <a href="scikit-learn.org">Scikit</a> <br />
            <a href="https://keras.io">Keras</a><br />
            <a href="http://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html">Pytorch</a> <br />
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
            <a href="http://simmetri.com/tutorials.html">Simmetri</a> <br />
            <a href="https://www.youtube.com/channel/UCLhvQir_XFbmMnmODLFQqqA">Simmetri Youtube Channel</a> <br />
            <a href="https://unity3d.com/learn ">Unity</a><br/>
            <a href="https://docs.unity3d.com/Manual/android-GettingStarted.html ">Unity and Android</a><br/>
            <a href="https://www.assetstore.unity3d.com/en/#!/content/32647">Unity and OpenVR (Vive and Oculus Rift)</a> <br/>
          </b-col>
          <b-col cols=2 />
        </b-row>

        <Flair />
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
  font-size: 2rem;
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
  font-size: 1rem;
}


/* unvisited link */
a:link {
    color: #2FB5E3;
}

/* visited link */
a:visited {
    color: #f05352;
}

/* mouse over link */
a:hover {
    color: #f05352;
}

/* selected link */
a:active {
    color: #f05352;
}


</style>

<script>
  export default {
    name: "Resources",
    components: {
      Live,
      Flair
    }
  };
  import Live from "../components/Live.vue"
  import Flair from "../components/Flair.vue"

</script>
