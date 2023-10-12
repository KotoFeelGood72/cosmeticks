<template>
  <section class="sale">
    <div class="sale_bg--img">
      <nuxt-img
        src="/assets/img/sale.jpg"
      />
      <nuxt-img
        src="/assets/img/sale-nabor.png"
        class="after-img"
      />
    </div>
    <div class="container">
      <div class="sale-main">
        <div class="sale-content text-white max-w-[640px]">
          <h4 class="text-40 font-corm mb-[25px]">Акционные и подарочные наборы</h4>
          <div class="sale-txt">
            <p class="mb-[45px] text-xl font-light">В разделе представлены лучшие товары со скидками, подарочные наборы, комплекты для лица и тела, а также миниатюры средств.</p>
          </div>
          <d-btn name="Перейти к наборам" type="link" link="/"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    components: {
      dBtn: () => import('@/components/ui/button/d-btn')
    }
  }
</script>

<style lang="scss" scoped>


.sale {
  position: relative;
  padding: 130px 0 202px 0;
  margin-bottom: 188px;
}

.sale_bg--img {
  img {
    object-fit: cover;
    &:nth-child(1) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
}

.after-img {
  position: absolute;
  top: 80.5%;
  width: 145px;
  right: 21.1%;
}
</style>
