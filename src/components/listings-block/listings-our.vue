<template>
  <div class="listings-our">
    <h2 v-if="title" class="listings-our__title">{{ title }}</h2>
    <div class="listings-our-items">
      <listingItem v-for="(item, i) in listingsNew" :item="item" :key="i" />
    </div>
    <btnLink />
  </div>
</template>

<script>
import btnLink from "../elements/btn-link.vue";
import listingItem from "../card-goods/listings-Item.vue";

export default {
  components: { btnLink, listingItem },
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
.listings-our {
  margin-top: 86px;
  padding: 0 24px;
  &-items {
    display: flex;
    margin-top: 36px;
    margin-bottom: 38px;
    overflow: hidden;
  }
  &-items:hover {
    overflow: auto;
  }
}
.listings-item {
  min-width: 200px;
  min-height: 338px;
  width: 100%;
  &:not(:last-child) {
    margin-right: 20px;
  }
  @media (min-width: 1440px) {
    & {
      min-width: 305px;
    }
    &:first-child {
      min-width: 630px;
    }
  }
}
</style>
