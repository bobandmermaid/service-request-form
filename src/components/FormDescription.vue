<template>
  <form-required-fields title="Описание проблемы" reqiured>
    <textarea
      class="form-textarea"
      name="description"
      v-model="message"
      placeholder="Введите текст"
      :minlength="min"
      :maxlength="max"
      @input="setDescription(message)"
      >
    </textarea>
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
        message: null,
        min: 2,
        max: 320
      }
    },
    methods: mapMutations(['setDescription'])
  }
</script>

<style scoped>
.form-textarea {
  margin-top: 10px;
  width: 100%;
  border: #e7e7e7 solid 1px;
  outline: none;
  resize: vertical;
  height: 130px;
  padding: 5px 0 0 10px;
}

.form-textarea::placeholder {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
}

textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  font-size: 14px;
}
</style>
