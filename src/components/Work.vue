<template>
  <div id="work">
    <div id="grid" class = "gridOne">
      <img v-bind:src="images[0]" alt="">
      <img v-bind:src="images[1]" alt="">
      <router-link to="/work/kno-beverage-house">
        <div id="work-hover">
          <img v-bind:src="images[2]" alt="">
          <div class="padded-multiline"><span>KNO BEVERAGE HOUSE</span></div>
        </div>
      </router-link>
      <img v-bind:src="images[3]" alt="">
    </div>
    <div id="grid" class = "gridTwo">
      <img v-bind:src="images[5]" alt="">
      <router-link to="/work/shepard-mesa-house">
        <div id="work-hover">
          <img v-bind:src="images[4]" alt="">
          <div class="padded-multiline"><span>SHEPARD MESA HOUSE</span></div>
        </div>
      </router-link>
      <img v-bind:src="images[6]" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        './images/hero/001.png',
        './images/hero/002.jpg',
        './images/hero/003.jpg',
        './images/hero/004.jpg',
        './images/hero/005.jpg',
        './images/hero/006.jpg',
        './images/hero/007.jpg'
      ],
    }
  },
}
</script>

<style scoped>
#work {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 70vw;
  padding-top: 5vh;
}

#grid {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 30vw;
  padding-bottom: 5vh;
}

#work-hover {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  position: relative;
}

.padded-multiline {
  position: absolute;
  /* background-color: red; */
  font-size: 4.25vw;
  visibility: hidden;
  opacity: 0;
}

#work-hover:hover .padded-multiline {
  visibility: visible;
  opacity: 1;
}

#work-hover:hover img {
  opacity: 0;
}

.padded-multiline span {
  background-color: black;
  color: white;
}

@media only screen and (max-width: 800px) {
  #work {
    /* height: 62.5vh; */
    display: flex;
    justify-content: space-around;
    /* width: 100vw; */
    background-color: none;
    align-items: center;
    align-content: center;
    padding-top: 0px;
    flex-direction: column;
  }

  img {
    width: 90vw;
    padding-bottom:5vh;
  }

  .padded-multiline {
    position: absolute;
    /* background-color: red; */
    font-size: 13.5vw;
    visibility: hidden;
    opacity: 0;
  }
}
</style>
