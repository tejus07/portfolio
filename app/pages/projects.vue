<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Projects" :description="description" />
    <!--    <div class="flex justify-end mb-4">-->
    <!--      <label for="sort" class="mr-2 text-gray-700 dark:text-gray-300"-->
    <!--        >Sort by:</label-->
    <!--      >-->
    <!--      <select-->
    <!--        id="sort"-->
    <!--        v-model="sortBy"-->
    <!--        @change="sortProjects"-->
    <!--        class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md p-2"-->
    <!--      >-->
    <!--        <option value="name">Name</option>-->
    <!--        <option value="stars">Stars</option>-->
    <!--        <option value="forks">Forks</option>-->
    <!--        <option value="created_at">Created Date</option>-->
    <!--      </select>-->
    <!--    </div>-->
    <div class="space-y-4">
      <AppProjectCard v-for="(project, id) in sortedProjects" :key="id" :project="project" />
    </div>
  </main>
</template>

<script setup lang="ts">
const description =
  "Here are some of the projects I've worked on. I love to build things and share them with the world.";

useSeoMeta({
  title: "Projects | Tejus Sahi",
  description,
});

// Define pinned repositories (by name)
const pinnedRepos = [
  "pinned-repo-1",
  "pinned-repo-2",
  // Add other pinned repository names here
];

// Projects data
const sortBy = ref("created_at");

// Function to fetch GitHub repositories
const fetchRepos = async () => {
  const username = "tejus07";
  const url = `https://api.github.com/users/${username}/repos?type=public`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching the repositories:", error);
    return [];
  }

};

const sortProjects = () => {
  projects.value.sort((a: any, b: any) => {
    if (sortBy.value === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy.value === "stars") {
      return b.stars - a.stars;
    } else if (sortBy.value === "forks") {
      return b.forks - a.forks;
    } else if (sortBy.value === "created_at") {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    }
    return 0;
  });
};

const { data: projects } = await useAsyncData("projects-all", fetchRepos,);
const { data: projecta } = await useAsyncData("projects-ala", () =>
  queryContent("/projects").find()
);
console.log(projecta);

sortProjects();


const sortedProjects = computed(() => {
  return projects.value.map((repo: any) => ({
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    created_at: repo.created_at,
  }));
});
</script>
