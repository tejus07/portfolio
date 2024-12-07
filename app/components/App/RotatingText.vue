<template>
    <div class="font-extrabold text-lg [text-wrap:balance] text-gray-700 dark:text-gray-100">
      <span class="inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] overflow-hidden">
        <ul class="block text-left leading-tight [&_li]:block animate-text-slide">
          <li v-for="(text, index) in texts" :key="index" :class="textClasses[index]">{{ text }}</li>
        </ul>
      </span>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import type { PropType } from 'vue';
  
  const props = defineProps({
    texts: {
      type: Array as PropType<string[]>,
      required: true,
    },
  });
  
  const textClasses = computed(() => [
    'text-indigo-500',
    'text-rose-500',
    'text-yellow-500',
    'text-teal-500',
    'text-pink-500',
    'text-sky-500',
  ]);
  </script>
  
  <style>
  .animate-text-slide {
    animation: text-slide 15s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  }
  
  @keyframes text-slide {
    0%,
    16% {
      transform: translateY(0%);
    }
  
    25%,
    36% {
      transform: translateY(-16.66%);
    }
  
    50%,
    56% {
      transform: translateY(-38.33%);
    }
  
    75%,
    76% {
      transform: translateY(-60%);
    }
  
    100%,
    96% {
      transform: translateY(-77%);
    }
  }
  </style>