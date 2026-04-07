<script setup lang="ts">
import HeaderSection from './sections/HeaderSection.vue'
import { useThemeStore } from './stores/theme'

const theme = useThemeStore()
</script>

<template>
  <main :class="{ dark: theme.dark }">
    <HeaderSection />
    <RouterView />
  </main>
</template>

<style scoped></style>
