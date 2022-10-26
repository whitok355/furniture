<template>
  <ul class="navigation">
    <div class="icons">
      <cart />
      <user />
    </div>
    <template v-for="(el, i) in navData" :key="i">
      <li class="navigation-li">
        <router-link :to="`/products/:${el.name}`" class="navigation-li__link"
          >{{ el.title }}
        </router-link>
      </li>
    </template>
  </ul>
</template>
<script>
import cart from "@/components/svg/cart.vue";
import user from "@/components/svg/user.vue";
export default {
  components: { cart, user },
  data() {
    return {
      navData: [
        {
          id: 1,
          name: "Plant_pots",
          title: "Plant pots",
          link: "#",
        },
        {
          id: 2,
          name: "Ceramics",
          title: "Ceramics",
          link: "#",
        },
        {
          id: 3,
          name: "Tables",
          title: "Tables",
          link: "#",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.navigation {
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px 24px;
  }
  &-li:hover &-li__link {
    border-bottom: 1px solid var(--darkPrimary);
  }
  &-li {
    list-style-type: none;
  }
  &-li:not(:last-child) {
    margin-bottom: 15px;
  }
  &-li__link {
    color: var(--grey);
    text-decoration: none;
  }
  @media (min-width: 768px) {
    & {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    &-li:not(:last-child) {
      margin-bottom: 0;
      margin-right: 44px;
    }
  }
}
.icons {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.icon-user {
  display: block;
  @media (min-width: 768px) {
    & {
      display: none;
    }
  }
}
.icon-cart {
  display: block;
  margin-right: 16px;
  @media (min-width: 768px) {
    & {
      display: none;
    }
  }
}
</style>
