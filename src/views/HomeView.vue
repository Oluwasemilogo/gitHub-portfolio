<template>
  <div class="profile-container">
    <img :src= "data.avatar_url" alt="profile-picture" class="avatar"/> 
    <h1>{{ data.name }}</h1>
    <h3 className="username">@{{ data.login }}</h3>
    <p className="bio">{{ data.bio }}</p>
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
</template>

<script>
export default {
  name: "HomeView",
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
/* .avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 5px solid rgb(0, 112, 243);
} */
</style>
