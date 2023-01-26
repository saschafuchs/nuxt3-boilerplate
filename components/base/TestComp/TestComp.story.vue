<script lang="ts" setup>
import TestComp from './TestComp.vue'

const source = `
<TestComp :msg="msg" />
`
</script>

<docs lang="md">
  Hello this is a docs section
  </docs>

<template>
  <Story
    :source="source"
    icon="lucide:cpu"
    :layout="{ type: 'single', iframe: true }"
    title="Test component story"
  >
    <TestComp />
  </Story>
</template>
