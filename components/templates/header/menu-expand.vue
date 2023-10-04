<template>
    <div class="menu-expand">
      <ul class="menu_expand--list">
        <li v-for="(item, i) in menu" :key="'children-' + i">
          <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
        </li>
      </ul>
      <div class="menu_expand--img">
        <nuxt-img v-if="img" :src="img"/>
      </div>
    </div>
</template>

<script>
export default {
  props: ['menu', 'img']
};
</script>

<style scoped lang="scss">
.menu-expand {
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  width: 100%;
  background-color: $white;
  z-index: 100;
  @include flex-space;
  padding: 30px;
  border-radius: 0px 0px 15px 15px;
  box-shadow: 0px 9px 20px 0px rgba(67, 64, 75, 0.10);
  ul {
    margin: -15px -150px 0 0;
    max-height: 207px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  li {
    padding: 15px 150px 0 0;
    a {
      transition: all .3s ease;
      &:hover {
        color: $breez;
      }
    }
  }
}

.menu_expand--img {
  border-radius: 15px;
  width: 242px;
  height: 218px;
  border-radius: 15px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
