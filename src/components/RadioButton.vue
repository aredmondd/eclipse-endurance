<template>
  <label
    class="flex items-center gap-2 cursor-pointer select-none"
    :class="{ 'opacity-50': disabled }"
  >
    <input
      type="radio"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      @change="$emit('update:modelValue', value)"
      class="hidden"
    />
    <div
      class="w-5 h-5 rounded-full border border-white/50 transition"
      :class="{
        'border-black': modelValue === value,
        'bg-light-red': modelValue === value,
      }"
    >
      <div v-if="modelValue === value" class="w-2.5 h-2.5 rounded-full"></div>
    </div>
    <span class="text-md text-white/75">{{ label }}</span>
  </label>
</template>

<script setup>
defineProps({
  modelValue: [String, Number, Boolean],
  value: [String, Number, Boolean],
  label: String,
  name: String,
  disabled: Boolean,
})

defineEmits(['update:modelValue'])
</script>
