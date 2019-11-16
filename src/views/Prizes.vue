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
          <p class="category"> Best Overall Hack </p>
          <p class="prizeItem"> Drones </p>
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
          <p class="category"> Best use of Transposit </p>
          <p class="prizeItem"> $50 Amazon Gift Card for Each Team Member </p>
          <p class="info"> Only 24 hours to create your project? No problem, Create an app and compose different APIs together with the world's first API composition platform, Transposit.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Bose </p>
          <p class="prizeItem"> TBD </p>
          <p class="info"> TBD </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Facebook </p>
          <p class="prizeItem"> TBD </p>
          <p class="info"> TBD </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="1" />
        <b-col sm="10" md="3" style="border-top: 1px solid grey; border-bottom: 1px solid grey;">
          <p class="category"> Capital One </p>
          <p class="prizeItem"> $250 Amazon Gift Card/team member </p>
          <p class="info"> TBD
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Raytheon Challenge </p>
          <p class="prizeItem"> TBD </p>
          <p class="info"> TBD </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Best use of Google Cloud </p>
          <p class="prizeItem"> Google Home Mini for Each Team Member </p>
          <p class="info"> Build your hackathon project with a suite of secure storage, powerful compute, and integrated data analytics products provided by Google Cloud. See full list of products here: g.co/cloud. </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="1" />
        <b-col sm="10" md="3" style="border-top: 1px solid grey;">
          <p class="category"> Best Domain Name from Domain.com </p>
          <p class="prizeItem"> Domain.com Backpack </p>
          <p class="info"> Register a domain using Domain.com during the weekend. Each team may submit one entry per person on the team. Each winning team member will receive a Domain.com branded backpack. </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Best Automation Hack with UiPath </p>
          <p class="prizeItem"> UiPath/MLH Backpack and an Internship Interview </p>
          <p class="info"> Build an automation hack using UiPath! Each winning team member will receive a UiPath/MLH Branded Backpack and an opportunity to interview for a UiPath Internship in 2020 with a high recommendation! </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Best use of Twilio </p>
          <p class="prizeItem"> $50 Amazon Gift Card for Each Team Member </p>
          <p class="info"> Create a hack using Twilio's powerful communications API. Do things like send SMS messages, phone calls, email, and much more in your project. The team that has the best use of Twilio will win a $50 Amazon gift card per team member. </p>
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
