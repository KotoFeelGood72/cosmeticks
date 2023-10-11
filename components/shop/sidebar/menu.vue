<template>
  <nav>
    <ul class="sidebar-nav">
      <li v-for="(item, i) in menu" :key="'menu-' + i">
        <a :href="item.link" @click.prevent="changeStateNavItem(item)">
          <p :class="{'active': item.isActive}">{{ item.name }}</p>
          <Icons icon="ph:caret-down-bold" v-if="item.children" color="#FF6A28" width="20" height="20" class="menu_item__icon" :class="{'active': item.isActive}"/>
        </a>
        <transition name="translate">
          <ul v-if="item.children && item.isActive">
            <li v-for="(child, i) in item.children" :key="'menu-' + i">
              <nuxt-link :to="child.link">{{ child.name }}</nuxt-link>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        menu: [
          {
            name: 'Для лица',
            link: '',
            isActive: false,
            children: [
              {
                name: 'Очищение',
                link: '',
              },
              {
                name: 'Тонизация',
                link: '',
              },
              {
                name: 'Пилинги',
                link: '',
              },
              {
                name: 'Маски',
                link: '',
              },
              {
                name: 'Сыворотки',
                link: '',
              },
              {
                name: 'Кремы для лица',
                link: '',
              },
              {
                name: 'Кремы для кожи вокруг глаз',
                link: '',
              },
              {
                name: 'Мужская линия',
                link: '',
              },
              {
                name: 'Специальные средства',
                link: '',
              },
              {
                name: 'Солнцезащитные средства',
                link: '',
              },
            ]
          },
          {
            name: 'Для тела',
            link: '',
            isActive: false,
            children: [
              {
                name: 'Очищение',
                link: '',
              },
              {
                name: 'Тонизация',
                link: '',
              },
              {
                name: 'Пилинги',
                link: '',
              },
              {
                name: 'Маски',
                link: '',
              },
              {
                name: 'Сыворотки',
                link: '',
              },
              {
                name: 'Кремы для лица',
                link: '',
              },
              {
                name: 'Кремы для кожи вокруг глаз',
                link: '',
              },
              {
                name: 'Мужская линия',
                link: '',
              },
              {
                name: 'Специальные средства',
                link: '',
              },
              {
                name: 'Солнцезащитные средства',
                link: '',
              },
            ]
          },
          {
            name: 'Для рук и ног',
            link: '',
            isActive: false,
            children: [
              {
                name: 'Очищение',
                link: '',
              },
              {
                name: 'Тонизация',
                link: '',
              },
              {
                name: 'Пилинги',
                link: '',
              },
              {
                name: 'Маски',
                link: '',
              },
              {
                name: 'Сыворотки',
                link: '',
              },
              {
                name: 'Кремы для лица',
                link: '',
              },
              {
                name: 'Кремы для кожи вокруг глаз',
                link: '',
              },
              {
                name: 'Мужская линия',
                link: '',
              },
              {
                name: 'Специальные средства',
                link: '',
              },
              {
                name: 'Солнцезащитные средства',
                link: '',
              },
            ]
          },
          {
            name: 'Наборы',
            link: '',
          },
          {
            name: 'Миниатюры',
            link: '',
          }
        ]
      }
    },
    methods: {
      changeStateNavItem(item) {
        this.menu.forEach((menuItem) => {
          if (menuItem !== item) {
            menuItem.isActive = false;
          }
        });
        item.isActive = !item.isActive;
      }
    }
  }
</script>

<style lang="scss" scoped>

.sidebar-nav {
  min-width: 231px;
  &>li {
    margin-bottom: 25px;
    &>a {
      font-size: 18px;
      font-weight: 400;
      @include flex-start;
      position: relative;
      svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
      }
    }
    ul {
      padding: 15px 0;
      &>li {
        padding-left: 9px;
        &:not(:last-child) {
          margin-bottom: 15px;
        }
        &>a {
          font-size: 16px;
          font-weight: 300;
          margin-bottom: 0;
        }
      }
    }
  }
}

.menu_item__icon {
  transition: all .2s ease;
  &.active {
    transform: rotate(180deg) translateY(-50%);
    top: -21%;
  }
}

a {
  transition: all .3s ease;
  &:hover {
    color: $orange;
  }
}

.active {
  color: $orange;
}



</style>
