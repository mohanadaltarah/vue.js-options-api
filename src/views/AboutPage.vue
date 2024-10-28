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
      this.$router.go(-3);
    },
  },
};
</script>
<style scoped lang="scss"></style>
