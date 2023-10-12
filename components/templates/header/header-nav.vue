<template>
  <div class="container">
    <nav class="relative">
      <ul class="nav-list flex items-center justify-between flex-wrap">
        <li v-for="(item, index) in nav" :key="'parent-' + index" @mouseover="menuExpandVisible(index)" @mouseleave="menuExpandVisible(null)">
          <nuxt-link class="text-18sm font-semibold flex items-center pb-[15px]" :to="item.link">
            <p :class="{'mr-[9px]': item.children}">{{ item.name }}</p>
            <div class="icon-submenu">
              <icons icon="ph:caret-up-bold" width="20" height="20" v-if="item.children"/>
            </div>
          </nuxt-link>
          <transition name="fade">
            <menu-expand :menu="item.children" :img="item.sale" v-if="item.children && expandedMenuIndex === index"/>
          </transition>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import menuExpand from './menu-expand.vue';
  export default {
    components: {
      menuExpand
    },
    data() {
      return {
        nav: [
          {
            name: 'Каталог',
            link: '/shop',
          },
          {
            name: 'Бренды',
            link: '/brand'
          },
          {
            name: 'Для лица',
            link: '/face',
            children: [
              { name: 'Очищение 1', link: '' },
              { name: 'Тонизация', link: '' },
              { name: 'Пилинги', link: '' },
              { name: 'Сыворотки', link: '' },
              { name: 'Кремы для лица', link: '' },
              { name: 'Кремы для кожи вокруг глаз', link: '' },
              { name: 'Мужская линия', link: '' },
              { name: 'Специальные средства', link: '' },
              { name: 'Солнцезащитные средства', link: '/' }
            ],
            sale: '/assets/img/menu/sale.jpg'
          },
          {
            name: 'Для тела',
            link: '/people',
            children: [
              { name: 'Очищение 2', link: '' },
              { name: 'Тонизация', link: '' },
              { name: 'Пилинги', link: '' },
              { name: 'Сыворотки', link: '' },
              { name: 'Кремы для лица', link: '' },
              { name: 'Кремы для кожи вокруг глаз', link: '' },
              { name: 'Мужская линия', link: '' },
              { name: 'Специальные средства', link: '' },
              { name: 'Солнцезащитные средства', link: '/' }
            ],
            sale: '/assets/img/menu/sale.jpg'
          },
          {
            name: 'Для рук и ног',
            link: '/arm',
            children: [
              { name: 'Очищение 3', link: '' },
              { name: 'Тонизация', link: '' },
              { name: 'Пилинги', link: '' },
              { name: 'Сыворотки', link: '' },
              { name: 'Кремы для лица', link: '' },
              { name: 'Кремы для кожи вокруг глаз', link: '' },
              { name: 'Мужская линия', link: '' },
              { name: 'Специальные средства', link: '' },
              { name: 'Солнцезащитные средства', link: '/' }
            ],
            sale: '/assets/img/menu/sale.jpg'
          },
          {
            name: 'Акции',
            link: '/sale'
          },
          {
            name: 'Наборы',
            link: '/nabor'
          },
          {
            name: 'Миниатюры',
            link: '/thumbnail'
          },
        ],
        expandedMenuIndex: null
      }
    },
    methods: {
      menuExpandVisible(index) {
        this.expandedMenuIndex = index;
      }
    }
  }
</script>

<style lang="scss" scoped>
.nav-list {
  margin: -30px -30px 0 0;
  li {
    padding: 30px 30px 0 0;
    &:hover {
      a {
        color: $breez;
      }

        .icon-submenu {
          transform: rotate(0);
        }
      }
    a {
      transition: all .3s ease;
    }
  }
}

.icon-submenu {
  transition: all .3s ease;
  transform: rotate(180deg);
}

/* Добавьте анимацию появления */
.fade-enter-active, .fade-leave-active {
  transform: translateY(0);
  visibility: visible;
  transition: all .3s ease;
}
/* Начальное и конечное состояния анимации */
.fade-enter, .fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
  visibility: visible;
}

</style>
