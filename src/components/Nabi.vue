<template>
  <div id="nabi">
    <router-link to="/">
      <div class="menuOption" v-on:mouseenter="hoverImage()" v-on:mouseover="mouseover('N','NABIBOYD')" v-on:mouseleave="mouseleave('N')">
        <div class="letter">{{letterN}}</div>
        <div class="menuChoice menuChoice-mobile-home">{{optionN}}</div>
      </div>
    </router-link>
    <router-link to="/work">
      <!-- <div v-if="onWORK" class="menuOption">
        <div class="menuChoice">WORK</div>
      </div> -->
      <div class="menuOption" v-on:mouseenter="hoverImage()" v-on:mouseover="mouseover('A','WORK')" v-on:mouseleave="mouseleave('A', 'WORK')">
        <div class="letter">{{letterA}}</div>
        <div class="menuChoice">{{optionA}}</div>
      </div>
    </router-link>
    <router-link to="/info">
      <div class="menuOption" v-on:mouseenter="hoverImage()" v-on:mouseover="mouseover('B','ABOUT')" v-on:mouseleave="mouseleave('B','ABOUT')">
        <div class="letter">{{letterB}}</div>
        <div class="menuChoice">{{optionB}}</div>
      </div>
    </router-link>
    <router-link to = "/contact">
      <div class="menuOption" v-on:mouseenter="hoverImage()" v-on:mouseover="mouseover('I','CONTACT')" v-on:mouseleave="mouseleave('I','CONTACT')">
        <div class="letter">{{letterI}}</div>
        <div class="menuChoice menuChoice-mobile-contact">{{optionI}}</div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  data() {
    return {
      letterN : 'N',
      optionN: '',
      letterA : 'A',
      optionA: '',
      letterB : 'B',
      optionB: '',
      letterI : 'I',
      optionI: ''
    }
  },
  methods: {
    hoverImage: function() {
      this.$root.$emit('hoverImage')
    },
    mouseover: function(letter,option){
      if (option == 'NABIBOYD') {
        this.letterN = ''
        this.optionN = option;
      }
      else if (option == 'WORK') {
        this.letterA = ''
        this.optionA = option;
      }
      else if (option == 'ABOUT') {
        this.letterB = ''
        this.optionB = option;
      }
      else if (option == 'CONTACT') {
        this.letterI = ''
        this.optionI = option;
      }
    },
    mouseleave: function(letter, option){
      if (letter == 'N') {
        this.letterN = letter
        this.optionN = ''
      }
      else if (letter == 'A') {
        this.letterA = letter
        this.optionA = ''
      }
      else if (letter == 'B') {
        this.letterB = letter
        this.optionB = ''
      }
      else if (letter == 'I') {
        this.letterI = letter
        this.optionI = ''
      }
    },
  },
  mounted() {

  }
}
</script>

<style src="../css/nabi-boyd.css"></style>
