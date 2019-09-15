<template>
  <div class="partials">
      <b-alert show dismissible  variant="warning"
      v-for="(error, index) in errors"
      :key="index"
      >
        {{ error }}
      </b-alert>
  </div>
</template>

<script>
export default {
  props: {
    errors: Array
  }
}
</script>