<template>
  <section class="about">
    <div class="container">
      <div class="about-main">
        <div class="about-img">
          <nuxt-img
            src="/assets/img/about.png"
          />
        </div>
        <div class="about-content">
          <section-title title="О компании" level="h4"/>
          <div class="about-txt">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <d-btn name="Узнать больше" type="link" link="/"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import sectionTitle from '../../ui/section-title.vue';
  import dBtn from '../../ui/button/d-btn.vue';
  export default {
    components: {
      sectionTitle,
      dBtn
    }
  }
</script>

<style lang="scss" scoped>

</style>
