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

const error = ref<string | null>()

function showError(event: Event) {
  error.value = (event.target as HTMLInputElement).validationMessage
}

function resetError() {
  error.value = null
}
</script>
<template>
  <section :class="['checkbox-input', 'checkbox-input--' + props.name, props.name]">
    <div
      class="checkbox-display"
      :data-function="`checkbox-display-${props.name}`"
      @click="clickButton"
    >
      <span
        class="error-message"
        data-function="error-message"
        :aria-errormessage="id"
        v-if="error"
        >{{ error }}</span
      >
      <span class="sr-only">
        this is a checkbox, click to {{ model ? 'turn off' : 'turn on' }}
      </span>

      <slot></slot>
    </div>
    <label class="sr-only" :data-function="`checkbox-${props.name}`">
      <input
        v-model="model"
        class="sr-only"
        type="checkbox"
        :id="id"
        :name="props.name"
        :required="props.required"
        ref="click"
        @invalid="showError"
        @change="resetError"
      />
    </label>
  </section>
</template>
<style scoped lang="scss">
// .container-of-checkbox:has(label input:checked) .display-of-checkbox {}

.checkbox-display {
  cursor: pointer;
}
</style>
