<script setup lang="ts">
import ShowNotes from '@/components/ShowNotes.vue'
</script>
<template>
  <div class="content">
    <div class="title">
      <h1>FROSTED BLUR</h1>
      <i>a lesson from Josh W. Comeau</i>
      <a href="https://www.joshwcomeau.com/css/backdrop-filter/" target="_blank"
        >link to his lesson</a
      >
    </div>
    <div class="container">
      <div class="container__notes">
        <h2>To use this lesson:</h2>
      </div>
      <div class="container__glass">
        <div class="glass" style="border: 2px hsl(var(--primary-color)) dashed"></div>
      </div>
      <div class="container__ball">
        <div class="ball"></div>
        <span class="ball__message ball__message--1">
          Throughout the lesson, there will be a glass div where the dashed rectangle is.</span
        >
        <span class="ball__message ball__message--2">
          Take your time moving the ball in and out of it to see the glass effect.</span
        >
      </div>
    </div>

    <div class="container">
      <div class="container__notes">
        <h2>Basic blur effect:</h2>
        <ShowNotes name="see-more" class="hello">
          <template v-slot:message> Click to open/close Code </template>
          <template v-slot:show>
            <pre><code>
.glass {
  height: 100px;
  backdrop-filter: blur(10px);
}
            </code></pre>
          </template>
        </ShowNotes>
      </div>
      <div class="container__glass">
        <div class="glass blur"></div>
      </div>
      <div class="container__ball">
        <div class="ball"></div>
        <span class="ball__message ball__message--1">
          This is the most basic way to implement this.</span
        >
        <span class="ball__message ball__message--2 error">
          But only gives the blur when the ball enters the glass.</span
        >
      </div>
    </div>

    <div class="container">
      <div class="container__notes">
        <h2>Extend the blur to anticipate its nearing</h2>
        <ShowNotes name="see-more">
          <template v-slot:message> Click to open/close Code </template>
          <template v-slot:show>
            <pre><code>
// nest .backdrop in .glass 

.backdrop {
  height: 300%; 
  backdrop-filter: blur(16px); 
}
            </code></pre>
          </template>
        </ShowNotes>
      </div>
      <div class="container__glass">
        <div class="glass" style="background-color: hsla(var(--neutral), 10%)">
          <div class="backdrop blur"></div>
        </div>
      </div>
      <div class="container__ball" style="padding-top: 120px">
        <div class="ball"></div>
        <i class="ball__message ball__message--2">
          NOTE: The green area is .glass. Try putting the ball just outside of it</i
        >
      </div>
    </div>

    <div class="container">
      <div class="container__notes">
        <h2>Hide the excess of the backdrop</h2>
        <ShowNotes name="see-more">
          <template v-slot:message> Click to open/close Code </template>
          <template v-slot:show>
            <pre><code>
.glass {
  overflow: hidden;
}
            </code></pre>
          </template>
        </ShowNotes>
      </div>

      <div class="container__glass">
        <div class="glass hidden">
          <div class="backdrop blur"></div>
        </div>
      </div>
      <div class="container__ball">
        <div class="ball"></div>
        <i class="ball__message ball__message--2"
          >Now at the original size of the container, the blur reacts despite the shape being
          outside the container</i
        >
      </div>
    </div>

    <div class="container">
      <div class="container__notes">
        <h2>For compatibility</h2>
        <ShowNotes name="see-more">
          <template v-slot:message> Click to open/close Code </template>
          <template v-slot:show>
            <pre><code>
.backdrop {
    mask-image: linear-gradient(
    to bottom,
    transparent 0% 20%,
    black 20% 80%,
    transparent 80% 100%
  );                
}
            </code></pre>
          </template>
        </ShowNotes>
      </div>

      <div class="container__glass">
        <div class="glass">
          <div class="backdrop blur mask"></div>
        </div>
      </div>
      <div class="container__ball">
        <div class="ball"></div>
        <span class="ball__message ball__message--1">
          But, the overflow: hidden solution is not compatible with some browsers so we use a mask.
        </span>
      </div>
    </div>

    <div class="container--text">
      <div class="container__notes--text">
        <h2 class="error">But now the text behind the backdrop is not interactive.</h2>
        <br />
        <ShowNotes name="see-more">
          <template v-slot:message> Click to open/close Explanation </template>
          <template v-slot:show>
            <div class="container__styling">
              <span>
                Since the frosted glass is on top of the text, we ended up covering the text under
                it, that much is obvious. But, we also put a backdrop div beyond the glass as well,
                which leaves us with an invisible div covering the text.
              </span>
            </div>
          </template>
        </ShowNotes>
      </div>
      <div class="container__ball--text">
        <div class="highlightable">
          <p>TRY HIGHLIGHTING</p>
          <p>TRY HIGHLIGHTING</p>
          <p>TRY HIGHLIGHTING</p>
          <p>TRY HIGHLIGHTING</p>
          <p>TRY HIGHLIGHTING</p>
          <p>TRY HIGHLIGHTING</p>
        </div>
        <div>
          <p>TRY HIGHLIGHTING</p>
          <p>TRY HIGHLIGHTING</p>
          <p>TRY HIGHLIGHTING</p>
          <p>TRY HIGHLIGHTING</p>
          <p>TRY HIGHLIGHTING</p>
          <p>TRY HIGHLIGHTING</p>
          <p>TRY HIGHLIGHTING</p>
          <p>TRY HIGHLIGHTING</p>
          <p>TRY HIGHLIGHTING</p>
          <p>TRY HIGHLIGHTING</p>
        </div>
      </div>

      <div class="container__glass--text">
        <div class="glass">
          <div class="backdrop blur mask"></div>
        </div>
      </div>
    </div>

    <div class="container--text">
      <div class="container__notes">
        <ShowNotes name="see-more">
          <template v-slot:message> Click to open/close Code: </template>
          <template v-slot:show>
            <pre><code>
.backdrop {
  pointer-events: none;
}
              </code></pre>
          </template>
        </ShowNotes>
      </div>
      <div class="container__ball--text">
        <div class="highlightable">
          <p>NOW BACKDROP DOES NOT BLOCK</p>
          <p>NOW BACKDROP DOES NOT BLOCK</p>
          <p>NOW BACKDROP DOES NOT BLOCK</p>
          <p>NOW BACKDROP DOES NOT BLOCK</p>
          <p>NOW BACKDROP DOES NOT BLOCK</p>
          <p>NOW BACKDROP DOES NOT BLOCK</p>
        </div>
        <div>
          <p>NOW BACKDROP DOES NOT BLOCK</p>
          <p>NOW BACKDROP DOES NOT BLOCK</p>
          <p>NOW BACKDROP DOES NOT BLOCK</p>
          <p>NOW BACKDROP DOES NOT BLOCK</p>
          <p>NOW BACKDROP DOES NOT BLOCK</p>
          <p>NOW BACKDROP DOES NOT BLOCK</p>
          <p>NOW BACKDROP DOES NOT BLOCK</p>
          <p>NOW BACKDROP DOES NOT BLOCK</p>
          <p>NOW BACKDROP DOES NOT BLOCK</p>
          <p>NOW BACKDROP DOES NOT BLOCK</p>
        </div>
      </div>

      <div class="container__glass--text">
        <div class="glass">
          <div class="backdrop blur mask pointable"></div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="container__notes">
        <h2>What if the glass has text...</h2>
      </div>

      <div class="container__glass">
        <div class="glass with-text">
          <div class="backdrop blur mask"></div>
          <p>Are the colors beneath it too distracting?</p>
        </div>
      </div>
      <div class="container__ball">
        <div class="ball white"></div>
        <span class="ball__message ball__message--2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores earum velit vitae, sint
          eius exercitationem blanditiis totam veritatis, doloremque in quidem.
        </span>
      </div>
    </div>

    <div class="container">
      <div class="container__notes">
        <h2>Make the glass look more opaque.</h2>
        <ShowNotes name="see-more">
          <template v-slot:message> Click to open/close Code: </template>
          <template v-slot:show>
            <pre><code>
.glass {
  background-color: hsla(var(--primary-bg-color), 50%);   // Higher Opacity
}
            </code></pre>
          </template>
        </ShowNotes>
      </div>

      <div class="container__glass container__glass--frosty">
        <div class="glass with-text" style="grid-row: 1; grid-column: 1">
          <div class="backdrop blur mask"></div>
          <p>Original Glass</p>
        </div>
        <div class="glass frosty with-text" style="grid-row: 1; grid-column: 2">
          <div class="backdrop blur mask"></div>
          <p>More Opaque Glass</p>
        </div>
      </div>
      <div class="container__ball">
        <div class="ball"></div>
        <span class="ball__message ball__message--1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores earum velit vitae, sint
          eius exercitationem blanditiis totam veritatis, doloremque in quidem.</span
        >
        <span class="ball__message ball__message--2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores earum velit vitae, sint
          eius exercitationem blanditiis totam veritatis, doloremque in quidem.</span
        >
      </div>
    </div>

    <div class="container">
      <div class="container__notes">
        <h2>You can give it a more reflective edge.</h2>
        <ShowNotes name="see-more">
          <template v-slot:message> Click to open/close Code: </template>
          <template v-slot:show>
            <pre><code>
.edge {
  --thickness: 6px;
  height: 100%;
  backdrop-filter: blur(12px) brightness(120%);
  mask-image: linear-gradient(
    to bottom, black 0, 
    black var(--thickness), 
    transparent var(--thickness) 
  );
}
// Note that the code display is only for bottom edge only.
            </code></pre>
          </template>
        </ShowNotes>
      </div>

      <div class="container__glass" style="transform: translateY(-150%)">
        <div class="edge above"></div>
        <div class="glass">
          <div class="backdrop blur mask"></div>
        </div>
        <div class="edge bottom"></div>
      </div>
      <div class="container__ball">
        <div class="ball"></div>
      </div>
    </div>

    <div class="container">
      <div class="container__notes">
        <h2>
          But with the properties above, we cannot create rounded edges. So, we need to use a
          different method.
        </h2>
        <ShowNotes name="see-more">
          <template v-slot:message> Click to open/close explanation: </template>
          <template v-slot:show>
            <div class="container__styling">
              <span
                >The likely explanation here is that naturally elements are squares and rectangles
                and the border-radius is solely for style, it still occupies the space created by
                the rounded corner.
              </span>
            </div>
          </template>
        </ShowNotes>
      </div>

      <div class="container__glass">
        <div class="glass short">
          <div class="backdrop blur mask"></div>
        </div>
      </div>
      <div class="container__ball" style="width: min-content; justify-self: center">
        <div class="ball ball__message--1"></div>
        <div class="ball"></div>
        <div class="ball ball__message--2"></div>
      </div>
    </div>

    <div class="container">
      <div class="container__notes">
        <h2>So, we can use svg with mask.</h2>
        <ShowNotes name="see-more">
          <template v-slot:message>Click to open/close Code:</template>
          <template v-slot:show>
            <pre><code>
&lt;div class="svg-backdrop"&gt;&lt;/div&gt;
&lt;svg class="svg-mask" width="100%" height="100%" preserveAspectRatio="none"&gt;
  &lt;mask id="frostyGlassMask"&gt;
    &lt;rect class="header-rect" width="100%" height="100%" fill="white" rx="8" ry="8" /&gt;
  &lt;/mask&gt;
&lt;/svg&gt;
&lt;style&gt;
  .svg-mask {
    width: 100px;
    position: absolute;
    inset: 0;
  }
  .svg-backdrop {
    position: absolute;
    inset: 0;
    height: 200%;
    width: 100px;
    justify-self: center;
    backdrop-filter: blur(16px);
    mask-image: url(#frostyGlassMask);
  }
&lt;/style&gt;
            </code></pre>
          </template>
        </ShowNotes>
      </div>

      <div class="container__glass">
        <div class="glass short">
          <div class="svg-backdrop"></div>
          <svg class="svg-mask" width="100%" height="100%" preserveAspectRatio="none">
            <mask id="frostyGlassMask">
              <rect class="header-rect" width="100%" height="100%" fill="white" rx="8" ry="8" />
            </mask>
          </svg>
        </div>
      </div>
      <div class="container__ball" style="width: min-content; justify-self: center">
        <div class="ball ball__message--1"></div>
        <div class="ball"></div>
        <div class="ball ball__message--2"></div>
      </div>
    </div>

    <div class="container">
      <div class="container__notes">
        <h2>
          Still reseaching... I am currently looking for a way to properly implement the reflective
          edges with rounded corners
        </h2>
      </div>
    </div>

    <div class="container"></div>
  </div>
</template>
<style scoped lang="scss">
.content {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  scrollbar-width: none;
  height: 100svh;
}

.title {
  text-align: center;
  display: grid;
  align-content: center;
}

.error {
  color: hsl(var(--error-color));
}

h2.error {
  display: inline-block;
  background-color: hsl(var(--primary-bg-color));
}

.title,
.container,
.container--text {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  height: 100svh;
}

.container__notes--text :deep(.checkbox__message),
.container__notes :deep(.checkbox__message) {
  background-color: transparent;
  color: hsl(var(--neutral));
  border: none;
}

.container__notes--text :deep(.checkbox__shown),
.container__notes :deep(.checkbox__shown) {
  top: anchor(bottom);
  left: anchor(left);
}

.ball.white {
  background-color: hsl(var(--primary-color));
}

.container {
  height: 100svh;
  display: grid;
  grid-template-rows: 1fr min-content 1fr;

  margin-bottom: 100svh;
}

.checkbox-message {
  color: hsl(var(--neutral));
}

.container__ball {
  width: 100%;
  height: fit-content;
  padding: v.$spacing-0400;

  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
}

.ball {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: hsl(var(--error-color));
}

.ball__message {
  padding-inline: v.$spacing-0200;
}

.ball__message--2 {
  display: none;
}

.container__glass {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);

  &--frosty {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

.glass {
  height: 100px;
  width: 100%;
}

.glass.with-text {
  position: relative;
}

.glass.with-text p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.backdrop {
  transform: translateY(-33%);
}

.container__notes {
  position: sticky;
  top: var(--header-height);

  z-index: 99;
}

.container__styling {
  max-width: 25svw;
  background-color: hsl(var(--primary-bg-color));

  padding: v.$spacing-0200;

  border: 1px solid hsl(var(--primary-brdr-color));
}

code {
  background-color: hsl(var(--primary-bg-color));

  padding: v.$spacing-0200;

  border: 1px solid hsl(var(--primary-brdr-color));

  display: block;
  padding: 2em;

  font-size: 12px;
}

.container--text {
  height: 100svh;
  scroll-snap-align: top;

  margin-bottom: 100svh;

  position: relative;
}

.container__glass--text {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);

  height: 100px;
  width: 100%;
}

.container__notes--text {
  position: sticky;
  top: var(--header-height);

  z-index: 2;
}

.container__ball--text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);

  text-align: center;
}

.highlightable {
  display: none;
}

@media (min-width: f.em(700)) {
  h1 {
    font-size: f.rem(48);
  }

  .highlightable {
    display: block;
  }

  .container__ball--text {
    transform: translate(-50%, -50%);
  }

  .container__ball {
    grid-template-columns: 1fr min-content 1fr;
    align-items: center;
  }

  .ball {
    grid-column: 2;
  }

  .ball__message {
    &--1 {
      grid-column: 1;
      grid-row: 1;
      text-align: end;
    }

    &--2 {
      grid-column: 3;
      grid-row: 1;
    }
  }

  .ball__message--2 {
    display: block;
  }
}

@media (min-width: f.em(1000)) {
  h1 {
    font-size: f.rem(80);
  }
}

// lesson properties:

.blur {
  backdrop-filter: blur(8px);
}

.backdrop {
  height: 300%;
}

.hidden {
  overflow: hidden;
}

.mask {
  mask-image: linear-gradient(
    to bottom,
    transparent 0 100px,
    black 100px 200px,
    transparent 200px 300px
  );
}

.pointable {
  pointer-events: none;
}

.frosty {
  background-color: hsla(var(--primary-bg-color), 30%);
}

.edge {
  height: 100%;

  backdrop-filter: blur(8px) brightness(120%);
}

.edge.above {
  --thickness: 6px;

  transform: translateY(1px);

  mask-image: linear-gradient(
    to top,
    black 0,
    black var(--thickness),
    transparent var(--thickness)
  );
}

.edge.bottom {
  --thickness: 6px;

  mask-image: linear-gradient(
    to bottom,
    black 0,
    black var(--thickness),
    transparent var(--thickness)
  );
}

.short {
  width: 100px;
  justify-self: center;
  position: relative;
}

.svg-mask {
  position: absolute;
  inset: 0;
}

.svg-backdrop {
  position: absolute;
  height: 400%;
  width: 200px;
  backdrop-filter: blur(16px);
  mask-image: url(#frostyGlassMask);
}

.svg-shape {
  width: 200px;
  position: absolute;
  inset: 0;
}
</style>
