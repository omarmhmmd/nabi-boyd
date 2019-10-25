<template lang="html">
  <div id="menu">
    <img id = "menu-img" v-bind:src="selectedImage" />
    <div id="menu-nav">
      <router-link to="/work"><div id="WORK">work</div></router-link>
      <router-link to="/about"><div id="INFO">ABOUT</div></router-link>
      <router-link to="/contact"><div id="CONTACT">contact</div></router-link>
      <a target= "_blank" href="https://www.instagram.com/nabiboyd/"><div>@nabiboyd</div></a>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      images: [
        './images/LOG/LOG_001.jpg',
        './images/LOG/LOG_002.jpg',
        './images/LOG/LOG_003.jpg',
        './images/LOG/LOG_004.jpg',
        './images/LOG/LOG_005.jpg',
        './images/LOG/LOG_006.jpg',
        './images/LOG/LOG_007.jpg',
        './images/LOG/LOG_008.jpg',
        './images/LOG/LOG_009.jpg',
        './images/LOG/LOG_010.jpg',
        './images/LOG/LOG_011.jpg',
        './images/LOG/LOG_012.jpg',
        './images/LOG/LOG_013.jpg',
        './images/LOG/LOG_014.jpg',
        './images/LOG/LOG_015.jpg',
        './images/LOG/LOG_016.jpg',
        './images/LOG/LOG_017.jpg',
        './images/LOG/LOG_018.jpg',
        './images/LOG/LOG_019.jpg',
        './images/LOG/LOG_020.jpg',
        './images/LOG/LOG_022.jpg',
        './images/LOG/LOG_023.jpg',
        './images/LOG/LOG_024.jpg',
        './images/LOG/LOG_025.jpg',
        './images/LOG/LOG_026.jpg',
        './images/LOG/LOG_027.jpg',
        './images/LOG/LOG_028.jpg',
        './images/LOG/LOG_029.jpg',
        './images/LOG/LOG_030.jpg',
        './images/LOG/LOG_031.jpg',
        './images/LOG/LOG_032.jpg',
        './images/LOG/LOG_033.jpg',
        './images/LOG/LOG_034.jpg',
        './images/LOG/LOG_035.jpg',
        './images/LOG/LOG_036.jpg',
        './images/LOG/LOG_037.jpg',
        './images/LOG/LOG_038.jpg',
        './images/LOG/LOG_039.jpg'
      ],
      selectedImage: ''
    }
  },
  created () {
    const idx = Math.floor(Math.random() * this.images.length);
    this.selectedImage = this.images[idx]


    var x = window.matchMedia("(max-width: 800px)")
    console.log(x);
    if (x.matches) { // If media query matches
      this.interval = setInterval(() => this.changeImage(), 2500);
      // console.log("match");
    } else {
      // console.log("no match");
    }
    // this.interval = setInterval(() => this.changeImage(), 5000);
  },
  methods: {
    changeImage(event) {
      const idx = Math.floor(Math.random() * this.images.length);
      // console.log(idx);
      this.selectedImage = this.images[idx]
    }
  },
  mounted() {
    this.$root.$on('hoverImage', () => {
      const idx = Math.floor(Math.random() * this.images.length);
      // console.log(idx);
      this.selectedImage = this.images[idx]
    })

    this.$root.$emit('toMenu')
  }
}
</script>

<style lang="css">
#menu {
  background-color: red;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index: 1; */
}

#menu-img {
  position: absolute;
  height: 40vw;
}

#menu-nav a {
  color: black;
}

#menu-nav {
  position: absolute;
  font-family: 'AKZROM';
  line-height: 1.25em;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 2.125vw;
  text-transform: uppercase;
  visibility: hidden;
  opacity: 0;
}

#menu:hover #menu-nav {
  visibility: visible;
  opacity: 1;
}

#menu-nav > div:hover {
  background-color: black !important;
  color: white !important;
  cursor: pointer !important;
}

#menu-nav > a > div:hover {
  background-color: black !important;
  color: white !important;
  cursor: pointer !important;
}

@media only screen and (max-width: 768px) and (orientation : portrait) {
  #menu {
    height: 62.5vh;
  }

  #menu-img {
    width: 82.5vw;
    height: auto;
  }

  #menu-nav {
    font-size: 7.125vw;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'AKZROM';
    line-height: 1.25em;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    font-size: 5.125vw;
    text-transform: uppercase;
    visibility: hidden;
    opacity: 0; */
  }
}

@media only screen
and (min-device-width : 375px)
and (max-device-width : 812px)
and (orientation : landscape) {

  #menu-img {
    width: 50vw;
    height: auto;
  }

  #menu-nav {
    font-size: 5.125vw;
  }
}

</style>
