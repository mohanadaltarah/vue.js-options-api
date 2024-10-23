<template>
  <div class="main-container">
    <h1>About Page</h1>
    <Content :st="students" />
  </div>
</template>
<script>
import Content from "@/components/ContentComp.vue";
export default {
  data() {
    return {
      students: ["Ahmed", "Sarah", "Muoaz", "Ibrahim"],
    };
  },
  components: {
    Content,
  },
};
</script>
