<template>
  <div class="listings-new">
    <h2 v-if="title" class="listings-new__title">{{ title }}</h2>
    <div class="listings-new-items">
      <listingsItem v-for="(item, i) in listingsNew" :item="item" />
    </div>
    <btnLink />
  </div>
</template>

<script>
import listingsItem from "../card-goods/listings-Item.vue";
import btnLink from "../elements/btn-link.vue";

export default {
  components: { listingsItem, btnLink },
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      listingsNew: [
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.listings-new {
  margin-top: 86px;
  padding: 0 24px;
  &__title {
    color: #2a254b;
  }
  &-items {
    margin-top: 19px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
    margin-bottom: 29px;
  }
  @media (min-width: 1440px) {
    &-items {
      display: flex;
    }
  }
}
.listings-item {
  width: 100%;
  min-height: 338px;
}
</style>
