<template>
  <div class="products-card" :class="data.meta">
    <div class="products-img rounded-[15px]">
      <nuxt-link to="/">
        <nuxt-img
          :src="data.img"
        />
      </nuxt-link>
      <div class="products-meta text-14 uppercase font-semibold text-white rounded-[8px]" :class="data.meta" v-if="data.meta">{{ data.meta }}</div>
      <div class="like-products">
        <button type="button">
          <icons icon="ei:heart" width="30" height="30"/>
        </button>
      </div>
    </div>
    <div class="products-content">
      <h3>{{ data.title }}</h3>
      <div class="products-bottom w-full">
        <div class="products-price text-18 font-semibold mr-[30px]">{{ data.price }} ₽ <span v-if="data.oldprice" class="text-14 text-[#2C2C2C66] pl-[10px]">{{ data.oldprice }} ₽</span></div>
        <div class="add-to-cart">
          <button type="button">
            <icons icon="mdi-light:cart" width="20" height="20"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="scss" scoped>

  .products-card {
    border-radius: 15px;
    background-color: $white;
    border: 1px solid rgba(44, 44, 44, 0.15);
    padding: 18px;
  }


  .products-img {
    @include flex-center;
    width: 224px;
    margin: 0 auto;
    position: relative;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
}

.products-meta {
  position: absolute;
  top: 0;
  left: 0;

  &.NEW {
    background-color: $green;
    padding: 6px;
  }
  &.SALE {
    background-color: $pink;
    padding: 6px;
  }
}

.like-products {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 44px;
  height: 44px;
  @include flex-center;
  border-radius: 100%;
  background: #FFF;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.08);
  z-index: 3;
}

.products-content {
  h3 {
    margin: 18px 0 19px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    max-height: 44px;
  }
}

.products-card {
  &.NEW {
    .products-price {
      color: $breez;
      span { text-decoration: line-through }
    }
  }
  &.SALE {
    .products-price {
      color: $pink;
      span { text-decoration: line-through }
    }
  }
}

.products-bottom {
  @include flex-space;
}

.add-to-cart {
  width: 44px;
  height: 44px;
  @include flex-center;
  background-color: $orange;
  color: $white;
  border-radius: 100%;
}
</style>
