<template>
  <div class="Prizes">
    <Live />
    <b-container fluid>
      <b-row id="title">
        <b-col cols=1 />
        <b-col id="header">
          <p> Challenges & Prizes </p>
        </b-col>
      </b-row>
      <b-row id="infoRow">
        <b-col md="1" />
        <b-col sm="10" md="4" style="border-bottom: 1px solid grey; padding-bottom: 1vh; margin-bottom: 1vh;">
          <p class="category">Best Overall Hack </p>
          <p class="prizeItem"> Nintendo Switches</p>
          <p class="info">
            For the best overall hack made during the event!
          </p>
        </b-col>
        <b-col md="2" />
      </b-row>
      <b-row>
        <b-col md="1" />
        <b-col sm="10" md="3">
          <p class="category"> Next Gen Track </p>
          <p class="prizeItem"> Amazon Echo Sports </p>
          <p class="info"> Veterans risked their lives to let you sit in the
            comfort of your home, or at BostonHacks, and code. It’s time to give
            back and create solutions for problems countless veterans face every
            day.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Problem for the Ages Track</p>
          <p class="prizeItem"> Google Home Hub and 2 Lights Starter Pack </p>
          <p class="info">Learn how to create Internet of Things devices and
            robots to realize the dream of the smart home. Get your hands on
            state-of-the-art hardware and study the intimate interaction of
            humans and technology.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Back to the Future Track</p>
          <p class="prizeItem">Surface Go Tablets, Typecovers, and Surface Pens</p>
          <p class="info">
            To the team/project that best addreses one or more of the following
            StreetCaster Projects.
            <br />
            For more information visit:
              <a href="https://tinyurl.com/BostonStreetCaster">
                Boston Street Caster
              </a>
            <br />
            <b>Challenge 1:</b> Automate Boston’s Ground Truth Sidewalk Data <br />
            <b>Challenge 2:</b> Street Quality Indicators <br />
            <b>Challenge 3:</b> Park Quality Indicators <br />
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="1" />
        <b-col sm="10" md="4" style="border-top: 1px solid grey; border-bottom: 1px solid grey;">
          <p class="category"> Spark! Fellowship Award </p>
          <p class="prizeItem"> Spark! Fellowship</p>
          <p class="info">
            Winning idea will be awarded a Spark! Fellowship to continue work on
            their project through a semester-long spark! fellowship.
            Participants must be enrolled in Boston University and able to
            attend workshops on Mondays from 3:30-6:30pm (through and a design
            sprint February 9th and 10th 11-5pm. For more information:
            <a href="http://www.bu.edu/spark/students/spark-programs/#innovation-fellows">
              Spark Fellowship
            </a>
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="1" />
        <b-col sm="10" md="3">
          <p class="category"> Best use of GIPHY API </p>
          <p class="prizeItem"> 3D Printing Pen and GIPHY Engineering T-shirt for Each Team Member </p>
          <p class="info"> The best use of GIPHY API will be awarded to the team that most creatively leverages GIPHY's API in their project.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Liberty Mutual - Best Hack to Live Safe, More Secure Lives </p>
          <p class="prizeItem"> Winners Will Receive Drones for Each Team Member </p>
          <p class="info">-Must have a clearly defined problem
-Preferably polished<br>
-Fill out form at: https://sites.google.com/view/liberty-at-bostonhacks<br>
-BONUS POINTS for using the ShineAPI built by Liberty's Solaria Labs.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Twilio — Best use of Twilio API </p>
          <p class="prizeItem">Star Wars Millennium Falcon Waffle Makers</p>
          <p class="info">
            Best Use of the API.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="1" />
        <b-col sm="10" md="3" style="border-top: 1px solid grey; border-bottom: 1px solid grey;">
          <p class="category"> Best use of Algolia </p>
          <p class="prizeItem"> Casio CA-506C-5A Calculator Watch for Each Team Member </p>
          <p class="info"> Best use of Algolia.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Best use of Google Cloud Platform </p>
          <p class="prizeItem"> Google Home Minis for Each Team Member </p>
          <p class="info"> Best use of GCP.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Best Domain Name from Domain.com </p>
          <p class="prizeItem">Raspberry Pi and PiHut Essential Kit for each Team Member</p>
          <p class="info">
            Best domain name.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="1" />
        <b-col sm="10" md="3" style="border-top: 1px solid grey; border-bottom: 1px solid grey;">
          <p class="category"> Best IoT Hack Using a Qualcomm Device </p>
          <p class="prizeItem"> 410C Dragonboard for each Team Member </p>
          <p class="info"> Best IoT Hack Using a Qualcomm Device.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Best Chat Bot using Botkit and Cisco Webex Teams </p>
          <p class="prizeItem"> Power banks for each team member </p>
          <p class="info"> Best Chat Bot using Botkit and Cisco Webex.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Best use of HERE.com </p>
          <p class="prizeItem">Hacker gear and swag from HERE.com</p>
          <p class="info">
            Best user of HERE.com.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="1" />
        <b-col sm="10" md="3" style="border-top: 1px solid grey; border-bottom: 1px solid grey;">
          <p class="category"> Best use of Clarifai’s API </p>
          <p class="prizeItem"> Hacker gear from Clarifai for Each Team Member </p>
          <p class="info"> Best use of Clarifai's API.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Snap Kit Weekly Challenge </p>
          <p class="prizeItem"> Spectacles by Snapchat for Each Team Member </p>
          <p class="info"> Best use of Snap Kit.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Best Social Good Hack from Fidelity </p>
          <p class="prizeItem">$50 Gift Cards from Fidelity for Each Team Member</p>
          <p class="info">
            Best social good hack.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="1" />
        <b-col sm="10" md="3" style="border-top: 1px solid grey; border-bottom: 1px solid grey;">
          <p class="category"> Best Use of Authorize.net </p>
          <p class="prizeItem"> LS20 Gaming Headsets for Each Team Member </p>
          <p class="info"> Best use of Authorize.net.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Bose - Most creative use of Bose SoundTouch Speaker API </p>
          <p class="prizeItem"> Bose QuietComfort 35 II Noise Cancelling Headphones with Google assistant and Amazon Alexa Built-In Support </p>
          <p class="info"> Most creative use of Bose SoundTouch Speaker API.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> IBM - Best Use of IBM Cloud </p>
          <p class="prizeItem">Bose QuietComfort 35 II Noise Cancelling Headphones with Google assistant and Amazon Alexa Built-In Support</p>
          <p class="info">
            Best Use of IBM Cloud.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="1" />
        <b-col sm="10" md="3">
          <p class="category"> OneDB - Best Use of OneDB Platform </p>
          <p class="prizeItem"> $100 Amazon Gift Card for Each Team Member </p>
          <p class="info"> Best use of OneDb.
          </p>
        </b-col>
      </b-row>


      <Flair />
    </b-container>
  </div>
</template>

<style scoped>
.Prizes {
}

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

a {
  color: #ffffff;
  font-weight: 700;
}

.category {
  margin-top: 4vh;
  font-size: 1rem;
  font-weight: 700;
}

.info {
  font-weight: 300;
  font-size: 1rem;
  margin-top: -1vh;
}
.prizeItem {
  font-size: 1.2rem;
  margin-top: 3vh;
}
#header {
  font-weight: 300;
  font-size: 3rem;
}

#title {
  margin-top: 10vh;
}

#infoRow {
  margin-top: 6vh;
}

#bolder {
  font-weight: 700;
  text-align: center;
}

#redot {
  border: 1px solid #f05352;
  border-radius: 50px;
  background-color: #f05352;
  height: 0.75vw;
  width: 0.75vw;
  display: inline-block;
}
</style>

<script>
export default {
  name: "Faq",
  components: {
    Live,
    Flair
  }
};

import Live from "../components/Live.vue";
import Flair from "../components/Flair.vue";
</script>
