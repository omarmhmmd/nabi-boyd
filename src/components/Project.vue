<template>
<div id="project-container">
  <div id="project-page">
    <div id="project-splash">
      <div id="header">
        <router-link to="/" @click.native="toHome">
          <h1>NABIBOYD</h1>
        </router-link>
        <router-link to="/work" @click.native="toHome">
          <div id="back-button">
            <img id = "arrow" v-bind:src="arrow" alt="">
            <div id="">WORK</div>
          </div>
        </router-link>
      </div>
      <!-- <div id="image-container"> -->
        <!-- <img src="@/images/projects/Shephard/001.jpg" alt=""> -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <!-- <img v-bind:src="images[0]" alt=""> -->
              <img v-bind:src='projectJson.projects[thisProject].IMAGES[0]' alt="">
            </div>
            <div class="swiper-slide">
              <!-- <img v-bind:src="images[1]" alt=""> -->
              <img v-bind:src='projectJson.projects[thisProject].IMAGES[1]' alt="">
            </div>
            <div class="swiper-slide">
              <!-- <img v-bind:src="images[2]" alt=""> -->
              <img v-bind:src='projectJson.projects[thisProject].IMAGES[2]' alt="">
            </div>
            <div class="swiper-slide">
              <!-- <img v-bind:src="images[3]" alt=""> -->
              <img v-bind:src='projectJson.projects[thisProject].IMAGES[3]' alt="">
            </div>
            <div class="swiper-slide">
              <!-- <img v-bind:src="images[4]" alt=""> -->
              <img v-bind:src='projectJson.projects[thisProject].IMAGES[4]' alt="">
            </div>
          </div>
          <!-- Add Pagination -->
          <!-- <div class="swiper-pagination"></div> -->
          <!-- Add Arrows -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      <!-- </div> -->
      <div id="footer">
        <!-- <div id = "project-title">SHEPARD MESA HOUSE</div> -->
        <div id = "project-title">{{projectJson.projects[thisProject].NAME}}</div>
        <!-- <h2>5/6</h2> -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div id="project-info">
      <div id="data-box">
        <div id="data">
          <div class="data-column">
            <div>
              <h1 class="data-type">CLIENT</h1>
              <!-- <h2 class="data-type-info">Self-Initiated</h2> -->
              <h2 class="data-type-info">{{projectJson.projects[thisProject].CLIENT}}</h2>
            </div>
            <div>
              <h1 class="data-type">YEAR</h1>
              <!-- <h2 class="data-type-info">2016-2019</h2> -->
              <h2 class="data-type-info">{{projectJson.projects[thisProject].YEAR}}</h2>
            </div>
            <div>
              <h1 class="data-type">TYPE</h1>
              <!-- <h2 class="data-type-info">Single Family</h2> -->
                <h2 class="data-type-info">{{projectJson.projects[thisProject].TYPE}}</h2>
            </div>
            <div>
              <h1 class="data-type">LOCATION</h1>
              <!-- <h2 class="data-type-info">Carpinteria, CA</h2> -->
              <h2 class="data-type-info">{{projectJson.projects[thisProject].LOCATION}}</h2>
            </div>
            <div>
              <h1 class="data-type">SITE AREA</h1>
              <!-- <h2 class="data-type-info">38,000 sf</h2> -->
                <h2 class="data-type-info">{{projectJson.projects[thisProject].SITEAREA}}</h2>
            </div>
            <div>
              <h1 class="data-type">FLOOR AREA</h1>
              <!-- <h2 class="data-type-info">1,800 sf</h2> -->
                <h2 class="data-type-info">{{projectJson.projects[thisProject].SIZE}}</h2>
            </div>
          </div>
          <!-- <div class="data-column">
              <div>
                <h1 class="data-type">LOCATION</h1>
                <h2>Carpinteria, CA</h2>
              </div>
              <div>
                <h1 class="data-type">SITE AREA</h1>
                <h2>38,000 sf</h2>
              </div>
              <div>
                <h1 class="data-type">FLOOR AREA</h1>
                <h2>1,800 sf</h2>
              </div>
            </div> -->
        </div>
          <div id="description">
              <div class="data-type">INFO</div>
              <div id="text">
                <!-- <div>Shepard Mesa House is a new single family home situated on a steep Cherimoya orchard in the foothills
                of Carpinteria designed for a family of four.  The neighborhood consists of dispersed homes along a single
                road leading up and around the crown of the hill with steep slopes on all sides.
                Sited diagonally to the contours of the hill, the house slopes with the natural fall of the land with the
                program gathered under a single gabled roof above.  The house is organized across three levels which correspond to the slope of the land.
                </div>

                <div class = "indent">The experience of moving through the site and house is synchronized--one gets the experience of being both inside the orchard and above it.
                Bedrooms are located at the lower elevations where they are nestled into the working orchard around them.  At this elevation, the cherimoya trees
                provide the most privacy as the coastal hills peek out above and through them.  The main space on the upper tier opens up to the downslope and affords
                the most expansive views.  Neighboring homes are just out of sight as the view stretches out across the valley to the backside of Rincon Mountain.
              </div> -->
              {{projectJson.projects[thisProject].DESCRIPTION}}
              </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import projectJson from '../json/nabiboyd001.js'

export default {
  data() {
    return {
      projectJson,
      projectId: this.$route.params.id,
      thisProject: 1,
      arrow: "./images/SVG/arrow0.svg"
    }
  },
  methods: {
    toWork: function() {
      this.$root.$emit('toWork')
    },
    toHome: function() {
      this.$root.$emit('toHome')
    }
  },
  mounted() {
    /**** SET PROJECT ID ****/
    for (var i = 0; i < projectJson.projects.length; i++) {
      if (this.projectId == projectJson.projects[i].TAG) {
        this.thisProject = i;
      }
    }
    /**** END PROJECT ID ****/

    /**** SET PROJECT PAGE REFRESH ****/
    this.$root.$emit('toProject')
    /**** END PROJECT PAGE REFRESH ****/

    /**** SET IMAGE SWIPER ****/
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    /**** END IMAGE SWIPER ****/
  }
}
</script>


<style>
#project-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}

#project-page {
  background-color: none;
  display: flex;
  flex-direction: column;
  width: 92.5vw;
}

#project-splash {
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  height:100vh;
  justify-content: space-around;
}

#header {
  display: flex;
  justify-content: space-between;
  font-size: 2vw;
  flex-direction: row-reverse;
  align-items: center;
}

#arrow {
  height: 2vw;
}

#back-button {
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 10vw;
  justify-content: space-between;
}

#project-title {
  background-color: black;
  color: white;
  padding: 5px;
  position: absolute;
}

.swiper-container {
  width: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.swiper-pagination {
  text-align: right;
  font-size: 2vw;
}

.swiper-slide img {
  width: auto;
  height: 75vh;
}

#footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.25vw;
}

#project-info {
  /* padding-bottom: 10vh; */
}

#data {
  display: flex;
  width: 17.5vw;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
}

#data-box {
  display: flex;
}

.data-column div {
  padding-bottom: 2vh;
  line-height: 25px;
}

.data-type {
  display: inline;
  background-color: black;
  color: white;
  padding: 0 3.5px 0 3.5px;
  font-size: 1.5vw;
}

.data-type-info {
  font-size: 1.75vw;
}

#description {
  /* background-color: red; */
  width: 75vw;
  font-size: 1.75vw;
  line-height: 25px;
  /* hyphens: auto; */
}

#text {
  line-height: normal;
}

.indent {
  text-indent: 5.5vw;
}

@media only screen and (max-width: 800px) {
  #project-splash {
    height: 87.5vh;
  }

  #header {
    font-size: 3vh;
  }

  #arrow {
    height: 2.75vh;
  }

  #footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* font-size: 2.25vw; */
  }

  .swiper-pagination {
    text-align: right;
    font-size: 3vh;
  }

  #project-title {
    font-size: 6vw;
  }

  #back-button {
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 15vh;
    justify-content: space-between;
  }

  .swiper-slide {
    display: flex;
    align-content: center;
  }

  .swiper-slide img {
    width: 90vw;
    height: auto;
    display: flex;
    justify-content: center;
    /* padding-top: 20vh; */
  }

  #data-box {
    display: flex;
    flex-direction: column;
  }

  #description {
    width: 90vw;
    font-size: 6vw;
    /* line-height: 30px; */
  }

  .indent {
    text-indent: 10vw;
  }

  .data-column {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    /* padding-top: 0vh; */
    /* background-color: red; */
  }

  #data {
    display: flex;
    width: 90vw;
    flex-direction: column;
  }

  .data-column {
    /* height: auto; */
    display: flex;
    justify-content: space-between;
  }

  .data-column div {
    padding-bottom: 2.5vh;
    line-height: 4vh;
  }

  .data-type {
    font-size: 5.5vw;
  }

  .data-type-info {
    font-size: 6vw;
  }
}
</style>
