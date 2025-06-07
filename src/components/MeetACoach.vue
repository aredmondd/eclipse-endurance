<template>
  <div class="flex">
    <img :src="src" alt="" class="w-70" />
    <div class="flex flex-col ml-12">
      <h1 class="text-red font-extrabold tracking-wide text-4xl uppercase">{{ name }}</h1>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['src', 'name'])
</script>
