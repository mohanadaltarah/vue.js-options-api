<template>
  <div class="main-page">
    <my-nav></my-nav>
    <h2>This is my main page</h2>
    <Content :st="students" @updateActive="changeActive" :isActive="isActive" />
    <hr />
    <Content :st="students" @updateActive="changeActive" :isActive="isActive" />
    <LifeComp />
  </div>
</template>

<script>
import Content from "@/components/ContentComp.vue";
import LifeComp from "@/components/LifeHooks.vue";

export default {
  name: "MainPage",
  components: {
    Content,
    LifeComp,
  },
  data() {
    return {
      isActive: true,
      students: ["Ahmed", "Mohanad", "Khalid"],
    };
  },
  methods: {
    changeActive() {
      this.isActive = !this.isActive;
    },
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
