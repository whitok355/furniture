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
    background: var(--darkPrimary);
    color: var(--white);
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
    background: var(--primary);
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
  &__input::placeholder {
    color: var(--white);
  }
  &__button {
    padding: 15.5px 32px;
    background: var(--white);
    color: var(--black);
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
      padding-right: 350px;
    }
  }
}
</style>
