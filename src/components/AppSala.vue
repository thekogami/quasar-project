<template>
  <div>
    <h2>{{ sala.numSala }}</h2>
  </div>
</template>

<script>
export default {
  name: 'AppSala',
  props: {
    sala: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>