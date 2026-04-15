<script setup lang="ts">
import ShowNotes from '@/components/ShowNotes.vue'
import { ref } from 'vue'

const page1 = ref<boolean>(true)
</script>
<template>
  <div class="content">
    <h1>FROSTED BLUR</h1>
    <div class="container">
      <ShowNotes name="see-more" v-model="page1">
        <template v-slot:message>{{ page1 ? 'hide' : 'show' }} CSS:</template>
        <template v-slot:show>
          <span class="properties">
            .glass {
            <span class="properties">height: 100px;</span>
            <span class="properties">backdrop-filter: blur(10px)</span>
            }
          </span></template
        >
      </ShowNotes>
      <div class="glass blur"></div>
      <div class="ball"></div>
    </div>

    <div class="container">
      <div class="container__glass">
        <div class="container__text">
          <span class="properties">
            .glass {
            <span class="properties"> height: 100px; </span>
            }
          </span>
          <span class="properties">
            .backdrop {
            <span class="properties"> height: 200%; </span>
            <span class="properties"> backdrop-filter: blur(16px); </span>
            }
          </span>
          <i class="properties">
            NOTE: The green area is where the .glass should be and the actual container to make
          </i>
        </div>
        <div class="glass" style="background-color: hsla(var(--neutral), 10%)">
          <div class="backdrop blur"></div>
        </div>
      </div>
      <div class="container__ball">
        <div class="ball"></div>
      </div>
    </div>

    <div class="container"></div>
  </div>
</template>
<style lang="scss">
header {
  position: fixed;
  top: 0;

  max-height: var(--header-height);
}
</style>
<style scoped lang="scss">
.content {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  scrollbar-width: none;
  height: 100svh;
}

h1 {
  line-height: 80vh;
  text-align: center;
  display: block;
  font-size: f.rem(24);
}

h1,
.container {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  height: 100svh;
}

.container {
  height: 100svh;
}

.ball {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: hsl(var(--error-color));

  align-self: end;
}

.glass {
  position: sticky;
  top: 50%;

  width: 100%;
}

.properties {
  display: block;
  padding-left: 2em;

  font-size: 12px;
}

@media (min-width: f.em(700)) {
  h1 {
    font-size: f.rem(48);
  }
}

@media (min-width: f.em(1000)) {
  h1 {
    font-size: f.rem(80);
  }
}

// lesson properties:

.blur {
  backdrop-filter: blur(16px);
}

.glass {
  height: 100px;
}

.backdrop {
  height: 200%;
}

.hidden {
  overflow: hidden;
}

.mask {
  mask-image: linear-gradient(to bottom, transparent 0% 20%, black 20% 80%, transparent 80% 100%);
}

.pointable {
  pointer-events: none;
}

.frosty {
  background-color: hsla(var(--primary-bg-color), 50%);
}

.edge {
  --thickness: 6px;

  height: 100%;
  backdrop-filter: blur(8px) brightness(120%);

  mask-image: linear-gradient(
    to bottom,
    black 0,
    black var(--thickness),
    transparent var(--thickness)
  );
}
</style>
