<script setup lang="ts">
import { hexToHSL } from '@/assets/utils/color'
import PageNav from '@/components/PageNav.vue'
import { ref } from 'vue'

const boxDirection = ref<string>('1px 0')
const boxDirectionCombined = ref<string>('1px -1px')
const boxBorderRadius = ref<number>(0)
const boxBorderRadiusShape = ref<string>('round')
const boxBlur = ref<number>(0)
const boxBlurBorder = ref<string>('on')
const boxColor = ref<string>('#000000')
const boxOpacity = ref<number>(1)
const boxSpread = ref<number>(0)
const boxCompareBlurSpread = ref<number>(0)
const insetDirection = ref<string>('10px 0')
const insetBlur = ref<number>(0)
const insetSpread = ref<number>(0)
const doubleDirection = ref<number>(45)
const shadowDirection = ref<number>(0)
const boxExtendedInset = ref<number>(0)

function shadowFromAngle(deg: number, distance: number) {
  const rad = (deg * Math.PI) / 180
  const x = Math.round(distance * Math.cos(rad))
  const y = Math.round(distance * Math.sin(rad))
  return { x: x, y: y }
}
</script>
<template>
  <PageNav />
  <div class="content snap">
    <section class="title" id="title">
      <h1>Box Shadow and Similar Properties</h1>
      <p>Best viewed in desktops.</p>
    </section>
    <section>
      <h2>Box Shadow Basic Explanation:</h2>
      <p>Style property to create shadows for your elements.</p>
      <p>It gives some weight to your elements.</p>
    </section>
    <section id="position">
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
      <i>(If this parameter is not needed use 0 rather than skipping it.)</i>
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
    <section class="container__example">
      <div>
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
      </div>
      <div class="square" :style="{ 'box-shadow': boxDirection }">
        <p>See the placements of the lines.</p>
        <p>Notice that it takes the element's total dimension.</p>
      </div>
    </section>
    <section class="container__example">
      <div>
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
      </div>
      <div class="square" :style="{ 'box-shadow': boxDirectionCombined }">
        <p>
          So it basically acts like a shadow casting opposite to wherever the sun is casting upon
          it.
        </p>
      </div>
    </section>
    <section class="container__example">
      <div>
        <h3>Question: Does it follow the element's shape?</h3>
        <label
          >border-radius:
          <input
            type="number"
            min="0"
            max="50"
            v-model="boxBorderRadius"
            :style="{ 'text-align': 'center', width: '5em' }"
          />%;
        </label>
        <label
          ><select v-model="boxBorderRadiusShape">
            <option value="round">round</option>
            <option value="bevel">bevel</option>
            <option value="notch">notch</option>
            <option value="scoop">scoop</option>
            <option value="squircle">squircle</option>
          </select></label
        >
      </div>
      <div
        class="square"
        :style="{
          'border-radius': boxBorderRadius + '%',
          border: '2px dashed',
          '--corner-shape': boxBorderRadiusShape,
          'box-shadow': '100px 100px',
        }"
      >
        <p :style="{ opacity: boxBorderRadius * 2 + '%', 'font-size': '6em' }">Yes</p>
      </div>
    </section>
    <section id="blur">
      <h2>Parameter 3: 'blur'</h2>
      <p>How much the color of the shadow spreads.</p>
    </section>
    <section class="container__example">
      <div>
        <h3>Example:</h3>
        <label>
          Toggle Border:
          <select v-model="boxBlurBorder">
            <option value="on">On</option>
            <option value="off">Off</option>
          </select>
        </label>
        <label>
          box-shadow: 0 0
          <input
            type="number"
            v-model="boxBlur"
            :style="{ 'text-align': 'end' }"
            min="0"
            max="50"
          />px;
        </label>
      </div>
      <div
        :class="['container__blur', { 'container__blur--border': boxBlurBorder === 'on' }]"
        :style="{ height: 400 + boxBlur * 2 + 'px', width: 400 + boxBlur * 2 + 'px' }"
      >
        <div class="square shadow" :style="{ '--blur': boxBlur + 'px' }">
          <div v-if="!boxBlur">
            <p>This is an element covering all of the shadow underneath it.</p>
            <p>But what if the light was more diffused?</p>
          </div>
          <div v-else>
            <p>Now, the shadow is more diffused.</p>
            <p>It spreads its pigments in each direction by {{ boxBlur }}px.</p>
            <i>NOTE: The dashed border represents where the farthest pixels of the shadow are.</i>
          </div>
        </div>
      </div>
    </section>
    <section id="color">
      <h2>Parameter 4: 'color'</h2>
      <p>Choose a color.</p>
    </section>
    <section class="container__example">
      <div>
        <h3>Example:</h3>
        <label>color: <input type="color" v-model="boxColor" /></label>
        <label
          >opacity: <input type="number" v-model="boxOpacity" min="0" max="1" step=".05"
        /></label>

        <pre><code>
.box-shadow: 0 0 20px hsla({{ hexToHSL(boxColor).h }}, {{ hexToHSL(boxColor).s }}, {{ hexToHSL(boxColor).l }}, {{ boxOpacity }});
        </code></pre>
        <i
          >NOTE: for the color, it is common to use rgba, hsla, 8 digit hexcode to have
          alpha/opacity.</i
        >
        <i> But it is perfectly fine to use rgb, hsl, hexcodes that do not use alpha/opacity. </i>
      </div>
      <div
        class="square shadow"
        :style="{
          '--blur': '20px',
          '--hue': hexToHSL(boxColor).h,
          '--saturation': hexToHSL(boxColor).s + '%',
          '--lightness': hexToHSL(boxColor).l + '%',
          '--opacity': boxOpacity,
        }"
      ></div>
    </section>
    <section id="spread">
      <h2>Parameter 5: 'spread'</h2>
      <p>Size of cast shadow</p>
    </section>
    <section>
      <h3>This increases the size of the box shadow without blurring it.</h3>
      <i>Note: regarding the syntax order, despite being strict: </i>
      <pre><code>
    box-shadow: 'x' 'y' 'blur' 'spread' 'color';
        </code></pre>
      <i>I present spread after color since I thought they were essentials.</i>
      <i>while spread without blur might as well be border property.</i>
    </section>
    <section class="container__example">
      <div :style="{ 'z-index': 2 }">
        <h3>Example:</h3>
        <label>
          box-shadow: 0 0 0
          <input
            type="number"
            v-model="boxSpread"
            :style="{ 'text-align': 'end' }"
            min="0"
            max="50"
          />px hsla(299, 63%, 90%, 1);
        </label>
      </div>
      <div
        class="square shadow"
        :style="{
          '--spread': boxSpread + 'px',
          '--hue': 299,
          '--saturation': '63%',
          '--lightness': '90%',
        }"
      ></div>
    </section>

    <section class="container__example">
      <div style="z-index: 2">
        <h3>Compare:</h3>
        <label>
          <input
            type="number"
            v-model="boxCompareBlurSpread"
            :style="{ 'text-align': 'end' }"
            min="0"
            max="50"
          />
        </label>
      </div>
      <div class="beside">
        <div
          class="square mini shadow"
          :style="{
            '--blur': boxCompareBlurSpread + 'px',
            '--hue': 299,
            '--saturation': '63%',
            '--lightness': '90%',
          }"
        >
          <p>blur:</p>
          <p>{{ boxCompareBlurSpread }}px</p>
        </div>
        <div
          class="square mini shadow"
          :style="{
            '--spread': boxCompareBlurSpread + 'px',
            '--hue': 299,
            '--saturation': '63%',
            '--lightness': '90%',
          }"
        >
          <p>spread:</p>
          <p>{{ boxCompareBlurSpread }}px</p>
        </div>
        <div
          class="square mini shadow"
          :style="{
            '--blur': boxCompareBlurSpread + 'px',
            '--spread': boxCompareBlurSpread + 'px',
            '--hue': 299,
            '--saturation': '63%',
            '--lightness': '90%',
          }"
        >
          <p>both:</p>
          <p>{{ boxCompareBlurSpread }}px</p>
        </div>
      </div>
    </section>
    <section id="inset">
      <h2>Parameter 6: 'inset'</h2>
      <p>When the shadow is inside</p>
    </section>
    <section>
      <h3>This puts the shadow inside the element rather than outside.</h3>
      <p>This is a boolean so just adding 'inset' work.</p>
      <i>Note: regarding the syntax order, non-numerical values are not strict: </i>
      <pre><code>
    box-shadow: 'x' 'y' 'blur' 'spread' 'color (can be anywhere)' 'inset (can be anywhere)';
        </code></pre>
      <i>I present inset now, because it is looks completely different from the rest.</i>
      <i>We will have to revisit each parameter with inset.</i>
    </section>
    <section class="container__example">
      <div>
        <h3>Examples:</h3>
        <pre><code>border: 10px solid;</code></pre>
        <span class="indent">
          box-shadow:
          <label>
            <select name="direction" v-model="insetDirection">
              <option value="0 0">0 0</option>
              <option value="0 10px">0 10px</option>
              <option value="-10px 0">-10px 0</option>
              <option value="0 -10px">0 -10px</option>
              <option value="10px 0">10px 0</option>
              <option value="10px 10px">10px 10px;</option>
              <option value="-10px 10px">-10px 10px;</option>
              <option value="-10px -10px">-10px -10px;</option>
              <option value="10px -10px">10px -10px;</option>
            </select>
          </label>
          <label><input type="number" min="0" max="50" v-model="insetBlur" /></label>
          <label><input type="number" min="0" max="50" v-model="insetSpread" /></label>
          <span :style="{ display: 'block' }"> red </span>
          <span :style="{ display: 'block' }"> inset; </span>
        </span>
      </div>
      <div
        class="square"
        :style="{
          'box-shadow': `${insetDirection} ${insetBlur}px ${insetSpread}px red inset`,
          border: '10px solid',
        }"
      >
        <p>See the placements of the lines.</p>
        <p>Notice that it inside the border that is set.</p>
        <i>(If you were looking for padding-color, this is the closest you have to it.)</i>
      </div>
    </section>
    <section id="double">
      <h2>Parameter 7: ', ...'</h2>
      <p>and more...</p>
    </section>
    <section>
      <h3>There can be more than 1 shadow</h3>
      <p>After the first, add a comma ',' then use the same parameters</p>
      <i>(using the box-shadow property twice will overwrite the first.)</i>
    </section>
    <section class="container__example">
      <div>
        <h3>Examples:</h3>
      </div>
      <div
        class="square"
        :style="{
          'box-shadow': `${-1 * shadowFromAngle(doubleDirection, 115).x}px ${-1 * shadowFromAngle(doubleDirection, 115).y}px 0 red,  ${shadowFromAngle(doubleDirection, 115).x}px ${shadowFromAngle(doubleDirection, 115).y}px  0 green, ${-1 * shadowFromAngle(doubleDirection, 100).x}px ${-1 * shadowFromAngle(doubleDirection, 100).y}px 0 red inset,  ${shadowFromAngle(doubleDirection, 100).x}px ${shadowFromAngle(doubleDirection, 100).y}px  0 green inset`,
          border: '10px solid',
        }"
      >
        <label><input type="number" v-model="doubleDirection" step="5" /></label>
      </div>
    </section>
    <section class="container__example">
      <div>
        <h3>Examples:</h3>
      </div>
      <div
        class="square"
        :style="{
          'box-shadow': `${-1 * shadowFromAngle(shadowDirection, 90).x}px ${-1 * shadowFromAngle(shadowDirection, 90).y}px 15px 0 hsl(var(--primary-color)), ${shadowFromAngle(shadowDirection, 6).x}px ${shadowFromAngle(shadowDirection, 6).y}px 16px 0px grey inset, ${shadowFromAngle(shadowDirection, 80).x}px ${shadowFromAngle(shadowDirection, 80).y}px 80px 0px hsl(var(--primary-color)) inset`,
          'border-radius': '50%',
        }"
      >
        <label><input type="number" v-model="shadowDirection" step="5" /></label>
      </div>
    </section>
    <section id="drop-shadow">
      <h2>filter: dropshadow()</h2>
      <p>Another type of shadow</p>
    </section>
    <section>
      <h3>What's the difference?</h3>
      <ul>
        <li>
          <span>The main is no spread and no inset.</span>
          <i>(another reason for the order of the properties as they are presented.)</i>
        </li>
        <li>
          <span>The blur param with the same value, will diffuse more for drop-shadow.</span>
        </li>
        <li>
          <span>Yet the color is more intense.</span>
        </li>
        <li>
          <span>The drop-shadow requires the div to have a background-color</span>
        </li>
      </ul>
    </section>
    <section class="container__example">
      <div>
        <h3>Examples:</h3>
      </div>
      <div class="beside">
        <div class="square mini" style="grid-column: 1/3; grid-row: 1; box-shadow: 0 0 10px"></div>
        <div
          class="square mini"
          style="
            grid-column: 2/4;
            grid-row: 1;
            background-color: hsl(var(--primary-bg-color));
            filter: drop-shadow(0 0 10px);
          "
        ></div>
      </div>
    </section>
    <section></section>
  </div>
</template>
<style scoped lang="scss">
.snap {
  height: 100svh;
  overflow-y: scroll;

  scroll-snap-type: y mandatory;

  scrollbar-width: none;
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

div {
  --corner-shape: round;
}

i {
  display: block;
}

.indent > * {
  padding-left: 2em;
}

.title {
  padding-top: 0;
}

.container__blur {
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.container__blur--border {
  border: 1px dashed;
}

.container__example > :first-child {
  margin-bottom: v.$spacing-0400;
}

.container__example > :first-child label {
  display: block;
}

.square {
  height: 400px;
  width: 400px;
  text-align: center;

  padding: v.$spacing-0200;

  justify-self: center;

  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.square.mini {
  height: 100px;
  width: 100px;
}

.shadow {
  --blur: 0px;
  --spread: 0px;
  --hue: 0;
  --saturation: 0%;
  --lightness: 0%;
  --opacity: 1;

  color: hsl(0, 100%, 50%);

  box-shadow: 0 0 var(--blur) var(--spread)
    hsla(var(--hue), var(--saturation), var(--lightness), var(--opacity));
}

.beside {
  width: 80svw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  justify-content: space-between;
}
</style>
