<template>
  <div class="main-container">
    <h2>This is the about page</h2>
    <ul>
      <li v-for="st in students" :key="st.id">
        <p>Name: {{ st.name }}</p>
        <p>Age: {{ st.age }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import stMixin from "@/mixins/stMixin";

export default {
  mixins: [stMixin],
};
</script>
