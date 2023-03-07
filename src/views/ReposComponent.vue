<template>
  <div class="repos">
   <h1 class="repo-header">Repositories</h1>
    <div class="repo-container" v-for="repo in data" :key="repo.id">
      <div class="repo-card">
        <h4 class="repo-name">{{ repo.name }}</h4>
      <p class="repo-description">{{ repo.description }}</p>
                <div class="language">
                <p class="repo-lang">{{ repo.language }}</p>
                </div>
                <div class="other">
            <p class="repo-other">ID:{{ repo.id }}</p>
                  <p class="repo-other">{{ repo.size }}Kb</p>
                </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ReposComponent",
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    fetch("https://api.github.com/users/Oluwasemilogo/repos", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
      });
  },
};
</script>
<style>
/* .repo-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
} */
</style>
