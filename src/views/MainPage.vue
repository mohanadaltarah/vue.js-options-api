<template>
  <div class="main-page">
    <h2>This is my main page</h2>
    <p></p>
    <form action="" @submit.prevent>
      <div>
        <label for="name">Name</label>
        <input id="name" v-model="student.name" name="name" type="text" />
      </div>
      <div>
        <label for="age">Age</label>
        <input id="age" v-model="student.age" name="age" type="number" />
      </div>
      <div>
        <label for="grade">Grade</label>
        <select id="grade" v-model="student.grade" name="grade">
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
          <option value="four">Four</option>
        </select>
      </div>
      <div>
        <h3>Gender</h3>
        <label>Male</label>
        <input
          id="male"
          v-model="student.gender"
          name="male"
          type="radio"
          value="Male"
        />
        <label>Female</label>
        <input
          id="female"
          v-model="student.gender"
          name="female"
          type="radio"
          value="Female"
        />
      </div>
      <div>
        <h3>Favorite Sports</h3>
        <input type="text" v-model="sport" />
        <button @click="addSport">Add Sport</button>
      </div>
      <div class="actions" style="width: 100%">
        <input style="width: 50%; margin: auto" type="submit" value="Add" />
      </div>
      <div>
        <ul>
          <li v-for="st in students" :key="st.id">
            <p>Name: {{ st.name }}</p>
            <p>Age: {{ st.age }}</p>
            <p>Gender: {{ st.gender }}</p>
            <p>Grade: {{ st.grade }}</p>
            <p>
              Favorite sports:
              <strong>
                <span v-for="(sport, i) in st.favouritSports" :key="i">
                  {{ sport }}<br />
                </span>
              </strong>
            </p>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      sport: "",
      student: {
        name: "",
        age: "",
        grade: "",
        gender: "",
        favouritSports: [],
      },
      students: [],
    };
  },
  methods: {
    addSport() {
      this.student.favouritSports.push(this.sport);
      this.sport = "";
    },
    async getStudents() {
      await fetch("https://course-backend.onrender.com/")
        .then(response => response.json())
        .then(data => this.students = data);
    },
  },
  async mounted() {
    await this.getStudents();
  },
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  li {
    display: flex;
    border-right: 1px;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
