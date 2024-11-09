<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Projects" :description="description" />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup>
const description =
  "WILL BE UPDATED SOON. Check back soon for more projects.";
useSeoMeta({
  title: "Projects | Tejus Sahi",
  description,
});

// const { data: projects } = await useAsyncData("projects-all", () =>
//   queryContent("/projects").find()
// );

// Define pinned repositories (by name)
const pinnedRepos = [
  'pinned-repo-1',
  'pinned-repo-2',
  // Add other pinned repository names here
];

// Projects data
const projects = ref([]);

// Function to fetch GitHub repositories
const fetchRepos = async () => {
  const username = 'tejus07';
  const url = `https://api.github.com/users/${username}/repos?type=public`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const repos = await response.json();
    return repos;
  } catch (error) {
    console.error('Error fetching the repositories:', error);
    return [];
  }
};

// Fetch repositories and update projects when the component is mounted
onMounted(async () => {
  const githubRepos = await fetchRepos();
  projects.value = githubRepos.map(repo => ({
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
  }));
});
</script>
