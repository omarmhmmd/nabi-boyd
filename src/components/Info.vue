<template lang="html">
  <div id="info-container">
    <div id="info-nest">
      <img id = "info-images" v-bind:src="images[0]" alt="">
      <div id = "info-content">
        <span>NABI BOYD</span> is an architecture and design office based in Los Angeles and Santa Barbara, California. 
     	<br>
      <br>
			We continue in the California tradition of creative, contextual design that emphasizes a connection to the landscape and natural environment. We bring with us an obsession with design, craft and building. We tend toward thoughtful, simple, warm and light, but encourage the wild, playful and curious. We’ve found that the best projects grow out of engaging with the unique qualities of each site and the people who use them. 
      </div>
		  <br>
        <!-- Please <a href="mailto: info@nabiboyd.com">get in touch</a> if you have a project you would like to discuss. -->
      <img id = "info-images" v-bind:src="images[1]" alt="">
      <!-- <div>
        <span>Services:</span>
        Building Design through Construction Administration, Renovations, Interiors, Environmental Graphics/Identity and Product Design
      </div> -->
      <div id = "info-content">
        <span>Mora Nabi</span> was born in Kabul, Afghanistan and grew up in the San Francisco Bay Area.
        She holds a Masters of Architecture from <a target="_blank" href="http://www.aud.ucla.edu/">UCLA</a> and
        Bachelor of Arts in Architecture from <a target="_blank" href="https://ced.berkeley.edu/academics/architecture">UC Berkeley</a>.
        Mora previously worked in the offices of <a target="_blank" href="https://www.foga.com/">Gehry Partners</a> and
        <a target="_blank" href="https://www.ball-nogues.com/">Ball-Nogues Studio.</a> She is a licensed architect in the state of California.
      </div>
      <img id = "info-images" v-bind:src="images[2]" alt="">
      <div id = "info-content">
        <span>Sean Boyd</span> grew up in Carpinteria, California. He holds a Masters of Architecture from <a target="_blank" href="http://www.aud.ucla.edu/">UCLA</a>
        and a Bachelor of Arts in English Literature from <a target="_blank" href="https://ced.berkeley.edu/academics/architecture">UC Berkeley</a>.
        Sean previously worked in the office of <a target="_blank" href="http://glform.com/">Greg Lynn FORM</a> and <a target="_blank" href="https://www.sander-architects.com/">Sander Architects</a>.
      </div>
      <img id = "info-images" v-bind:src="images[3]" alt="">
      <div id = "info-content">
        <span>News</span>
				<br>
				<ul>
					<li>
						• Nabi Boyd receives a <a target="_blank" href="https://www.aialosangeles.org/awards/design-awards/next-la-winners-2021/">2021 AIA, NEXT LA Residential Architecture Award for Los Osos Grandma's House.</a>
					</li>
					<li>
						• Nabi Boyd receives a <a target="_blank" href="https://www.aialosangeles.org/awards/residential-architecture-awards/residential-architecture-award-winners-2021/">2021 AIA, LA Residential Architecture Award for Shepard Mesa House.</a>
					</li>
					<li>
						• Pacific Ave Remodel featured on <a taregt="_blank" href="https://www.domino.com/content/diy-murphy-bed-door-idea/">Domino</a>.
					</li>
					<li>
						• Tailored in Steel interview with <a target="_blank" href="https://suprstructur.com/inside-stories/tailored-in-steel/">SUPRSTRUCTUR</a>.
					</li>
          <li>
            • Nabi Boyd announced as the <a target="_blank" href="https://www.archpaper.com/2021/12/announcing-the-winners-of-the-2021-an-best-of-design-awards/"> 2021 Best of Design, Young Architects</a> winner by The Architect's Newspaper.
          </li>
				</ul>
			
      </div>
      <img id = "info-images" v-bind:src="images[4]" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "./images/ABOUT/001.jpg",
        "./images/ABOUT/002.jpg",
        "./images/ABOUT/003.jpg",
        "./images/ABOUT/004.jpg",
        "./images/ABOUT/005.jpg",
      ],
    };
  },
  methods: {},
};
</script>

<style lang="css">
ul {
	padding-top: 8px;
}

li {
	padding-bottom: 16px;
}
#info-container {
  line-height: 2.5vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 2vw;
  width: 100vw;
  padding-top: 7.5vh;
  padding-bottom: 7.5vh;
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
  /* padding: 2vw 0 2vw 0; */
}

#info-content {
  margin-top: 48px;
  margin-bottom: 48px;
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

@media only screen and (max-width: 768px) and (orientation: portrait) {
  #info-container {
    display: flex;
    height: auto;
    /* font-weight: bold; */
    justify-content: center;
    line-height: 6.5vw;
    font-size: 5vw;
    width: 90vw;
    padding-top: 5vh;
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
    /* padding: 5vh 0 5vh 0; */
  }

  #info-nest div {
    /* text-align: justify;
      text-justify: inter-word; */
    /* hyphens: auto; */
  }
}
</style>
