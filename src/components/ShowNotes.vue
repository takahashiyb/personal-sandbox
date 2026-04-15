<script setup lang="ts">
import { ref } from 'vue'

const model = defineModel()

const props = defineProps<{
  name: string
}>()

const click = ref<HTMLInputElement | null>(null)

function clickButton() {
  click.value!.click()
}
</script>
<template>
  <label>
    <input
      class="checkbox-element sr-only"
      type="checkbox"
      v-model="model"
      :name="props.name"
      :data-function="`checkbox-${props.name}`"
      ref="click"
    />
  </label>
  <div
    class="checkbox__message"
    :data-function="`checkbox-message-${props.name}`"
    :name="`checkbox-message-${props.name}`"
    @click="clickButton"
  >
    <slot name="message"></slot>
  </div>
  <div
    class="checkbox__shown"
    :data-function="`checkbox-shown-${props.name}`"
    :name="`checkbox-shown-${props.name}`"
    v-if="model"
  >
    <slot name="show"></slot>
  </div>
</template>
<style scoped lang="scss">
.checkbox__message {
  cursor: pointer;
}
</style>
