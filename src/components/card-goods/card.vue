<template>
  <div class="product animation">
    <div class="product-block product-block-flex" v-if="loading"><loader /></div>
    <div
      class="product-block"
      :style="{ backgroundImage: `url(${good.img})` }"
      v-else
    ></div>
    <div class="product-block">
      <div class="product-block-content">
        <h2 class="product-block-content__title">{{ good.title }}</h2>
        <p class="product-block-content__price">
          £ <span>{{ good.price }}</span>
        </p>
        <div class="discription">
          <h4 class="discription__title">Product description</h4>
          <p class="discription__discr">
            A timeless design, with premium materials features as one of our most popular
            and iconic pieces. The dandy chair is perfect for any stylish living space
            with beech legs and lambskin leather upholstery.
          </p>
          <ul class="discription-list">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>
        </div>
        <div class="dimensions">
          <h4 class="dimensions__title">Dimensions</h4>
          <div class="table">
            <div class="table-column">
              <h5 class="table-row">Height</h5>
              <p class="table-row">110cm</p>
            </div>
            <div class="table-column">
              <h5 class="table-row">Width</h5>
              <p class="table-row">75cm</p>
            </div>
            <div class="table-column">
              <h5 class="table-row">Depth</h5>
              <p class="table-row">50cm</p>
            </div>
          </div>
        </div>
      </div>
      <div class="quantity">
        <h4 class="quantity__title">Quantity</h4>
        <btnQuantity />
        <btn>Add to cart</btn>
      </div>
    </div>
  </div>
</template>
<script>
import loader from "@/components/elements/loader.vue";
import btn from "@/components/elements/btn.vue";
import btnQuantity from "@/components/elements/btn-quantity.vue";
export default {
  components: { loader, btn, btnQuantity },
  props: {
    good: {
      type: Object,
    },
    loading: {
      type: Boolean,
    },
  },
};
</script>
<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
    min-height: 759px;
  }
}
.product-block {
  width: inherit;
  width: 100%;
  min-height: 100%;
  &-flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.product-block:first-child {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 380px;
}
.product-block:last-child {
  padding: 0 24px;
  @media (min-width: 1440px) {
    padding: 51px 55px;
  }
}
.product-block-content {
  &__title {
    margin: 0;
    margin-top: 28px;
  }
  &__price {
    margin: 0;
    margin-top: 12px;
  }
}
.discription {
  margin-top: 28px;
  &__title {
    margin: 0;
  }
  &-list {
    padding-inline-start: 24px;
  }
}
.dimensions {
  margin-top: 28px;
}
.table {
  display: flex;
  justify-content: space-between;
  &-row {
    margin-bottom: 15px;
  }
  &-column:nth-child(1) {
    border-right: 1px solid var(--lightGrey);
    padding-right: 51.5px;
  }
  &-column:nth-child(2) {
    border-right: 1px solid var(--lightGrey);
    padding-right: 51.5px;
  }
}
.quantity {
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 34px;
  }
}
</style>
