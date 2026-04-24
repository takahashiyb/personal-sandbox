<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>
  <div class="content">
    <h1>Lessons:</h1>
    <ul>
      <li
        v-for="path in route.matched[0]?.children.filter((item) => item.name !== 'dashboard')"
        :key="path.name"
      >
        <RouterLink :to="{ name: path.name }">{{
          path.name?.toString().toLocaleUpperCase().replaceAll('-', ' ')
        }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.content {
  padding-top: 100px;
}
</style>
