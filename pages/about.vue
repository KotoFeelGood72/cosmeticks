<template>
  <section class="about">
    <div class="container">
      <div class="about_main">
        <div class="about_main__top mb-[160px]">
          <section-title :title="name" class="font-corm text-40 font-medium mb-[35px] leading-10"/>
          <div class="txt-block text-20 font-light mb-[40px]">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="about__img mb-[100px]">
            <nuxt-img
              src="/assets/img/about/main.jpg"
            />
          </div>
          <ul class="about_service__list">
            <li v-for="(item, i) in service" :key="'service-' + i">
              <div class="service_item__icon">
                <Icons :icon="item.icon" width="48" height="48" color="#009196"/>
              </div>
              <div class="service_item__name text-18" v-html="item.name"/>
            </li>
          </ul>
        </div>
        <div class="about_bottom">
          <div class="about_bottom__content">
            <section-title title="О компании 2" level="h2" class="text-38 font-corm"/>
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
    components: {
      sectionTitle
    },
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

.txt-block {
    h2 {
      font-size: 30px;
      padding: 10px 0;
    }
    h3 {
      font-size: 26px;
      padding: 10px 0;
    }
    h4 {
      font-size: 22px;
      padding: 10px 0;
    }
    h5 {
      font-size: 19px;
      padding: 10px 0;
    }
    h6 {
      padding: 10px 0;
      font-size: 18px;
    }

    p {
      padding: 10px 0;
      font-size: 20px;
    }
    ul {
      padding: 10px 0 0 20px;
      font-size: 20px;
      list-style-type: disc;
      li {
        list-style-type: disc;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }


.about__img {
  img {
    border-radius: 20px;
    overflow: hidden;
  }
}

.about_service__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  grid-gap: 20px 70px;
  padding-bottom: 50px;
  border-bottom: 1px solid #2C2C2C26;

  li {
    @include flex-start;
  }
}

.service_item__icon {
  margin-right: 20px;
}

.about_bottom {
  @include flex-start;
  align-items: flex-start;
}

.about_bottom__content {
  max-width: 837px;
  margin-right: 130px;

  ul {
    li {
      position: relative;
      padding-left: 35px;
      &:before {
        content: url('https://api.iconify.design/ant-design/check-outlined.svg?color=white');
        position: absolute;
        top: 4px;
        left: 0;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        background-color: $breez;
        @include flex-center;
        line-height: 0;
      }
      &:not(:last-child) {
        margin-bottom: 28px;
      }
    }
  }
}

.about_bottom__content {
  p, ul, ol, h2, h3, h4, h5, h6 {
    padding: 15px 0;
  }

  p, ul, ol, li {
    font-size: 20px;
    font-weight: 300;
  }
}


.about_bottom__img {
  img {
    border-radius: 20px;
  }
}


</style>
