<template>
  <div class="cart">
    <h2 class="cart__title">Your shopping cart</h2>
    <div class="cart-table-titles">
      <h5 class="cart-table-titles__title">Product</h5>
      <h5 class="cart-table-titles__title">Quantity</h5>
      <h5 class="cart-table-titles__title">Total</h5>
    </div>
    <lines :colorClass="'line-grey'" />
    <div class="cart-products">
      <template v-if="cartGoods.length != 0" v-for="(good, i) in cartGoods" :key="i">
        <div class="container-product">
          <div class="product">
            <div class="product-block">
              <div
                class="product-block__img"
                :style="{ backgroundImage: `url(${good.img})` }"
              ></div>
            </div>
            <div class="product-block">
              <h4 class="product-block__title">{{ good.title }}</h4>
              <div class="product-block__discr">{{ good.discr }}</div>
              <div class="product-block__price">
                £<span>{{ good.price }}</span>
              </div>
              <btnQuantity />
            </div>
          </div>
          <p class="product-quantity">1</p>
          <p class="product-total">£ <span>85</span></p>
        </div>
      </template>
      <template v-else>
        <div class="container-product">
          <h3>Ваша корзина пуста</h3>
        </div>
      </template>
    </div>
    <lines :colorClass="'line-grey'" />
    <div class="subtotal">
      <h3 class="subtotal__value">
        Subtotal <span>£ <span>210</span></span>
      </h3>
      <p class="subtotal__discr">Taxes and shipping are calculated at checkout</p>
    </div>
    <btn>Go to checkout</btn>
  </div>
</template>
<script>
import lines from "@/components/elements/line.vue";
import btn from "@/components/elements/btn.vue";
import btnQuantity from "@/components/elements/btn-quantity.vue";
import { mapState } from "vuex";

export default {
  components: { lines, btn, btnQuantity },
  // data() {
  //   return {
  //     cartGoods: [
  //       {
  //         id: 1,
  //         title: "Graystone vase",
  //         discr: "A timeless ceramic vase with a tri color grey glaze.",
  //         price: 85,
  //         quantity: 1,
  //         img: "/products/product.png",
  //       },
  //       {
  //         id: 2,
  //         title: "Basic white vase",
  //         discr: "Beautiful and simple this is one for the classics",
  //         price: 85,
  //         quantity: 1,
  //         img: "/products/product1.png",
  //       },
  //     ],
  //   };
  // },
  computed: {
    ...mapState({
      cartGoods: (state) => state.order,
    }),
  },
};
</script>
<style lang="scss" scoped>
.cart {
  margin-bottom: 55px;
  &__title {
    padding: 0 24px;
  }
}
.cart-products {
  padding: 0 24px;
}
.cart-table-titles {
  display: none;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 28px;
    &__title:nth-child(1) {
      text-align: left;
    }
    &__title:nth-child(2) {
      text-align: center;
    }
    &__title:nth-child(3) {
      text-align: right;
    }
  }
}
.container-product {
  padding: 20px 0;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
.product {
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  &-total {
    display: none;
  }
  &-quantity {
    display: none;
  }
  &-block {
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
    &__title {
      margin: 0;
    }
    &__discr {
      margin-top: 8px;
    }
    &__price {
      margin-top: 8px;
    }
  }
  @media (min-width: 1440px) {
    width: fit-content;
    height: 134px;
    &-total {
      display: inline-block;
    }
    &-quantity {
      display: inline-block;
    }
  }
}
.product-quantity {
  text-align: center;
}
.product-total {
  text-align: right;
}
.subtotal {
  text-align: right;
  padding: 0 24px;
  &__value {
    color: var(--primary);
  }
  &__value span {
    color: var(--darkPrimary);
    margin-left: 5px;
  }
  &__discr {
    color: var(--primary);
  }
}
.line-container {
  margin-top: 12px;
  margin-bottom: 12px;
}
.btn-container {
  margin-top: 36px;
  padding: 0 24px;
  @media (min-width: 768px) {
    max-width: fit-content;
    margin: 0 auto;
  }
}

@media (min-width: 1440px) {
  .quantity-btn {
    display: none;
  }
}
</style>
