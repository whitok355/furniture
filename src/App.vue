<template>
  <div class="wrapper">
    <delivery />
    <Header />
    <PopUp />
    <lines :colorClass="'line-grey'" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import lines from "./components/elements/line.vue";
import delivery from "./components/elements/delivery.vue";
import PopUp from "./components/Pop-up.vue";
export default {
  components: {
    Header,
    Footer,
    lines,
    delivery,
    PopUp,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/global.scss";
</style>
