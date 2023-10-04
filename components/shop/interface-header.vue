<template>
  <div class="interface">
    <ul class="flex items-center justify-end">
      <li v-for="(item, index) in interfaceMenu" :key="'interface' + index">
        <nuxt-link :to="item.link" class="flex items-center">
          <div class="icons flex items-center justify-center w-[44px] h-[44px] border border-solid border-[#2C2C2C26] rounded-full">
            <icons :icon="item.icon"/>
          </div>
          <p class="pl-[15px] font-light" v-if="item.txt">{{ item.txt }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        interfaceMenu: [
          { icon: 'healthicons:person-outline', link: '/user'},
          { icon: 'ei:heart', link: '/favorite'},
          { icon: 'mdi-light:cart', link: '/cart', txt: 'Корзина (0)' },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>


.interface {
  margin: -25px -25px 0 0;
  li {
    padding: 25px 25px 0 0;
  }
}
</style>
