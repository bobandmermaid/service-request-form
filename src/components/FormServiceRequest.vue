<template>
  <form class="form" @submit.prevent="submit">
    <h1 class="form__title">Форма подачи заявки в отдел сервиса и качества</h1>
    <div class="form__content">
      <form-city-selection />
      <form-topic-selection />
      <form-description />
      <form-download-file />
      <Button />
    </div>
  </form>
</template>

<script>
import FormCitySelection from './FormCitySelection'
import FormTopicSelection from './FormTopicSelection'
import FormDescription from './FormDescription'
import FormDownloadFile from './FormDownloadFile'
import Button from './ui/Button'
import { mapActions } from 'vuex'

  export default {
    name: 'FormServiceRequest',
    components: {
      FormCitySelection,
      FormTopicSelection,
      FormDescription,
      FormDownloadFile,
      Button
    },
    methods: mapActions(['submit'])
  }
</script>

<style scoped>
.form {
  padding: 25px 30px;
  max-width: 1100px;
  margin: 0 auto;
}

.form__title {
  font-size: 26px;
  margin-bottom: 20px;
}

.form__content {
  border: #e7e7e7 solid 1px;
  border-radius: 3px;
  padding: 30px;
}
</style>
