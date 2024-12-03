<template>
  <div class="space-y-6">
    <NuxtImg src="/avatar.png" alt="Tejus Sahi"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px" placeholder format="webp" />
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      Hello!
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      I'm Tejus, I work as a software engineer from Delhi, India.
      I specialize in building web applications using TypeScript, Vue &amp; Node.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      By day, I'm a Fullstack Developer at
      <a href="https://greenapplesolutions.com/" target="_blank" class="underline">Green Apple Solutions</a>, and
      by night (and weekends), I'm busy tinkering with some random tool or app
      that I am building or experimenting with.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Tejus Sahi",
  description:
    "I'm Tejus, your friendly neighborhood software engineer from Delhi, India. I specialize in building web applications and sites using TypeScript, Vue & Node.",
});
</script>
