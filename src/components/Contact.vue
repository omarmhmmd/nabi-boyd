<template lang="html">
  <div id="contact-container">
    <div id="contact">
      <div id = "address">
        <div><span>NABIBOYD</span></div>
        <div><span>1804 14th St., Suite 7</span></div>
        <div><span>Santa Monica, CA</span></div>
      </div>
      <a href="mailto: info@nabiboyd.com">
        <div><span>info@nabiboyd.com</span></div>
      </a>
      <a target="_blank" href="https://www.instagram.com/nabiboyd/">
        <div><span>@nabiboyd</span></div>
      </a>
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

  #address {
    display: flex;
    flex-direction: column;
    /* height: 35vh; /**ADJUST FOR RESPONSIVE**/
    justify-content: space-between;
    text-transform: uppercase;
  }

  #contact a {
    color: white;
  }

  #contact a:hover {
    text-decoration: underline;
  }

  #contact span {
    display: inline;
    background-color: black;
    padding: 0px 10px 5px 10px;
  }

  @media only screen and (max-width: 800px) {
    #contact-container {
      height: auto;
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
  }
</style>
