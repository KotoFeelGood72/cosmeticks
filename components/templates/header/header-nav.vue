<template>
  <div class="container">
    <nav class="relative">
      <ul class="nav-list flex items-center justify-between flex-wrap">
        <li v-for="(item, index) in headerNav" :key="'parent-' + index" @mouseover="menuExpandVisible(index)" @mouseleave="menuExpandVisible(null)">
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
  import { headerNav } from '@/data/header-nav';
  import menuExpand from './menu-expand.vue';
  export default {
    components: {
      menuExpand
    },
    data() {
      return {
        headerNav,
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
