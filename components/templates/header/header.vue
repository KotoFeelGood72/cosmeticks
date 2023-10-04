<template>
  <header class="header">
    <header-top/>
    <header-medium/>
    <header-nav/>
  </header>
</template>

<script>
  export default {
    components: {
      HeaderTop: () => import('@/components/templates/header/header-top.vue'),
      HeaderMedium: () => import('@/components/templates/header/header-medium.vue'),
      HeaderNav: () => import('@/components/templates/header/header-nav.vue'),
    }
  }
</script>

<style lang="scss" scoped>

</style>
