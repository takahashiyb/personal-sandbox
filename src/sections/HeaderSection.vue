<script setup lang="ts">
import ThemeButton from '@/components/ThemeButton.vue'
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()

function switchTheme() {
  theme.dark = !theme.dark
}
</script>
<template>
  <header class="header">
    <ThemeButton :buttonPress="switchTheme" />
  </header>
</template>
<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row-reverse;
}
</style>
