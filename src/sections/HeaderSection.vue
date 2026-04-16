<script setup lang="ts">
import ThemeButton from '@/components/ThemeButton.vue'
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()

function switchTheme() {
  theme.dark = !theme.dark
}
</script>
<template>
  <header>
    <ThemeButton :buttonPress="switchTheme" />
  </header>
</template>
<style scoped lang="scss">
header {
  height: var(--header-height);

  padding-top: v.$spacing-0200;
  padding-bottom: v.$spacing-0200;
  padding-inline: v.$spacing-0200;

  display: flex;
  flex-direction: row-reverse;

  justify-self: center;

  position: fixed;
  top: 0;
}
</style>
