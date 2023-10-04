<template>
  <div class="header-top">
    <div class="container">
      <div class="header-main flex items-center justify-between">
        <ul class="header_nav flex items-center">
          <li v-for="(item, i) in nav" :key="'nav-' + i">
            <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
          </li>
        </ul>
        <ul class="header-info flex items-end flex-wrap">
          <li v-for="(item, i) in info" :key="'info-' + i">
            <a :href="item.link">
              <div class="phone-icon flex items-center justify-center mr-[10px]">
                <icons :icon="item.icon" width="18" height="18"/>
              </div>
              <p>{{ item.name }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nav: [
          { name: 'Доставка и оплата', link: '/'},
          { name: 'О компании', link: '/'},
          { name: 'Контакты', link: '/'},
        ],
        info: [
          {name: '+7 000 000 00 00', link: 'tel:870000000000', icon: 'ic:round-local-phone'},
          {name: '+7 000 000 00 00', link: 'tel:870000000000', icon: 'ic:round-local-phone'},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

.header-top {
  background-color: $breez;
  color: $white;
  .header-main {
    padding: 8px 0;
  }
}

.header_nav {
  margin: -60px -60px 0 0;
  li {
    padding: 60px 60px 0 0;
  }
}

.header-info {
  margin: -48px -48px 0 0;
  li {
    padding: 48px 48px 0 0;
    a {
      @include flex-start;

    }
  }
}

</style>
