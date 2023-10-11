<template>
  <section class="about">
    <div class="container">
      <div class="about_main">
        <div class="about_main__top">
          <section-title :title="name" class="font-corm text-40 font-medium mb-[50px]"/>
          <div class="txt-block">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="about__img">
            <nuxt-img
              src="/assets/img/about/main.jpg"
            />
          </div>
          <ul class="about_service__list">
            <li v-for="(item, i) in service" :key="'service-' + i">
              <div class="service_item__icon">
                <Icons :icon="item.icon" width="48" height="48"/>
              </div>
              <div class="service_item__name" v-html="item.name"/>
            </li>
          </ul>
        </div>
        <div class="about_bottom">
          <div class="about_bottom__content">
            <section-title title="О компании 2" level="2"/>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <ul>
              <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</li>
              <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</li>
              <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</li>
            </ul>
          </div>
          <div class="about_bottom__img">
            <nuxt-img
              src="/assets/img/about/aboutContent.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import sectionTitle from '@/components/ui/section-title.vue'
  export default {
    data() {
      return {
        name: 'О компании',
        service: [
          {
            name: '<span>Только официальная</span> продукция',
            icon: 'ph:hand-soap-thin'
          },
          {
            name: '<span>Бесплатная доставка</span> по России от 10 000 руб.',
            icon: 'ph:airplane-tilt-thin'
          },
          {
            name: '<span>Система скидок</span> для постоянных покупателей',
            icon: 'ph:hand-coins-thin'
          },
          {
            name: '<span>Консультация косметолога</span> по подбору средств',
            icon: 'ph:chat-dots-thin'
          },
        ]
      }
    },
    components: {
      sectionTitle
    },
    mounted() {
      this.$store.dispatch('addBreadcrumb', [{name: this.name}])
    },
  }
</script>

<style scoped lang="scss">

.service_item__name {
  :deep(span) {
    font-weight: 500;
  }
}

</style>