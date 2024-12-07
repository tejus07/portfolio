<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const isLoaded = ref(false);

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <UTooltip text="Toggle theme" :ui="{ popper: { strategy: 'absolute' } }">
    <button
      class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
      @click="isDark = !isDark"
    >
      <Icon
        v-if="isLoaded"
        aria-hidden="true"
        :name="isDark ? 'solar:sun-2-outline' : 'solar:moon-outline'"
        class="w-5 h-5"
      />
      <span class="sr-only">Toggle theme</span>
    </button>
  </UTooltip>
</template>
