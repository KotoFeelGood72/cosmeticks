<template>
  <section class="section-breadcrumbs">
    <div class="container">
      <ul class="breadcrumbs">
        <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li v-for="(breadcrumb, index) in breadList" :key="index">
            <nuxt-link v-if="index !== breadList.length -1" :to=" breadcrumb.link + '/'"><span>{{breadcrumb.name}}</span></nuxt-link>
            <span v-if="index === breadList.length -1">{{ breadcrumb.name }}</span>
          </li>
      </ul>
    </div>
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

  .breadcrumbs {
    @include flex-start;
    flex-wrap: wrap;
    padding-top: 20px;
    margin: -5px -5px 50px 0;
    li {
      padding: 5px 5px 0 0;
      position: relative;
      a {
        color: $dark;
        opacity: .4;
        transition: all .3s ease;
        &:hover {
          opacity: 1;
        }
          &:after {
            content: ' / ';
          }
        }
    }
  }
</style>
