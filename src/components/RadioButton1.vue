<script setup lang="ts">
const model = defineModel()

const props = defineProps<{
  name: string
  value: string | number | null
}>()
</script>
<template>
  <!--
  <RadioButton1 v-model="required" name="required" value="required">
    <p>make design here</p>
  </RadioButton1>
  -->
  <label>
    <input
      class="radio-element sr-only"
      type="radio"
      v-model="model"
      :name="props.name"
      :data-function="`radio-${props.name}`"
      :value="props.value"
    />
    <div class="radio-display">
      <slot></slot>
    </div>
  </label>
</template>
<style scoped lang="scss">
// :has(input:checked) --> additional selector to style selected radio button
</style>
