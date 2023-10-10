<template>
  <section class="brand py-[160px]">
    <div class="container">
      <div class="brand-head">
        <section-title title="Популярные бренды" level="h3" class="font-corm"/>
        <div class="brand-more">
          <nuxt-link to="">
            <p class="font-semibold">Все бренды</p>
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
  grid-template-columns: repeat(auto-fill, minmax(13%, 1fr));
  width: 100%;
  grid-gap: 30px;

  li {
    border-radius: 15px;
    border: 1px solid rgba(44, 44, 44, 0.15);
    @include flex-center;
    height: 141px;
    transition: all .3s ease;

    &:hover {

    }
  }
}

.brand-head {
  @include flex-space;
  margin-bottom: 50px;

  h3 {
    font-size: 40px;
  }
}

.brand-more {
  a {
    @include flex-start;
    color: $orange;
    font-size: 18px;
    p {
      margin-right: 10px;
    }
  }
}
</style>
