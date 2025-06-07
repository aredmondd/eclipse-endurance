<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex justify-between items-center mt-4">
    <RouterLink to="/" class="font-bold font-orbitron tracking-wide text-5xl">ECLIPSE</RouterLink>
    <div class="flex gap-4">
      <RouterLink to="/about">about</RouterLink>
      <RouterLink to="/coaching">coaching</RouterLink>
      <RouterLink to="/contact">contact</RouterLink>
    </div>
  </div>
</template>
