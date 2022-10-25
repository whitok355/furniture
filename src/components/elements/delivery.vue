<template>
  <div class="delivery" v-if="isDelivery">
    <deliveryIcon />
    <p class="delivery__text">
      Free delivery on all orders over £50 with code easter checkout
    </p>
    <close @click="changeDelivery" />
  </div>
</template>
<script>
import deliveryIcon from "@/components/svg/deliveryIcon.vue";
import close from "@/components/svg/close.vue";
export default {
  components: { deliveryIcon, close },
  data() {
    return {
      isDelivery: true,
    };
  },
  methods: {
    changeDelivery() {
      this.isDelivery = !this.isDelivery;
    },
  },
};
</script>
<style lang="scss" scoped>
.delivery {
  background: var(--darkPrimary);
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  color: var(--white);
  &__text {
    margin-left: 10px;
  }
  @media (min-width: 1440px) {
    padding: 0 24px;
  }
}
</style>
