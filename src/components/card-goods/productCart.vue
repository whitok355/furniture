<template>
  <div class="product animation">
    <div class="product-block">
      <div
        class="product-block__img"
        :style="{ backgroundImage: `url(${good.img})` }"
      ></div>
    </div>
    <div class="product-block">
      <h4 class="product-block__title">{{ good.title }}</h4>
      <p class="product-block__discr">{{ good.discr }}</p>
      <p class="product-block__price">
        £<span>{{ good.price }}</span>
      </p>
      <btnQuantity />
    </div>
  </div>
</template>
<script>
import btnQuantity from "@/elements/btn-quantity.vue";
export default {
  components: { btnQuantity },
  props: {
    good: {
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped>
.product {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  @media (min-width: 1440px) {
    width: fit-content;
    height: 134px;
  }
}
.product-block {
  height: inherit;
  width: inherit;
  &:last-child {
    padding-left: 22px;
  }
  &__img {
    width: 109px;
    height: 134px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &__discr {
    margin-top: 8px;
  }
  &__price {
    margin-top: 8px;
  }
}

@media (min-width: 1440px) {
  .quantity-btn {
    display: none;
  }
}
</style>
