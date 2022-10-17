<template>
  <div class="product">
    <div class="product-block"></div>
    <div class="product-block">
      <div class="product-block-content">
        <h2 class="product-block-content__title">The Dandy Chair</h2>
        <p class="product-block-content__price">£ <span>250</span></p>
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
        <btn :text="'Add to cart'" />
      </div>
    </div>
  </div>
  <listingsNew :title="'You might also like'" />
  <features />
  <signUp />
</template>
<script>
import features from "./Features.vue";
import listingsNew from "./listings-block/Listings-new.vue";
import signUp from "./elements/sign-up.vue";
import btn from "./elements/btn.vue";
import btnQuantity from "./elements/btn-quantity.vue";
export default {
  components: { features, listingsNew, signUp, btn, btnQuantity },
};
</script>
<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
  }
}
.product-block {
  width: inherit;
  width: 100%;
  min-height: 100%;
}
.product-block:first-child {
  background-image: url("/products/product.png");
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
    border-right: 1px solid #ebe8f4;
    padding-right: 51.5px;
  }
  &-column:nth-child(2) {
    border-right: 1px solid #ebe8f4;
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
.sign-up {
  margin-bottom: 119px;
}
</style>
