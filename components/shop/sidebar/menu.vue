<template>
  <nav>
    <ul>
      <li v-for="(item, i) in shopMenu" :key="'menu-' + i">
        <nuxt-link :to="item.link" @click.prevent="changeStateNavItem(item)">
          <p>{{ item.name }}</p>
          <Icons icon="ph:caret-up-bold" v-if="item.children" color="#FF6A28" width="20" height="20" :class="{active: item.isActive}"/>
        </nuxt-link>
        <ul v-if="item.children && item.isActive">
          <li v-for="(child, i) in item.children" :key="'menu-' + i">
            <nuxt-link :to="child.link">{{ child.name }}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import { shopMenu } from '@/data/shop-menu.js'
  export default {
    data: () => ({
      shopMenu
    }),
    methods: {
      changeStateNavItem(item) {
        shopMenu.forEach((menuItem) => {
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

ul {
  min-width: 231px;
  &>li {
    margin-bottom: 30px;
    &>a {
      margin-bottom: 15px;
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

</style>
