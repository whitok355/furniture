<template>
  <div class="features">
    <h3 class="features__title">What makes our brand different</h3>
    <div class="features-boxs">
      <FeaturesBox v-for="(element, i) in features" :feature="element" />
    </div>
  </div>
</template>

<script>
import FeaturesBox from "./Features-box.vue";
export default {
  components: { FeaturesBox },
  data() {
    return {
      features: [
        {
          id: 1,
          icon: "/svg/feature-icon-1.svg",
          title: "Next day as standard",
          discription: "Order before 3pm and get your order the next day as standard",
        },
        {
          id: 2,
          icon: "/svg/feature-icon-2.svg",
          title: "Made by true artisans",
          discription: "Handmade crafted goods made with real passion and craftmanship",
        },
        {
          id: 3,
          icon: "/svg/feature-icon-3.svg",
          title: "Unbeatable prices",
          discription:
            "For our materials and quality you won’t find better prices anywhere",
        },
        {
          id: 4,
          icon: "/svg/feature-icon-4.svg",
          title: "Recycled packaging",
          discription:
            "We use 100% recycled packaging to ensure our footprint is manageable",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.features {
  margin-top: 48px;
  padding: 0 24px;
  &__title {
    color: #2a254b;
  }
  @media (min-width: 1440px) {
    margin-top: 120px;
    &__title {
      text-align: center;
    }
    &-boxs {
      display: flex;
    }
    &-box:not(:last-child) {
      margin-right: 59px;
    }
  }
}
</style>
