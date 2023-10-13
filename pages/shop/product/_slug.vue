<template>
  <div class="product">
    <section class="products_main">
      <div class="container">
        <div class="products__top">
          <div class="products__gallery">
            <div class="products__gallerySlider swiper-container productsGallery" ref="slider">
              <div class="swiper-wpapper">
                <div class="swiper-slide" v-for="(item, i) in gallery" :key="'single-slide-' + i">
                  <a href="#">
                    <nuxt-img
                      :src="item.link"
                      :alt="item.title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="products__thumbSlider swiper-container" ref="productsThumb">
              <div class="swiper-wpapper">
                <div class="swiper-slide" v-for="(item, i) in gallery" :key="'single-thumb-' + i">
                  <nuxt-img
                    :src="item.link"
                    :alt="item.title"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="products__topContent">
            <div class="products__topHead">
              <section-title :title="products.productsTitle" class="text-40 font-corm font-medium mb-[20px]"/>
              <p>{{ products.brand }}</p>
            </div>
            <div class="products_topPrices">
              <p>{{ products.price }}</p>
              <div class="products__addToCart">
                <d-btn type="button" name="Добавить в корзину"/>
                <qty-input/>
              </div>
            </div>
            <div class="products__desc">
              <div class="products__label">Описание</div>
              <div class="products__descTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
              <button type="button">
                <p>Полное описание</p>
                <Icons icon="ph:caret-right-bold" width="20" height="20"/>
              </button>
            </div>
          </div>
        </div>
        <div class="products__bottom">
          <ul class="products_tabs__links">
            <li v-for="(item, i) in tabs" :key="'tab-link-' + i">{{ item.title }}</li>
          </ul>
          <ul class="products_tabs__contents">
            <li v-for="(item, i) in tabs" :key="'tab-content-' + i">
              <div v-if="item.txt">{{ item.txt }}</div>
              <ul v-else>
                <li v-for="(item, i) in item.list" :key="'subitem-' + i">
                  <p>{{ item.label }}</p>
                  <span>{{ item.value }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <slider-five :data="five" title="Вам может понравиться"/>
    </section>
  </div>
</template>

<script>
  import dBtn from '@/components/ui/button/d-btn.vue'
  import qtyInput from '@/components/ui/button/qty-input.vue'
  import sectionTitle from '@/components/ui/section-title.vue'
  import sliderFive from '@/components/blocks/slider/slider.vue'
  export default {
    data() {
      return {
        slider: null,
        productThumb: null,
        products: {
          productsTitle: 'Skin Deva 100% Pure Hyaluronic Acid Сыворотка',
          brand: 'Бренд',
          price: '20 000',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        gallery: [
          {
            link: '/assets/img/products/single.jpg',
            title: 'Изображение товара'
          },
          {
            link: '/assets/img/products/single.jpg',
            title: 'Изображение товара'
          },
        ],
        tabs: [
          {
            title: 'Описание',
            txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: 'Характеристики',
            list: [
              {
                label: 'Бренд',
                value: 'Skin Deva'
              },
              {
                label: 'Тип кожи',
                value: 'сухая кожа'
              },
            ]
          },
          {
            title: 'Состав',
            txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          },
        ],
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
    },
    components: {
      sectionTitle,
      dBtn,
      qtyInput,
      sliderFive
    },
  }
</script>

<style scoped lang="scss">


.products__top {
  @include flex-start;
  align-items: flex-start;
}

.products__gallery {
  max-width: 542px;
  width: 100%;
  margin-right: 90px;
}

.products__topContent {
  flex-grow: 1;
}
</style>