<template>
  <div class="main-page">
    <h2>This is my main page</h2>
    <ul>
      <li v-for="st in students" :key="st.id">
        <p>Name: {{ st.name }}</p>
        <p>Age: {{ st.age }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="js">
import stMixin from "@/mixins/stMixin";

export default {
  mixins: [stMixin],
};
</script>
<style lang="scss" scoped>
.main-page {
  h2 {
    color: #2c3e50;
  }

  p {
    color: black;
  }

  ul {
    list-style-type: none;
  }
  li {
    display: flex;
    border-right: 1px;
    width: 100%;
  }
}
</style>
