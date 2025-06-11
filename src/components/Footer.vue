<template>
  <hr class="text-white/25 mt-12" />
  <div class="flex items-center justify-between">
    <div class="flex gap-2 my-6">
      <img src="/primary-icon.png" alt="" class="w-15" />
      <img src="/logo.png" alt="" class="w-auto h-15" />
    </div>
    <div class="flex gap-6">
      <RouterLink
        class="font-medium tracking-wide hover:text-red duration-200 ease-in-out"
        to="/about"
        >about</RouterLink
      >
      <RouterLink
        class="font-medium tracking-wide hover:text-red duration-200 ease-in-out"
        to="/training"
        >training</RouterLink
      >
      <RouterLink
        class="font-medium tracking-wide hover:text-red duration-200 ease-in-out"
        to="/coaches"
        >coaches</RouterLink
      >
      <RouterLink
        class="font-medium tracking-wide hover:text-red duration-200 ease-in-out"
        to="/contact"
        >contact</RouterLink
      >
    </div>
    <div class="flex gap-4">
      <div class="bg-red font-bold text-black p-6 rounded-full">AR</div>
      <div class="bg-red font-bold text-black p-6 rounded-full">AM</div>
      <div class="bg-red font-bold text-black p-6 rounded-full">AG</div>
    </div>
  </div>
</template>
