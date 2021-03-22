<template>
  <form-required-fields title="Загрузка документов">
    <div class="form-file">
      <p class="form-file__title">Приложите, пожалуйста, полноэкранный скриншот.</p>
      <p class="form-file__title">Это поможет быстрее решить проблему.</p>
      <input
        class="form-file__input"
        type="file"
        @change="loadFile($event)"
        >
    </div>
  </form-required-fields>
</template>

<script>
import FormRequiredFields from './FormRequiredFields'
import { mapMutations } from 'vuex'

  export default {
    components: {
      FormRequiredFields
    },
    methods: {
      ...mapMutations(['setFile']),
      // Обрабатываем файл
      loadFile(event) {
        const input = event.target
        // Объект позволяет веб-приложениям асинхронно читать содержимое файлов, хранящиеся на компьютере пользователя
        const reader = new FileReader();
        // Запускается после завершения запроса
        reader.loadend = () => {
          this.setFile(reader.result)
        }
        // Чтение содержимого из файла
        reader.readAsDataURL(input.files[0])
      }
    }
  }
</script>

<style scoped>
.form-file {
  margin-top: 10px;
}

.form-file__title {
  font-size: 14px;
  color: #6f7983;
}

.form-file__input {
  margin-top: 10px;
  font-size: 14px;
}
</style>
