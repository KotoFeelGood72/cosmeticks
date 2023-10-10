<template>
  <footer class="footer bg-green text-white mt-[190px]">
    <div class="container">
      <div class="footer_main pt-[46px] pb-[63px] flex items-start flex-wrap justify-between">
        <div>
          <div class="footer_col--company max-w-[363px]">
            <nuxt-link to="/" class="text-35 font-corm mb-[20px]">КОСМЕЦЕВТИКА</nuxt-link>
            <p class="mb-[61px] font-thin opacity-7">Быстрая доставка по всей России: Москва, Санкт-Петербург, Новосибирск, Екатеринбург, Казань, Нижний Новгород, Челябинск, Самара, Омск, Ростов-на-Дону и в другие города.</p>
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
        </div>
        <div>
          <div class="footer_col--menu">
            <ul>
              <li v-for="(item, i) in client" :key="'client-' + i">
                <p v-if="i === 0" class="text-xl font-semibold mb-[20px]">{{ item.name }}</p>
                <nuxt-link v-else :to="item.link">{{ item.name }}</nuxt-link>
              </li>
            </ul>
            <ul>
              <li v-for="(item, i) in company" :key="'company-' + i">
                <p class="text-xl font-semibold mb-[20px]" v-if="i === 0">{{ item.name }}</p>
                <nuxt-link v-else :to="item.link">{{ item.name }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class="footer-col--last">
            <div class="footer_payment">
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
      </div>
      <div class="footer-bottom">
        <div class="footer_bottom--info">
          <ul>
            <li class="font-light">© 2023. Космецевтика — интернет магазин профессиональной косметики.</li>
            <li><nuxt-link to="/" class="font-light">Публичная оферта</nuxt-link></li>
            <li><nuxt-link to="/" class="font-light">Политика конфиденциальности</nuxt-link></li>
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

.footer_col--menu {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  grid-gap: 20px 169px;
  width: 100%;
}


.footer-col--last {
  max-width: 245px;
  padding-top: 40px;

  .footer_payment {
    margin-bottom: 59px;
  }
}

.footer_col--menu {
  max-width: 500px;

  ul {
    li {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
}

.socials {
  ul {
    margin: -24px -24px 0 0;
    @include flex-start;
    flex-wrap: wrap;
    li {
      padding: 24px 24px 0 0;
      a {
        width: 40px;
        height: 40px;
        @include flex-center;
        background-color: rgba(255, 255, 255, 0.10);
        border-radius: 100%;
        padding: 10px;
        transition: all .3s ease;
        &:hover {
          background-color: rgba(255, 255, 255, 0.30);
        }
      }
    }
  }
}

.footer_main  {
  margin: -30px -140px 0 0;
  &>div {
    padding: 30px 140px 0 0;
  }
}

.footer_col--company {
  ul {
    li {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      a {
        @include flex-start;
        font-size: 16px;

        .phone-icon {
          margin-right: 10px;
        }
      }
    }
  }
}

.footer_bottom--info {
  @include flex-space;
  padding: 23px 0;
  border-top: 1px solid #FFFFFF33;

  ul {
    margin-right: 50px;
    @include flex-start;
    flex-wrap: wrap;
    font-size: 16px;
    margin: -20px -60px 0 0;
    li {
      padding: 20px 60px 0 0;
      a {
        opacity: .7;
        transition: all .3s ease;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
