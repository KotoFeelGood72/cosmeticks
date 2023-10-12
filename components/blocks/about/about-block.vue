<template>
  <section class="about">
    <div class="container">
      <div class="about-main">
        <div>
          <div class="about-img">
            <nuxt-img
              src="/assets/img/about.png"
            />
          </div>
        </div>
        <div>
          <div class="about-content">
            <section-title title="О компании" level="h4" class="text-40 font-corm"/>
              <div class="about-txt">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <d-btn name="Узнать больше" type="link" link="/"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import sectionTitle from '@/components/ui/section-title.vue';
  import dBtn from '@/components/ui/button/d-btn.vue';
  export default {
    components: {
      sectionTitle,
      dBtn
    }
  }
</script>

<style lang="scss" scoped>


.about-main {
  @include flex-start;
  flex-wrap: wrap;
  margin: -20px -60px 160px 0;
  &>div {
    max-width: 50%;
    padding: 20px 60px 0 0;
  }
}


.about-content {
  margin-top: -60px;
  h2, h3, h4, h5, h6, p, ul, span {
    padding: 10px 0;
  }

  .d-btn {
    margin-top: 30px;
  }
}
</style>
