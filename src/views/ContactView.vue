<template>
  <div>
    <h1 class="text-red font-bold text-center text-8xl">GET IN TOUCH</h1>
    <p class="text-white/50 text-center mt-2 mb-12 text-lg">
      Start working towards your eclipse today.
    </p>

    <form @submit.prevent="handleSubmit" class="flex flex-col mx-auto gap-6 mb-12">
      <label class="flex flex-col items-start gap-2">
        Email:
        <input type="email" name="email" v-model="email" class="border py-0.5 px-2" required />
      </label>

      <label class="flex flex-col items-start gap-2">
        Name:
        <input type="text" name="name" v-model="name" class="border py-0.5 px-2" required />
      </label>

      <fieldset class="flex flex-col items-start gap-2">
        <legend class="mb-2">Reason for Contact:</legend>

        <RadioButton
          v-model="reason"
          name="reason"
          value="I have a question about coaching"
          label="I have a question about coaching"
        />
        <RadioButton
          v-model="reason"
          name="reason"
          value="I'd like help picking a plan"
          label="I'd like help picking a plan"
        />
        <RadioButton
          v-model="reason"
          name="reason"
          value="Media / collaboration inquiry"
          label="Media / collaboration inquiry"
        />
        <RadioButton v-model="reason" name="reason" value="other" label="Something else" />
      </fieldset>

      <button
        type="submit"
        class="bg-red px-3 py-2 rounded-md text-white hover:bg-light-red transition"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Sending...' : 'Submit' }}
      </button>
    </form>

    <p v-if="submitted" class="text-light-red text-center text-xl">
      Thanks! We’ll be in touch soon.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RadioButton from '@/components/RadioButton.vue'

const email = ref('')
const name = ref('')
const reason = ref('')
const submitted = ref(false)
const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true

  const formData = new FormData()
  formData.append('email', email.value)
  formData.append('name', name.value)
  formData.append('reason', reason.value)

  try {
    const res = await fetch('https://formspree.io/f/xyzjwkgj', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    })

    if (res.ok) {
      submitted.value = true
      email.value = ''
      name.value = ''
      reason.value = ''
    } else {
      alert('Something went wrong. Please try again later.')
    }
  } catch (error) {
    alert('There was an error sending your message.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
