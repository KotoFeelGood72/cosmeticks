<template>
  <div class="d-btn">
    <button :type="type" v-if="type === 'button'">{{ name }}</button>
    <nuxt-link :to="link" v-else>{{ name }}</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['name', 'type', 'link']
  }
</script>

<style lang="scss" scoped>

.d-btn {
  display: inline-flex;
  button, a {
    background-color: $orange;
    color: $white;
    @include flex-center;
    font-size: 18px;
    font-weight: 600;
    padding: 15px 35px;
    border-radius: 10px;
    position: relative;
    z-index: 2;
    overflow: hidden;
    width: 100%;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      border-radius: 10px;
      background: $orange;
      transition: all .3s ease;
      z-index: -1;
      pointer-events: none;
    }
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      border-radius: 10px;
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), #FF6A28;
      opacity: 0;
      visibility: hidden;
      transition: all .3s ease;
      z-index: -1;
      pointer-events: none;
      transform: translateX(100%);
    }
    &:hover {
      &:after {
        opacity: 1;
        visibility: visible;
        transform: translateX(0%);
      }
      &:before {
        opacity: 0;
        visibility: hidden;
        transform: translateX(-100%);
      }
    }
  }
}

</style>
