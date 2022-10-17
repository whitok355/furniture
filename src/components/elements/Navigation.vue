<template>
  <ul class="navigation" v-if="isNavigation">
    <div class="icons">
      <cart />
      <user @click="closurePopUp" />
    </div>
    <template v-for="(el, i) in navData" :key="i">
      <li class="navigation-li">
        <a class="navigation-li__link" :href="el.link">{{ el.title }}</a>
      </li>
    </template>
  </ul>
</template>
<script>
import cart from "../svg/cart.vue";
import user from "../svg/user.vue";
export default {
  components: { cart, user },
  props: {
    isNavigation: {
      type: Boolean,
    },
  },
  data() {
    return {
      navData: [
        {
          id: 1,
          title: "Plant pots",
          link: "#",
        },
        {
          id: 2,
          title: "Ceramics",
          link: "#",
        },
        {
          id: 3,
          title: "Tables",
          link: "#",
        },
        {
          id: 4,
          title: "Chairs",
          link: "#",
        },
        {
          id: 5,
          title: "Crockery",
          link: "#",
        },
        {
          id: 6,
          title: "Tableware",
          link: "#",
        },
        {
          id: 7,
          title: "Cutlery",
          link: "#",
        },
      ],
    };
  },
  methods: {
    closurePopUp() {
      console.log("asdf");
      this.$emit("closurePopUp");
    },
  },
};
</script>
<style lang="scss" scoped>
.navigation {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px 24px;

  &-li:hover &-li__link {
    border-bottom: 1px solid #726e8d;
  }
  &-li {
    list-style-type: none;
  }
  &-li:not(:last-child) {
    margin-bottom: 15px;
  }
  &-li__link {
    color: #726e8d;
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
