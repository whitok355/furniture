<template>
  <div class="features-box">
    <img class="features-box__icon" :src="feature.icon" :alt="feature.id" />
    <h3 class="features-box__title">{{ feature.title }}</h3>
    <p class="features-box__discription">{{ feature.discription }}</p>
  </div>
</template>
<script>
export default {
  props: {
    feature: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.features-box {
  margin-top: 48px;
  &__title {
    margin: 0;
    margin-top: 16px;
  }
  &__discription {
    margin-top: 12px;
    margin-bottom: 0;
  }
}
</style>
