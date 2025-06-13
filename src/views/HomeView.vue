<template>
  <div
    class="invisible sm:visible absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    aria-hidden="true"
  >
    <div
      class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-light-red to-black/50 opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
      style="
        clip-path: polygon(
          74.1% 44.1%,
          100% 61.6%,
          97.5% 26.9%,
          85.5% 0.1%,
          80.7% 2%,
          72.5% 32.5%,
          60.2% 62.4%,
          52.4% 68.1%,
          47.5% 58.3%,
          45.2% 34.5%,
          27.5% 76.7%,
          0.1% 64.9%,
          17.9% 100%,
          27.6% 76.8%,
          76.1% 97.7%,
          74.1% 44.1%
        );
      "
    ></div>
  </div>

  <div class="mt-24 mb-64 sm:mb-72">
    <h1 class="text-red font-bold text-center text-4xl sm:text-6xl sm:max-w-4xl mx-auto mt-8">
      Coaching to unlock your next breakthrough.
    </h1>
    <p class="max-w-2xl text-center mx-auto mt-3 sm:mt-6 text-white/50 text-sm sm:text-lg">
      Coaching for runners who want more from training, goals, and growth with personalized plans,
      real support, and a long-term mindset.
    </p>
    <div class="flex items-center justify-center mt-8 gap-6">
      <RouterLink class="bg-light-red hover:bg-red transition px-3 py-2 rounded-md" to="/training">
        Get started
      </RouterLink>
      <RouterLink to="/about">Learn more →</RouterLink>
    </div>
  </div>

  <div class="flex flex-col mb-64 sm:mb-72">
    <h1 class="text-white/75 font-bold text-center text-5xl sm:text-6xl">What We Do</h1>
    <p class="max-w-3xl mx-auto mt-4 text-white/50 text-center text-sm sm:text-md">
      We offer personalized coaching for runners of all levels—from first 5Ks to national
      qualifiers. Whether you’re just starting out or chasing your next big goal, we’ll
      <span class="italic"> meet you where you are </span> and help you get where you want to be.
    </p>
    <div class="flex flex-col gap-4 max-w-3xl mx-auto mt-6 sm:mt-12 text-md sm:text-xl">
      <p class="flex gap-2 text-white/80">
        <img src="/icons8-check.svg" alt="" class="w-5 invert" />Tailored training plans designed
        for your unique goals & lifestyle
      </p>
      <p class="flex gap-2 text-white/80">
        <img src="/icons8-check.svg" alt="" class="w-5 invert" />Ongoing coaching support to keep
        you motivate and on track
      </p>
      <p class="flex gap-2 text-white/80">
        <img src="/icons8-check.svg" alt="" class="w-5 invert" />Strength, mobility, and race-day
        resources to optimize performance
      </p>
      <p class="flex gap-2 text-white/80">
        <img src="/icons8-check.svg" alt="" class="w-5 invert" />Group runs & community support to
        connect with fellow runners
      </p>
    </div>

    <RouterLink to="/training" class="text-center text-light-red underline mt-12"
      >Explore Training Plans →</RouterLink
    >
  </div>

  <div class="flex flex-col mb-64 sm:mb-72">
    <h1 class="text-white/75 font-bold text-center text-4xl sm:text-6xl">Meet Your Coaches</h1>
    <div class="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4 sm:gap-8">
      <img src="/alex-profile.png" alt="" class="w-42 sm:w-48 rounded-full" />
      <img src="/aiden-profile.png" alt="" class="w-42 sm:w-48 rounded-full" />
      <img src="/anthony-profile.png" alt="" class="w-42 sm:w-48 rounded-full" />
    </div>
    <p class="max-w-2xl mx-auto mt-8 text-white/50 text-center text-sm sm:text-md">
      We’re three former NCAA DII athletes who’ve led teams to championships, raced at nationals,
      and grown through every kind of setback and comeback. We coach because we’ve lived it—and we
      know how much it matters.
    </p>
    <div class="flex flex-col gap-4 max-w-3xl mx-auto mt-8 text-md sm:text-xl">
      <p class="flex gap-2 text-white/80">
        <img src="/icons8-check.svg" alt="" class="w-5 invert" />3x former NCAA DII runners
      </p>
      <p class="flex gap-2 text-white/80">
        <img src="/icons8-check.svg" alt="" class="w-5 invert" />25+ combined years of racing
        experience
      </p>
      <p class="flex gap-2 text-white/80">
        <img src="/icons8-check.svg" alt="" class="w-5 invert" />Experts in distance development,
        mindset, and race prep
      </p>
    </div>

    <RouterLink to="/coaches" class="text-center text-light-red underline mt-8"
      >Meet the Coaches →</RouterLink
    >
  </div>

  <div class="flex flex-col mb-64 sm:mb-72">
    <h1 class="text-white/75 font-bold text-center text-4xl sm:text-6xl">Ready to Start?</h1>
    <p class="max-w-2xl mx-auto mt-4 text-white/50 text-center text-sm sm:text-md">
      Choose the coaching plan that meets you where you are—and grows with you.
    </p>
    <PricingSection />
    <RouterLink to="/training" class="text-center text-white/50 underline mt-12"
      >See More About Our Training Plans →</RouterLink
    >
  </div>

  <div class="flex flex-col items-center mb-36">
    <h1 class="text-white/75 font-bold text-center text-4xl sm:text-6xl">Stay in Touch</h1>
    <p class="max-w-2xl mx-auto mt-8 text-white/50 text-center text-sm sm:text-md">
      Got a question? Want to know if we’re the right fit? We’d love to hear from you.
    </p>

    <RouterLink
      to="/training"
      class="bg-light-red hover:bg-red transition px-3 py-2 rounded-md text-center w-max mt-4"
      >Contact Us</RouterLink
    >
  </div>

  <div
    class="invisible sm:visible absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    aria-hidden="true"
  >
    <div
      class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-light-red to-black opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
      style="
        clip-path: polygon(
          74.1% 44.1%,
          100% 61.6%,
          97.5% 26.9%,
          85.5% 0.1%,
          80.7% 2%,
          72.5% 32.5%,
          60.2% 62.4%,
          52.4% 68.1%,
          47.5% 58.3%,
          45.2% 34.5%,
          27.5% 76.7%,
          0.1% 64.9%,
          17.9% 100%,
          27.6% 76.8%,
          76.1% 97.7%,
          74.1% 44.1%
        );
      "
    ></div>
  </div>
</template>

<script setup>
import PricingSection from '@/components/PricingSection.vue'
</script>
