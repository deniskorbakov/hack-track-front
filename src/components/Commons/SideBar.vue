<script setup lang="ts">


import {useRouter} from "vue-router";

const router = useRouter()
</script>

<template>
  <aside class="inline-block">
    <ul class="links">
      <li class="links-item" v-for="(item, key) in router.getRoutes()" :key="key">
        <RouterLink :to="item.path">
          <component :is="item.meta.icon"/>
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="postcss">
.links {
  @apply mt-16 pl-1
}

.links-item {
  @apply size-8 mb-8
}

.links-item-active {
  @apply text-primary
}
</style>