<template>
  <div class="main-container">
    <h2>This is the about page</h2>
    <p>{{ fullName }}</p>
    <p>{{ calcNums }}</p>

    <ul>
      <input type="search" v-model="search" />
      <li v-for="st in searchSt" :key="st.id">
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
  data() {
    return {
      firstName: "Mohanad",
      lastName: "Altarah",
      myArr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      search: "",
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    calcNums() {
      return this.myArr.reduce((acc, current) => acc + current);
    },
    getOldStudents() {
      return this.students.filter((st) => st.age >= 14);
    },
    searchSt() {
      return this.students.filter((st) => st.name.match(this.search));
    },
  },
};
</script>
