<script setup lang="ts">
import { useId, ref } from 'vue'

const id = useId()

const model = defineModel()

const props = withDefaults(
  defineProps<{
    name: string
    type?: string
    placeholder?: string
    readonly?: boolean
    required?: boolean
    minlength?: number
    maxlength?: number
    min?: number
    max?: number
    autocomplete?: 'on' | 'off'
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
  <section :class="['text-input', 'text-input--' + props.name, props.name]">
    <slot></slot>
    <label :for="id">
      <input
        :id="id"
        class="input"
        v-model.lazy="model"
        :name="props.name"
        :data-function="`text-${props.name}`"
        :type="type"
        :placeholder="props.placeholder"
        :required="props.required"
        :readonly="props.readonly"
        :autocomplete="props.autocomplete"
        :minlength="props.minlength"
        :maxlength="props.maxlength"
        :min="props.min"
        :max="props.max"
        @focus="resetError"
        @blur="checkvalidity"
      />
    </label>
    <span class="error-message" data-function="error-message" :aria-errormessage="id">{{
      error
    }}</span>
  </section>
</template>
<style scoped lang="scss">
.input {
  min-width: 0;
  width: 100%;
  background-color: hsl(var(--primary-bg-color));

  border-width: 2px;
  border-style: solid;
  border-color: hsl(var(--primary-brdr-color));
  border-radius: 4px;

  outline: none;
}

.input:hover,
.input:focus {
  border-color: hsl(var(--secondary-brdr-color));
}
</style>

<!--
Documentation: 

- The advantage for this component is
  -- to create an already formatted input element
  -- with already formatted error message exposed from the original input methods
  -- most common input attributes are already set up as component props

- To use the component:

```
  import TextInput from './components/TextInput.vue';

  <template>
    <TextInput v-model="needed" name="needed" type="" placeholder="" required="" readonly="" minlength="" maxlength="" min="" max="" autocomplete="">
      {{ Enter the input name here (including a tag like span or p) }}
    </TextInput>
  </template>
```

- * NOTE:

  -- any boolean attributes may be expressed as ('required' in this example) which marks it true:
  ```
    <TextInput v-model="example" name="example" type="text" required>
  ```

  -- or this way if it has logic or has reactive boolean variable:
  ```
    <TextInput v-model="example" name="example" type="text" :required="requirement === true">
  ```

- ATTRIBUTES:

  -- v-model
    --- Marked needed as a vue reactive value is required

  -- name
    --- Marked needed for accessibility reasons as it governs the:
      ---- input's name attribute
      ---- label's for attribute
      ---- span[data-function="error-message"]'s aria-errormessage

  -- type
    --- String
    --- Default set to 'text'
    --- can be used for any text or number field type input
      ---- not radio and checkbox
    --- this helps access additional features of the input element

  -- required
    --- Boolean
    --- To access form's function to disable submit when text field is left empty

  -- readonly
    --- Boolean
    --- To disable editing acces to the text field

  -- minlength
    --- Number
    --- Enables minimum length of string or number

  -- maxlength
    --- Number
    --- Enables maximum length of string or number

  -- min
    --- Number | Date
    --- Only works when type attribute is set to 'number', 'range' or date
    --- Enables minimum value of a number, range or date

  -- max
    --- Number | Date
    --- Only works when type attribute is set to 'number', 'range' or date
    --- Enables maximum value of a number, range or date

  -- autocomplete
    --- 'on' or 'off'
    --- To activate the browser's autofill feature

- SLOT:
  -- This part of the component will allow you to add a label in the form of text.
  ```
  <TextInput v-model="sample" name="sample">
    <span> Sample Label </ span>
  </TextInput>

  ```

- STYLING and Additional Logic:
  -- These can be done within the component itself through the style and script tags inside respectively

  -- you can also access the style of this component with a global css file with the class selector:
    --- `text-input--${name attribute}`

  -- to access an element inside:
    --- input name/label as slot is already accessible since the parent is responsible for the slot. 
    --- .error-message = the text displayed when typed or non typed text is not within input rules
    --- .input = the input bar/ text field itself
    
    ---* NOTE: You can access these in the parent scoped style tag:
      ---- to style all with the same selector:
      ``` css
      .container-name{} //container-name is the class you pass to the custom component
      .input-name {} // input-name is just a placeholder name
      .container-name :deep(.error-message){} 
      .container-name :deep(label){}
      .container-name :deep(.input){}
      or
      .container-name :deep(label .input){}
      ```

-->
