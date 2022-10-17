<template>
  <div class="btn-container">
    <div class="btn">{{ text }}</div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      typer: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  text-align: center;
  background: #2a254b;
  padding: 16px 110px;
  color: white;
}
.btn:hover {
  cursor: pointer;
}
</style>
