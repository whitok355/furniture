<template>
  <div class="wrapper">
    <delivery />
    <Header @showNavigation="showNavigation" @closurePopUp="closurePopUp" />
    <PopUp @closurePopUp="closurePopUp" v-if="popUpViewer" />
    <lines :colorClass="'line-grey'" />
    <Navigation
      :isNavigation="isNavigation"
      :key="isNavigation"
      @closurePopUp="closurePopUp"
    />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navigation from "./components/elements/Navigation.vue";
import Footer from "./components/Footer.vue";
import lines from "./components/elements/line.vue";
import delivery from "./components/elements/delivery.vue";
import PopUp from "./components/Pop-up.vue";
export default {
  components: {
    Header,
    Navigation,
    Footer,
    lines,
    delivery,
    PopUp,
  },
  data() {
    return {
      isNavigation: window.innerWidth >= 768 ? true : false,
      popUpViewer: false,
    };
  },
  methods: {
    showNavigation() {
      this.isNavigation = !this.isNavigation;
    },
    closurePopUp() {
      this.popUpViewer = !this.popUpViewer;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/global.scss";
</style>
