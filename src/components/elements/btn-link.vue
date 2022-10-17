<template>
  <div class="btn-link">
    <router-link to="/products" :class="activeClass">
      {{ text }}
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "View collection",
    },
    activeClass: {
      type: String,
      default: "btn-link__linkWhite",
    },
  },
};
</script>
<style lang="scss" scoped>
.btn-link {
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover &__linkWhite {
    background: #f3f3f3;
    transform: scale(1.3);
    transition: 0.5s;
  }
  &:hover &__linkBlue {
    background: rgba(249, 249, 249, 0.5);
    transform: scale(1.1);
    transition: 0.5s;
  }
  &__linkWhite {
    padding: 16px 114px;
    text-decoration: none;
    color: #2a254b;
    @media (min-width: 1440px) {
      & {
        padding: 16px 32px;
      }
    }
  }
  &__linkBlue {
    padding: 16px 118px;
    color: white;
    text-decoration: none;
    opacity: 0.24;
    background: rgba(249, 249, 249, 0.15);
    @media (min-width: 1440px) {
      & {
        padding: 16px 32px;
      }
    }
  }
}
</style>
