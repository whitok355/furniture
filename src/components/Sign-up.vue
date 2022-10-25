<template>
  <div class="sign-up">
    <h2 class="sign-up__title">Join the club and get the benefits</h2>
    <p class="sign-up__discription">
      Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up
      stores and more
    </p>
    <forms
      :classActiveForm="'sign-up-form'"
      :classActiveInput="'sign-up-form__input'"
      :classActiveButton="'sign-up-form__button'"
    />
  </div>
</template>
<script>
import forms from "@/components/elements/form.vue";
export default {
  components: { forms },
};
</script>
<style lang="scss" scoped>
.sign-up {
  padding: 0 24px;
  margin-top: 86px;
  &__discription {
    margin: 0;
    margin-top: 16px;
  }
  @media (min-width: 768px) {
    & {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
}
.sign-up-form {
  margin-top: 64px;
}
</style>
