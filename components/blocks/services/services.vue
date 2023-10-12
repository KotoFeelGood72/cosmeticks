<template>
 <section class="services pb-[100px]">
      <div class="container">
        <ul class="services-list">
          <li v-for="(item, i) in list" :key="'services-' + i">
            <card :data="item"/>
          </li>
        </ul>
      </div>
    </section>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            num: '01',
            name: '<strong>Только официальная</strong><br> продукция',
            img: '/assets/img/services/services-1.png',
            classes: 'sea'
          },
          {
            num: '02',
            name: '<strong>Бесплатная доставка</strong><br> по России от 10 000 руб.',
            img: 'assets/img/services/services-2.png',
            classes: 'orange'
          },
          {
            num: '03',
            name: '<strong>Консультация косметолога</strong><br> по подбору средств',
            img: 'assets/img/services/services-3.png',
            classes: 'orange'
          },
          {
            num: '04',
            name: '<strong>Система скидок</strong> <br>для постоянных покупателей',
            img: 'assets/img/services/services-4.png',
            classes: 'sea'
          },
        ]
      }
    },
    components: {
      card: () => import('./card.vue')
    }
  }
</script>

<style lang="scss" scoped>


.services-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  grid-gap: 81px 30px;
  li {
    &:nth-child(1) {
    :deep(.services-img) {
      bottom: -19px;
      right: 13px;
    }
  }
  &:nth-child(2) {
    :deep(.services-img) {
      bottom: -31px;
      right: 23px;
    }
  }
  &:nth-child(3) {
    :deep(.services-img) {
      right: 53px;
    }
  }
  &:nth-child(4) {
    :deep(.services-img) {
      bottom: -49px;
      right: 0;
    }
  }
  }
}
</style>
