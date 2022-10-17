<template>
  <div class="discription">
    <div class="discription-content">
      <h2 class="discription-content__title">
        From a studio in London to a global brand with over 400 outlets
      </h2>
      <p class="discription-content__text">
        When we started Avion, the idea was simple. Make high quality furniture affordable
        and available for the mass market. <br /><br /><br /><span
          class="discription-content__text"
          >Handmade, and lovingly crafted furniture and homeware is what we live, breathe
          and design so our Chelsea boutique become the hotbed for the London interior
          design community.</span
        >
      </p>
      <btnLink :text="'Get in touch'" />
    </div>
    <div class="discription-image"></div>
  </div>
</template>
<script>
import btnLink from "./elements/btn-link.vue";
export default {
  components: { btnLink },
};
</script>
<style lang="scss" scoped>
.discription {
  margin-top: 86px;
  display: flex;
  flex-direction: column;
  &-content {
    padding: 0 24px;
    &__text {
      margin: 0;
      margin-top: 12px;
      color: #505977;
    }
  }
  &-image {
    background-image: url(/discription-background.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    min-width: 390px;
    min-height: 358px;
    margin-top: 38px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    &-content {
      width: 100%;
      padding: 0;
      padding-bottom: 48px;
    }
    &-image {
      width: 100%;
      margin-top: 0;
    }
  }
  @media (min-width: 1440px) {
    &-content {
      padding: 72px 100px 54px 0;
      &__text {
        max-width: 473px;
      }
    }
  }
}
.btn-link {
  margin-top: 64px;
  @media (min-width: 1440px) {
    margin-top: 196px;
    justify-content: flex-start;
  }
}
</style>
