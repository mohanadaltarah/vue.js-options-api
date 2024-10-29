<template>
  <nav class="my-nav">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="links">
      <ul>
        <li v-for="route in myRoutes" :key="route.name">
          <router-link
            v-if="route.name === 'Profile'"
            :to="{
              name: route.name,
              params: { id: 10, username: 'Mohanad Altarah' },
            }"
            >{{ route.meta.title }}</router-link
          >
          <router-link v-else :to="{ name: route.name }"
            >{{ route.meta.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="btns">
      <button style="">Login</button>
      <button>Sign Up</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logo: "My Logo",
      myRoutes: [],
    };
  },
  mounted() {
    this.myRoutes = this.$router.options.routes;
  },
};
</script>
<style scoped>
.my-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background-color: #ff3300;
}

ul {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  list-style: none;
}

img {
  width: 200px;
}

button {
  background-color: #2c3e50;
  color: white;
  border-radius: 10px;
  margin-right: 10px;
}

li {
  color: white;
}
</style>
