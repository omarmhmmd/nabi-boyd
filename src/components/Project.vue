<template>
<div id="project-container">
  <div id="project-page">
    <div id="project-splash">
      <div id="header">
        <router-link to="/">
          <h1>NABIBOYD</h1>
        </router-link>
        <a @click="$router.go(-1)">
          <div id="back-button">
            <img id = "arrow" v-bind:src="arrow" alt="">
            <div id="">WORK</div>
          </div>
        </a>
      </div>
      <div class="swiper-container">
        <swiper :options="swiperOption">
          <div v-for = "(image, index) in projectJson.projects[thisProject].IMAGES" class="swiper-slide">
            <img v-bind:src='projectJson.projects[thisProject].IMAGES[index]' alt="">
          </div>
        </swiper>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <div id="footer">
        <div id = "project-title">{{projectJson.projects[thisProject].NAME}}</div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div id="project-info">
      <div id="data-box">
        <div id="data">
          <div class="data-column">
            <div>
              <h1 class="data-type">LOCATION</h1>
              <h2 class="data-type-info">{{projectJson.projects[thisProject].LOCATION}}</h2>
            </div>
            <div>
              <h1 class="data-type">YEAR</h1>
              <h2 class="data-type-info">{{projectJson.projects[thisProject].YEAR}}</h2>
            </div>
            <div>
              <h1 class="data-type">TYPE</h1>
              <h2 class="data-type-info">{{projectJson.projects[thisProject].TYPE}}</h2>
            </div>
            <div>
              <h1 class="data-type">SIZE</h1>
              <h2 class="data-type-info">{{projectJson.projects[thisProject].SIZE}}</h2>
            </div>
            <div>
              <h1 class="data-type">SITE AREA</h1>
              <h2 class="data-type-info">{{projectJson.projects[thisProject].SITEAREA}}</h2>
            </div>
            <div>
              <h1 class="data-type">CLIENT</h1>
              <h2 class="data-type-info">{{projectJson.projects[thisProject].CLIENT}}</h2>
            </div>
          </div>
        </div>
          <div id="description">
            <div class="data-type">INFO</div>
            <div id="text">
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
      /**** SET IMAGE SWIPER ****/
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      /**** END IMAGE SWIPER ****/
      projectId: this.$route.params.id,
      thisProject:'',
      arrow: "/images/SVG/arrow0.svg"
    }
  },
  created() {
    /**** SET PROJECT PAGE REFRESH ****/
    this.$root.$emit('hideNB')
    /**** END PROJECT PAGE REFRESH ****/

    /**** SET PROJECT ID ****/
    for (var i = 0; i < projectJson.projects.length; i++) {
      if (this.projectId == projectJson.projects[i].TAG) {
        this.thisProject = i;
      }
    }
    /**** END PROJECT ID ****/
  },
  destroyed() {
    this.$root.$emit('showNB')
  },
  mounted() {
    /**** SET PROJECT PAGE REFRESH ****/
    this.$root.$emit('hideNB')
    /**** END PROJECT PAGE REFRESH ****/
  }
}
</script>


<style>
a:hover {
  cursor: pointer;
}
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
  padding-bottom: 5vh;
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
    padding-top: 2vh;
    height: 82.5vh;
    background-color: none;
    display: flex;
    justify-content: space-between;
  }

  #header {
    position: relative;
    font-size: 3.75vh;
  }

  #arrow {
    height: 2.75vh;
  }

  #footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    width: 17.5vh;
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

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 0;
    width: 0%;
    height: 100%;
    z-index: 10;
    /* background-size: 27px 44px;
    background-position: 50%;
    background-repeat: no-repeat; */
  }

  #data-box {
    display: flex;
    padding-top: 5vh;
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
