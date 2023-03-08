<template>
  <div class="repos">
    <h1 class="repo-header">Repositories</h1>

    <div class="repo-content">
      <div class="repo-container" v-for="repo in repositories" :key="repo.id">

        <router-link :to="{ name: 'RepositoryDetails', params: { id: repo.id } }">
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
      </router-link>

      </div>
    
      <div class="buttons">
        <button @click="previousPage" class="previous">Previous</button>
        <button @click="nextPage" class="next">Next</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      repositories: [],
    };
  },
  async mounted() {
    await this.getRepositories(this.currentPage);
  },
  methods: {
    async getRepositories(page) {
      const response = await fetch(
        `https://api.github.com/users/Oluwasemilogo/repos?page=${page}&per_page=8`
      );
      const data = await response.json();
      this.repositories = data;
    },
    nextPage() {
      this.currentPage++;
      this.getRepositories(this.currentPage);
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getRepositories(this.currentPage);
      }
    },
  },
};
</script>
<style></style>
