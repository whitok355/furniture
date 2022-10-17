<template>
  <div class="hero-block">
    <div class="hero-block-content">
      <h2 id="content-title" class="hero-block-content__title">
        The furniture brand for the future, with timeless designs
      </h2>
      <p id="content-discr" class="hero-block-content__discription">
        A new era in eco friendly furniture with Avelon, the French luxury retail brand
        with nice fonts, tasteful colors and a beautiful way to display things digitally
        using modern web technologies.
      </p>
      <btnLink id="content-btn" :activeClass="'btn-link__linkBlue'" />
    </div>
    <div id="content-image" class="hero-block-image"></div>
  </div>
</template>
<script>
import btnLink from "./elements/btn-link.vue";
export default {
  components: { btnLink },
};
</script>
<style lang="scss" scoped>
.hero-block {
  padding: 40px 24px 24px;
  background: #2a254b;
  @media (min-width: 1440px) {
    display: flex;
    padding: 0;
    margin-top: 60px;
  }
}
.hero-block-content {
  &__title {
    color: white;
  }
  &__discription {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: white;
    padding-top: 80px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    & {
      display: grid;
      grid-template-rows: repeat(3, 0fr);
      grid-template-areas: "content-title" "content-btn" "content-discr";
      padding: 60px 24px;
    }
    &__discription {
      padding-top: 196px;
    }
  }
}
.hero-block-image {
  display: none;
  @media (min-width: 1440px) {
    display: block;
    background: url(/background-hero.png);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    height: inherit;
  }
}
.btn-link {
  margin-top: 32px;
  @media (min-width: 1440px) {
    margin-top: 41px;
    justify-content: flex-start;
  }
}
#content-title {
  grid-area: content-title;
}
#content-discr {
  grid-area: content-discr;
}
#content-btn {
  grid-area: content-btn;
}
</style>
