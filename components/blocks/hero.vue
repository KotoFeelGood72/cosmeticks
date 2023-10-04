<template>
  <section class="hero relative mb-[100px]">
    <div class="hero-slider h-[676px] swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, i) in slider" :key="'hero-slide-' + i">
          <nuxt-img
          class="w-full h-full slide-img"
            :src="item.img"
          />
          <div class="container relative z-20">
            <div class="hero-slide max-w-[693px]">
              <h1 class="text-45 font-corm mb-[25px] font-semibold leading-[110%]">{{ item.title }}</h1>
              <p class="mb-[45px] text-xl font-light">{{ item.txt }}</p>
              <d-btn name="Перейти к брендам" type="link" link="/brand"/>
            </div>
          </div>
        </div>
      </div>
      <div class="slider-navigation">
        <div class="slider-prev">
          <icons icon="ph:caret-left-bold" width="20" height="20"/>
        </div>
        <div class="slider-next">
          <icons icon="ph:caret-right-bold" width="20" height="20"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        slider: [
          {
            title: 'Большой выбор профессиональной косметики для лица и тела',
            txt: 'Лучшие бренды профессиональной космецевтики : IMAGE SKINCARE, SESDERMA, GIGI, HYDROPEPTIDE, OBAGI и многие другие.',
            img: 'assets/img/hero/0.jpg'
          },
          {
            title: 'Большой выбор профессиональной косметики для лица и тела',
            txt: 'Лучшие бренды профессиональной космецевтики : IMAGE SKINCARE, SESDERMA, GIGI, HYDROPEPTIDE, OBAGI и многие другие.',
            img: 'assets/img/hero/1.jpg'
          },
          {
            title: 'Большой выбор профессиональной косметики для лица и тела',
            txt: 'Лучшие бренды профессиональной космецевтики : IMAGE SKINCARE, SESDERMA, GIGI, HYDROPEPTIDE, OBAGI и многие другие.',
            img: 'assets/img/hero/2.jpg'
          },
          {
            title: 'Большой выбор профессиональной косметики для лица и тела',
            txt: 'Лучшие бренды профессиональной космецевтики : IMAGE SKINCARE, SESDERMA, GIGI, HYDROPEPTIDE, OBAGI и многие другие.',
            img: 'assets/img/hero/3.jpg'
          }
        ],
      }
    },
    components: {
      dBtn: () => import('@/components/ui/button/d-btn')
    },
    methods: {
      initSlider() {
        new this.$swiper('.hero-slider', {
          speed: 400,
          spaceBetween: 20,
          navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
          }
        })
      }
    },
    mounted() {
      this.initSlider();
    }
  }
</script>

<style lang="scss" scoped>
.slider-navigation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 99;
  @include flex-space;
  padding: 0 20px;
  pointer-events: none;

  div {
    pointer-events: all;
    width: 59px;
    height: 59px;
    @include flex-center;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
      background-color: $orange;
      color: $white;
    }

    &.swiper-button-disabled {
      opacity: .5;
      pointer-events: none;
    }
  }
}


.heros-slide {
  position: relative;
}

.slide-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.hero-slider {
  .swiper-slide {
    height: 100%;
    @include flex-center;
    flex-direction: column;
    align-content: center;
    &:before {
      content: '';
      height: 583px;
      border-radius: 1452px;
      width: 1452px;
      background: rgba(255, 255, 255, 0.50);
      filter: blur(100px);
      position: absolute;
      left: -447px;
      bottom: 97px;
      z-index: 2;
    }
  }
}


</style>
