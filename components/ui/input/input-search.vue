<template>
  <div class="input-search flex flex-grow">
    <input type="search" name="search" id="search-brand" placeholder="Поиск по брендам" class="input-searchs w-full font-light">
    <button type="button">
      <icons icon="ph:magnifying-glass-thin" width="25" height="25"/>
    </button>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.input-searchs {
  @include app;
  border-bottom: 1px solid #2C2C2C66;
  color: rgba(44, 44, 44, 0.40);
  padding: 1px 0;
}
</style>
