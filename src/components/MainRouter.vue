<template>
  <HeroBlock />
  <Features />
  <ListingsNew :title="'New ceramics'" :goods="newGoods" />
  <ListingsOur :title="'Our popular products'" :goods="ourGoods" />
  <SignUp />
  <Discription />
</template>
<script>
import HeroBlock from "@/components/HeroBlock.vue";
import Features from "@/components/Features.vue";
import ListingsNew from "@/components/listings-block/Listings-new.vue";
import ListingsOur from "@/components/listings-block/Listings-our.vue";
import SignUp from "@/components/Sign-up.vue";
import Discription from "@/components/Discription.vue";

export default {
  components: {
    HeroBlock,
    Features,
    ListingsNew,
    ListingsOur,
    SignUp,
    Discription,
  },
  data(){
    return {
      goods: [],
      newGoods: this.ourGoods(),
      ourGoods: this.newGoods(),
    }
  },
  mounted() {
    console.log(123)
    let idGood = 1;
    for (let i = 0; i < 5; i++) {
      const arrApi = api.getPopularProducts();
      arrApi.forEach((good) => {
        good.id = idGood;
        idGood++;
        if (i % 2 === 0) {
          good.collection = "new";
        } else {
          good.collection = "our";
        }
        this.goods.push(good);
      });
    }
  },
  computed:{
    ourGoods(){
      console.log(13)
        let arr = this.goods.filter((good) => good.collection === "our");
        return arr.splice(0, 4);
    }
    newGoods(){
        let arr = this.goods.filter((good) => good.collection === "new");
        return arr.splice(0, 4);
    }
  }
};
</script>
<style lang="scss" scoped></style>
