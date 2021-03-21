<template>
  <div class="success">
    <h1 class="success__title">Заявка отправлена</h1>
    <img src="../assets/success_img.png" alt="Заявка отправлена.">
    <router-link
      to="/" exact class="success__link">Назад</router-link>
  </div>
</template>

<script>
  export default {
    name: 'SuccessPage'
  }
</script>

<style scoped>
.success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.success__title {
  margin-bottom: 10px;
  font-size: 22px;
}

.success__link {
  margin-top: 10px;
  color: #2c3e50;;
}

.success__link:hover {
  color: #486079;
}
</style>
