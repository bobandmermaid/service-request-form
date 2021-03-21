<template>
  <button class="button" :disabled="!isComplete">Отправить</button>
</template>

<script>
  export default {
    props: {
      isComplete: String
    }
  }
</script>

<style scoped>
.button {
  cursor: pointer;
  text-transform: uppercase;
  color: #fff;
  background-color: #fb996a;
  border: #e2a284 solid 1px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: bold;
  padding: 11px 20px 9px 20px;
  outline: none;
}

.button:hover {
  background-color: #f08959;
  transition: .1s linear;
}

.button:active {
  background-color: #faa780;
  transition: .1s linear;
}

.button:disabled {
  background-color: #e0e0e0;
  border: none;
}
</style>
