<template>
  <div id="app">


      <div class="navContain">


        <b-navbar toggleable="md" type="dark" variant="info" class="desktopHide" style="background-color: #6b6691 !important">

          <b-navbar-toggle target="nav_collapse" style="background-color: #6b6691"></b-navbar-toggle>

          <b-collapse is-nav id="nav_collapse" style="background-color: #6b6691">

            <b-navbar-nav style="background-color: #6b6691; font-color:white;">
              <b-nav-item><router-link class="routelink" to="/">Home</router-link></b-nav-item>
              <b-nav-item><router-link class="routelink" to="/faq">FAQ</router-link></b-nav-item>
              <b-nav-item><router-link class="routelink" to="/schedule">Schedule</router-link></b-nav-item>
              <b-nav-item><router-link class="routelink" to="/map">Map</router-link></b-nav-item>
              <b-nav-item><router-link class="routelink" to="/resources">Resources</router-link></b-nav-item>
              <b-nav-item><router-link class="routelink" to="/workshops">Workshops</router-link></b-nav-item>
              <b-nav-item><router-link class="routelink" to="/prizes">Prizes</router-link></b-nav-item>
            </b-navbar-nav>

          </b-collapse>
        </b-navbar>



        <b-navbar fixed="top" id="nav" class="mobileHide">

            <div>
              <img id="BHacks" src ="./assets/Logos/BHacks_HorzWhte.svg"/>
            </div>

            <div >
              <router-link class="routelink" to="/">Home</router-link>
              <router-link class="routelink" to="/faq">FAQ</router-link>
              <router-link class="routelink" to="/schedule">Schedule</router-link>
              <router-link class="routelink" to="/map">Map</router-link>
              <router-link class="routelink" to="/resources">Resources</router-link>
              <router-link class="routelink" to="/workshops">Workshops</router-link>
              <router-link class="routelink" to="/prizes">Prizes</router-link>
            </div>

      </b-navbar>
      <router-view/>

    </div>

  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:300,700|Roboto:300,400,700');

body {
  width: 100%;
  height: 100%;
  background-color:#a73d59;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;

  background-image: linear-gradient(
    to bottom,
    hsl(243.05, 46.46%, 24.9%) 0%,
    hsl(243.26, 46.43%, 24.91%) 14.8%,
    hsl(244.67, 46.23%, 24.93%) 27.2%,
    hsl(248.25, 45.7%, 25.01%) 37.3%,
    hsl(254.52, 44.68%, 25.15%) 48.5%,
    hsl(263.59, 43.09%, 25.37%) 53.1%,
    hsl(275.57, 40.85%, 25.69%) 57.5%,
    hsl(290.88, 37.97%, 26.11%) 61.9%,
    hsl(308.95, 38.24%, 28.23%) 65.7%,
    hsl(322.67, 41.38%, 32.25%) 69.1%,
    hsl(332.78, 43.77%, 36.63%) 73.5%,
    hsl(340.57, 45.6%, 41.33%) 78.2%,
    hsl(346.8, 46.99%, 46.33%) 83.5%,
    hsl(351.93, 51.26%, 51.62%) 90.7%,
    hsl(356.26, 65.21%, 57.16%) 99.1%,
  );
}

/* @media (max-width: 700px){
  body{
    width: 100%;
    height: 100vw;
  }
} */

@media (max-width: 750px) {
  .mobileHide {
    display: none !important;
  }
  #nav {
  }
}
@media (min-width: 751px) {
  .desktopHide {
    display: none !important;
  }
  #app {
    padding-top: 9vw;
  }
}

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  font-size: 1.25rem;
}

#nav {
  background-color: #6b6691;
  width: 100%;
  height: 5vw;

  display: flex;
  justify-content: flex-end;
  a {
    font-weight: 400;
    font-size: 1.1vw;
    color: #ffffff;
    &.router-link-exact-active {
      color: #928aa7;
    }
  }
}


.routelink{
  margin-right: 5vw;
  margin-bottom: 10vh;
  height: 100%;
  color: white;
}
.routelink:visited{
  color: white;
}
#BHacks {
  height: 11vw;
  width: 11vw;
  margin-right: 20vw;
}
</style>
