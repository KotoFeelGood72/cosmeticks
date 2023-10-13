<template>
  <section class="brand">
    <div class="container">
      <div class="brand-head flex items-end justify-start mb-[50px]">
        <section-title :title="name" class="text-40 font-corm mr-[15px] leading-[38px]"/>
        <div class="count-brand text-16">{{ count }} бренд</div>
      </div>
      <div class="brand-main">
        <input-search class="max-w-[671px] mb-[60px]"/>
        <ul class="brand-list">
          <li v-for="(item, i) in brand" :key="'brand-' + i">
            <h3 class="font-corm text-38">{{ item.cat }}</h3>
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
  export default {
    data: () => ({
      name: 'Бренды',
      count: 31,
      brand: [
        {
          cat: 'A',
          list: [
            {
              name: 'AGENDA',
              link: '/',
            },
            {
              name: 'ATOHEALTH',
              link: '/',
            },
            {
              name: 'ANUBIS',
              link: '/',
            },
          ]
        },
        {
          cat: 'C',
          list: [
            {
              name: 'Cantabria labs',
              link: '/',
            }
          ]
        },
        {
          cat: 'D',
          list: [
            {
              name: 'Dermatime',
              link: '/',
            },
            {
              name: 'DR.ORACLE',
              link: '/',
            },
            {
              name: 'DIBI MILANO',
              link: '/',
            },
          ]
        },
        {
          cat: 'E',
          list: [
            {
              name: 'EGIA',
              link: '/',
            },
            {
              name: 'EMANSI',
              link: '/',
            },
          ]
        },
        {
          cat: 'G',
          list: [
            {
              name: 'GERMANIE DE CAPPUCHINI',
              link: '/',
            },
            {
              name: 'GIGI',
              link: '/',
            },
          ]
        },
        {
          cat: 'H',
          list: [
            {
              name: 'Hinoki clinical',
              link: '/',
            },
            {
              name: 'Histolab',
              link: '/',
            },
            {
              name: 'HOLY LAND',
              link: '/',
            },
            {
              name: 'HYDROPEPTIDE',
              link: '/',
            },
          ]
        },
        {
          cat: 'I',
          list: [
            {
              name: 'IMAGE SKINCARE',
              link: '/',
            },
          ]
        },
        {
          cat: 'J',
          list: [
            {
              name: 'Janssen cosmetics',
              link: '/',
            },
          ]
        },
        {
          cat: 'K',
          list: [
            {
              name: 'KEENWELL',
              link: '/',
            },
            {
              name: 'KOSMOTEROS',
              link: '/',
            },
          ]
        },
        {
          cat: 'M',
          list: [
            {
              name: 'MAGIRAY',
              link: '/',
            },
            {
              name: 'MEDI DERMA',
              link: '/',
            },
            {
              name: 'Mesopharm professional',
              link: '/',
            },
          ]
        },
        {
          cat: 'O',
          list: [
            {
              name: 'OBAGI MEDICAL',
              link: '/',
            },
            {
              name: 'OLOS',
              link: '/',
            },
          ]
        },
        {
          cat: 'P',
          list: [
            {
              name: 'PHYTOMER',
              link: '/',
            },
            {
              name: 'Professional Solutions',
              link: '/',
            },
          ]
        },
        {
          cat: 'S',
          list: [
            {
              name: 'SESDERMA',
              link: '/',
            },
            {
              name: 'Spaquatoria',
              link: '/',
            },
          ]
        },
        {
          cat: 'Y',
          list: [
            {
              name: 'YON KA',
              link: '/',
            },
          ]
        },
        {
          cat: 'А',
          list: [
            {
              name: 'Ангиофарм',
              link: '/',
            },
          ]
        },
      ],
    }),
    components: {
      sectionTitle,
      inputSearch
    },
    mounted() {
      this.$store.dispatch('addBreadcrumb', [{name: this.name}])
    },
  }
</script>

<style lang="scss" scoped>

.count-brand {
  opacity: .5;
}

.brand-list {
  &>li {
    &:not(:last-child) {
      margin-bottom: 60px;
    }
    h2, h3, h4, h5, h6 {
      margin-bottom: 30px;
    }

    ul {
      @include flex-start;
      flex-wrap: wrap;
      max-width: 550px;
      margin: -20px -170px 0 0;
      li {
        padding: 20px 170px 0 0;
      }
      
      a {
        transition: all .3s ease;
        &:hover {
          color: $green;
        }
      }
    }
  }
}
</style>
