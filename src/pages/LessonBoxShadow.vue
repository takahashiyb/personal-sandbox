<script setup lang="ts">
import { ref } from 'vue'

const boxDirection = ref<string>('1px 0')
const boxDirectionCombined = ref<string>('1px -1px')
const boxBorderRadius = ref<number>(0)
</script>
<template>
  <div class="content snap">
    <section class="title">
      <h1>Box Shadow and Similar Properties</h1>
    </section>
    <section>
      <h2>Box Shadow Basic Explanation:</h2>
      <p>Style property to create shadows for your elements.</p>
      <p>It gives some weight to your elements.</p>
    </section>
    <section>
      <h2>Basic Parameters: 'x', 'y'</h2>
      <p>Expressed as:</p>
      <pre><code>
div {
  box-shadow: 'x' 'y';
}
      </code></pre>
    </section>
    <section>
      <h2>Parameter 1: 'x'</h2>
      <p>Set a value with a unit such as px or % for the x-axis</p>
      <i>(Could be negative.)</i>
    </section>
    <section>
      <h2>Parameter 2: 'y'</h2>
      <p>Same with the 'x' but for the y-axis</p>
      <i>(Could be negative.)</i>
    </section>
    <section>
      <h2>Why introduce these two first?</h2>
      <p>These Parmeters are needed to see any styling changes, otherwise it doesn't work.</p>
      <i>(but there are many more parameters to try.)</i>
    </section>
    <section>
      <h3>Examples:</h3>
      <label
        >Directions:
        <select name="direction" v-model="boxDirection">
          <option value="1px 0">box-shadow: 1px 0;</option>
          <option value="-1px 0">box-shadow: -1px 0;</option>
          <option value="0 -1px">box-shadow: 0 -1px ;</option>
          <option value="0 1px">box-shadow: 0 1px;</option>
        </select></label
      >
      <div class="square" :style="`box-shadow: ${boxDirection};`">
        <p>See the placements of the lines.</p>
        <p>Notice that it takes the element's total dimension.</p>
      </div>
    </section>
    <section>
      <h3>In combination:</h3>
      <label
        >Directions:
        <select name="direction" v-model="boxDirectionCombined">
          <option value="1px -1px">box-shadow: 1px -1px;</option>
          <option value="1px 1px">box-shadow: 1px 1px;</option>
          <option value="-1px 1px">box-shadow: -1px 1px;</option>
          <option value="-1px -1px">box-shadow: -1px -1px;</option>
        </select></label
      >
      <div class="square" :style="`box-shadow: ${boxDirectionCombined};`">
        <p>
          So it basically acts like a shadow casting opposite to wherever the sun is casting upon
          it.
        </p>
      </div>
    </section>
    <section>
      <h3>Question: Does it follow the element's shape?</h3>
      <label
        >border-radius:
        <input
          type="number"
          min="0"
          max="50"
          v-model="boxBorderRadius"
          style="text-align: center; width: 5em"
        />%;
      </label>
      <div
        class="square"
        :style="`border-radius: ${boxBorderRadius}%; border: 2px dashed; box-shadow: 100px 100px`"
      >
        <p :style="`opacity: ${boxBorderRadius * 2}%; font-size: 6em;`">Yes</p>
      </div>
    </section>
    <section>
      <h2>Parameter 3: 'blur'</h2>
      <p>Choose a color.</p>
    </section>
    <section>
      <h2>Parameter 4: 'color'</h2>
      <p>Choose a color.</p>
    </section>
    <section>
      <h3>Example:</h3>
      <div class="square"></div>
    </section>
    <section v-for="value in 25" :key="value">hello{{ value }}</section>
  </div>
</template>
<style scoped lang="scss">
.snap {
  height: 100svh;
  overflow-y: scroll;

  scroll-snap-type: y mandatory;
}

.snap > * {
  height: 100svh;

  scroll-snap-align: start;
  scroll-snap-stop: always;

  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.title {
  padding-top: 0;
}

.square {
  margin-top: v.$spacing-0400;
  height: 400px;
  width: 400px;

  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
