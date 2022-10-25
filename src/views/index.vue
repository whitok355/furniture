<template>
  <HeroBlock />
  <Features />
  <div class="err" v-if="err.boolValue">{{ err.text }}</div>
  <ListingsNew
    :title="'New ceramics'"
    :goods="newGood"
    :loading="loading"
    v-if="!err.boolValue"
  />
  <ListingsOur
    v-if="!err.boolValue"
    :title="'Our popular products'"
    :goods="ourGoods"
    :loading="loading"
    :err="err"
  />
  <SignUp />
  <Discription />
</template>
<script>
import HeroBlock from "@/components/HeroBlock.vue";
import Features from "@/components/Features.vue";
import ListingsNew from "@/components/listings-block/Listings-new.vue";
import ListingsOur from "@/components/listings-block/Listings-our.vue";
import SignUp from "@/components/sign-up.vue";
import Discription from "@/components/Discription.vue";
import api from "@/api.js";
export default {
  components: {
    HeroBlock,
    Features,
    ListingsNew,
    ListingsOur,
    SignUp,
    Discription,
  },
  data() {
    return {
      loading: true,
      goods: [],
      err: {
        text: "",
        boolValue: false,
      },
    };
  },
  async mounted() {
    let idGood = 1;
    for (let i = 0; i < 5; i++) {
      try {
        const arrApi = await api.getPopularProducts();
        arrApi.forEach((good) => {
          if (i % 2 === 0) {
            good.collection = "new";
          } else {
            good.collection = "our";
          }
          this.goods.push(good);
        });
        this.loading = false;
      } catch (err) {
        this.err.text = err.toString();
        this.err.boolValue = true;
      }
    }
  },
  computed: {
    newGood() {
      let arr = this.goods.filter((good) => good.collection === "new");
      return arr.splice(0, 4);
    },
    ourGoods() {
      let arr = this.goods.filter((good) => good.collection === "our");
      return arr.splice(0, 4);
    },
  },
};
</script>
<style lang="scss" scoped>
.err {
  padding: 0 24px;
  color: red;
  font-size: 24px;
  margin-top: 50px;
}
</style>
