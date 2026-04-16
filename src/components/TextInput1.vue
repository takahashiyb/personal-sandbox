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
  <div :class="['text-input-1', 'text-input-1--' + props.name]">
    <span class="label">
      <slot name="label"></slot>
    </span>
    <span class="error-message" data-function="error-message" :aria-errormessage="id">{{
      error
    }}</span>
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
  </div>
</template>
<style scoped lang="scss">
.text-input-1 {
  display: grid;
  grid-template-columns: min-content fit-content;
  justify-content: space-between;
}

.label {
  grid-column: 1;
  grid-row: 1;
}

.error-message {
  text-align: end;

  grid-column: 2;
  grid-row: 1;
}

label {
  // the Element
  grid-column: 1/3;
  grid-row: 2;
}

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
  import TextInput1 from './components/TextInput1.vue';

  <template>
    <TextInput1 v-model="needed" name="needed" type="" placeholder="" required="" readonly="" minlength="" maxlength="" min="" max="" autocomplete="">
      <template v-slot:label></template>
    </TextInput1>
  </template>
```

- * NOTE:

  -- any boolean attributes may be expressed as ('required' in this example) which marks it true:
  ```
    <TextInput1 v-model="example" name="example" type="text" required>
  ```

  -- or this way if it has logic or has reactive boolean variable:
  ```
    <TextInput1 v-model="example" name="example" type="text" :required="requirement === true">
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
  -- can be done in these ways (Sample Label):
  ```
  <TextInput1 v-model="sample" name="sample">
    <template v-slot:label>Sample Label</template>
  </TextInput1>
  ```

  or 

  ```
  <TextInput1 v-model="sample" name="sample">
    Sample Label
  </TextInput1>

  ```

- STYLING and Additional Logic:
  -- These can be done within the component itself through the style and script tags inside respectively

  -- you can also access the style of this component with a global css file with the class selector:
    --- `text-input-1--${name attribute}`

  -- to access an element inside:
    --- .label = the text that is displayed to display the text in slot
    --- .error-message = the text displayed when typed or non typed text is not within input rules
    --- .input = the input bar/ text field itself
    
    ---* NOTE: You can access these in the main css file depending on its stages of specificity:
      ---- to style all with the same selector:
      ``` css
      .label{}
      .error-message{}
      .input{}
      ```
      --- to style all of the same component:
      ``` css
      .text-input-1 label{}
      .text-input-1 error-message{}
      .text-input-1 input{}
      ```
      --- to style only for a specific component (no parenthesis '()'):
      ``` css
      .text-input-1--(name attribute) label{}
      .text-input-1--(name attribute) error-message{}
      .text-input-1--(name attribute) input{}
      ```

-->
