<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)
</script>

<template>
  <nav class="relative mt-4 mb-24 z-50">
    <!-- Top bar -->
    <div class="flex justify-between items-center px-4 sm:px-6 lg:px-8">
      <RouterLink to="/">
        <img src="/primary-icon.png" alt="Logo" class="w-12 sm:w-16" />
      </RouterLink>

      <!-- Hamburger button -->
      <button
        @click="isOpen = !isOpen"
        class="sm:hidden text-white focus:outline-none z-50"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Desktop nav -->
      <div class="hidden sm:flex gap-6">
        <RouterLink
          class="font-medium tracking-wide hover:text-red duration-200 ease-in-out"
          activeClass="text-light-red"
          to="/about"
          >about</RouterLink
        >
        <RouterLink
          class="font-medium tracking-wide hover:text-red duration-200 ease-in-out"
          activeClass="text-light-red"
          to="/training"
          >training</RouterLink
        >
        <RouterLink
          class="font-medium tracking-wide hover:text-red duration-200 ease-in-out"
          activeClass="text-light-red"
          to="/coaches"
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

    <!-- Full-screen mobile menu overlay -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center gap-10 text-3xl text-white font-medium tracking-wide sm:hidden"
      >
        <RouterLink to="/about" @click="isOpen = false" class="hover:text-red transition"
          >about</RouterLink
        >
        <RouterLink to="/training" @click="isOpen = false" class="hover:text-red transition"
          >training</RouterLink
        >
        <RouterLink to="/coaches" @click="isOpen = false" class="hover:text-red transition"
          >coaches</RouterLink
        >
        <RouterLink to="/contact" @click="isOpen = false" class="hover:text-red transition"
          >contact</RouterLink
        >
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
