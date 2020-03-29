<template lang="html">
  <div id="info-container">
    <div id="info-nest">
      <img id = "info-images" v-bind:src="images[0]" alt="">
      <div>
        <span>NABI BOYD</span> is a design office based in Los Angeles and Santa Barbara, California.
        After working for notable architects on diverse projects ranging from residential and cultural buildings to industrial design,
        we established Nabi Boyd in 2018.
      </div>
      <br>
        We continue in the California tradition of creative, contextual design that emphasizes a connection to the landscape and natural environment. We bring with us an obsession with design, craft and building. We tend toward thoughtful, simple, warm and light, but encourage the wild, playful and curious. We’ve found that the best projects grow out of engaging with the unique qualities of each site and the people who use them.
      <br>
        <!-- Please <a href="mailto: info@nabiboyd.com">get in touch</a> if you have a project you would like to discuss. -->
      <img id = "info-images" v-bind:src="images[1]" alt="">
      <!-- <div>
        <span>Services:</span>
        Building Design through Construction Administration, Renovations, Interiors, Environmental Graphics/Identity and Product Design
      </div> -->
      <div>
        <span>Mora Nabi</span> was born in Kabul, Afghanistan and grew up in the San Francisco Bay Area.
        She holds a Masters of Architecture from <a target="_blank" href="http://www.aud.ucla.edu/">UCLA</a> and
        Bachelor of Arts in Architecture from <a target="_blank" href="https://ced.berkeley.edu/academics/architecture">UC Berkeley</a>.
        Mora previously worked in the offices of <a target="_blank" href="https://www.foga.com/">Gehry Partners</a> and
        <a target="_blank" href="https://www.ball-nogues.com/">Ball-Nogues Studio.</a>
      </div>
      <img id = "info-images" v-bind:src="images[2]" alt="">
      <div>
        <span>Sean Boyd</span> grew up in Carpinteria, California. He holds a Masters of Architecture from <a target="_blank" href="http://www.aud.ucla.edu/">UCLA</a>
        and a Bachelor of Arts in English Literature from <a target="_blank" href="https://ced.berkeley.edu/academics/architecture">UC Berkeley</a>.
        Sean previously worked in the office of <a target="_blank" href="http://glform.com/">Greg Lynn FORM</a> where he led building and design projects for Nike, Swarovski, and Google among others.
      </div>
      <img id = "info-images" v-bind:src="images[3]" alt="">
      <img id = "info-images" v-bind:src="images[4]" alt="">
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      images: [
        './images/ABOUT/001.jpg',
        './images/ABOUT/002.jpg',
        './images/ABOUT/003.jpg',
        './images/ABOUT/004.jpg',
        './images/ABOUT/005.jpg'
      ],

    }
  },
  methods: {

  },
}
</script>

<style lang="css">
  #info-container {
    line-height: 2.5vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 2vw;
    width: 61vw;
    padding-top: 7.5vh;
    /* height: 100vh; */
  }

  #info-nest {
    /* height: 75vh; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  #info-images {
    height: 40vw;
    padding: 2vw 0 2vw 0;
  }

  #info-container a {
    text-decoration: underline;
  }

  #info-container a:hover {
    text-decoration: none;
    background-color: black;
    color: white;
  }

  #info-container span {
    color: white;
    background-color: black;
  }

  @media only screen and (max-width: 768px) and (orientation : portrait) {
    #info-container {
      display: flex;
      height: auto;
      /* font-weight: bold; */
      justify-content: center;
      line-height: 6.5vw;
      font-size: 5vw;
      width: 90vw;
      padding-top: 0vh;
    }

    #info-nest {
      height: auto;
      display: flex;
      justify-content: space-between;
      /* text-align: justify; */
    }

    #info-images {
      width: 82.5vw;
      height: auto;
      padding: 5vh 0 5vh 0;
    }

    #info-nest div {
      /* text-align: justify;
      text-justify: inter-word; */
      /* hyphens: auto; */
    }
  }
</style>
