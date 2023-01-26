<script lang="ts" setup>
const props = defineProps({
  msg: {
    type: String,
    default: 'Hello World'
  }
})
</script>

<template>
  <div class="testComp border border-gray-300 rounded p-4">
    testComp {{ msg }}
  </div>
</template>
