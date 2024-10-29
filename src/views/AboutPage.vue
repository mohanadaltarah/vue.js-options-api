<template>
  <div class="about">
    <h1>This is the about page</h1>
    <input type="text" v-model="username" />
    <button @click="isActive = !isActive">Change Active</button>
    <h2>Username is: {{ username }}</h2>
    <h2>User active status is: {{ isActive }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      isActive: false,
    };
  },
  methods: {
    routeFunction() {
      this.$router.replace({ name: "Home" });
    },
  },
  mounted() {
    console.log(this.$router.hasRoute("Profile"));
  },
  watch: {
    username(newValue, oldValue) {
      console.log("new value: ", newValue);
      console.log("old val: ", oldValue);
    },
  },
};
</script>
<style scoped lang="scss"></style>
