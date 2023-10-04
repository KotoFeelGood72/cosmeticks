<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_main">
        <div class="footer_col--company">
          <nuxt-link to="/">КОСМЕЦЕВТИКА</nuxt-link>
          <p>Быстрая доставка по всей России: Москва, Санкт-Петербург, Новосибирск, Екатеринбург, Казань, Нижний Новгород, Челябинск, Самара, Омск, Ростов-на-Дону и в другие города.</p>
          <ul>
            <li v-for="item in 2" :key="'phone-' + item">
              <nuxt-link to="/">
                <div class="phone-icon">
                  <icons icon="ic:round-local-phone" width="15" height="15"/>
                </div>
                <p>+7 000 000 00 00</p>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer_col--menu">
          <ul>
            <li v-for="(item, i) in client" :key="'client-' + i">
              <p v-if="i === 0">{{ item.name }}</p>
              <nuxt-link v-else :to="item.link">{{ item.name }}</nuxt-link>
            </li>
          </ul>
          <ul>
            <li v-for="(item, i) in company" :key="'company-' + i">
              <p v-if="i === 0">{{ item.name }}</p>
              <nuxt-link v-else :to="item.link">{{ item.name }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer-col--last">
          <div class="footer_payment">
            <p>Принимаем к оплате</p>
            <nuxt-img src="/assets/img/payment.png" />
          </div>
          <div class="socials">
            <ul>
              <li v-for="(item, i) in socials" :key="'social' + i">
                <nuxt-link :to="item.link">
                  <icons :icon="item.icon"/>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer_bottom--info">
          <ul>
            <li>© 2023. Космецевтика — интернет магазин профессиональной косметики.</li>
            <li><nuxt-link to="/">Публичная оферта</nuxt-link></li>
            <li><nuxt-link to="/">Политика конфиденциальности</nuxt-link></li>
          </ul>
          <div class="arkada-brand">
            <a href="#"><nuxt-img src="/assets/img/arkada.png"/></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import { client } from '@/data/client.js'
  import { company } from '@/data/company.js'
  import { socials } from '@/data/social.js'
  export default {
    data() {
      return {
        client,
        company,
        socials
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
