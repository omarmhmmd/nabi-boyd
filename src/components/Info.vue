<template lang="html">
  <div id="info-container">
    <div id="info-nest">
      <div>
        <span>NABI BOYD</span> is a multi-disciplinary design office based in Santa Monica, California.
        After years of working for distinguished architects and designers with projects ranging from
        residential and cultural buildings to product and furniture design, we started Nabi Boyd in 2018.
        We are currently working on residential and commercial projects located in Santa Barbara, Los Angeles,
        and Ventura.
      </div>
      <br>
      <div>
        <span>Mora Nabi</span> was born in Kabul, Afghanistan and grew up in the San Francisco Bay Area.
        She holds a Masters of Architecture from <a target="_blank" href="http://www.aud.ucla.edu/">UCLA</a> and
        Bachelor of Arts in Architecture from <a target="_blank" href="https://ced.berkeley.edu/academics/architecture">UC Berkeley</a>.
        Mora previously worked in the offices of <a target="_blank" href="https://www.foga.com/">Gehry Partners</a> and
        <a target="_blank" href="https://www.ball-nogues.com/">Ball-Nogues Studio.</a>
      </div>
      <br>
      <div>
        <span>Sean Boyd</span> grew up in Carpinteria, California. He holds a Masters of Architecture from <a target="_blank" href="http://www.aud.ucla.edu/">UCLA</a>
        and a Bachelor of Arts in English Literature from <a target="_blank" href="https://ced.berkeley.edu/academics/architecture">UC Berkeley</a>.
        Sean previously worked in the office of <a target="_blank" href="http://glform.com/">Greg Lynn FORM</a> where he led building and design projects for Nike, Swarovski, and Google among others.
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang="css">
  #info-container {
    line-height: 2.25vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 2vw;
    width: 61vw;
    height: 100vh;
  }

  #info-nest {
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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

  @media only screen and (max-width: 800px) {
    #info-container {
      display: flex;
      height: auto;
      /* font-weight: bold; */
      justify-content: center;
      line-height: 6.5vw;
      font-size: 5vw;
      width: 90vw;
    }

    #info-nest {
      height: auto;
      display: flex;
      justify-content: space-between;
      /* text-align: justify; */
    }

    #info-nest div {
      /* text-align: justify;
      text-justify: inter-word; */
      /* hyphens: auto; */
    }
  }
</style>
