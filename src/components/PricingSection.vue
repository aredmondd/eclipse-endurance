<template>
  <div class="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mt-12">
    <PricingCard
      title="New Moon"
      desc="For beginner runners or those seeking a focused 8-week training block to build a solid base."
      cost="125"
      :bullets="basicBullets"
    />
    <PricingCard
      title="First Light"
      desc="For runners aiming to improve fitness and training structure with personalized, flexible coaching."
      cost="150"
      :middle="true"
      :bullets="medBullets"
    />
    <PricingCard
      title="Total Eclipse"
      desc="Full-access coaching for serious athletes targeting peak performance and long-term optimization."
      cost="175"
      :bullets="crazyBullets"
    />
  </div>
</template>

<script setup>
import PricingCard from '@/components/PricingCard.vue'

const basicBullets = [
  'Personalized 8-week program',
  'Email check-ins at weeks 3 and 6',
  'Local group run access',
]
const medBullets = [
  'Fully customized training plan updated biweekly',
  'Check-ins via email or text biweekly',
  'Local group runs',
  'General strength/mobility resources',
  'Race planning assistance',
]

const crazyBullets = [
  'Fully customized training with regular updates',
  'Frequent contact via call, text, & email (3-4 times/week)',
  'Local group runs',
  'Advanced strength, mobility, nutrition, and fueling guidance',
  'Comprehensive goal setting and race planning',
  'Form analysis and personalized shoe and gear advice',
  'Full season training design',
  'Priority support',
]
</script>
