<template>
  <div class="btn-container">
    <button
      :class="btnDisabled ? 'btn-disabled' : 'btn-noDisabled'"
      class="btn"
      :disabled="btnDisabled ? true : false"
    >
      <slot />
    </button>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      typer: String,
    },
    btnDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  text-align: center;
  padding: 16px 110px;
  color: var(--white);
  border: none;
}
.btn:hover {
  cursor: pointer;
}
.btn-noDisabled {
  background: var(--darkPrimary);
}
.btn-disabled {
  background: var(--primary);
  opacity: 0.5;
}
</style>
