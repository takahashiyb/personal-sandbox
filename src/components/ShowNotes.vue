<script setup lang="ts">
import { useId } from 'vue'

const props = defineProps<{
  name: string
}>()

const id = useId()
</script>
<template>
  <section v-bind="$attrs">
    <button
      class="checkbox__message"
      :data-function="`checkbox-message-${props.name}`"
      :name="`checkbox-message-${props.name}`"
      :popovertarget="id"
      :style="`anchor-name: --${props.name}`"
    >
      <slot name="message"></slot>
    </button>
    <div
      class="checkbox__shown"
      :data-function="`checkbox-shown-${props.name}`"
      :id="id"
      :name="`checkbox-shown-${props.name}`"
      popover
      :style="`position-anchor: ${props.name};`"
    >
      <slot name="show"></slot>
    </div>
  </section>
</template>
<style scoped lang="scss">
.checkbox__message {
  cursor: pointer;
}

.checkbox__shown {
  border: none;
}
</style>
