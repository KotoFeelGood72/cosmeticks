<template>
  <section class="brand">
    <div class="container">
      <div class="brand-head">
        <section-title :title="name"/>
        <div class="count-brand">{{ count }} бренд</div>
      </div>
      <div class="brand-main">
        <input-search/>
        <ul class="brand-list">
          <li v-for="(item, i) in brand" :key="'brand-' + i">
            <h3>{{ item.cat }}</h3>
            <ul>
              <li v-for="(sub, i) in item.list" :key="'subitem-' + i">
                <nuxt-link :to="sub.link">{{ sub.name }}</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  import sectionTitle from '@/components/ui/section-title'
  import inputSearch from '../components/ui/input/input-search.vue';
  import { brand } from '@/data/brand.js'
  export default {
    data: () => ({
      name: 'Бренды',
      count: 31,
      brand
    }),
    components: {
      sectionTitle,
      inputSearch
    },
    mounted() {
      this.$store.dispatch('addBreadcrumb', [{name: this.name}])
    }
  }
</script>

<style lang="scss" scoped>


</style>
