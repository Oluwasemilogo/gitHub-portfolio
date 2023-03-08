<template>
  <div>
    <h2>{{ repository.name }}</h2>
    <p>{{ repository.description }}</p>
    <p>Language: {{ repository.language }}</p>
    <p>Stars: {{ repository.stargazers_count }}</p>
    <p>Forks: {{ repository.forks_count }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      repository: {},
    };
  },
  async created() {
    const response = await fetch(
      `https://api.github.com/users/Oluwasemilogo/repos/${this.id}`
    );
    const data = await response.json();
    this.repository = data;
  },
};
</script>
