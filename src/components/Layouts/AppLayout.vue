<script setup lang="ts">
import Header from "../Commons/Header.vue";
import SideBar from "../Commons/SideBar.vue";
</script>
<template>
  <Header/>
  <SideBar/>
  <main>
    <slot/>
  </main>
</template>
