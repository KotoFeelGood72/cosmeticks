<template>
  <main class="main">
    <Header/>
    <Breadcrumb v-if="getPage !== '/'"/>
    <nuxt/>
    <Footer/>
  </main>
</template>

<script>
  export default {
    components: {
      Header: () => import('@/components/templates/header/header.vue'),
      Footer: () => import('@/components/templates/footer/footer.vue'),
      Breadcrumb: () => import('@/components/ui/breadcrumb')
    },
    computed: {
      getPage() {
        return this.$route.path
      }
    }
  }
</script>

<style lang="scss" scoped>

// .main {
//   // display: flex;
//   // flex-direction: column;
//   min-height: 100%;
//   height: 100%;
// }

</style>
