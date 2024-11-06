<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()

function isActiveLink (path: string): boolean {
  return route.path === path
}
</script>

<template>
  <aside class="bg-gray max-w-20 p-5">
    <ul class="links">
      <li class="links__item" :class="isActiveLink(item.path) ? 'links__item-active' : ''" v-for="(item, key) in router.getRoutes()" :key="key">
        <RouterLink :to="item.path">
          <component :is="item.meta.icon"/>
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="postcss">
  .links {
    @apply space-y-4
  }
  .links__item {
    @apply size-10 text-gray-300 p-2 hover:text-white
  }

  .links__item-active {
    @apply text-white bg-gray-200 shadow-inner drop-shadow-xl rounded-lg shadow-white/70 hover:shadow-white
  }
</style>