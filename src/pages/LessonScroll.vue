<script setup lang="ts"></script>
<template>
  <div class="content">
    <h1>Animate On Scroll</h1>
    <div class="view">
      <div class="box block explanation">
        <p>A small demonstration for scroll animation</p>
      </div>

      <div class="box block explanation">
        <h2>
          For scroll animations there are 3 key properties
          <i>(Assuming you have already set up the @keyframes) </i>:
        </h2>
        <ul>
          <li>animation</li>
          <li>animation-timeline</li>
          <li>animation-range</li>
        </ul>
      </div>

      <div class="box block explanation">
        <h2>animation: {name of the keyframe} {type of easing}</h2>
        <i>(focus on the type of easing)</i>
      </div>

      <div class="box ease ease--linear">Linear</div>
      <div class="box ease ease--ease-in">Ease in</div>
      <div class="box ease ease--ease-in-out">Ease in out</div>
      <div class="box ease ease--ease-out">Ease out</div>
      <div class="box block explanation">
        <h2>animation-timeline: view()</h2>

        <i
          >(For the demo, it will always be view() but adding percentages as its parameters can do
          the range's job)</i
        >
      </div>
      <div class="box block explanation">
        <h2>animation-range: {start style} {start %} {end style} {end %}</h2>
        <p>You can set only one style, with or without %</p>
        <p>let's try one style and no percentage:</p>
      </div>
      <div class="box color" style="animation-range: entry">
        <p>Entry</p>
        <p>Both entries start when the top of the element enters the viewport</p>
        <p>Both entries finish when the bottom of the element enters the viewport</p>
      </div>
      <div class="box color" style="animation-range: entry-crossing">entry-crossing</div>
      <div class="box color" style="animation-range: exit-crossing">exit-crossing</div>
      <div class="box color" style="animation-range: exit">
        <p>Exit</p>
        <p>Both exits start when the top of the element exits the viewport</p>
        <p>Both exits finish when the bottom of the element exits the viewport</p>
      </div>
      <div class="box block explanation">
        <p>
          The difference is their behavior when the element's height are taller than the viewport's
          height
        </p>
      </div>
      <div class="box color row-excess" style="animation-range: entry">
        <p>Entry starts when it enters the viewport</p>

        <p>and finishes when its top touches the top of the viewport</p>
      </div>
      <div class="box color row-excess" style="animation-range: entry-crossing">
        <p>Entry-crossing starts when it enters the viewport</p>

        <p>and finishes when its bottom enters the viewport</p>
      </div>
      <div class="box color row-excess" style="animation-range: exit-crossing">
        <p>Exit-crossing starts when its top touches the top of the viewport</p>

        <p>and finishes when its bottom touches the top of the viewport</p>
      </div>
      <div class="box color row-excess" style="animation-range: exit">
        <p>Exit starts when its bottom enters the viewport</p>

        <p>and finishes when its bottom touches the top of the viewport</p>
      </div>
      <div class="box color cover" style="grid-column: span 2">
        <p>Cover</p>

        <p>Starts as it enters</p>

        <p>finishes when fully outside</p>
      </div>
      <div class="box color contain" style="grid-column: span 2">
        <p>Contain</p>

        <p>Starts when fully inside</p>

        <p>finishes when the top of the element exits the viewport</p>
      </div>
      <div class="box block explanation">
        <p>so what's with the precentages?</p>
      </div>
      <div class="box block" style="">
        <p>start range cover:</p>
        <p>it starts as it enters a certain percentage of the viewport.</p>
      </div>
      <div class="ruler">
        <p class="color" style="animation-range: cover 80%">80%</p>
        <p class="color" style="animation-range: cover 60%">60%</p>
        <p class="color" style="animation-range: cover 40%">40%</p>
        <p class="color" style="animation-range: cover 20%">20%</p>
        <p class="color" style="animation-range: cover 0%">0%</p>
      </div>
      <div class="box block" style="">
        <p>start range contain:</p>
        <p>it starts when the element fully enters the percentage</p>
      </div>
      <div class="ruler">
        <p class="color" style="animation-range: contain 80%">80%</p>
        <p class="color" style="animation-range: contain 60%">60%</p>
        <p class="color" style="animation-range: contain 40%">40%</p>
        <p class="color" style="animation-range: contain 20%">20%</p>
        <p class="color" style="animation-range: contain 0%">0%</p>
      </div>
      <div class="box block explanation">
        <h2>Why does the contain's 60% start earlier than cover's</h2>
        <p>
          This is just an intuition: cover's 0 starts and ends way past the size of the viewport.
          This makes sizes scale way bigger for cover, hence it reaches its own 60% viewport, or any
          percentage past 50%, later.
        </p>
      </div>
      <div class="box block explanation">
        <p>What about end ranges</p>
        <i>(assuming the start range is cover 0)</i>
      </div>
      <div class="box block" style="">
        <p>End range cover:</p>
        <p>animation stops once the bottom of the element passes the percentage</p>
      </div>
      <div class="ruler">
        <p class="color" style="animation-range: cover 0 cover 100%">100%</p>
        <p class="color" style="animation-range: cover 0 cover 80%">80%</p>
        <p class="color" style="animation-range: cover 0 cover 60%">60%</p>
        <p class="color" style="animation-range: cover 0 cover 40%">40%</p>
        <p class="color" style="animation-range: cover 0 cover 20%">20%</p>
      </div>
      <div class="box block">
        <p>End range cover:</p>
        <p>
          So instead of saying when it fully enters the viewport, you can say, when it fully enters
          20% of the viewport, etc.
        </p>
      </div>
      <div class="ruler">
        <p class="color" style="animation-range: cover 0 contain 100%">100%</p>
        <p class="color" style="animation-range: cover 0 contain 80%">80%</p>
        <p class="color" style="animation-range: cover 0 contain 60%">60%</p>
        <p class="color" style="animation-range: cover 0 contain 40%">40%</p>
        <p class="color" style="animation-range: cover 0 contain 20%">20%</p>
      </div>
      <div class="box block explanation"><p>What about negative values?</p></div>
      <div class="ruler">
        <p class="color" style="animation-range: cover -100%">start cover -100%</p>
        <p class="color" style="animation-range: cover -80%">start cover -80%</p>
        <p class="color" style="animation-range: cover -60%">start cover -60%</p>
        <p class="color" style="animation-range: cover -40%">start cover -40%</p>
        <p class="color" style="animation-range: cover -20%">start cover -20%</p>
      </div>
      <div class="ruler">
        <p class="color" style="animation-range: contain -100%">start contain -100%</p>
        <p class="color" style="animation-range: contain -80%">start contain -80%</p>
        <p class="color" style="animation-range: contain -60%">start contain -60%</p>
        <p class="color" style="animation-range: contain -40%">start contain -40%</p>
        <p class="color" style="animation-range: contain -20%">start contain -20%</p>
      </div>
      <div class="ruler">
        <p class="color" style="animation-range: cover 0 cover -100%">end cover -100%</p>
        <p class="color" style="animation-range: cover 0 cover -80%">end cover -80%</p>
        <p class="color" style="animation-range: cover 0 cover -60%">end cover -60%</p>
        <p class="color" style="animation-range: cover 0 cover -40%">end cover -40%</p>
        <p class="color" style="animation-range: cover 0 cover -20%">end cover -20%</p>
      </div>
      <div class="ruler">
        <p class="color" style="animation-range: cover 0 contain -100%">end contain -100%</p>
        <p class="color" style="animation-range: cover 0 contain -80%">end contain -80%</p>
        <p class="color" style="animation-range: cover 0 contain -60%">end contain -60%</p>
        <p class="color" style="animation-range: cover 0 contain -40%">end contain -40%</p>
        <p class="color" style="animation-range: cover 0 contain -20%">end contain -20%</p>
      </div>
      <div class="box block explanation">
        <p>
          It seems like negative percentages are ignored and the only thing taken account are the
          styles while the end range is completely ignored
        </p>
      </div>
      <div class="box block explanation">
        <p>So now, let us experiment some keyframe properties</p>
        <p>We already saw scale, color and opacity</p>
      </div>
      <div class="box block explanation">
        <p>Rotate</p>
      </div>
      <div class="box block rotate" style="animation-range: cover 0% contain 80%"><p>0</p></div>
      <div class="box block rotate" style="animation-range: cover 20% contain 80%"><p>20%</p></div>
      <div class="box tablet block rotate" style="animation-range: cover 40% contain 80%">
        <p>40%</p>
      </div>
      <div class="box tablet block rotate" style="animation-range: cover 50% contain 80%">
        <p>50%</p>
      </div>
      <div class="box block explanation">
        <p>Skew</p>
      </div>
      <div class="box block skew" style="animation-range: cover 0 contain 20%"><p>0</p></div>
      <div class="box block skew" style="animation-range: cover 0 contain 40%"><p>20%</p></div>
      <div class="box tablet block skew" style="animation-range: cover 0 contain 60%">
        <p>40%</p>
      </div>
      <div class="box tablet block skew" style="animation-range: cover 0 contain 80%">
        <p>60%</p>
      </div>
      <div class="box block explanation">
        <p>Translate</p>
      </div>
      <div class="box block translate" style="animation-range: cover 0 contain 20%"><p>0</p></div>
      <div class="box block translate" style="animation-range: cover 0 contain 40%"><p>20%</p></div>
      <div class="box tablet block translate" style="animation-range: cover 0 contain 60%">
        <p>40%</p>
      </div>
      <div class="box tablet block translate" style="animation-range: cover 0 contain 80%">
        <p>60%</p>
      </div>
      <div class="box block explanation">
        <p>Experiments:</p>
        <i>(none for now)</i>
      </div>
      <div class="empty">Extra Space</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
h1 {
  height: 100vh;
  line-height: 80vh;
  text-align: center;
  display: block;
  font-size: f.rem(24);
}

h2 {
  display: inline;
  padding-bottom: v.$spacing-0200;
  text-align: center;
}

.view {
  --row-height: 500px;
  --span-wide: 2;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: f.em(24);
  row-gap: calc(((100svh - var(--row-height)) / 2) + 50px);
}

.block {
  display: grid;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: start;

  animation: appear linear;
  animation-timeline: view();
  animation-range: cover 0 contain 40%;
}

.ease {
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: start;

  height: 500px;

  padding-inline: v.$spacing-0200;

  border: f.rem(3) solid hsl(var(--secondary-color));
}

.ease--linear {
  animation: color linear;
  animation-timeline: view();
  animation-range: cover 20% cover 60%;
}

.ease--ease-in {
  animation: color ease-in;
  animation-timeline: view();
  animation-range: cover 20% cover 60%;
}

.ease--ease-in-out {
  animation: color ease-in-out;
  animation-timeline: view();
  animation-range: cover 20% cover 60%;
}

.ease--ease-out {
  animation: color ease-out;
  animation-timeline: view();
  animation-range: cover 20% cover 60%;
}

@keyframes appear {
  from {
    opacity: 0;
    scale: 0.5;
  }

  to {
    opacity: 1;
    scale: 1;
  }
}

@keyframes color {
  from {
    background-color: hsl(var(--error-color));
  }

  to {
    background-color: hsl(var(--secondary-bg-color));
  }
}

.explanation {
  grid-column: span var(--span-wide);
}

.color {
  display: grid;
  justify-content: center;

  animation: color linear;
  animation-timeline: view();
}

.contain {
  animation-range: contain;
}
.cover {
  animation-range: cover;
}

.row-excess {
  height: 150svh;
}

.ruler {
  display: grid;
  justify-content: stretch;
}

.ruler p {
  width: 100%;
}

@keyframes rotate {
  from {
    rotate: 180deg;
  }
  to {
    rotate: 0deg;
  }
}

.rotate {
  background-color: hsl(var(--primary-bg-color));
  animation: rotate linear;
  animation-timeline: view();
}

@keyframes skew {
  from {
    transform: skew(40deg);
  }
  to {
    transform: skew(0);
  }
}

.skew {
  background-color: hsl(var(--primary-bg-color));
  animation: skew linear;
  animation-timeline: view();
}

@keyframes translate {
  from {
    translate: -100% 100%;
  }
  to {
    translate: 0;
  }
}

.translate {
  background-color: hsl(var(--primary-bg-color));

  animation: translate linear;
  animation-timeline: view();
}

.empty {
  opacity: 0;
  grid-row: span 6;
  grid-column: span var(--span-wide);
}

.box {
  border: f.rem(3) solid hsl(var(--secondary-color));
  box-shadow:
    hsla(var(--primary-color), 0.25) 0px 50px 100px -20px,
    hsla(var(--primary-color), 0.3) 0px 30px 60px -30px,
    hsla(var(--primary-color), 0.35) 0px -2px 6px 0px inset;

  padding-top: v.$spacing-0400;
  padding-bottom: v.$spacing-0400;
  padding-inline: v.$spacing-0200;
}

.tablet {
  display: none;
}

@media (min-width: f.em(700)) {
  h1 {
    font-size: f.rem(48);
  }

  .box {
    padding-inline: v.$spacing-0400;
  }

  .view {
    --span-wide: 4;
    grid-template-columns: repeat(4, 1fr);
  }

  .tablet {
    display: grid;
  }

  .row-excess {
    grid-row: span 3;
  }
}

@media (min-width: f.em(1000)) {
  h1 {
    font-size: f.rem(80);
  }

  .view {
    --row-height: 200px;
  }
}
</style>
