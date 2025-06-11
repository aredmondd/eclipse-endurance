<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <RouterView class="flex flex-col flex-1" />
  <Footer />
</template>
