<template>
  <div class="flex flex-col sm:mx-24 mb-24">
    <h1 class="text-red font-bold text-center text-6xl sm:text-8xl">MEET THE COACHES</h1>
    <p class="text-white/50 text-center mt-4 mb-6 sm:mb-12 text-sm md:text-md">
      All three of our coaches competed for 4+ years at the NCAA DII level in track and cross
      country. <br />
      Together, we’ve won conference titles, qualified for nationals in track, and raced at XC
      Nationals.
    </p>

    <div class="flex flex-col gap-12">
      <div v-for="(coach, key) in coaches" :key="key" class="flex flex-col sm:flex-row mt-18">
        <img
          :src="coach.src"
          :alt="coach.name"
          class="w-90 h-max transition-opacity duration-500 opacity-0"
          loading="lazy"
          @load="$event.target.classList.add('opacity-100')"
        />
        <div class="flex flex-col mt-6 sm:mt-0 sm:ml-12">
          <h2 class="text-5xl font-extrabold uppercase text-light-red tracking-wide">
            {{ coach.name }}
          </h2>
          <div
            v-html="coach.renderedBio"
            class="prose prose-invert prose-sm mt-4 text-white/75 whitespace-pre-line"
          ></div>

          <p class="mt-4 italic">PERSONAL BESTS:</p>
          <div v-for="(record, index) in coach.pr" :key="index">
            <p class="text-white/75">{{ record.event }}: {{ record.time }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import coachesData from '/src/data/coaches.json'
import { marked } from 'marked'

const coaches = Object.values(coachesData).map((coach) => ({
  ...coach,
  renderedBio: marked.parse(coach.updatedBio),
}))
</script>
