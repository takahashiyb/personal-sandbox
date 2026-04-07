<script setup lang="ts">
import { useId, ref } from 'vue'

const id = useId()

const model = defineModel()

const props = withDefaults(
  defineProps<{
    name: string
    type?: string
    placeholder?: string
    required?: boolean
  }>(),
  { type: 'text', placeholder: '' },
)

const error = ref<string | null>(null)

function resetError() {
  error.value = null
}

function checkvalidity(event: Event) {
  if (!event.target) return

  error.value = (event.target as HTMLInputElement).validationMessage
}
</script>
<template>
  
  <!--
  <TextInput1 v-model="required" name="required" type="" placeholder="" required="">
    <template v-slot:label></template>
  </TextInput1>
    -->
  <label class="container__input">
    <span class="label">
      <slot></slot>
    </span>
    <span class="error-message" data-function="error-message">{{ error }}</span>
    <input
      :id="id"
      class="input"
      v-model.lazy="model"
      :name="props.name"
      :data-function="`text-${props.name}`"
      :type="type"
      :placeholder="props.placeholder"
      :required="props.required"
      @focus="resetError"
      @blur="checkvalidity"
    />
  </label>
</template>
<style scoped lang="scss">
.container__input {
  display: grid;
  grid-template-columns: min-content fit-content;
  justify-content: space-between;
}

.label {
  color: var(--primary-color);

  grid-column: 1;
  grid-row: 1;
}

.error-message {
  color: var(--error-color);
  text-align: end;

  grid-column: 2;
  grid-row: 1;
}

.label:hover {
  color: var(--secondary-color);
}

.input {
  min-width: 0;
  width: 100%;

  grid-column: 1/3;
  grid-row: 2;

  border-width: 2px;
  border-style: solid;
  border-color: var(--primary-brdr-color);
  border-radius: 4px;

  outline: none;
}

.input:hover,
.input:focus {
  border-color: var(--secondary-brdr-color);
}
</style>
