<template>
  <div class="prov-inj">
    <h1>Provide and inject</h1>
    <h1>Name is: {{ name }}</h1>
    <h1>Email is: {{ email }}</h1>
    <h2>Age is: {{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "ProvideInject",
  inject: ["name", "email", "age"],
};
</script>

<style scoped lang="scss"></style>
