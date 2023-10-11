<template>
  <section class="contacts">
    <div class="container">
      <div class="contacts_main">
        <div class="contacts__content">
          <section-title :title="name"/>
          <div class="contacts__phone">
            <p>Телефон</p>
            <ul>
              <li v-for="(item, i) in phone" :key="'phone-' + i">
                <a :href=item.link>{{ item.title }}</a>
              </li>
            </ul>
          </div>
          <div class="contacts__mail">
            <p>Почта</p>
            <ul>
              <li>
                <a href="mailto:mail@mail.ru">mail@mail.ru</a>
              </li>
            </ul>
          </div>
          <div class="contacts__address">
            <p>Адрес</p>
            <ul>
              <li>ул. Название 123</li>
            </ul>
          </div>
          <div class="contacts__data">
            <p>Реквизиты</p>
            <ul>
              <li>ИНН: 000000000000</li>
              <li>КПП: 0000000000</li>
              <li>ОГРН: 000000000000</li>
              <li>Юридический адрес: ул. Название 123</li>
            </ul>
          </div>
        </div>
        <yandex-map :coords="[45.065832, 39.029697]" zoom="5" :controls="controlYandex" class="w-full h-[400px]">
            <ymap-marker
              marker-id="123"
              :coords="[45.065832, 39.029697]"
              :icon="markerIcon"
            />
        </yandex-map>
      </div>
    </div>
  </section>
</template>

<script>
  import sectionTitle from '../components/ui/section-title.vue'
  export default {
  components: { sectionTitle },
    data() {
      return {
        name: 'Контакты',
        controlYandex: [],
        markerIcon: {
          layout: 'default#imageWithContent',
          imageHref: '/assets/img/map.svg',
          imageSize: [30, 30],
          imageOffset: [0, 0],
          content: '',
          contentOffset: [0, 15],
          contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        },
        phone: [
          {
            title: '+7 000 000 00 00',
            link: 'tel:+70000000000'
          },
          {
            title: '+7 000 000 00 00',
            link: 'tel:+70000000000'
          },
        ]
      }
    },
    mounted() {
      this.$store.dispatch('addBreadcrumb', [{name: this.name}])
    },
  }
</script>

<style scoped>

</style>