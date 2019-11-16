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
          <p class="prizeItem"> UberEats GiftCards for Each Team Member </p>
          <p class="info"> School only prepares us for so much. In service of the next generation, think either about tools you wish you had to help you learn difficult concepts school or the skills you wish you had entering the real world.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Problem for the Ages Track</p>
          <p class="prizeItem"> FitBits for Each Team Member </p>
          <p class="info">It's easy to think that some problems are too big to solve today. Instead of leaving them for the future, reflect on how we can build products that tackle issues that will be affecting us for generations to come. Examples include climate change, the refugee crisis, and racial & gender equity.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Back to the Future Track</p>
          <p class="prizeItem"> Tile Trackers for Each Team Member</p>
          <p class="info">
            As you get older, doing ordinary things can seem like an impossible task. Help your future self out by developing tools that make accomplishing day-to-day tasks for elderly people easier than ever.</p>
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
        <b-col sm="10" md="3" style="border-top: 1px solid grey; border-bottom: 1px solid grey;">
          <p class="category"> BU Spark! Computational Art Prize </p>
          <p class="prizeItem"> $250 for the team </p>
          <p class="info"> Create a project that is grounded in and highlights the intersection of computer science/engineering. We encourage you to push the limits of the tools made avaible to you this weekend. Discover computational art <a href="https://franciscoalarcon.info/">here</a>.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> BU Spark! 0 Waste Prize </p>
          <p class="prizeItem"> $250 for the team </p>
          <p class="info"> Create sustainability project that promotes more sustainable everyday living! Your sustainability project can address issues in climate, waste, water, transportation, food, buildings, purchasing, and many more. The possibilites are endless! </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="1" />
        <b-col sm="10" md="3">
          <p class="category"> AstraZeneca </p>
          <p class="prizeItem"> $50 Amazon Gift Card for Each Team Member </p>
          <p class="info"> AstraZeneca will be offering 2 challenges this year. The first being environmental sustainability; how can we use things like AR, AI, Gamification, Mobile, AR, Wearables to improve health, footprint, and recycling? Digital Health is the topic for our second challenge; how can we use technology to ensure medication adherence for example?
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Bose </p>
          <p class="prizeItem">Noise Cancelling Headphone 700 for 5 </p>
          <p class="info"> Hack something with BoseAR SDK or Bose SoundTouch API! </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Best use of Twilio </p>
          <p class="prizeItem"> littleBits R2D2 Droid Kit, 4 </p>
          <p class="info"> Create a hack using Twilio's powerful communications API. Do things like send SMS messages, phone calls, email, and much more in your project. The team that has the best use of Twilio will win a littleBits R2D2 Droid Kit per team member. </p>
        </b-col>
        <!-- <b-col sm="10" md="3">
          <p class="category"> Facebook </p>
          <p class="prizeItem"> TBD </p>
          <p class="info"> TBD </p>
        </b-col> -->
      </b-row>
      <b-row>
        <b-col md="1" />
        <b-col sm="10" md="3" style="border-top: 1px solid grey; border-bottom: 1px solid grey;">
          <p class="category"> Capital One </p>
          <p class="prizeItem"> $250 Amazon Gift Card/team member </p>
          <p class="info"> We will give $250 Amazon Gift Card to each team member for the team who comes up with the Best Financial Hack.
          </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Raytheon Challenge </p>
          <p class="prizeItem"> Google Home for 5 </p>
          <p class="info"> Overall Tracks </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Best use of Google Cloud </p>
          <p class="prizeItem"> Grand Prize: Cloud Patagonia Backpacks, Cloud Pillows, Cloud Trophies, and Cloud Water Bottles for each team member.<br>
          Second Place: Google Home Minis for each team member. </p>
          <p class="info"> Use any Google Cloud product <a href="cloud.google.com/products"> (cloud.google.com/products) </a> to be eligible. </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="1" />
        <!-- <b-col sm="10" md="3" style="border-top: 1px solid grey;">
          <p class="category"> Best Domain Name from Domain.com </p>
          <p class="prizeItem"> Domain.com Backpack </p>
          <p class="info"> Register a domain using Domain.com during the weekend. Each team may submit one entry per person on the team. Each winning team member will receive a Domain.com branded backpack. </p>
        </b-col>
        <b-col sm="10" md="3">
          <p class="category"> Best Automation Hack with UiPath </p>
          <p class="prizeItem"> UiPath/MLH Backpack and an Internship Interview </p>
          <p class="info"> Build an automation hack using UiPath! Each winning team member will receive a UiPath/MLH Branded Backpack and an opportunity to interview for a UiPath Internship in 2020 with a high recommendation! </p>
        </b-col> -->

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
  color: #f05352;
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
