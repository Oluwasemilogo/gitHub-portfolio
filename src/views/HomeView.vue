<template>
  <div class="profile-container">
  <div class="profile-top">
    <img :src= "data.avatar_url" alt="profile-picture" class="avatar"/> 
    <div>
    <h1 class="profile-name">{{ data.name }}</h1>
    <h3 className="username">@{{ data.login }}</h3>
    <p className="bio">{{ data.bio }}</p>
    </div>
    </div>
    <section class="section">
      <div class="stat">
        <p class="profile-figures">{{ data.public_repos }}</p>
        <h3 class="profile-details">Repositories</h3>
      </div>
      <div class="stat">
        <p class="profile-figures">{{ data.followers }}</p>
        <h3 class="profile-details">Followers</h3>
      </div>
      <div class="stat">
        <p class="profile-figures">{{ data.following }}</p>
        <h3 class="profile-details">Following</h3>
      </div>
    </section>
  </div>
  <ReposComponent />
  
</template>

<script>
import ReposComponent from './ReposComponent.vue';
export default {
  components: {
    ReposComponent,
  },
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    fetch("https://api.github.com/users/Oluwasemilogo", {
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
</style>
