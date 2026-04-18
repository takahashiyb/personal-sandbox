<script setup lang="ts">
import { ref } from 'vue'

const model = defineModel()

const props = defineProps<{
  id: string
  name: string
  value: string | number | null
  required?: boolean
}>()

const click = ref<HTMLInputElement | null>(null)

function clickButton() {
  click.value!.click()
}

const error = ref<string | null>()

function showError(event: Event) {
  if (!props.required) {
    return
  }

  error.value = (event.target as HTMLInputElement).validationMessage
}

function resetError() {
  error.value = null
}
</script>
<!--
<RadioButton1 v-model="required" name="required" value="required">
  <p>make design here</p>
</RadioButton1>
-->
<template>
  <span
    class="error-message"
    data-function="error-message"
    :aria-errormessage="props.id"
    v-if="error"
    >{{ error }}</span
  >
  <label>
    <input
      class="sr-only"
      type="radio"
      v-model="model"
      :name="props.name"
      :data-function="`radio-${props.name}`"
      :value="props.value"
      :required="props.required"
      ref="click"
      @invalid="showError"
      @change="resetError"
    />
  </label>
  <div class="radio-display" :data-function="`radio-display-${props.name}`" @click="clickButton">
    <span class="sr-only">This is a radio button, click to select this option.</span>
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
// .class-of-container:has(label input:checked) .class-of-display --> additional selector to style selected radio button

.radio-display {
  cursor: pointer;
}
</style>
