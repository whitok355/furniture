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
import mainPage from "./components/MainRouter.vue";
import Footer from "./components/Footer.vue";
import lines from "./components/elements/line.vue";
import delivery from "./components/elements/delivery.vue";
import PopUp from "./components/Pop-up.vue";
export default {
  components: {
    Header,
    Navigation,
    mainPage,
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
@import url("http://fonts.cdnfonts.com/css/satoshi");
@import url("http://fonts.cdnfonts.com/css/clash-display");

body {
  margin: 0;
  padding: 0;
  font-family: "Satoshi", sans-serif;
  color: #2a254b;
}
.wrapper {
  min-width: 390px;
  margin: auto;
  background: white;
  @media (min-width: 1440px) {
    & {
      max-width: 1440px;
      margin: 0 auto;
      position: relative;
    }
  }
}

h1 {
  font-weight: 400;
  font-size: 32px;
  line-height: 45px;
  font-family: "Clash Display", sans-serif;
  margin: 0;
}
h2 {
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  font-family: "Clash Display", sans-serif;
  margin: 0;
}
h3 {
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  margin: 0;
  font-family: "Clash Display", sans-serif;
}
h4 {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  font-family: "Clash Display", sans-serif;
}
h5 {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  font-family: "Clash Display", sans-serif;
}
p {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
}
a {
  text-decoration: none;
}
a:hover {
  cursor: pointer;
  text-decoration: none;
}
li {
  list-style-type: none;
}
li:hover {
  cursor: pointer;
}
@media (min-width: 1440px) {
  h1 {
    font-size: 32px;
  }
  h2 {
    font-size: 32px;
    line-height: 39px;
  }
  h3 {
    font-size: 24px;
    line-height: 34px;
  }
  h4 {
    font-size: 20px;
    line-height: 28px;
  }
  h5 {
    line-height: 20px;
  }
  p {
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
