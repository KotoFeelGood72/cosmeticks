<template>
  <paginate
    :page-count="20"
    :page-range="3"
    :margin-pages="2"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :prev-class="'paginate-prev'"
    :next-class="'paginate-next'"
    :container-class="'pagination'"
    :hide-prev-next="true"
    :page-class="'page-item mr-[10px]'">
  </paginate>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="scss">

.pagination {
  @include flex-start;
  flex-wrap: wrap;
  :deep(.page-item) {
    width: 37px;
    height: 37px;
    @include flex-center;
    font-size: 18px;
    border-radius: 100%;
    a {
      width: 100%;
      height: 100%;
      @include flex-center;
      font-size: inherit;
      color: inherit;
    }
  }
}

:deep(.page-item.active) {
  background-color: $orange;
  color: $white;
}

:deep(.paginate-next) {
  width: 37px;
  height: 37px;
  @include flex-center;
  font-size: 18px;
  border-radius: 100%;
  border: 1px solid rgba(44, 44, 44, 0.20);
  color: transparent;
  user-select: none;
  cursor: pointer;
  position: relative;
  transition: all .3s ease;
  :deep(a) {
    width: 100%;
    height: 100%;
    @include flex-center;
  }
  &:hover {
    border-color: $orange;
  }
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: url('../../assets/icons/arrow-right.svg') center/ 20px 20px no-repeat;
    content: '';
    pointer-events: none;
  }
}

:deep(.paginate-prev) {
  width: 37px;
  height: 37px;
  @include flex-center;
  font-size: 18px;
  border-radius: 100%;
  border: 1px solid rgba(44, 44, 44, 0.20);
  color: transparent;
  user-select: none;
  cursor: pointer;
  position: relative;
  transition: all .3s ease;
  :deep(a) {
    width: 100%;
    height: 100%;
    @include flex-center;
  }
  &:hover {
    border-color: $orange;
  }
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(180deg);
    width: 100%;
    height: 100%;
    background: url('../../assets/icons/arrow-right.svg') center/ 20px 20px no-repeat;
    content: '';
    pointer-events: none;
  }
}



</style>