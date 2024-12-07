<script setup lang="ts">
const description = "Want to know me from a professional angle? Here's my detailed resume highlighting my skills, work experience, and achievements.";
useSeoMeta({
  title: "Resume | Tejus Sahi",
  description,
});
</script>

<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Resume" :description="description" />
    <div class="space-y-24">
     <embed src="/tejus-resume.pdf" type="application/pdf" width="100%" height="800px" />
    </div>
  </main>
</template>

<style scoped></style>