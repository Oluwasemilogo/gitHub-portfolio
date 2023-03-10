<template>
  <div class="details-overall-con">
  <div class="details-container">
    <h1 className="details-header">Repository Details.</h1>
    <h4 class="details-name">{{ repository.name }}</h4>
    <p class="details-description"> Description: {{ repository.description }}</p>
    <p class="details-language">Language: {{ repository.language }}</p>
    <p class="details-size">Stars: {{ repository.size }}Kb</p>
    <p class="details-visibility">Visibility: {{ repository.visibility }}</p>
    <p className="details-date">
          Repository was created at:{{repository.created_at}} 
        </p>
        <p className="details-date">
          Repository was updated at:{{repository.updated_at}} 
        </p><p className="details-date">
          Repository was pushed at:{{repository.pushed_at}} 
        </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repository: {},
    };
  },
  async created() {
    const response = await fetch(
      `https://api.github.com/repos/Oluwasemilogo/${this.$route.params.name}`
    );
    const data = await response.json();
    this.repository = data;
  },
};
</script>
