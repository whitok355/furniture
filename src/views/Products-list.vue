<template>
  <div class="products">
    <h2 class="products__title">View all products</h2>
    <div class="filter-container">
      <filterEL />
    </div>
    <div class="loader-container" v-if="loading">
      <loader />
    </div>
    <div class="listings-items" v-else>
      <div class="err" v-if="err != ''">{{ err }}</div>
      <listingsItem :goods="getMoreGood" v-else />
    </div>
    <btn @click="showMore" v-if="!loading" :btnDisabled="btnDisabled">Show more</btn>
    <signUp />
  </div>
</template>
<script>
import listingsItem from "@/components/card-goods/listings-Item.vue";
import signUp from "@/components/Sign-up.vue";
import btn from "@/components/elements/btn.vue";
import filterEL from "@/components/elements/filter.vue";
import loader from "@/components/elements/loader.vue";
import api from "@/api.js";
export default {
  components: { listingsItem, signUp, btn, filterEL, loader },
  data() {
    return {
      loading: true,
      goods: [],
      counteGood: 4,
      err: "",
      btnDisabled: false,
    };
  },
  mounted() {
    this.getGoods();
  },
  methods: {
    async getGoods() {
      try {
        let routerId = this.$route.params.id.slice(1);
        const arrType = ["Plant_pots", "Ceramics", "Tables"];
        let sortArr = [];
        for (let i = 0; i < 5; i++) {
          const arr = await api.getPopularProducts();
          arr.forEach((good) => {
            let randomId = Math.floor(Math.random() * 3);
            good.type = arrType[randomId];
            sortArr.push(good);
            this.goods = sortArr;
          });
        }
        if (routerId != "all") {
          this.goods = sortArr.filter((good) => good.type === routerId);
        }
      } catch (err) {
        this.err = err.toString();
      }
      this.loading = false;
    },
    showMore() {
      if (this.counteGood < this.goods.length) {
        this.counteGood += 4;
      }
      if (this.counteGood >= this.goods.length) {
        this.btnDisabled = true;
      }
    },
  },
  computed: {
    getMoreGood() {
      return this.goods.slice(0, this.counteGood);
    },
  },
};
</script>
<style lang="scss" scoped>
.products {
  &__title {
    padding: 0 24px;
  }
  @media (min-width: 1440px) {
    &__title {
      text-transform: uppercase;
    }
  }
}
.filter-container {
  margin-bottom: 130px;
  padding: 0 24px;
}
.listings-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 8px 0 24px;
  margin-right: 16px;
  @media (min-width: 768px) {
    margin-right: 0;
  }
}
.listings-item {
  margin-bottom: 20px;
  max-width: 50%;
  @media (min-width: 768px) {
    min-width: 305px;
    min-height: 462px;
  }
}
.btn-container {
  display: flex;
  justify-content: center;
}
.sign-up {
  margin-bottom: 70px;
}
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}
.err {
  font-size: 24px;
  color: red;
}
</style>
