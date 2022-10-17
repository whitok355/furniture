<template>
  <form :class="classActiveForm">
    <input :class="classActiveInput" type="mail" placeholder="your@email.com" />
    <button :class="classActiveButton">Sign up</button>
  </form>
</template>
<script>
export default {
  props: {
    classActiveForm: {
      type: String,
    },
    classActiveInput: {
      type: String,
    },
    classActiveButton: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-up-form {
  display: flex;
  &:hover {
    cursor: pointer;
  }
  &__input {
    padding: 17px 0 17px 17px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    &:hover {
      cursor: pointer;
    }
  }
  &__button {
    padding: 16px 32px;
    background: #2a254b;
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: none;
    font-family: "Satoshi", sans-serif;
    &:hover {
      cursor: pointer;
    }
  }
}
.footer-sign-up-form {
  &__input {
    padding: 17px 0 17px 23px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    background: #4e4d93;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
  &__input::placeholder {
    color: white;
  }
  &__button {
    padding: 15.5px 32px;
    background: white;
    color: #2a254b;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: none;
    font-family: "Satoshi", sans-serif;
    &:hover {
      cursor: pointer;
    }
  }
  @media (min-width: 1440px) {
    &__input {
      padding-right: 360px;
    }
  }
}
</style>
