<template>
    <div class="error-container">
  <div>
    <h1 class="error">404 Page Not Found</h1>
      <h2 className="not-found">Oops,Page not Found!</h2>
  </div>  
  <router-link to="/" class="router-link">
    <button class="error-button">Go  back to Home Page</button>
  </router-link>
  </div>
</template>

<script>
export default {
    name: "ErrorPage",
}
</script>
