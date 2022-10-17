<template>
  <div class="filter-wrapper">
    <div class="sorting">
      <h5 class="sorting__title">Sorting</h5>
      <ul class="sorting-params">
        <li p="sorting-params__param">Price app</li>
        <li p="sorting-params__param">Price down</li>
        <li p="sorting-params__param">first A</li>
        <li p="sorting-params__param">First Z</li>
      </ul>
    </div>
    <div class="filtering">
      <h5 class="filtering__title">Filtering</h5>
      <ul class="filtering-params">
        <li class="filtering-params__param">For the kitchen</li>
        <li class="filtering-params__param">For the bedroom</li>
        <li class="filtering-params__param">For the bathroom</li>
        <li class="filtering-params__param">For the nursery</li>
      </ul>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.filter-wrapper {
  display: flex;
  justify-content: space-between;
}
.sorting {
  position: relative;
  &__title {
    margin-right: 20px;
  }
  &__title:hover {
    font-weight: 700;
  }
  &::after {
    position: absolute;
    top: 27px;
    right: 0;
    content: "";
    background-image: url("/svg/arrow-down.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 16px;
    width: 16px;
    display: inline-block;
  }
  &:hover &-params {
    position: absolute;
    top: 35px;
    left: 0;
    display: inline-block;
    background: #f2f2f2;
    padding: 10px;
    border-radius: 10px;
    width: max-content;
  }
  &-params {
    display: none;
    &__param:hover {
      border-bottom: 1px solid black;
    }
    &__param {
      margin-top: 5px;
    }
  }
}

.filtering {
  position: relative;
  &__title {
    margin-right: 20px;
  }
  &__title:hover {
    font-weight: 700;
  }
  &::after {
    position: absolute;
    top: 27px;
    right: 0;
    content: "";
    background-image: url("/svg/arrow-down.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 16px;
    width: 16px;
    display: inline-block;
  }
  &:hover &-params {
    position: absolute;
    top: 35px;
    left: -50px;
    display: inline-block;
    background: #f2f2f2;
    padding: 10px;
    border-radius: 10px;
    width: max-content;
  }
  &-params {
    display: none;
    &__param:hover {
      border-bottom: 1px solid black;
    }
    &__param {
      margin-top: 5px;
    }
  }
}
</style>
