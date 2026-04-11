<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()
</script>
<template>
  <div class="content">
    <h1>SCROLL SNAP</h1>

    <div class="block">
      <p>Let us explore the most basic properties for SCROLL SNAP</p>
    </div>

    <div class="block">
      <p>If you are familiar with it, you might have noticed you are using it right now.</p>
    </div>

    <div class="block">
      <p>
        It is how the page automatically scrolls so you don't end up in between two sections and
        guides you to the optimal view of the next intended section.
      </p>
    </div>

    <div class="inbetween-sample">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam deleniti fuga modi
        est praesentium! Neque consequuntur fugiat porro, molestiae veritatis beatae cum et aut
        incidunt quam similique dolor nesciunt? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Voluptatem, cum. Aliquid eos molestiae ad tenetur amet at quia nesciunt? Tempore dicta
        amet reiciendis hic repudiandae odit facere ipsam doloribus voluptatem! Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Odio optio quibusdam natus laborum adipisci beatae
        perspiciatis eveniet, recusandae laudantium consectetur magni tempore! Expedita repudiandae,
        commodi id eum harum excepturi exercitationem.
      </p>

      <div>
        <p>Because inbetween spaces, like this, look better when skipped.</p>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam deleniti fuga modi
        est praesentium! Neque consequuntur fugiat porro, molestiae veritatis beatae cum et aut
        incidunt quam similique dolor nesciunt? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Voluptatem, cum. Aliquid eos molestiae ad tenetur amet at quia nesciunt? Tempore dicta
        amet reiciendis hic repudiandae odit facere ipsam doloribus voluptatem! Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Odio optio quibusdam natus laborum adipisci beatae
        perspiciatis eveniet, recusandae laudantium consectetur magni tempore! Expedita repudiandae,
        commodi id eum harum excepturi exercitationem.
      </p>
    </div>

    <div class="block">
      <h2>Situation:</h2>
      <ul class="left">
        <li>
          When the content is scrollable
          <i>(e.g.: html tag, container with an overflow: scroll;)</i>
        </li>
      </ul>
    </div>

    <div class="block">
      <h2>Properties Needed</h2>
      <ul class="left">
        <li>scroll-snap-type</li>
        <li>scroll-snap-align</li>
        <li>scroll-snap-stop</li>
      </ul>
    </div>

    <div class="block left">
      <h2>In the scrollable container:</h2>
      <p>.scrollable-container {</p>
      <p>scroll-snap-type: {direction} {type};</p>
      <p>}</p>
      <br />
      <p>direction:</p>
      <i>(could be omitted if it scrolls horizontally and vertically)</i>
      <ul>
        <li>x = horizontal scroll</li>
        <li>y = vertical scroll</li>
      </ul>
      <p>type:</p>
      <i>
        I do not know the exact rules to this, but basically it is a negotiation between two divs
        over who could be featured in the viewport
      </i>
      <ul>
        <li>
          mandatory = if it has to snap when scrolling past a certain point
          <i>so it goes to whichever is closest</i>
        </li>
        <li>proximity = it only snaps when it gets close to a snapping point</li>
      </ul>
    </div>

    <div class="type-difference">
      <div>
        <div>
          <h2>Mandatory</h2>
          <p>scroll the div to reveal a {{ theme.dark ? 'white' : 'black' }} box</p>
        </div>
        <div></div>
      </div>
      <div>
        <div>
          <h2>Proximity</h2>
          <p>pay attention to what happens when the box hovers over each colored zones</p>
        </div>
        <div></div>
      </div>
    </div>

    <div class="block">
      <h2>
        Putting the {{ theme.dark ? 'white' : 'black' }} box over the
        {{ theme.dark ? 'black' : 'white' }} area produces different results.
      </h2>
      <p>Where proximity does not decide to snap anywhere, mandatory forces it.</p>
      <i>
        Putting the box over the green areas, the box snaps to a predictable area, that is, the edge
        closest to the box.
      </i>
    </div>

    <div class="block left">
      <h2>In the sections you are scrolling through:</h2>
      <p>.section {</p>
      <p>scroll-snap-align: {position};</p>
      <p>}</p>
      <br />
      <p>position:</p>
      <i>(the area in the scrollable container to which the scroll snaps to)</i>
      <p>The options are the same as text alignment (e.g. start, center, end)</p>
    </div>

    <div class="block">
      <h2>In the demo below you will see the different snap alignments</h2>
      <i>(We have been using the center mostly in this lesson)</i>
    </div>

    <div class="align-demo" style="scroll-snap-align: start">Start</div>

    <div class="align-demo" style="scroll-snap-align: center">Center</div>

    <div class="align-demo" style="scroll-snap-align: end">The End...</div>

    <div class="block">
      <p>
        The last example would have been a good way to wrap things up. But, to complete it, we need
        to talk about one more optional property.
      </p>
    </div>

    <div class="block left">
      <h2>In the sections you are scrolling through:</h2>
      <p>.section {</p>
      <p>scroll-snap-stop: {type};</p>
      <p>}</p>
      <br />
      <p>type:</p>
      <p>The options are only always, or normal (the default)</p>
      <i>This is important for mobile devices where it is easy to skip stuff from overscrolling</i>
      <p>
        always usually forces to stop by at each snapping point regardless of scroll velocity, while
        normal just lets you skip parts when scrolling too hard.
      </p>
      <i>I say it usually forces to stop, but it really doesn't sometimes</i>
    </div>

    <div class="block">
      <p>
        This whole lesson is actually made with scroll snap stop set to always so as a demo, feel
        free to scroll hard here with different devices or in the inspector.
      </p>
      <i>You will get a feel of how it works and its inconsistencies especially on desktop</i>
    </div>
  </div>
</template>
<style scoped lang="scss">
.content {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: scroll;

  height: calc(100svh - 76px);

  display: grid;
  grid-auto-rows: 90vh;
  justify-content: center;
  align-items: center;
  row-gap: 90vh;

  scrollbar-width: none;
}

.block,
h1,
.inbetween-sample,
.type-difference div {
  scroll-snap-align: center;
  scroll-snap-stop: always;

  text-align: center;
}

.block,
.type-difference,
.align-demo {
  padding: v.$spacing-0400;
  margin-inline: v.$spacing-0400;

  border: 2px solid hsl(var(--secondary-brdr-color));

  box-shadow:
    hsla(var(--primary-color), 0.25) 0px 20px 50px -20px,
    hsla(var(--primary-color), 0.3) 0px 30px 60px -30px,
    hsla(var(--primary-color), 0.35) 0px -2px 6px 0px inset;
}

.block {
  animation: appear linear;
  animation-timeline: view();
  animation-range: cover 0 contain 40%;
}

h1 {
  line-height: 80vh;
  text-align: center;
  display: block;
  font-size: f.rem(24);

  border: none;
}

h2 {
  padding-bottom: v.$spacing-0200;
}

.inbetween-sample {
  display: grid;
  grid-auto-rows: 1fr;
  align-content: center;
  overflow: hidden;

  height: 100%;

  margin-inline: v.$spacing-0400;

  animation: inbetween ease-in-out;
  animation-timeline: view();
  animation-range: cover 0 end;
}

.inbetween-sample div {
  height: 56svh;
}

.inbetween-sample div:nth-child(2) {
  height: 56svh;
  color: hsl(var(--error-color));

  display: grid;
  align-items: center;
}

.inbetween-sample div:nth-child(2) p {
  color: hsl(var(--error-color));
}

.left {
  text-align: start;
}

.type-difference {
  display: grid;
  gap: v.$spacing-0400;
  row-gap: 50dvh;
}

.type-difference > div {
  height: 70dvh;

  scroll-behavior: smooth;
  overflow-y: scroll;

  display: grid;
  grid-template-rows: repeat(2, 70dvh);

  justify-content: center;
  justify-items: center;

  background-image: linear-gradient(
    to bottom,
    hsl(var(--secondary-brdr-color)) 35%,
    hsl(var(--primary-bg-color)) 35%,
    hsl(var(--primary-bg-color)) 75%,
    hsl(var(--secondary-brdr-color)) 75%,
    hsl(var(--secondary-brdr-color))
  );
}
.type-difference > div div h2,
.type-difference > div div p {
  color: hsl(var(--primary-color-rev));
}

.type-difference > div div {
  scroll-snap-align: start;
}

.type-difference > div div:nth-child(2) {
  height: 10dvh;
  width: 10dvw;
  background-color: hsl(var(--primary-color));
}

.type-difference div:nth-child(1) {
  scroll-snap-type: y mandatory;
}

.type-difference div:nth-child(2) {
  scroll-snap-type: y proximity;
}

.align-demo {
  scroll-snap-stop: always;

  text-align: center;

  display: grid;
  align-items: center;
  justify-content: center;
}

.stop-demo {
  padding: v.$spacing-0400;
  margin-inline: v.$spacing-0400;

  border: 2px solid hsl(var(--secondary-brdr-color));

  scroll-snap-align: center;

  text-align: center;

  display: grid;
  align-items: center;
  justify-content: center;
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

@keyframes inbetween {
  0% {
    padding-top: 56svh;
    overflow: visible;
  }
  50% {
    padding-top: 0;
    padding-bottom: 0;
  }

  99% {
    overflow: visible;
    padding-bottom: 56svh;
  }

  100% {
    padding-bottom: 200svh;

    overflow: hidden;
  }
}

@media (min-width: f.em(700)) {
  h1 {
    font-size: f.rem(48);
  }

  .type-difference {
    grid-template-columns: repeat(2, 1fr);
  }

  .content {
    row-gap: 0;
  }
}

@media (min-width: f.em(1000)) {
  h1 {
    font-size: f.rem(80);
  }
}
</style>
