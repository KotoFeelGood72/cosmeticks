<template>
  <section class="five-slider">
    <div class="container">
      <div class="five_slider--head mb-[50px] flex items-center justify-between">
        <div class="five_slider--title">
          <section-title level="h2" :title="title" class="text-40 font-corm font-medium"/>
        </div>
        <div class="five-navigation">
          <div class="five-prev" :class="prev">
            <button type="button">
              <icons icon="ph:caret-left-bold" width="20" height="20"/>
            </button>
          </div>
          <div class="five-next" :class="next">
            <button type="button">
              <icons icon="ph:caret-right-bold" width="20" height="20"/>
            </button>
          </div>
        </div>
      </div>
      <swiper class="five-sliders swiper-container" ref="sliderAll" :options="sliderOptions">
        <!-- <div class="swiper-wrapper"> -->
          <swiper-slide class="swiper-slide" v-for="(item, i) in data" :key="'slider-' + i">
            <div class="five-slide">
              <card-products :data="item"/>
            </div>
          </swiper-slide>
        <!-- </div> -->
      </swiper>
    </div>
  </section>
</template>

<script>
import sectionTitle from '@/components/ui/section-title';
import cardProducts from '@/components/blocks/products/card';

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    sectionTitle,
    cardProducts,
    Swiper,
    SwiperSlide
  },
  props: ['data', 'title', 'next', 'prev'],
  data() {
    return {
      sliderOptions: {
        navigation: {
          nextEl: '.' + this.next,
          prevEl: '.' + this.prev,
        },
        speed: 400,
        spaceBetween: 20,
        breakpoints: {
          320: {
            spaceBetween: 20,
            slidesPerView: 1,
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 20,
            slidesPerView: 3,
          },
          1240: {
            spaceBetween: 20,
            slidesPerView: 4,
          },
          1520: {
            spaceBetween: 30,
            slidesPerView: 5,
          },
        },
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.five-navigation {
  @include flex-end;

  div {
    pointer-events: all;
    width: 59px;
    height: 59px;
    @include flex-center;
    border-radius: 100%;
    transition: all .3s ease;
    cursor: pointer;

    background-color: $orange;
    color: $white;
    &:hover {
    }
    &:nth-child(1) {
      margin-right: 20px;
    }
    &.swiper-button-disabled {
      background-color: rgba(255, 106, 40, 0.20);
      pointer-events: none;
      color: #2C2C2C4D;
    }
  }
}

.five-sliders {
  padding: 50px 0!important;
  margin: -50px 0!important;
}
</style>
