<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <div class="pageIndex">
    <TestComp />
    {{ t('helloWorld') }}
  </div>
</template>
