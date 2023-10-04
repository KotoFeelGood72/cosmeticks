<template>
  <nav>
    <ul>
      <li v-for="(item, i) in menu" :key="'menu-' + i">
        <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
        <ul>
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
    })
  }
</script>

<style lang="scss" scoped>

</style>
