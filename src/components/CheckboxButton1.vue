<script setup lang="ts">
import { ref, useId } from 'vue'

const model = defineModel()

const id = useId()

const props = defineProps<{
  name: string
  required?: boolean
}>()

const click = ref<HTMLInputElement | null>(null)

function clickButton() {
  click.value?.click()
}
</script>
<template>
  <label class="sr-only" :data-function="`checkbox-${props.name}`">
    <input
      v-model="model"
      class="sr-only"
      type="checkbox"
      :id="id"
      :name="props.name"
      :required="props.required"
      ref="click"
    />
  </label>
  <div
    class="checkbox-display"
    :data-function="`checkbox-display-${props.name}`"
    @click="clickButton"
  >
    <span class="sr-only"> this is a checkbox, click to toggle </span>
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
// .container-of-checkbox:has(label input:checked) .display-of-checkbox {}

.checkbox-display {
  cursor: pointer;
}
</style>
