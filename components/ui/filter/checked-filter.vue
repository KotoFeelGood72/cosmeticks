<template>
  <div class="checked-filter">
    <div class="filter-head" @click="changeStateIsActive()">
      <p>{{ data.head }}</p>
      <Icons v-if="data.arrow" icon="ph:caret-down-bold" color="#FF6A28" width="20" height="20" class="filter_head__icon" :class="{'active': isActive}"/>
    </div>
    <ul v-if="isActive">
      <li v-for="item in data.filter" :key="'checked-filter-' + item.id">
        <input type="checkbox" :id="item.id" :name="item.name">
        <label :for="item.id">{{ item.title }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['data'],
    data() {
      return {
        isActive: true,
      }
    },
    methods: {
      changeStateIsActive() {
        if(this.$props.data.arrow) {
          this.isActive = !this.isActive
        }
      }
    }
  }
</script>

<style scoped lang="scss">

.checked-filter {
  border-top: 1px solid rgba(44, 44, 44, 0.10);
  padding: 30px 0;
}

.filter-head {
  @include flex-start;
  position: relative;
  cursor: pointer;
  p {
    font-size: 18px;
  }
}

.filter_head__icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
}

input {
  display: none;
  &:checked + label {
    &:before {
      border-color: transparent;
      background-color: $orange;
    }
    &:after {
      opacity: 1;
      visibility: visible;
    }
  }
}

label {
  position: relative;
  font-size: 16px;
  padding-left: 30px;
  cursor: pointer;
  font-weight: 300;
  z-index: 2;
  user-select: none;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border: 1px solid #2C2C2C33;
    border-radius: 5px;
    z-index: -1;
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    background: url('../../../assets/icons/arrow-check.svg') center/contain no-repeat;
    width: 14px;
    height: 12px;
    z-index: 1;
  }
}

ul {
  max-height: 203px;
  overflow-y: auto;
  margin-top: 21px;
  padding-right: 30px;
  &::-webkit-scrollbar {
      width: 2px;
  }
  &::-webkit-scrollbar-track {
      background: #2C2C2C26; 
      border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: $orange;
  }
  li {
    &:not(:last-child) {
      margin-bottom: 17px;
    }
  }
}

.filter_head__icon {
  transition: all .2s ease;
  &.active {
    transform: rotate(180deg) translateY(-50%);
    top: -20%;
  }
}

</style>