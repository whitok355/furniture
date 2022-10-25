<template>
  <div class="listings-our">
    <h2 v-if="title" class="listings-our__title">{{ title }}</h2>
    <div class="loader-container" v-if="loading">
      <loader />
    </div>
    <div class="listings-our-items" v-else>
      <listingItem :goods="goods" />
    </div>
    <btnLink>View collection</btnLink>
  </div>
</template>

<script>
import btnLink from "@/components/elements/btn-link.vue";
import listingItem from "@/components/card-goods/listings-Item.vue";
import loader from "@/components/elements/loader.vue";
export default {
  components: { btnLink, listingItem, loader },
  props: {
    title: {
      type: String,
    },
    goods: {
      type: Array,
    },
    loading: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.listings-our {
  margin-top: 86px;
  &__title {
    padding: 0 24px;
  }
  &-items:hover {
    overflow: auto;
  }
  &-items {
    max-width: 100%;
    display: flex;
    margin-top: 36px;
    margin-bottom: 30px;
    overflow: hidden;
    padding: 0 8px 0 24px;
    @media (min-width: 768px) {
      justify-content: space-between;
      overflow: none;
    }
  }
}
.listings-our-items {
  padding: 0 24px;
}
.listings-item:not(:first-child) {
  margin-right: 16px;
  @media (min-width: 768px) {
    margin-right: 0;
  }
}
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}
</style>
