<template>
  <section class="container">
      <ul class="breadcrumbs">
        <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li v-for="(breadcrumb, index) in breadList" :key="index">
            <nuxt-link v-if="index !== breadList.length -1" :to=" breadcrumb.link + '/'"><span>{{breadcrumb.name}}</span></nuxt-link>
            <span v-if="index === breadList.length -1">{{ breadcrumb.name }}</span>
          </li>
      </ul>
  </section>
</template>

<script>
  export default {
      computed: {
        breadList() {
          return this.$store.getters['getBreadcrumb']
        }
      }
  };
</script>

<style lang="scss" scoped>

</style>
