<template>
  <div class="listings-item">
    <div
      class="listings-item-containerImg"
      :style="{ backgroundImage: `url(${item.img})` }"
    ></div>
    <h4 class="listings-item__title">{{ item.title }}</h4>
    <p class="listings-item__price">£ {{ item.price }}</p>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped>
.listings-item {
  width: 153px;
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
}
.listings-item:nth-child(odd) {
  margin-right: 16px;
  @media (min-width: 768px) {
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
