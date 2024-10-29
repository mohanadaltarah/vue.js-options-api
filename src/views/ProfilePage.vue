<template>
  <h1>This is the Profile page</h1>
  <div>
    <h3>{{ $route.params.id }}</h3>
    <h3>{{ $route.params.name }}</h3>
    <hr />
    <div class="links">
      <router-link :to="{ name: 'courses' }">MyCourses</router-link>
      <router-link :to="{ name: 'wishlist' }">MyWishlist</router-link>
    </div>
    <hr />
    <div class="container">
      <router-view />
    </div>
    <button @click="$router.go(-1)">Go back</button>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.query.gender);
  },
};
</script>
<style scoped lang="scss">
.links {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
