<template>
  <div class="header-main--w">
    <div class="container">
      <div class="header_main flex items-center">
        <div class="header-col--left flex items-center justify-start mr-[65px]">
          <div class="logo mr-[20px]">
            <nuxt-link to="/" class="text-30 font-corm">{{ logo }}</nuxt-link>
          </div>
          <div class="header-description font-light">Online-магазин профессиональной косметики</div>
        </div>
        <header-search class="mr-[90px]"/>
        <Header-interface/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        logo: 'КОСМЕЦЕВТИКА'
      }
    },
    components: {
      HeaderSearch: () => import('@/components/ui/input/input-search'),
      HeaderInterface: () => import('@/components/shop/interface-header'),
    }
  }
</script>

<style lang="scss" scoped>


.header_main {
  padding: 25px 0 37px 0;
}
</style>
