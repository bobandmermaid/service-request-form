<template>
  <form-required-fields title="Тема обращения" reqiured>
    <div class="form-topic">
      <input
        class="form-topic__input"
        id="quality"
        name="topic"
        type="radio"
        value="quality"
        v-model="picked"
        ref="radio"
        required
        @change="clearingInput(), setTopic(topic)"
      >
      <label for="quality" class="form-topic__label">Недоволен качеством услуг</label>
    </div>
    <div class="form-topic">
      <input
        class="form-topic__input"
        id="contract"
        name="topic"
        type="radio"
        value="contract"
        v-model="picked"
        @change="clearingInput(), setTopic(topic)"
      >
      <label for="contract" class="form-topic__label">Расторжение договора</label>
    </div>
    <div class="form-topic">
      <input
        class="form-topic__input"
        id="letter"
        name="topic"
        type="radio"
        value="letter"
        v-model="picked"
        @change="clearingInput(), setTopic(topic)"
      >
      <label for="letter" class="form-topic__label">Не приходит письмо активации на почту</label>
    </div>
    <div class="form-topic">
      <input
        class="form-topic__input"
        id="account"
        name="topic"
        type="radio"
        value="account"
        v-model="picked"
        @change="clearingInput(), setTopic(topic)"
      >
      <label for="account" class="form-topic__label">Не работает личный кабинет</label>
    </div>
    <input
      class="form-text"
      type="text"
      placeholder="Другое"
      :minlength="min"
      :maxlength="max"
      v-model="text"
      ref="text"
      required
      @input="unPickedRadio(), setTopic(topic)"
    >
  </form-required-fields>
</template>

<script>
import FormRequiredFields from './FormRequiredFields'
import { mapMutations } from 'vuex'

export default {
  components: {
    FormRequiredFields
    },
  data() {
    return {
      picked: false,
      text: null,
      min: 2,
      max: 32
    }
  },
  computed: {
    // Пишем в стейт либо выбранную проблему, либо Другое
    topic() {
      return this.picked ? this.picked : this.text;
    },
  },
  methods: {
    ...mapMutations(['setTopic']),
    // Если в инпут ввести текст и после этого выбрать любой чекбокс, то текст в инпуте стирается.
    clearingInput() {
      this.text = null
      this.$refs.text.required = false
    },
    // Если выбрать один из чекбоксов и после этого вписать в инпут хотя бы один символ, то выбор чекбокса снимается.
    unPickedRadio() {
      this.picked = false
      this.$refs.radio.required = false
    }
  }
}
</script>

<style scoped>
.form-topic {
  display: flex;
  align-items: center;
  margin-top: 16px;
  position: relative;
}

.form-topic__input {
  -webkit-appearance: none;/* Chrome */
  -moz-appearance: none;/* Firefox */
  appearance: none;
  position: absolute;
}

.form-topic__label {
  padding: 4px 0 0 35px;
  font-size: 14px;
}

.form-topic__label:before {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  border: 1px solid #2c3e50;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
}

.form-topic__label:after {
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  background-color: #2c3e50;
  border-radius: 50%;
  opacity: 0;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 2;
  cursor: pointer;
}

.form-topic__input:checked + .form-topic__label:after {
  opacity: 1;
}

.form-text {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  font-size: 14px;
  margin-top: 15px;
  outline: none;
  border: #e7e7e7 solid 1px;
  padding: 8px;
  width: 25%;
}

.form-text::placeholder {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
}
</style>
