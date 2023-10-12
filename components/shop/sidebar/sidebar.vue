<template>
  <div class="shop-sidebar">
    <shop-menu/>
    <checked-filter v-for="(item, i) in filter" :data="item" :key="'filter-' + i"/>
    <div class="filter-bottom">
      <d-btn name="Показать" type="button" class="w-full"/>
      <div class="remove_filter__btn">
        <a href="#">Сбросить</a>
      </div>
    </div>
  </div>
</template>

<script>
import shopMenu from '@/components/shop/sidebar/menu';
import checkedFilter from '@/components/ui/filter/checked-filter.vue';
import dBtn from '@/components/ui/button/d-btn.vue';

  export default {
    components: {
      shopMenu,
      checkedFilter,
      dBtn
    },
    data() {
      return {
        filter: [
          {
            head: 'Бренды',
            arrow: true,
            filter: [
              { name: 'brand-filter', id: 'agenda', title: 'AGENDA' },
              { name: 'brand-filter', id: 'cantabria', title: 'Cantabria labs' },
              { name: 'brand-filter', id: 'dermatime', title: 'Dermatime' },
              { name: 'brand-filter', id: 'germanie', title: 'Germanie de cappuchini' },
              { name: 'brand-filter', id: 'egia', title: 'Egia' },
              { name: 'brand-filter', id: 'dibi', title: 'DIBI MILANO' },
              { name: 'brand-filter', id: 'skincare', title: 'IMAGE SKINCARE' },
              { name: 'brand-filter', id: 'cosmetics', title: 'Janssen cosmetics' },
              { name: 'brand-filter', id: 'keenwell', title: 'KEENWELL' },
              { name: 'brand-filter', id: 'ptytomer', title: 'PHYTOMER' },
            ]
          },
          {
            head: 'Тип кожи',
            arrow: true,
            filter: [
              { name: 'skin-filter', id: 'skin-0', title: 'Жирная кожа/акне' },
              { name: 'skin-filter', id: 'skin-1', title: 'Сухая' },
              { name: 'skin-filter', id: 'skin-2', title: 'Зрелая' },
              { name: 'skin-filter', id: 'skin-3', title: 'Обезвоженная' },
              { name: 'skin-filter', id: 'skin-4', title: 'Чувствительная' },
              { name: 'skin-filter', id: 'skin-5', title: 'Купероз/розацеа' },
            ]
          },
          {
            head: 'Спецпредложения',
            arrow: false,
            filter: [
              { name: 'sale-filter', id: 'sale-0', title: 'Новинки' },
              { name: 'sale-filter', id: 'sale-1', title: 'Акции' },
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

.filter-bottom {
  border-top: 1px solid rgba(44, 44, 44, 0.10);
  padding-top: 30px;
}

.remove_filter__btn {
  padding: 15px;
  @include flex-center;
  font-size: 16px;
  font-weight: 300;
  transition: all .3s ease;
  &:hover {
    color: $grey;
  }
}

</style>
