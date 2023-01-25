<script lang="ts" setup>
const props = defineProps({
  msg: {
    type: String,
    default: 'Hello World'
  }
})
</script>

<template>
  <div class="testComp">
    testComp {{ msg }}
  </div>
</template>
