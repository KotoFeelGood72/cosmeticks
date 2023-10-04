<template>
  <div class="card">
    <nuxt-link to="/">
      <nuxt-img
        :src="src"
      />
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['src', 'link']
  }
</script>

<style lang="scss" scoped>

</style>
