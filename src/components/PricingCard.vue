<template>
  <div
    class="max-w-sm flex flex-col flex-grow border-2 px-6 py-8 rounded-xl"
    :class="middle == true ? 'border-4 border-light-red' : 'border-white/10'"
  >
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-medium">
        {{ title }}
      </h2>
      <p v-if="middle" class="text-xs bg-red px-2 py-1 rounded-full text-white">Most popular</p>
    </div>
    <p class="mt-4 text-sm text-white/50">{{ desc }}</p>
    <div class="flex items-end gap-1 mt-6">
      <h1 class="text-4xl font-extrabold font-orbitron">${{ cost }}</h1>
      <p class="text-white/75">{{ title != 'New Moon' ? '/ month' : ' one time payment' }}</p>
    </div>
    <button
      class="py-2 my-6 rounded-md text-center"
      :class="middle ? 'bg-light-red' : 'bg-white/5'"
    >
      Get started
    </button>
    <div class="flex flex-col flex-grow mt-auto">
      <ul class="flex flex-col gap-3">
        <li
          v-for="(bullet, index) in bullets"
          :key="index"
          class="flex gap-2 text-white/80 text-md"
        >
          <img src="/icons8-check.svg" alt="" class="w-5 invert" /> {{ bullet }}
        </li>
      </ul>
    </div>

    <p v-if="title == 'New Moon'" class="text-white/33 mt-4">
      <span class="italic">New Moon</span> is perfect for high school athletes or summer solo
      training
    </p>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'desc', 'cost', 'bullets', 'middle'])
</script>
