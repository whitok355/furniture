<template>
  <Navigation />
  <card :good="good" :loading="loading" :key="good.id" />
  <div class="err" v-if="err.boolValue">{{ err.text }}</div>
  <listingsNew
    @click="getGood()"
    :title="'You might also like'"
    :goods="newGoods"
    :loading="loading"
    v-else
  />
  <features />
  <SignUp />
</template>
<script>
import features from "@/components/Features.vue";
import listingsNew from "@/components/listings-block/Listings-new.vue";
import SignUp from "@/components/Sign-up.vue";
import card from "@/components/card-goods/card.vue";
import Navigation from "@/components/elements/Navigation.vue";
import api from "@/api.js";
export default {
  components: { features, listingsNew, SignUp, card, Navigation },
  data() {
    return {
      loading: true,
      newGoods: [],
      good: {},
      err: {
        text: "",
        boolValue: false,
      },
    };
  },
  mounted() {
    this.getGood();
  },
  methods: {
    async getGood() {
      try {
        const idGood = this.$route.params.id.slice(1);
        this.newGoods = await api.getPopularProducts();
        this.good = this.newGoods.find((el) => el.id === idGood);
      } catch (err) {
        this.err.text = err.toString();
        this.err.boolValue = true;
      }
      this.loading = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.sign-up {
  margin-bottom: 119px;
}
.err {
  margin-top: 50px;
  color: red;
}
</style>
