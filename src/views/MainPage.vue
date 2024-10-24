<template>
  <div class="main-page">
    <h2>This is my main page</h2>
    <MyForm />
  </div>
</template>

<script>
import MyForm from "@/components/MyForm.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    MyForm,
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
