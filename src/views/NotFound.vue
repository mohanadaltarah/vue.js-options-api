<template>
  <h1>Page Not Found</h1>
  <button @click="backToHome">Back to homepage</button>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    backToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped lang="scss"></style>
