<template>
  <div class="listings-new">
    <h2 v-if="title" class="listings-new__title">{{ title }}</h2>
    <div class="loader-container" v-if="loading">
      <loader />
    </div>
    <div class="listings-new-items" v-else>
      <listingsItem :goods="goods" />
    </div>
    <btnLink>View collection</btnLink>
  </div>
</template>

<script>
import listingsItem from "@/components/card-goods/listings-Item.vue";
import btnLink from "@/components/elements/btn-link.vue";
import loader from "@/components/elements/loader.vue";

export default {
  components: { listingsItem, btnLink, loader },
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
.listings-new {
  &__title {
    padding: 0 24px;
    margin-top: 86px;
  }
  @media (min-width: 1440px) {
    &__title {
      text-transform: uppercase;
    }
  }
}
.listings-new-items {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 1440px) {
    padding: 0 24px;
  }
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
