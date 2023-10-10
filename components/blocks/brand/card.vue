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
.card {
  width: 100%;
  height: 100%;
  a {
    width: 100%;
    height: 100%;
    @include flex-center;
  }
}
</style>
