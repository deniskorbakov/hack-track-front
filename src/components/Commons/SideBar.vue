<script setup lang="ts">
import {
  CubeIcon,
  PresentationChartLineIcon,
  CalendarDaysIcon,
  RectangleStackIcon,
  UserCircleIcon
} from "@heroicons/vue/24/solid";
</script>

<template>
  <aside class="inline-block">
    <ul class="links">
      <li class="links-item links-item-active">
        <router-link to="/">
          <UserCircleIcon/>
        </router-link>
      </li>
      <li class="links-item">
        <router-link to="/">
          <CubeIcon/>
        </router-link>
      </li>
      <li class="links-item">
        <router-link to="/">
          <PresentationChartLineIcon/>
        </router-link>
      </li>
      <li class="links-item">
        <router-link to="/">
          <CalendarDaysIcon/>
        </router-link>
      </li>
      <li class="links-item">
        <router-link to="/">
          <RectangleStackIcon/>
        </router-link>
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
  @apply text-violet-600
}
</style>