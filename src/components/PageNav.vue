<script setup lang="ts">
import { onMounted, ref } from 'vue'

const sections = ref()

const isTableOfContentOpen = ref<boolean>(false)

onMounted(() => {
  updateNavList()
})

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function updateNavList() {
  // Find all elements with an id inside your content container
  const nodes = document.querySelectorAll('section[id]')
  sections.value = Array.from(nodes).map((node) => ({
    id: node.id,
    label: node.id, // or node.dataset.label if you want nicer text
  }))
} 

function switchTableOfContent() {
  isTableOfContentOpen.value = !isTableOfContentOpen.value
}
</script>
<template>
  <Teleport to="header">
    <button
      class="button__nav"
      @click="switchTableOfContent"
      aria-controls="links__nav"
      :aria-expanded="isTableOfContentOpen"
    >
      Table of Contents:
    </button>
  </Teleport>
  <nav id="links__nav" role="dialog" aria-live="assertive" v-if="isTableOfContentOpen">
    <ol>
      <li v-for="section in sections" :key="section">
        <RouterLink @click.prevent="scrollTo(section.id)" to="#">{{ section.id }}</RouterLink>
      </li>
    </ol>
  </nav>
</template>
<style scoped lang="scss">
.button__nav {
  @include f.flat-type(v.$font-2-b);

  cursor: pointer;

  padding: v.$spacing-0100;

  border-radius: 8px;

  border-style: solid;
}

nav {
  background-color: hsl(var(--secondary-bg-color));

  padding: v.$spacing-0300;

  border-radius: 8px;

  @include f.flat-type(v.$font-3);
  position: absolute;
  top: 80px;
  right: 120px;

  z-index: 999;
}

ol {
  padding: 0;
  list-style-position: inside;
  list-style-type: none;
}

a:hover {
  color: hsl(var(--primary-color));
}
</style>
