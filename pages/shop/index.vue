<template>
  <div class="shop">
    <div class="container">
      <div class="shop_main">
        <sidebar/>
        <div class="shop-content">
          <section-title title="Каталог" class="font-corm font-medium text-40 mb-[35px]"/>
          <div class="shop_content__head">
            <div class="shop__count">Найдено товаров: 6</div>
            <div class="shop-sortering">
              <div class="btn-sortering mr-[20px]">
                <img src="../../assets/icons/arrow-sortering.svg" alt="">
              </div>
              <div class="select-sort">
                <div @click="sortHandler">
                  <p :data-selected="sortLabel.slug">{{ sortLabel.name }}</p>
                  <icons icon="ph:caret-down-bold" color="#FF6A28" width="20" height="20"/>
                </div>
                <ul v-if="sortModal">
                  <li ref="optionSelect" v-for="item in sortList" :key="item.slug" :data-options="item.slug" @click="selectItem(item)">{{ item.name }}</li>
                </ul>
              </div>
            </div>
          </div>
          <ul class="grid-4 mb-[60px]">
            <li v-for="(item, i) in five" :key="'products' + i">
              <card-products :data="item"/>
            </li>
          </ul>
          <v-pagination/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import sidebar from '@/components/shop/sidebar'
  import sectionTitle from '@/components/ui/section-title';
  import cardProducts from '@/components/blocks/products/card';
  import { five } from '@/data/five.js'
  import vPagination from '@/components/ui/pagination.vue';

  export default {
    data() {
      return {
        five,
        sortModal: false,
        sortLabel: {
          name: 'По новизне',
          slug: 'new'
        },
        sortList: [
          { name: 'По новизне', slug: 'new' },
          { name: 'По стоимости', slug: 'cash' },
          { name: 'По популярности', slug: 'popular'},
          { name: 'По рейтингу', slug: 'stars' }
        ]
      }
    },
    components: {
      sidebar,
      sectionTitle,
      cardProducts,
      vPagination,
    },
    methods: {
      sortHandler() {
        this.sortModal = !this.sortModal
      },
      selectItem(item) {
        this.sortLabel = {
          name: item.name,
          slug: item.slug
        };
        this.sortModal = false; // Закрываем выпадающий список после выбора
      },
    },
  }
</script>

<style lang="scss" scoped>


.grid-4 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22%, 1fr));
  grid-gap: 30px;
}

.shop_main {
  @include flex-start;
  flex-wrap: wrap;
  margin: -69px -69px 0 0;
  align-items: flex-start;
  &>div {
    padding: 69px 69px 0 0;
  }
}

.shop-content {
  flex-grow: 1;
}

.shop_content__head {
  @include flex-space;
  margin-bottom: 25px;
}

.select-sort {
  position: relative;
  div {
    position: relative;
    @include flex-start;
    padding-right: 30px;
    cursor: pointer;

    .icons-arr {
      stroke: $orange;
      stroke-width: 2px;
      fill: none;
    }

    svg {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
  ul {
    position: absolute;
    top: calc(100% + 14px);
    right: 0;
    background-color: $white;
    box-shadow: 0px 9px 30px rgba(67, 64, 75, 0.20);
    padding: 13px 15px;
    border-radius: 10px;
    z-index: 99;
    min-width: 186px;
    li {
      transition: all .3s ease;
      font-weight: 400;
      cursor: pointer;
      &:hover {
        color: $orange;
      }
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
}

.shop-sortering {
  @include flex-start;
}
</style>
