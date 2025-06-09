<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex justify-between items-center mt-4">
    <RouterLink to="/"> <img src="/logo.png" alt="" class="w-54" /> </RouterLink>
    <div class="flex gap-4">
      <RouterLink
        class="font-medium tracking-wide hover:text-red duration-200 ease-in-out"
        activeClass="text-light-red"
        to="/about"
        >about</RouterLink
      >
      <RouterLink
        class="font-medium tracking-wide hover:text-red duration-200 ease-in-out"
        activeClass="text-light-red"
        to="/coaching"
        >coaches</RouterLink
      >
      <RouterLink
        class="font-medium tracking-wide hover:text-red duration-200 ease-in-out"
        activeClass="text-light-red"
        to="/contact"
        >contact</RouterLink
      >
    </div>
  </div>
</template>
