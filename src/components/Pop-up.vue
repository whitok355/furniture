<template>
  <div class="pop-up animation" v-if="viewPopUp">
    <div class="pop-up-top">
      <h4
        id="signIn"
        :class="active ? 'active' : ''"
        class="pop-up-top__el"
        @click="changeForm"
      >
        Enter your account
      </h4>
      <h4
        id="signUp"
        :class="!active ? 'active' : ''"
        class="pop-up-top__el"
        @click="changeForm"
      >
        Registration
      </h4>
      <close :color="'black'" @click="showPopUpA" />
    </div>
    <form class="pop-up-form" v-if="active">
      <input class="pop-up-form__el" placeholder="Enter your email" />
      <input class="pop-up-form__el" type="password" placeholder="Enter your password" />
      <btn>Sign in</btn>
    </form>
    <form class="pop-up-form" v-else>
      <input class="pop-up-form__el" placeholder="Enter your email" />
      <input class="pop-up-form__el" type="password" placeholder="Entrer your password" />
      <input
        class="pop-up-form__el"
        type="password"
        placeholder="Please retry your password"
      />
      <btn>Registration</btn>
    </form>
  </div>
</template>
<script>
import btn from "@/components/elements/btn.vue";
import close from "@/components/svg/close.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { btn, close },
  data() {
    return {
      active: true,
    };
  },
  methods: {
    ...mapActions(["showPopUpA"]),
    changeForm(e) {
      if (e.target.id === "signIn") {
        this.active = true;
      }
      if (e.target.id === "signUp") {
        this.active = false;
      }
    },
    closurePopUp() {
      this.$emit("closurePopUp");
    },
  },
  computed: {
    ...mapState({
      viewPopUp: (state) => state.viewPopUp,
    }),
  },
};
</script>
<style lang="scss">
.pop-up {
  position: absolute;
  top: 10%;
  right: 3%;
  padding: 10px 20px;
  z-index: 1;
  width: 70%;
  background: var(--white);
  border-radius: 20px;
  -webkit-box-shadow: 0px 4px 52px 63px rgba(209, 208, 210, 0.4);
  -moz-box-shadow: 0px 4px 52px 63px rgba(209, 208, 210, 0.4);
  box-shadow: 0px 4px 52px 63px rgba(209, 208, 210, 0.4);
  &-top {
    display: flex;
    justify-content: space-between;
    &__el:hover {
      cursor: pointer;
    }
  }
  &-form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    &__el {
      margin-top: 30px;
      padding: 16px 100px 16px 10px;
      border-radius: 10px;
    }
  }
  @media (min-width: 768px) {
    top: 3%;
    right: 3%;
    padding: 30px 50px;
    max-width: 390px;
    min-height: 300px;
  }
}
.btn-container {
  margin-top: 30px;
}
.active {
  border-bottom: 2px solid black;
}
</style>
