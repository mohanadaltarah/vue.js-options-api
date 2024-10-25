<template>
  <div class="main-page">
    <h2>This is my main page</h2>
    <p></p>
    <form action="" @submit.prevent="addStudent">
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
        <h3>Update Age</h3>
        <label for="change-age">Age</label>
        <input type="number" v-model="changeAge" />
        <label for="change-id">Id</label>
        <input type="number" v-model="changeId" />
        <button type="button" @click="updateStudent">Update</button>
      </div>
    </form>
    <div>
      <ul>
        <li v-for="st in students" :key="st.id">
          <p>Id: {{ st.id }}</p>
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
      changeAge: "",
      changeId: "",
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
    async addStudent(){
      const requestData ={
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(this.student)
      }
      await fetch("https://course-backend.onrender.com/add-student", requestData)
          .then(response => response.json())
          .then(data => this.students = data);
    },
    async updateStudent(){
      if(!this.changeAge || !this.changeId){
        return;
      }
      const requestData ={
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify({
          age: this.changeAge,
        })
      }
      await fetch(`https://course-backend.onrender.com/update-student/${this.changeId}`, requestData)
          .then(response => response.json())
          .then(data => this.students = data);

    }
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
