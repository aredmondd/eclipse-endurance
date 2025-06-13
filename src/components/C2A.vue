<template>
  <div class="text-center">
    <p class="text-3xl sm:text-5xl uppercase font-bold text-white">
      Start working towards <br />your eclipse today.
    </p>
    <div class="flex items-center justify-center mt-12 gap-4">
      <RouterLink
        to="/training"
        class="bg-red text-white px-6 py-3 rounded-md hover:bg-light-red transition text-xs sm:text-md"
        >Sign up Today</RouterLink
      >
      <RouterLink
        to="/contact"
        class="border border-red text-red px-6 py-3 rounded-md hover:bg-light-red hover:text-white transition text-xs sm:text-md"
        >Get in Touch</RouterLink
      >
    </div>
  </div>
</template>
