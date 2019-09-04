<template>
<div id="project-page">
  <div id="image-container">
    <img src="@/images/005.jpg/" alt="">
  </div>
  <div id="page-width">
    <div id="header">
      <h1>NABIBOYD</h1>
      <h1>
        <img src="@/images/SVG/arrow.svg" alt="">
      </h1>
    </div>
    <div id="footer">
      <h1>SHEPARD MESA HOUSE</h1>
      <h2>5/6</h2>
    </div>
  </div>
  <div id="data-box">
    <div id="data">
      <div class="data-column">
        <div>
          <h1 class="data-type">CLIENT</h1>
          <h2>Private</h2>
        </div>
        <div>
          <h1 class="data-type">YEAR</h1>
          <h2>2016-2019</h2>
        </div>
        <div>
          <h1 class="data-type">TYPE</h1>
          <h2>Single Family</h2>
        </div>
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
    <div id = "info">

      <h2 id = "description">
        Shepard Mesa House is a new single family home situated on a steep Cherimoya orchard in the foothills
        of Carpinteria designed for a family of four.  The neighborhood consists of dispersed homes along a single
        road leading up and around the crown of the hill with steep slopes on all sides.

        Sited diagonally to the contours of the hill, the house slopes with the natural fall of the land with the
        program gathered under a single gabled roof above.  The house is organized across three levels which correspond to the slope of the land.

        <br>
        <br>
        The experience of moving through the site and house is synchronized--one gets the experience of being both inside the orchard and above it.
        Bedrooms are located at the lower elevations where they are nestled into the working orchard around them.  At this elevation, the cherimoya trees
        provide the most privacy as the coastal hills peek out above and through them.  The main space on the upper tier opens up to the downslope and affords
        the most expansive views.  Neighboring homes are just out of sight as the view stretches out across the valley to the backside of Rincon Mountain.
      </h2>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style >
#project-page {
  background-color: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}

#page-width {
  width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: red; */
  height: 97.5vh;
}

#header {
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  margin-top: 20px;
  align-items: flex-start;
  /* background-color: green; */
  padding: 0px;
  flex-direction: row-reverse;
}

#project-title {
  background-color: black;
  color: white;
  padding: 10px 10px 10px 10px;

}

#image-container {
  height: 85vh;
  position: absolute;
  top: 20px;
  z-index: -1;
}

#image-container img {
  height: 100%;
}

#footer {
  display: flex;
  justify-content: space-between;
  align-items:center;
  font-size: 28px;
}

#footer h1 {
  color: white;
  background-color: black;
  padding: 5px;
}

#footer h2 {
  font-size: 28px;
}

#data {
  display: flex;
  width: 17.5vw;
  flex-direction: row;
  height: 60vh;
}

#data-box {
  padding-top: 25px;
  display: flex;
  flex-direction: row;
  width: 95vw;
}

#info {
  padding-top: 10px;
}

.data-column {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  line-height: 25px;
}

.data-type {
  display: inline;
  background-color: black;
  color: white;
  padding: 0 3.5px 0 3.5px;
}

h2 {
  font-size: 20px;
}

#description {
  width: 70vw;
  font-size: 28px;
  padding-top: 0px;
  line-height: 32px;
}
</style>
