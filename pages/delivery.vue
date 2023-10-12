<template>
  <section class="delivery">
    <div class="container">
      <div class="delivery_main">
        <section-title v-if="name" :title="name" class="font-corm text-40 font-medium mb-[50px]"/>
        <div class="txt_block__w">
          <div class="txt-block">
            <h3>Доставка</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
            </ul>
          </div>
          <div class="txt-block">
            <h3>Оплата</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
            </ul>
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
        name: 'Доставка и оплата',
      }
    },
    components: {
      sectionTitle
    },
    // mounted() {
    //   this.$store.dispatch('addBreadcrumb', [{name: this.name}])
    // },
  }
</script>

<style scoped lang="scss">

.txt_block__w {
  .txt-block {
    &:not(:last-child) {
      margin-bottom: 50px;
    }
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
</style>