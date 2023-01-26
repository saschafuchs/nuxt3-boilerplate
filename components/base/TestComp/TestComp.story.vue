<script lang="ts" setup>
import TestComp from './TestComp.vue'

const source = `
<TestComp :msg="msg" />
`
</script>

<template>
  <Story
    :source="source"
    icon="lucide:cpu"
    :layout="{ type: 'single', iframe: false }"
    title="Test component story"
  >
    <TestComp />
  </Story>
</template>
