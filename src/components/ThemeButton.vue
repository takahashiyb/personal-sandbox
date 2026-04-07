<script setup lang="ts">
const props = defineProps<{
  buttonPress: () => void
}>()
</script>
<template>
  <button class="theme-button" type="button" @click="props.buttonPress">
    <svg class="moon" view-box="0 0 20 20">
      <path d="M1 10, A9 9 0 1 0 10 1, A7.5 7.5 0 1 1 1 10,Z" />
    </svg>

    <svg class="sun" view-box="0 0 20 20">
      <path
        d="M1 10, A8 8 0 0 0 18 10, A7.5 7.5 0 0 0 3 10, A6 6 0 0 0 16 10, A5.5 5.5 0 0 0 5 10, A4 4 0 0 0 14 10, A3.5 3.5 0 0 0 7 10, A2 2 0 0 0 12 10, A1.5 1.5 0 0 0 9 10"
      />
    </svg>
  </button>
</template>
<style scoped lang="scss">
.theme-button {
  background-color: transparent;
  cursor: pointer;

  padding-top: 4px;
  padding-bottom: 4px;
  padding-inline: 20px;

  border: 2px solid var(--secondary-color);
  border-radius: 9em;

  display: grid;
  justify-content: center;
}

.theme-button svg {
  background-color: var(--primary-bg-color);
  height: 24px;
  width: 24px;

  padding: 2px;

  border-radius: 9em;

  outline: 1px solid var(--primary-bg-color);

  transition:
    opacity 0.6s ease-out,
    box-shadow 0.7s;
}

main .theme-button svg {
  box-shadow: 15px 0 0 0 black;
}

main.dark .theme-button svg {
  box-shadow: -15px 0 0 -7.5px white;
}

.theme-button svg path {
  transform-origin: center center;
  fill: transparent;
  stroke: var(--primary-color);
  stroke-width: 1px;
}

.sun,
.moon {
  grid-column: 1;
  grid-row: 1;
}

main.dark .sun,
main .moon {
  opacity: 0;
}

main.dark .moon,
main .sun {
  opacity: 1;
}
</style>
