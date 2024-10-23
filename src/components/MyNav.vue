<template>
  <nav class="my-nav">
    <div class="icon">
      <h2>icon</h2>
    </div>
    <div class="logo">
      {{ logo }}
    </div>
    <div class="links">
      <ul>
        <li v-for="link in links" :key="link">{{ link }}</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logo: "My Logo",
      links: ["link1", "link2"],
    };
  },
};
</script>
<style>
.my-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

ul {
  display: flex;
  gap: 50px;
  list-style: none;
}
</style>
