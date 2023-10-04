<template>
  <div class="home">
    <hero/>
    <services />
    <slider-five :data="five" title="Популярные товары" class="pt-[100px]"/>
    <brand/>
    <slider-five :data="five" title="Товары по акции" />
  </div>
</template>

<script>
import { five } from '@/data/five.js'
  export default {
    components: {
      Hero: () => import('@/components/blocks/hero'),
      Services: () => import('@/components/blocks/services'),
      sliderFive: () => import('@/components/blocks/slider/slider'),
      brand: () => import('@/components/blocks/brand'),
    },
    data() {
      return {
        five
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
