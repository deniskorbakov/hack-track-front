<script setup lang="ts">
import Header from "../Commons/Header.vue";
import SideBar from "../Commons/SideBar.vue";
</script>
<template>
  <Header/>
  <div class="content">
    <SideBar/>
    <main class="page">
      <slot/>
    </main>
  </div>
</template>
<style lang="postcss">
.content {
  @apply flex gap-8 h-dvh
}

.page {
  @apply mt-10 bg-gray-800 rounded-2xl
  px-10 py-14 w-full h-auto
}
</style>