<template>
  <HeroBlock />
  <Features />
  <ListingsNew />
  <ListingsOur />
  <signUp />
  <Discription />
</template>
<script>
import HeroBlock from "./HeroBlock.vue";
import Features from "./Features.vue";
import ListingsNew from "./listings-block/Listings-new.vue";
import ListingsOur from "./listings-block/Listings-our.vue";
import signUp from "./elements/sign-up.vue";
import Discription from "./Discription.vue";
export default {
  components: {
    lines,
    HeroBlock,
    Features,
    ListingsNew,
    ListingsOur,
    SignUp,
    Discription,
  },
};
</script>
<style lang="scss" scoped></style>
