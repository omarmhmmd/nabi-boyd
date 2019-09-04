<template>
  <!-- <div id="work">
    <div id="grid">
      <router-link to="/project"><img src="@/images/hero/005.jpg" alt=""></router-link>
      <img src="@/images/hero/001.png" alt="">
      <img src="@/images/hero/002.jpg" alt="">
      <img src="@/images/hero/003.jpg" alt="">
    </div>
    <div id="grid">
      <img src="@/images/hero/004.jpg" alt="">
      <div id="work-hover">
        <img src="@/images/projects/Shephard/005.jpg" alt="">
        <div class="padded-multiline"><span>SHEPARD MESA HOUSE</span></div>
      </div>
      <img src="@/images/hero/006.jpg" alt="">
      <img src="@/images/hero/007.jpg" alt="">
    </div>
  </div> -->
  <div id="work">
    <div id="grid">
      <router-link to="/project"><img src="https://picsum.photos/400/300" alt=""></router-link>
      <img src="https://picsum.photos/200/300" alt="">
      <img src="https://picsum.photos/200/200" alt="">
      <img src="https://picsum.photos/300/300" alt="">
    </div>
    <div id="grid">
      <img src="https://picsum.photos/300/300" alt="">
      <div id="work-hover">
        <img src="https://picsum.photos/500/300" alt="">
        <div class="padded-multiline"><span>SHEPARD MESA HOUSE</span></div>
      </div>
      <img src="https://picsum.photos/300/300" alt="">
      <img src="https://picsum.photos/300/400" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImage: ''
    }
  }
}
</script>

<style scoped>
#work {
  display: flex;
  justify-content: space-around;
  width: 65vw;
  align-content: center;
  padding-top: 50px;
}

#grid {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 30vw;
  padding-bottom: 25px;
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
  font-size: 50px;
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
    display: flex;
    height: auto;
    justify-content: space-around;
    width: 100vw;
    background-color: none;
    align-content: center;
    padding-top: 0px;
    z-index: -1;
  }

  img {
    width: 45vw;
    padding-bottom: 2.5vh;
  }

}
</style>
