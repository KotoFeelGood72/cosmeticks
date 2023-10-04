<template>
  <div class="service-card relative" :class="data.classes">
    <div class="services-content max-w-[340px]">
      <div class="services-number text-[80px] text-orange font-corm mb-[76px]">{{ data.num }}</div>
      <div class="services-txt">
        <h3 v-html="data.name" class="text-[22px]"></h3>
      </div>
    </div>
    <div class="services-img">
      <nuxt-img
        :src="data.img"
      />
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="scss" scoped>
.service-card {
  @include flex-start;
  border-radius: 15px;
  // overflow: hidden;

  .services-content {
    width: 100%;
    @include flex-start;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px 80px 50px;
  }

  &.sea {
    background: rgba(0, 145, 150, 0.15);
  }
  &.orange {
    background: rgba(255, 106, 40, 0.15);
  }
}

.services-img {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
