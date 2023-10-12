<template>
  <section class="form">
    <div class="container">
      <div class="form_main">
        <div class="form__img">
          <nuxt-img
            src="/assets/img/form.jpg"
          />
        </div>
        <div class="form__app">
          <div class="form_app__title">
            <section-title title="Есть вопросы?" level="h3" class="font-corm text-40 leading-10 mb-[15px]"/>
            <p class="text-18 font-light">Оставьте заявку, и мы свяжемся с вами в ближайшее время.</p>
          </div>
          <div class="form_app__action">
            <div class="form_app__input">
              <input 
                type="text" 
                placeholder="Ваше имя" 
                v-model="name"
                >
                <div class="line"></div>
            </div>
            <div class="form_app__input">
              <input 
                type="text" 
                placeholder="Ваше имя" 
                v-model="phone"
                >
                <div class="line"></div>
            </div>
            <div class="form_app__input">
              <textarea 
                name="comment" 
                placeholder="Комментарий" 
                v-model="comment"
                :cols="colsTextArea"
                ></textarea>
                <div class="line"></div>
            </div>
            <div class="form_app__bottom">
              <d-btn name="Оставить заявку" type="button"/>
              <div class="form_app__notice">Нажимая кнопку, вы соглашаетесь на обработку <nuxt-link to="/policy">персональных данных</nuxt-link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dBtn from '../../ui/button/d-btn.vue'
import sectionTitle from '../../ui/section-title.vue'
  export default {
    components: { 
      sectionTitle, 
      dBtn
    },
    data() {
      return {
        name: '',
        phone: '',
        comment: '',
        activeInput: false,
        colsTextArea: 100,
      }
    },
    methods: {
      focusInput(val) {
        console.log(val)
      },
    }
  }
</script>

<style scoped lang="scss">


.form {
  background: rgba(0, 145, 150, 0.05);
  position: relative;
}

.form_main {
  @include flex-end;
  min-height: 560px;
  align-items: flex-start;
}

.form__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 824px;
  img {
    border-top-right-radius: 20px;
  }
}

.form__app {
  max-width: 724px;
  width: 100%;
  padding: 60px 0 84px 0;
}

.form_app__title {
  margin-bottom: 40px;
}


.form_app__input {
  width: 100%;
  position: relative;
  .line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid rgba(44, 44, 44, 0.15);
    transition: all .3s ease;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      border-bottom: 1px solid $breez;
      transition: all .3s ease;
    }
  }
  input, textarea {
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    -moz-appearance: none;
    border: none;
    padding: 10px 0;
    background: transparent;
    outline: none;
    &:focus + .line {
      &:before {
        width: 100%;
      }
      border-color: transparent;
    }
  }
}

.form_app__bottom {
  padding-top: 50px;
  @include flex-start;

  .d-btn {
    margin-right: 20px;
  }

  .form_app__notice {
    color: #2C2C2C80;
    max-width: 270px;
    font-weight: 300;
    a {
      transition: all .3s ease;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        border-bottom: 1px solid $breez;
        transition: all .3s ease;
      }
      &:hover {
        &:before {
          width: 100%;
        }
        color: $breez;
      }
    }
  }
}
</style>