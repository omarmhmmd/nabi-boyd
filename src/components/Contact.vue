<template lang="html">
  <div id="contact-container">
    <div id="contact">
      <!-- <a target="_blank" href="https://www.google.com/maps/place/Nabi+Boyd/@34.0184119,-118.4826625,15z/data=!4m5!3m4!1s0x0:0x8db0979805b32c93!8m2!3d34.0181629!4d-118.4790576"> -->
        <div id = "address">
          <div id = "text"><span>NABI BOYD</span></div>
          <div><span>LOS ANGELES &</span></div>
          <div><span>SANTA BARBARA</span></div>
        </div>
      <!-- </a> -->
      <!-- <div id="internet"> -->
      <a href="mailto: info@nabiboyd.com">
        <div id = "email"><span>info@nabiboyd.com</span></div>
      </a>
      <a target="_blank"href="tel:323-412-0364">
        <div id = "email"><span>323-412-0364</span></div>
      </a>
      <a target="_blank" href="https://www.instagram.com/nabiboyd/">
        <div id = "email"><span>@nabiboyd</span></div>
      </a>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  #contact-container {
    display: flex;
    align-items: center;
    height: 100vh;
  }

  #contact {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 5vw;
    color: white;
    height: 75vh;
  }

  #contact a {
    color: white;
  }

  #address {
    text-transform: uppercase;
  }

  #address div {
    padding-bottom: 0.5vw;
  }

  #email {
    padding-bottom: 0.5vw;
  }

  #contact a:hover {
    text-decoration: underline;
  }

  #contact span {
    display: inline;
    background-color: black;
    padding: 0px 10px 5px 10px;
  }

  /* #internet {
    background-color: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 13.5vw;
  } */


  @media only screen and (max-width: 768px)  and (orientation : portrait) {
    #contact-container {
      height: 62.5vh;
    }

    #contact {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 30px;
      color: white;
      height: 45vh;
      line-height: 1.25em;
    }

    #address div {
      padding-bottom: 0.25vw;
    }

  }
</style>
