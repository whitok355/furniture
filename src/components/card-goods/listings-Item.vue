<template>
  <div class="listings-item animation" v-for="(item, i) in goods" :key="i">
    <router-link :to="`/product/:${item.id}`">
      <div
        class="listings-item-containerImg"
        :style="{ backgroundImage: `url(${item.img})` }"
      ></div>
    </router-link>
    <h4 class="listings-item__title">{{ item.title }}</h4>
    <p class="listings-item__price">£ {{ item.price }}</p>
  </div>
</template>
<script>
export default {
  props: {
    goods: {
      type: Array,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.listings-item {
  min-width: 153px;
  min-height: 288px;
  &:hover {
    transform: scale(1.1);
    transition: 1s;
  }
  &__title {
    margin: 24px 0 0;
  }
  &__price {
    margin: 8px 0 0;
  }
  @media (min-width: 768px) {
    min-width: 305px;
    min-height: 462px;
  }
}
.listings-item {
  margin-right: 16px;
  @media (min-width: 1440px) {
    margin-right: 0;
  }
}
.listings-item-containerImg {
  width: 100%;
  min-height: 201px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  @media (min-width: 768px) {
    min-height: 375px;
  }
}
</style>
