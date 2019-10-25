<template>
  <div id="work-container">
    <div v-for = "(image, index) in workJson.projects" id="work">
      <router-link :to="{path:'/work/' + workJson.projects[index].TAG}">
        <div id="work-block" :style="{ backgroundImage: `url(${workJson.projects[1].IMAGES[0]})` }">
          <div class="block-multiline"><span>{{workJson.projects[index].NAME}}</span></div>
        </div>
        <div id="work-block-mobile">
          <div class="block-multiline"><span>{{workJson.projects[index].NAME}}</span></div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import workJson from '../json/nabiboyd001.js'

export default {
  data() {
    return {
      workJson
    }
  },
}
</script>

<style scoped>
#work-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 5vh;
  height: auto;
  padding-left: 3.5vw;
}

#work-block {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 30vw;
  height: 21vw;
  margin-bottom: 5vh;
  background-size: 0%;
}

#work-block-mobile {
  display: none;
}

#work-block:hover {
  background-position: center;
  background-size: 150%;
  background-repeat: no-repeat;
}

.block-multiline {
  padding-left: 1vw;
  position: relative;
  font-size: 5vw;
  width: 75%;
  /* background-color: red; */
}

.block-multiline span {
  background-color: black;
  color: white;
}

@media only screen and (max-width: 768px) and (orientation : portrait) {
  #work-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 5vh;
    height: auto;
    padding-left: 0vw;
  }

  #work-block {
    display: none;
  }

  #work-block-mobile {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 85vw;
    height: auto;
    margin-bottom: 10vh;
    background-size: 0%;
  }

  .block-multiline {
    padding-left: 0vw;
    position: relative;
    font-size: 12.5vw;
    width: 85%;
    /* background-color: red; */
  }

  .block-multiline span {
    background-color: black;
    color: white;
  }
}


@media only screen
and (min-device-width : 375px)
and (max-device-width : 812px)
and (orientation : landscape) {
  #work-block {
    width: 25vw;
  }
}
</style>
