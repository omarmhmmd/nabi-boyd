<template>
  <div id="app">
    <app-nabi></app-nabi>
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
    <app-boyd></app-boyd>
  </div>
</template>

<script>
import Nabi from './components/Nabi.vue';
import Boyd from './components/Boyd.vue';

export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    appNabi: Nabi,
    appBoyd: Boyd,
  }
}
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
/**** CUSTOM FONTS ****/
@font-face {
  font-family: 'AKZROM';
  src: url("./css/font/AKZROM.ttf") format("truetype");
}

@font-face {
  font-family: 'AKZLIGHT';
  src: url("./css/font/AKZTEST.ttf") format("truetype");
}
/**** CUSTOM FONTS ****/

#app {
  font-family: 'AKZROM';
  display: flex;
  /* align-items: center; */
  flex-direction: row;
  justify-content: space-between;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

@media only screen and (max-width: 800px) {
  /* HOME */

  #app {
    font-family: 'AKZROM';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
}

</style>

<style src="./css/reset.css"></style>
