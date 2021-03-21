<template>
  <div class="required-fields">
    <div class="required-fields__title">
      {{ title }}
      <span
        v-if="reqiured"
        class="required-fields__pin">
        *
      </span>
    </div>

    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      reqiured: Boolean
    }
  }
</script>

<style scoped>
.required-fields {
  margin-bottom: 35px;
}

.required-fields:last-child {
  margin-bottom: 0;
}

.required-fields__title {
  font-size: 17px;
}

.required-fields__pin {
  color: #ff0000;
}
</style>
