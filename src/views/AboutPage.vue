<template>
  <div class="about">
    <h1>This is the about page</h1>
    <button @click="routeFunction">Click me</button>
  </div>
</template>

<script>
export default {
  methods: {
    routeFunction() {
      this.$router.replace({ name: "Home" });
    },
  },
  mounted() {
    console.log(this.$router.hasRoute("Profile"));
  },
};
</script>
<style scoped lang="scss"></style>
