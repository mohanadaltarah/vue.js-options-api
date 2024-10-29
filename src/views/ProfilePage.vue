<template>
  <h1>This is the Profile page</h1>
  <h3>{{ $route.params.id }}</h3>
  <h3>{{ $route.params.username }}</h3>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  },
};
</script>
<style scoped lang="scss"></style>
