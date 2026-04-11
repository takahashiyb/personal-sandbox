<script setup lang="ts"></script>
<template>
  <div class="content">
    <h1>Hello</h1>
    <div class="block">Let us explore the most basic properties for SCROLL SNAP</div>

    <div class="block">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam deleniti fuga modi est
      praesentium! Neque consequuntur fugiat porro, molestiae veritatis beatae cum et aut incidunt
      quam similique dolor nesciunt? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Voluptatem, cum. Aliquid eos molestiae ad tenetur amet at quia nesciunt? Tempore dicta amet
      reiciendis hic repudiandae odit facere ipsam doloribus voluptatem! Lorem, ipsum dolor sit amet
      consectetur adipisicing elit. Odio optio quibusdam natus laborum adipisci beatae perspiciatis
      eveniet, recusandae laudantium consectetur magni tempore! Expedita repudiandae, commodi id eum
      harum excepturi exercitationem.
    </div>

    <div class="block">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam deleniti fuga modi est
      praesentium! Neque consequuntur fugiat porro, molestiae veritatis beatae cum et aut incidunt
      quam similique dolor nesciunt?
    </div>

    <div class="block">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam deleniti fuga modi est
      praesentium! Neque consequuntur fugiat porro, molestiae veritatis beatae cum et aut incidunt
      quam similique dolor nesciunt? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Voluptatem, cum. Aliquid eos molestiae ad tenetur amet at quia nesciunt? Tempore dicta amet
      reiciendis hic repudiandae odit facere ipsam doloribus voluptatem! Lorem, ipsum dolor sit amet
      consectetur adipisicing elit. Odio optio quibusdam natus laborum adipisci beatae perspiciatis
      eveniet, recusandae laudantium consectetur magni tempore! Expedita repudiandae, commodi id eum
      harum excepturi exercitationem.
    </div>
    <div class="block">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam deleniti fuga modi est
      praesentium! Neque consequuntur fugiat porro, molestiae veritatis beatae cum et aut incidunt
      quam similique dolor nesciunt?
    </div>

    <div class="block">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam deleniti fuga modi est
      praesentium! Neque consequuntur fugiat porro, molestiae veritatis beatae cum et aut incidunt
      quam similique dolor nesciunt? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Voluptatem, cum. Aliquid eos molestiae ad tenetur amet at quia nesciunt? Tempore dicta amet
      reiciendis hic repudiandae odit facere ipsam doloribus voluptatem! Lorem, ipsum dolor sit amet
      consectetur adipisicing elit. Odio optio quibusdam natus laborum adipisci beatae perspiciatis
      eveniet, recusandae laudantium consectetur magni tempore! Expedita repudiandae, commodi id eum
      harum excepturi exercitationem.
    </div>
    <div class="block">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam deleniti fuga modi est
      praesentium! Neque consequuntur fugiat porro, molestiae veritatis beatae cum et aut incidunt
      quam similique dolor nesciunt?
    </div>

    <div class="block">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam deleniti fuga modi est
      praesentium! Neque consequuntur fugiat porro, molestiae veritatis beatae cum et aut incidunt
      quam similique dolor nesciunt? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Voluptatem, cum. Aliquid eos molestiae ad tenetur amet at quia nesciunt? Tempore dicta amet
      reiciendis hic repudiandae odit facere ipsam doloribus voluptatem! Lorem, ipsum dolor sit amet
      consectetur adipisicing elit. Odio optio quibusdam natus laborum adipisci beatae perspiciatis
      eveniet, recusandae laudantium consectetur magni tempore! Expedita repudiandae, commodi id eum
      harum excepturi exercitationem.
    </div>
    <div class="block">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam deleniti fuga modi est
      praesentium! Neque consequuntur fugiat porro, molestiae veritatis beatae cum et aut incidunt
      quam similique dolor nesciunt?
    </div>

    <div class="block">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam deleniti fuga modi est
      praesentium! Neque consequuntur fugiat porro, molestiae veritatis beatae cum et aut incidunt
      quam similique dolor nesciunt? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Voluptatem, cum. Aliquid eos molestiae ad tenetur amet at quia nesciunt? Tempore dicta amet
      reiciendis hic repudiandae odit facere ipsam doloribus voluptatem! Lorem, ipsum dolor sit amet
      consectetur adipisicing elit. Odio optio quibusdam natus laborum adipisci beatae perspiciatis
      eveniet, recusandae laudantium consectetur magni tempore! Expedita repudiandae, commodi id eum
      harum excepturi exercitationem.
    </div>
    <div class="block">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam deleniti fuga modi est
      praesentium! Neque consequuntur fugiat porro, molestiae veritatis beatae cum et aut incidunt
      quam similique dolor nesciunt?
    </div>
  </div>
</template>
<style scoped lang="scss">
.content {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: scroll;

  height: 90vh;

  display: grid;
  grid-auto-rows: 100vh;
  justify-content: center;

  scrollbar-width: none;
}

.content > * {
  scroll-snap-align: center;
  scroll-snap-stop: always;
}

h1 {
  line-height: 80vh;
  text-align: center;
  display: block;
  font-size: 60px;
}

.block {
  padding: f.rem(250);
  // border: ;
}
</style>
