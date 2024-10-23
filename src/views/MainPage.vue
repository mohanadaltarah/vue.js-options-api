<template>
  <div class="main-page">
    <my-nav></my-nav>
    <h2>This is my main page</h2>
    <Content :st="students" />
  </div>
</template>

<script>
import Content from "@/components/ContentComp.vue";

export default {
  name: "MainPage",
  components: {
    Content,
  },
  data() {
    return {
      students: ["Ahmed", "Mohanad", "Khalid"],
    };
  },
};
</script>
<style scoped lang="scss">
.main-page {
  h2 {
    color: #2c3e50;
  }
  p {
    color: green;
  }
}
</style>
