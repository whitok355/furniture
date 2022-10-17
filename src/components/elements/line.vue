<template>
  <div class="line-container">
    <div :class="colorClass" class="line"></div>
  </div>
</template>
<script>
export default {
  props: {
    colorClass: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.line-container {
  display: none;
  @media (min-width: 1440px) {
    display: block;
    max-width: 1440px;
    margin-top: 16px;
    margin: 0 auto;
    padding: 0 24px;
  }
}
.line {
  height: 2px;
}
.line-blue {
  background: #4e4d93;
}
.line-grey {
  background: rgba(0, 0, 0, 0.1);
}
</style>
