<template>
  <main class="main">
    <Header/>
    <!-- <Breadcrumb v-if="getPage !== '/'"/> -->
    <nuxt/>
    <Form class="mt-[160px]" v-if="showForm"/>
    <Footer :class="{'mt-[190px]': !showForm, 'mt-[30px]': showForm}"/>
  </main>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/templates/header/header.vue'),
    Footer: () => import('@/components/templates/footer/footer.vue'),
    Breadcrumb: () => import('@/components/ui/breadcrumb'),
    Form: () => import('@/components/blocks/form/form.vue')
  },
  data() {
    return {
      pages: ['/about', '/contacts']
    }
  },
  computed: {
    getPage() {
      return this.$route.path
    },
    showForm() {
      return this.pages.includes(this.getPage)
    }
  }
}
</script>

<style lang="scss" scoped>
// Your styles here
</style>
