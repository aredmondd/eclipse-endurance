<template>
  <h1 class="text-red font-bold uppercase text-6xl sm:text-8xl text-center">TRAINING PLANS</h1>
  <p class="max-w-2xl mx-auto text-white/25 text-center mt-4 mb-4">
    Choose the plan that fits your journey—whether you’re starting fresh, gaining momentum, or
    chasing your ultimate eclipse moment.
  </p>
  <div class="mx-auto">
    <PricingSection />

    <!-- feature comparison -->
    <div class="hidden sm:block mt-32 rounded-xl border-2 border-white/25 mb-12 overflow-x-auto">
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

    <!-- MOBILE STACKED VIEW -->
    <div class="block sm:hidden mt-32 space-y-8 mb-12">
      <div
        v-for="feature in [
          {
            label: 'Plan Length',
            newMoon: '8 weeks',
            firstLight: 'Ongoing',
            totalEclipse: 'Ongoing',
          },
          {
            label: 'Coach Check-ins',
            newMoon: 'Week 3 & 6 (Email)',
            firstLight: 'Biweekly (Text/Email)',
            totalEclipse: '3–4x/week (Call/Text/Email)',
          },
          {
            label: 'Training Plan Updates',
            newMoon: '—',
            firstLight: 'Biweekly',
            totalEclipse: 'As needed',
          },
          { label: 'Local Group Runs', newMoon: '✓', firstLight: '✓', totalEclipse: '✓' },
          {
            label: 'Race Planning Guidance',
            newMoon: '—',
            firstLight: '✓',
            totalEclipse: '✓ (Full Season)',
          },
          {
            label: 'Strength & Mobility Resources',
            newMoon: '—',
            firstLight: 'General',
            totalEclipse: 'Advanced & Personalized',
          },
          { label: 'Gear & Shoe Advice', newMoon: '—', firstLight: '—', totalEclipse: '✓' },
          {
            label: 'Nutrition & Fueling Guidance',
            newMoon: '—',
            firstLight: '—',
            totalEclipse: '✓',
          },
          { label: 'Form Analysis', newMoon: '—', firstLight: '—', totalEclipse: '✓' },
          { label: 'Priority Support', newMoon: '—', firstLight: '—', totalEclipse: '✓' },
        ]"
        :key="feature.label"
        class="rounded-xl border border-white/20 p-4 bg-white/5 text-white"
      >
        <h3 class="font-bold text-lg mb-3">{{ feature.label }}</h3>
        <div class="flex justify-between text-sm">
          <span class="text-white/50">New Moon</span>
          <span>{{ feature.newMoon }}</span>
        </div>
        <div class="flex justify-between text-sm mt-1">
          <span class="text-white/50">First Light</span>
          <span>{{ feature.firstLight }}</span>
        </div>
        <div class="flex justify-between text-sm mt-1">
          <span class="text-white/50">Total Eclipse</span>
          <span>{{ feature.totalEclipse }}</span>
        </div>
      </div>
    </div>

    <C2A class="my-24" />
  </div>
</template>

<script setup>
import C2A from '@/components/C2A.vue'
import PricingCard from '@/components/PricingCard.vue'
import PricingSection from '@/components/PricingSection.vue'
</script>
