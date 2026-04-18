<script setup lang="ts">
import CheckboxButton1 from '@/components/CheckboxButton1.vue'
import RadioButton1 from '@/components/RadioButton1.vue'
import { ref } from 'vue'

const model = ref<boolean>(false)
</script>
<template>
  <div class="content">
    <p>{{ model }}</p>

    <form action="/">
      <div class="container__checkbox">
        <CheckboxButton1 v-model="model" name="hello" required>
          <div class="display__checkbox">
            <div class="check"><div></div></div>
            <span>hello</span>
          </div>
        </CheckboxButton1>
      </div>

      <RadioButton1 id="hello" name="hello" value="1" required> a </RadioButton1>
      <RadioButton1 id="hello" name="hello" value="2">b</RadioButton1>
      <button type="submit">submit</button>
    </form>
  </div>
</template>
<style scoped lang="scss">
.content {
  margin-top: var(--header-height);
}

.text-input {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.text-input :deep(input) {
  background-color: blue;
}

:deep(.text-input) {
  grid-column: 1/3;
}

// .text-input :deep(.input) {
//   background-color: green;
// }

.label {
  grid-column: 1;
  grid-row: 1;

  background-color: red;
}

.display__checkbox .check {
  height: 24px;
  width: 24px;
  background-color: hsl(var(--primary-color));

  position: relative;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 16px;
    width: 16px;
  }
}

.container__checkbox:has(label input:checked) .check div {
  background-color: red;
}
</style>
