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
        five: [
          {
            title: 'Skin Deva 100% Pure Hyaluronic Acid Сыворотка...',
            img: '/assets/img/products/prod-1.jpg',
            price: '20 000',
            oldprice: '',
            meta: 'NEW'
          },
          {
            title: 'Skin Deva 100% Pure Hyaluronic Acid Сыворотка...',
            img: '/assets/img/products/prod-2.jpg',
            price: '20 000',
            oldprice: '20 000',
            meta: 'SALE'
          },
          {
            title: 'Skin Deva 100% Pure Hyaluronic Acid Сыворотка...',
            img: '/assets/img/products/prod-3.jpg',
            price: '20 000',
            oldprice: '',
            meta: ''
          },
          {
            title: 'Skin Deva 100% Pure Hyaluronic Acid Сыворотка...',
            img: '/assets/img/products/prod-4.jpg',
            price: '20 000',
            oldprice: '',
            meta: ''
          },
          {
            title: 'Skin Deva 100% Pure Hyaluronic Acid Сыворотка...',
            img: '/assets/img/products/prod-4.jpg',
            price: '20 000',
            oldprice: '',
            meta: ''
          },
          {
            title: 'Skin Deva 100% Pure Hyaluronic Acid Сыворотка...',
            img: '/assets/img/products/prod-4.jpg',
            price: '20 000',
            oldprice: '',
            meta: ''
          }
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
