<template>
  <h1 class="text-red font-bold uppercase text-8xl text-center">TRAINING PLANS</h1>
  <p class="max-w-2xl mx-auto text-white/25 text-center mt-4 mb-4">
    Choose the plan that fits your journey—whether you’re starting fresh, gaining momentum, or
    chasing your ultimate eclipse moment.
  </p>
  <div class="mx-auto">
    <PricingSection />

    <!-- feature comparison -->
    <div class="overflow-x-auto mt-32 rounded-xl border-2 border-white/25 mb-12">
      <table class="min-w-full text-white text-sm md:text-base">
        <thead class="bg-white/5 text-left">
          <tr>
            <th class="px-4 py-3 font-medium">Feature</th>
            <th class="px-4 py-3 font-medium text-center">New Moon</th>
            <th class="px-4 py-3 font-medium bg-light-red/50 text-center">First Light</th>
            <th class="px-4 py-3 font-medium text-center">Total Eclipse</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/10">
          <tr>
            <td class="px-4 py-3">Plan Length</td>
            <td class="px-4 py-3 text-center">8 weeks</td>
            <td class="px-4 py-3 text-center bg-light-red/25">Ongoing</td>
            <td class="px-4 py-3 text-center">Ongoing</td>
          </tr>
          <tr>
            <td class="px-4 py-3">Coach Check-ins</td>
            <td class="px-4 py-3 text-center">Week 3 & 6 (Email)</td>
            <td class="px-4 py-3 text-center bg-light-red/25">Biweekly (Text/Email)</td>
            <td class="px-4 py-3 text-center">3–4x/week (Call/Text/Email)</td>
          </tr>
          <tr>
            <td class="px-4 py-3">Training Plan Updates</td>
            <td class="px-4 py-3 text-center text-white/25">—</td>
            <td class="px-4 py-3 text-center bg-light-red/25">Biweekly</td>
            <td class="px-4 py-3 text-center">As needed</td>
          </tr>
          <tr>
            <td class="px-4 py-3">Local Group Runs</td>
            <td class="px-4 py-3 text-center">✓</td>
            <td class="px-4 py-3 text-center bg-light-red/25">✓</td>
            <td class="px-4 py-3 text-center">✓</td>
          </tr>
          <tr>
            <td class="px-4 py-3">Race Planning Guidance</td>
            <td class="px-4 py-3 text-center text-white/25">—</td>
            <td class="px-4 py-3 text-center bg-light-red/25">✓</td>
            <td class="px-4 py-3 text-center">✓ (Full Season)</td>
          </tr>
          <tr>
            <td class="px-4 py-3">Strength & Mobility Resources</td>
            <td class="px-4 py-3 text-center text-white/25">—</td>
            <td class="px-4 py-3 text-center bg-light-red/25">General</td>
            <td class="px-4 py-3 text-center">Advanced & Personalized</td>
          </tr>
          <tr>
            <td class="px-4 py-3">Gear & Shoe Advice</td>
            <td class="px-4 py-3 text-center text-white/25">—</td>
            <td class="px-4 py-3 text-center text-white/25 bg-light-red/25">—</td>
            <td class="px-4 py-3 text-center">✓</td>
          </tr>
          <tr>
            <td class="px-4 py-3">Nutrition & Fueling Guidance</td>
            <td class="px-4 py-3 text-center text-white/25">—</td>
            <td class="px-4 py-3 text-center text-white/25 bg-light-red/25">—</td>
            <td class="px-4 py-3 text-center">✓</td>
          </tr>
          <tr>
            <td class="px-4 py-3">Form Analysis</td>
            <td class="px-4 py-3 text-center text-white/25">—</td>
            <td class="px-4 py-3 text-center text-white/25 bg-light-red/25">—</td>
            <td class="px-4 py-3 text-center">✓</td>
          </tr>
          <tr>
            <td class="px-4 py-3">Priority Support</td>
            <td class="px-4 py-3 text-center text-white/25">—</td>
            <td class="px-4 py-3 text-center text-white/25 bg-light-red/25">—</td>
            <td class="px-4 py-3 text-center">✓</td>
          </tr>
        </tbody>
      </table>
    </div>

    <C2A class="my-24" />
  </div>
</template>

<script setup>
import C2A from '@/components/C2A.vue'
import PricingCard from '@/components/PricingCard.vue'
import PricingSection from '@/components/PricingSection.vue'
</script>
