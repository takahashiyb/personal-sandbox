<script setup lang="ts">
import { ref } from 'vue'

const model = defineModel()

const props = defineProps<{
  name: string
  value: string | number | null
}>()

const click = ref<HTMLInputElement | null>(null)

function clickButton() {
  console.log('hello')
  click.value!.click()
}
</script>
<!--
<RadioButton1 v-model="required" name="required" value="required">
  <p>make design here</p>
</RadioButton1>
-->
<template>
  <label>
    <input
      class="sr-only"
      type="radio"
      v-model="model"
      :name="props.name"
      :data-function="`radio-${props.name}`"
      :value="props.value"
      ref="click"
    />
  </label>
  <div class="radio-display" :data-function="`radio-display-${props.name}`" @click="clickButton">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
// .class-of-container:has(label input:checked) .class-of-display --> additional selector to style selected radio button

.radio-display {
  cursor: pointer;
}
</style>
