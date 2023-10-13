<template>
  <section class="favorite">
    <div class="container">
      <div class="favorite_main">
        <div class="favorite__title mb-[50px]">
          <section-title :title="name" class="font-corm leading-10 text-40"/>
          <button class="favorite__remove" type="button" @click="removeItemFavorite">Очистить</button>
        </div>
        <div class="favorite__head mb-[50px]">
          <input-search class="max-w-[375px]"/>
          <div class="shop-sortering">
            <div class="btn-sortering mr-[20px]">
              <img src="~/assets/icons/arrow-sortering.svg" alt="">
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
        <ul class="grid-5 mb-[60px]">
            <li v-for="(item, i) in five" :key="'products' + i">
              <card-products :data="item"/>
            </li>
          </ul>
      </div>
    </div>
  </section>
</template>

<script>
import sectionTitle from '../components/ui/section-title.vue'
import inputSearch from '../components/ui/input/input-search.vue';
import cardProducts from '@/components/blocks/products/card';
  export default {
    components: {
      sectionTitle,
      inputSearch,
      cardProducts
    },
    data() {
      return {
        name: 'Избранное',
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
    methods: {
      removeItemFavorite() {
        console.log('Remove favite list')
      },
      sortHandler() {
        this.sortModal = !this.sortModal
      },
      selectItem(item) {
        this.sortLabel = {
          name: item.name,
          slug: item.slug
        };
        this.sortModal = false;
      },
    },
    mounted() {
      this.$store.dispatch('addBreadcrumb', [{name: this.name}])
    },
  }
</script>

<style scoped lang="scss">


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

.favorite__head {
  @include flex-space;
}

.favorite__title {
  @include flex-start;
  align-items: flex-end;

  h1 {
    margin-right: 15px;
  }
  button {
    outline: none;
    color: $pink;
    transition: all .3s ease;
    font-weight: 400;
    &:hover {
      color: $grey;
    }
  }
}

</style>