<template>
  <section class="sale">
    <div class="sale_bg--img">
      <nuxt-img
        src="/assets/img/sale.jpg"
      />
      <nuxt-img
        src="/assets/img/sale-nabor.jpg"
        class="after-img"
      />
    </div>
    <div class="container">
      <div class="sale-main">
        <div class="sale-content">
          <h4>Акционные и подарочные наборы</h4>
          <div class="sale-txt">
            <p>В разделе представлены лучшие товары со скидками, подарочные наборы, комплекты для лица и тела, а также миниатюры средств.</p>
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

</style>
