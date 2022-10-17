<template>
  <div class="quantity-btn">
    <p class="quantity-btn__away">-</p>
    <p class="quantity-btn__value">1</p>
    <p class="quantity-btn__add">+</p>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.quantity-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
  &__away,
  &__add {
    color: #cac6da;
  }
  &__away,
  &__add:hover {
    cursor: pointer;
  }
  &__away {
    margin-right: 33px;
  }
  &__add {
    margin-left: 33px;
  }
  @media (min-width: 1440px) {
    & {
      margin-bottom: 0;
    }
  }
}
</style>
