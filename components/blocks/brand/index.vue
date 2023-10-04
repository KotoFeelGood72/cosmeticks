<template>
  <section class="brand py-[160px]">
    <div class="container">
      <div class="brand-head">
        <section-title title="Популярные бренды" level="h3"/>
        <div class="brand-more">
          <nuxt-link to="">
            <p>Все бренды</p>
            <div class="brand-icon">
              <icons icon="ph:caret-right-bold" width="20" height="20"/>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="brand-main">
        <ul class="brand-list">
          <li v-for="(item, i) in 18" :key="'brand-' + i">
            <card :src="'/assets/img/brand/brand-' + item + '.png'"/>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  import sectionTitle from '@/components/ui/section-title.vue';
  import card from '@/components/blocks/brand/card.vue'
  export default {
    components: {
      sectionTitle,
      card
    }
  }
</script>

<style lang="scss" scoped>


.brand-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17%, 1fr));
  width: 100%;
}
</style>
