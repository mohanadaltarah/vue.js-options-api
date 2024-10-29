<template>
  <h1>This is the Profile page</h1>
  <div>
    <h3>{{ $route.params.id }}</h3>
    <h3>{{ $route.params.name }}</h3>
    <hr />
    <h3>{{ $route.query.age }}</h3>
    <h3>{{ $route.query.gender }}</h3>
    <h3>{{ $route.query.grade }}</h3>
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
<style scoped lang="scss"></style>
