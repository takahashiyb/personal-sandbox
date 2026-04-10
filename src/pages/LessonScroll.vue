<script setup lang="ts"></script>
<template>
  <div class="content">
    <h1>Animate On Scroll</h1>
    <div class="view">
      <div class="block explanation">
        <h2>A small demonstration of scroll animation</h2>
      </div>

      <div class="block explanation">
        <p>
          For scroll animations there are 3 key properties
          <i>(Assuming you have already set up the @keyframes) </i>:
        </p>
        <ul>
          <li>animation</li>
          <li>animation-timeline</li>
          <li>animation-range</li>
        </ul>
      </div>

      <div class="block explanation">
        <p>animation: {name of the keyframe} {type of easing} focus on the type of easing</p>
      </div>

      <div class="ease ease--linear">Linear</div>
      <div class="ease ease--ease-in">Ease in</div>
      <div class="ease ease--ease-in-out">Ease in out</div>
      <div class="ease ease--ease-out">Ease out</div>
      <div class="block explanation">
        <p>animation-timeline: view()</p>

        <p>For scroll, it will always be view()</p>
      </div>
      <div class="block explanation">
        <p>animation-range: {start style} {start %} {end style} {end %}</p>

        <p>The values of both styles will be the same.</p>
        <p>You can set only one style, with or without %, let's sample this first:</p>
      </div>
      <div class="color" style="animation-range: entry">
        <p>Entry</p>
        <p>Both entries start when the top of the element enters the viewport</p>
        <p>Both entries finish when the bottom of the element enters the viewport</p>
      </div>
      <div class="color" style="animation-range: entry-crossing">entry-crossing</div>
      <div class="color" style="animation-range: exit-crossing">exit-crossing</div>
      <div class="color" style="animation-range: exit">
        <p>Exit</p>
        <p>Both exits start when the top of the element exits the viewport</p>
        <p>Both exits finish when the bottom of the element exits the viewport</p>
      </div>
      <div class="block explanation">
        <p>
          The difference is their behavior when the element's height is taller than the viewport's
          height
        </p>
      </div>
      <div class="color row-excess" style="animation-range: entry">
        <p>Entry starts when it enters the viewport</p>

        <p>and finishes when its top touches the top of the viewport</p>
      </div>
      <div class="color row-excess" style="animation-range: entry-crossing">
        <p>Entry-crossing starts when it enters the viewport</p>

        <p>and finishes when its bottom enters the viewport</p>
      </div>
      <div class="color row-excess" style="animation-range: exit-crossing">
        <p>Exit-crossing starts its top touches the top of the viewport</p>

        <p>and finishes when its top touches the top of the viewport</p>
      </div>
      <div class="color row-excess" style="animation-range: exit">
        <p>Exit starts its bottom enters the viewport</p>

        <p>and finishes when its top touches the top of the viewport</p>
      </div>
      <div class="color cover" style="grid-column: span 2">
        <p>Cover</p>

        <p>Starts as it enters</p>

        <p>finishes when fully outside</p>
      </div>
      <div class="color contain" style="grid-column: span 2">
        <p>Contain</p>

        <p>Starts when fully inside</p>

        <p>finishes while fully inside</p>
      </div>
      <div class="block explanation">
        <p>so what's with the precentages?</p>
      </div>
      <div class="block" style="">
        <p>start range cover:</p>
        <p>it starts the end of animation as it enters a certain percentage of the viewport.</p>
      </div>
      <div class="ruler">
        <p class="color" style="animation-range: cover 80%">80%</p>
        <p class="color" style="animation-range: cover 60%">60%</p>
        <p class="color" style="animation-range: cover 40%">40%</p>
        <p class="color" style="animation-range: cover 20%">20%</p>
        <p class="color" style="animation-range: cover 0%">0%</p>
      </div>
      <div class="block" style="">
        <p>start range cover:</p>
        <p>it starts the end of animation when the element fully enters the percentage</p>
      </div>
      <div class="ruler">
        <p class="color" style="animation-range: contain 80%">80%</p>
        <p class="color" style="animation-range: contain 60%">60%</p>
        <p class="color" style="animation-range: contain 40%">40%</p>
        <p class="color" style="animation-range: contain 20%">20%</p>
        <p class="color" style="animation-range: contain 0%">0%</p>
      </div>
      <div class="block explanation">
        <p>What about end ranges</p>
        <p>(<i>assuming the start range is cover 0</i>)</p>
      </div>
      <div class="ruler">
        <p class="color" style="animation-range: cover 0 cover 100%">100%</p>
        <p class="color" style="animation-range: cover 0 cover 80%">80%</p>
        <p class="color" style="animation-range: cover 0 cover 60%">60%</p>
        <p class="color" style="animation-range: cover 0 cover 40%">40%</p>
        <p class="color" style="animation-range: cover 0 cover 20%">20%</p>
      </div>
      <div class="block" style="">
        <p>End range cover:</p>
        <p>it starts the end of animation once it fully enters the percentage</p>
      </div>
      <div class="ruler">
        <p class="color" style="animation-range: cover 0 contain 100%">100%</p>
        <p class="color" style="animation-range: cover 0 contain 80%">80%</p>
        <p class="color" style="animation-range: cover 0 contain 60%">60%</p>
        <p class="color" style="animation-range: cover 0 contain 40%">40%</p>
        <p class="color" style="animation-range: cover 0 contain 20%">20%</p>
      </div>
      <div class="block">
        <p>End range cover:</p>
        <p>
          So instead of saying when it fully enters the viewport, you can say, when it fully enters
          20% of the viewport, etc.
        </p>
      </div>
      <div class="block explanation"><p>What about negative values?</p></div>
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
      <div class="block explanation">
        <p>
          It seems like negatives pushes start animation range to start earlier meanwhile it
          completely breaks when negative end ranges are added
        </p>
      </div>
      <div class="block explanation">
        <p>So now, let us experiment some keyframe properties</p>
        <p>We already saw scale, color and opacity</p>
      </div>
      <div class="block rotate" style="animation-range: cover 0% contain 80%"><p>0</p></div>
      <div class="block rotate" style="animation-range: cover 20% contain 80%"><p>20%</p></div>
      <div class="block rotate" style="animation-range: cover 40% contain 80%"><p>40%</p></div>
      <div class="block rotate" style="animation-range: cover 60% contain 80%"><p>60%</p></div>
      <div class="block skew" style="animation-range: cover 0 contain 20%"><p>0</p></div>
      <div class="block skew" style="animation-range: cover 0 contain 40%"><p>20%</p></div>
      <div class="block skew" style="animation-range: cover 0 contain 60%"><p>40%</p></div>
      <div class="block skew" style="animation-range: cover 0 contain 80%"><p>60%</p></div>
      <div class="block translate" style="animation-range: cover 0 contain 20%"><p>0</p></div>
      <div class="block translate" style="animation-range: cover 0 contain 40%"><p>20%</p></div>
      <div class="block translate" style="animation-range: cover 0 contain 60%"><p>40%</p></div>
      <div class="block translate" style="animation-range: cover 0 contain 80%"><p>60%</p></div>
      <div class="block" style="grid-row: span 6; grid-column: span 4">Extra Space</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
h1 {
  height: 100vh;
  line-height: 80vh;
  text-align: center;
  display: block;
  font-size: 60px;
}

.view {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  column-gap: f.em(24);
  row-gap: calc(((100svh - 200px) / 2) + 50px);
}

.block {
  border: f.rem(3) solid var(--secondary-color);
  box-shadow:
    calc(var(--primary-color) + 40) 0px 50px 100px -20px,
    calc(var(--primary-color) + 40) 0px 30px 60px -30px,
    calc(var(--primary-color) + 40) 0px -2px 6px 0px inset;

  display: grid;
  justify-content: center;
  align-content: center;
  align-items: start;

  animation: appear linear;
  animation-timeline: view();
  animation-range: cover 0 contain 40%;

  padding-inline: v.$spacing-0200;
}

.ease {
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: start;

  padding-inline: v.$spacing-0200;

  border: f.rem(3) solid var(--secondary-color);
}

.ease--linear {
  animation: color linear;
  animation-timeline: view();
  animation-range: cover 0 contain 40%;
}

.ease--ease-in {
  animation: color ease-in;
  animation-timeline: view();
  animation-range: cover 0 contain 40%;
}

.ease--ease-in-out {
  animation: color ease-in-out;
  animation-timeline: view();
  animation-range: cover 0 contain 40%;
}

.ease--ease-out {
  animation: color ease-out;
  animation-timeline: view();
  animation-range: cover 0 contain 40%;
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
    background-color: var(--error-color);
  }

  to {
    background-color: var(--secondary-bg-color);
  }
}

.explanation {
  grid-column: span 4;
}

.color {
  border: f.rem(3) solid var(--secondary-color);
  box-shadow:
    rgba(var(--primary-color), 0.25) 0px 50px 100px -20px,
    rgba(var(--primary-color), 0.3) 0px 30px 60px -30px,
    rgba(var(--primary-color), 0.35) 0px -2px 6px 0px inset;

  display: grid;
  justify-content: center;

  animation: color linear;
  animation-timeline: view();

  padding-inline: v.$spacing-0200;
}

.contain {
  animation-range: contain;
}
.cover {
  animation-range: cover;
}

.row-excess {
  grid-row: span 5;
}

.ruler {
  display: grid;
  justify-content: stretch;
}

.ruler p {
  width: 100%;
  border-top: 1px solid var(--primary-color);
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
  animation: skew linear;
  animation-timeline: view();
}

@keyframes translate {
  from {
    opacity: 0;
    translate: -100% 100%;
  }
  to {
    opacity: 1;
    translate: 0;
  }
}

.translate {
  animation: translate linear;
  animation-timeline: view();
}
</style>
