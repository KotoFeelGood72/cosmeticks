<template>
  <div class="home">
    <hero/>
    <services />
    <slider-five :data="five" title="Популярные товары" class="pt-[100px]"/>
    <brand/>
    <slider-five :data="five" title="Товары по акции" class="mb-[160px]"/>
    <sale/>
    <about/>
    <seo-block/>
  </div>
</template>

<script>
  import { five } from '@/data/five.js'
  export default {
    components: {
      hero: () => import('@/components/blocks/hero'),
      Services: () => import('@/components/blocks/services'),
      sliderFive: () => import('@/components/blocks/slider/slider'),
      brand: () => import('@/components/blocks/brand'),
      sale: () => import('@/components/blocks/sale'),
      about: () => import('@/components/blocks/about/about-block'),
      seoBlock: () => import('@/components/ui/seo-block'),
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
