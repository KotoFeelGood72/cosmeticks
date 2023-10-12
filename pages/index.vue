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
import hero from '../components/blocks/hero.vue'
import services from '../components/blocks/services/services.vue'
import sliderFive from '../components/blocks/slider/slider.vue'
import brand from '../components/blocks/brand/brand.vue'
import sale from '../components/blocks/sale/sale.vue'
import about from '../components/blocks/about/about-block.vue'
import seoBlock from '../components/ui/seo-block.vue'
  export default {
    components: {
      hero,
      services,
      sliderFive,
      brand,
      sale,
      about,
      seoBlock,
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
