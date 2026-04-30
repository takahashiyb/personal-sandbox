<script setup lang="ts">
import ThemeButton from '@/components/ThemeButton.vue'
</script>
<template>
  <header>
    <ThemeButton />
  </header>
</template>
<style scoped lang="scss">
header {
  padding: v.$spacing-0200;

  display: flex;
  flex-direction: row-reverse;
  gap: v.$spacing-0300;

  position: fixed;
  top: 0;
}
</style>
