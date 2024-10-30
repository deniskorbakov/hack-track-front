<script setup lang="ts">
import {ClockIcon, MagnifyingGlassIcon, BellAlertIcon} from '@heroicons/vue/24/solid'
</script>

<template>
  <header>
    <ClockIcon class="logo"/>
    <h1 class="header-title">Leads</h1>
    <button class="button-create">Add new lead</button>
    <MagnifyingGlassIcon class="size-6"/>
    <BellAlertIcon class="size-6"/>
  </header>
</template>

<style scoped lang="postcss">
header {
  @apply flex mt-10 items-center flex-nowrap gap-10
}

.logo {
  @apply size-16 text-violet-600 flex-none w-14
}

.header-title {
  @apply text-2xl font-bold flex-1 w-32
}

.button-create {
  @apply bg-violet-600 px-8 py-2 rounded-2xl
}
</style>