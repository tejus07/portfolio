<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      FEATURED PROJECTS
    </h2>
    <div class="space-y-4">
      <AppProjectCard v-for="(project, id) in projects" :key="id" :project="project" />
    </div>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton label="All Projects &rarr;" to="/projects" variant="link" color="gray" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// const { data: projects } = await useAsyncData("projects-home", () =>
//   queryContent("/projects").limit(3).find()
// );

// Projects data
const projects = ref([]);

// Function to fetch GitHub repositories
const fetchRepos = async () => {
  const username = "tejus07";
  const url = `https://api.github.com/users/${username}/repos?type=public`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const repos = await response.json();
    return repos;
  } catch (error) {
    console.error("Error fetching the repositories:", error);
    return [];
  }
};

interface Repository {
  updated_at: string;
  // other properties...
}

// Function to get the top 3 repositories
const getTop3Repos = async () => {
  const githubRepos = await fetchRepos();

  // Pinned repositories IDs
  const topReposIds = [888321327, 778607751, 716207009];

  // Combine pinned and non-pinned, and take the top 3
  const top3Repos = githubRepos.filter((repo: any) => topReposIds.includes(repo.id));

  return top3Repos.map((repo: any) => ({
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
  }));
};

onMounted(async () => {
  projects.value = await getTop3Repos();
});
</script>
