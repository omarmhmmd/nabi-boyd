<template>
  <div id="boyd">
    <router-link to="/">
      <div class="menuOption" v-on:mouseenter="hoverImage()" v-on:mouseover="mouseover('B','NABIBOYD')" v-on:mouseleave="mouseleave('B','NABIBOYD')">
        <div class="letter">{{letterB}}</div>
        <div class="menuChoice menuChoice-mobile-home">{{optionB}}</div>
      </div>
    </router-link>
    <router-link to="/work">
      <div class="menuOption" v-on:mouseenter="hoverImage()" v-on:mouseover="mouseover('O','WORK')" v-on:mouseleave="mouseleave('O','WORK')">
        <div class="letter">{{letterO}}</div>
        <div class="menuChoice">{{optionO}}</div>
      </div>
    </router-link>
    <router-link to="/about">
      <div class="menuOption" v-on:mouseenter="hoverImage()" v-on:mouseover="mouseover('Y','ABOUT')" v-on:mouseleave="mouseleave('Y','ABOUT')">
        <div class="letter">{{letterY}}</div>
        <div class="menuChoice">{{optionY}}</div>
      </div>
    </router-link>
    <router-link to="/contact">
      <div class="menuOption" v-on:mouseenter="hoverImage()" v-on:mouseover="mouseover('D','CONTACT')" v-on:mouseleave="mouseleave('D','CONTACT')">
        <div class="letter">{{letterD}}</div>
        <div class="menuChoice menuChoice-mobile-contact">{{optionD}}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      letterB : 'B',
      optionB: '',
      letterO : 'O',
      optionO: '',
      letterY : 'Y',
      optionY: '',
      letterD : 'D',
      optionD: '',
    }
  },
  methods: {
    hoverImage: function() {
      this.$root.$emit('hoverImage')
    },
    mouseover: function(letter,option){
      if (option == 'NABIBOYD') {
        this.letterB = ''
        this.optionB = option;
      }
      else if (option == 'WORK') {
        this.letterO = ''
        this.optionO = option;
        this.hoverIn(option)
      }
      else if (option == 'ABOUT') {
        this.letterY = ''
        this.optionY = option;
        this.hoverIn(option)
      }
      else if (option == 'CONTACT') {
        this.letterD = ''
        this.optionD = option;
        this.hoverIn(option)
      }
    },
    mouseleave: function(letter,option){
      if (letter == 'B') {
        this.letterB = letter
        this.optionB = ''
      }
      else if (letter == 'O') {
        this.letterO = letter
        this.optionO = ''
        this.hoverOut(option)
      }
      else if (letter == 'Y') {
        this.letterY = letter
        this.optionY = ''
        this.hoverOut(option)
      }
      else if (letter == 'D') {
        this.letterD = letter
        this.optionD = ''
        this.hoverOut(option)
      }
    }
  },
  mounted() {

  }
}
</script>

<style src="../css/nabi-boyd.css"></style>
