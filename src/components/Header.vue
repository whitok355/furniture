<template>
  <header class="header">
    <router-link to="/" id="logo" class="header-title"><h1>Avion</h1></router-link>
    <search />
    <user @click="closurePopUp" />
    <cart />
    <svg
      @click="showNavigation"
      id="menu"
      class="header-menu"
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0H0V1H12V0Z" fill="#2A254B" />
      <path d="M12 9H0V10H12V9Z" fill="#2A254B" />
      <path d="M12 3H0V4H12V3Z" fill="#2A254B" />
      <path d="M12 6H0V7H12V6Z" fill="#2A254B" />
    </svg>
  </header>
</template>
<script>
import cart from "./svg/cart.vue";
import user from "./svg/user.vue";
import search from "./svg/search.vue";
export default {
  components: { cart, user, search },
  methods: {
    showNavigation() {
      this.$emit("showNavigation");
    },
    closurePopUp() {
      console.log("asdf");
      this.$emit("closurePopUp");
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 1fr 0fr 0fr;
  align-items: center;
  grid-template-areas: "logo search menu";
  padding: 20px 24px;
  &-title {
    color: #22202e;
    text-decoration: none;
    text-align: center;
  }
  &-search {
    margin-right: 20px;
  }
  @media (min-width: 768px) {
    & {
      grid-template-columns: 0.3fr 1fr 0fr 0fr;
      grid-template-areas: "search logo cart user";
      text-align: center;
    }
    &-title {
      margin-right: 200px;
    }
    &-menu {
      display: none;
    }
  }
}
.icon-user {
  display: none;
  @media (min-width: 768px) {
    & {
      display: block;
    }
  }
}
.icon-cart {
  display: none;
  @media (min-width: 768px) {
    & {
      display: block;
      margin-right: 16px;
    }
  }
}

#logo {
  grid-area: logo;
}
#search {
  grid-area: search;
}
#user {
  grid-area: user;
}
#cart {
  grid-area: cart;
}
#menu {
  grid-area: menu;
}
</style>
