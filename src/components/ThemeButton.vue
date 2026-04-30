<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
// import { ref } from 'vue'

const isDark = useDark()

const toggleDark = useToggle(isDark)
</script>
<template>
  <button class="theme-button" type="button" @click="toggleDark()">
    <span class="sr-only">button to switch themes</span>
    <svg class="moon" view-box="0 0 20 20">
      <path d="M1 10, A9 9 0 1 0 10 1, A7.5 7.5 0 1 1 1 10,Z" />
    </svg>
    <svg class="sun" view-box="0 0 20 20">
      <path
        d="M3 10 A6 6 0 0 0 16 10, A5.5 5.5 0 0 0 5 10, A4 4 0 0 0 14 10, A3.5 3.5 0 0 0 7 10, A2 2 0 0 0 12 10, A1.5 1.5 0 0 0 9 10"
      />
      <circle cx="10" cy="10" r="9" stroke-width="5px" stroke-dasharray="3 4" />
    </svg>
  </button>
</template>
<style scoped lang="scss">
.theme-button {
  --button-size: 24px;

  box-sizing: content-box;
  background-color: hsl(var(--primary-bg-color));
  cursor: pointer;
  height: var(--button-size);

  padding: v.$spacing-0100;

  border: 2px solid hsl(var(--secondary-color));
  border-radius: 9em;

  margin-inline: v.$spacing-0100;

  display: grid;
  justify-content: center;
}

.theme-button svg {
  background-color: hsl(var(--primary-bg-color));

  height: var(--button-size);
  width: var(--button-size);

  padding: 2px;

  border-radius: 9em;

  outline: 1px solid hsl(var(--primary-bg-color));

  transition:
    opacity 0.6s ease-out,
    box-shadow 0.7s;

  box-shadow: -15px 0 0 0 black;

  .moon {
    opacity: 0;
  }

  .sun {
    opacity: 1;
  }
}

.theme-button * {
  transform-origin: center center;
  stroke: hsl(var(--primary-color));

  transition:
    background-color 0.7s ease-in-out,
    stroke 0.7s ease-in-out;
}

.dark .theme-button svg {
  box-shadow: 15px 0 0 0 white;
}

.dark .moon {
  opacity: 1;
}

.dark .sun {
  opacity: 0;
}

.sun {
  fill: transparent;
}

.moon {
  fill: hsl(var(--primary-color));
}

.sun,
.moon {
  grid-column: 1;
  grid-row: 1;
}
</style>
