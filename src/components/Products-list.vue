<template>
  <div class="products">
    <h2 class="products__title">View all products</h2>
    <div class="filter-container">
      <filterEL />
    </div>
    <div class="listings-items">
      <listingsItem v-for="(item, i) in goods" :item="item" :key="i" />
    </div>
    <btnLink />
    <signUp />
  </div>
</template>
<script>
import listingsItem from "./card-goods/listings-Item.vue";
import signUp from "./elements/sign-up.vue";
import btnLink from "./elements/btn-link.vue";
import filterEL from "./elements/filter.vue";
export default {
  components: { listingsItem, signUp, btnLink, filterEL },
  data() {
    return {
      goods: [
        {
          id: 1,
          img: "/items/1.png",
          title: "Rustic Vase Set",
          price: 250,
        },
        {
          id: 2,
          img: "/items/2.png",
          title: "The Lucy Lamp",
          price: 399,
        },
        {
          id: 3,
          img: "/items/3.png",
          title: "The Silky Vase",
          price: 125,
        },
        {
          id: 4,
          img: "/items/4.png",
          title: "The Dandy chair",
          price: 250,
        },
        {
          id: 5,
          img: "/items/1.png",
          title: "Rustic Vase Set",
          price: 250,
        },
        {
          id: 6,
          img: "/items/2.png",
          title: "The Lucy Lamp",
          price: 399,
        },
        {
          id: 7,
          img: "/items/3.png",
          title: "The Silky Vase",
          price: 125,
        },
        {
          id: 8,
          img: "/items/4.png",
          title: "The Dandy chair",
          price: 250,
        },
        {
          id: 9,
          img: "/items/1.png",
          title: "Rustic Vase Set",
          price: 250,
        },
        {
          id: 10,
          img: "/items/2.png",
          title: "The Lucy Lamp",
          price: 399,
        },
        {
          id: 11,
          img: "/items/3.png",
          title: "The Silky Vase",
          price: 125,
        },
        {
          id: 12,
          img: "/items/4.png",
          title: "The Dandy chair",
          price: 250,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.products {
  &__title {
    padding: 0 24px;
  }
  @media (min-width: 1440px) {
    &__title {
      text-transform: uppercase;
    }
  }
}
.filter-container {
  margin-bottom: 130px;
  padding: 0 24px;
}
.listings-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 24px;
}
.listings-item {
  margin-bottom: 20px;
  max-width: 50%;
  @media (min-width: 768px) {
    width: 305px;
    min-height: 462px;
  }
}
.btn-link {
  margin: 0 auto;
  margin-top: 50px;
}
.sign-up {
  margin-bottom: 70px;
}
</style>
