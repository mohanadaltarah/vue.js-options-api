<template>
  <div class="content">
    <ul>
      <li v-for="(student, i) in st" :key="i">{{ student }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["st"],
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.content {
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    gap: 20px;
  }
}
</style>
