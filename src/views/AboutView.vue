<script setup lang="ts">
import C2A from '@/components/C2A.vue'
</script>

<template>
  <section class="px-6 pb-16 space-y-12 text-white/75">
    <div class="text-center">
      <h1 class="text-red font-bold uppercase text-8xl">About Us</h1>
      <p class="mt-6 max-w-3xl mx-auto text-xl text-white/75">
        Every runner has a breakthrough inside them. <br /><br />A moment when it all comes
        together—the work, the belief, the heart—and you do something you once thought was
        <span class="italic">impossible</span>. A race that redefines your limits. A goal that
        changes how you see yourself. <br /><br />We call that your
        <strong class="text-light-red">eclipse</strong>. <br />And helping you get there is why we
        exist.
      </p>
    </div>

    <div class="max-w-4xl mx-auto space-y-32 mt-32 mb-12">
      <div>
        <h2 class="text-6xl font-bold uppercase text-light-red">What We Believe</h2>
        <ul class="mt-6 space-y-12 text-xl text-white/50">
          <li>
            <span class="font-orbitron font-bold text-3xl text-white/75"
              >The Right Support Changes Everything</span
            ><br />
            We believe that every runner deserves real coaching and attention—no matter the pace,
            background, or experience. You don't have to be an elite to be taken seriously. With the
            right support, anyone can grow into a stronger, more confident athlete.
          </li>
          <li>
            <span class="font-orbitron font-bold text-3xl text-white/75"
              >Breakthroughs Aren’t Random</span
            ><br />Great results don't happen by accident. They're the product of intentional,
            well-structured training paired with consistent guidance and feedback. We don't leave
            anything to chance—we plan, adapt, and grow with you.
          </li>
          <li>
            <span class="font-orbitron font-bold text-3xl text-white/75">Running is Personal</span
            ><br />You're more than just your workouts and race times. That's why we focus on
            <span class="italic">you</span>—your mindset, your goals, your lifestyle. We're here to
            support the whole person behind the runner.
          </li>
        </ul>
      </div>

      <div class="flex flex-col">
        <h2 class="text-6xl font-bold uppercase text-light-red text-left">Who We Are</h2>
        <p class="mt-6 text-xl text-white/50 text-left">
          We’re three former NCAA DII runners who’ve raced at nationals, led teams to conference
          titles, and trained through setbacks and comebacks. Our coaching is shaped by years of
          experience—<span class="font-bold">not just theory</span>—and a shared mission to help
          athletes rise.
        </p>
        <RouterLink
          to="/coaches"
          class="inline-block mt-4 text-white/75 underline hover:text-light-red transition text-right"
          >meet the coaches →</RouterLink
        >
      </div>
    </div>

    <C2A class="my-24" />
  </section>
</template>
