<template>
  <section class="seo-block" :class="{'active': seoBlockVisibility}">
    <div class="container">
      <div class="seoBlock_main">
        <div class="seoBlock_txt">
          <h3>Заголовок для СЕО текста</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="more-btn">
          <button type="button" @click.prevent="openSeoBlock">
            <p>{{!seoBlockVisibility ? 'Показать больше': 'Скрыть'}}</p>
            <div class="more-icons">
              <icons icon="ph:caret-right-bold" width="20" height="20"/>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        seoBlockVisibility: false,
      }
    },
    methods: {
      openSeoBlock() {
        this.seoBlockVisibility = !this.seoBlockVisibility
      }
    }
  }
</script>

<style lang="scss" scoped>

.seo-block {
  &.active {
    .seoBlock_txt {
      -webkit-line-clamp: 1000000;
      max-height: 100%;
    }    

    .more-btn {
      button {
        color: $dark;

        .more-icons {
          transform: rotate(-90deg);
        }
      }
    }
  }
}
.seoBlock_txt {
  max-height: 263px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 12;
  line-height: 26px;
  h2, h3, h4, h5, h6 {
    font-size: 40px;
    font-family: $font_2;
    padding: 10px 0;
  }

  p, ul, ol {
    font-size: 18px;
    font-weight: 200;
    padding: 10px 0;
  }

  ul {
    li {
      padding: 5px 0 0 15px;
      position: relative;
      &:before {
        content: '• ';
        font-size: 14px;
        position: absolute;
        top: 7px;
        left: 0;
      }
    }
  }
}

.more-btn {
  margin-top: 35px;
  button {
    @include flex-center;
    color: $orange;
    font-weight: 600;
    p {
      margin-right: 10px;
      font-size: 18px;
    }
  }
}

.seo-block {
  // margin-bottom: 182px;
}


</style>
