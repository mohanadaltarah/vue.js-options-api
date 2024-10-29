<template>
  <div class="main-page">
    <h2>This is my main page</h2>
    <!--    <button @click="getStudents">Click me</button>-->
    <!--    <ul>-->
    <!--      <li v-for="st in students" :key="st.id">-->
    <!--        <p>Id: {{ st.id }}</p>-->
    <!--        <p>Name: {{ st.name }}</p>-->
    <!--        <p>Age: {{ st.age }}</p>-->
    <!--        <p>Gender: {{ st.gender }}</p>-->
    <!--        <p>Grade: {{ st.grade }}</p>-->
    <!--        <button-->
    <!--          @click="-->
    <!--            toProfile('Profile', st.name, st.id, st.age, st.grade, st.gender)-->
    <!--          "-->
    <!--        >-->
    <!--          View Profile-->
    <!--        </button>-->
    <!--        <hr />-->
    <!--      </li>-->
    <!--    </ul>-->
    <ProvideInject />
  </div>
</template>

<script lang="js">
import ProvideInject from "@/components/ProvideInject.vue";
export default {
  data(){
    return{
      students: [],
      email: "mohanad@example.com",
      age: 24
    }
  },
  components:{
    ProvideInject,
  },
  provide(){
    return{
      name: "Mohanad Altarah",
      email: this.email,
      age: this.age
    }
  },
  methods:{
    routeFunction(){
      console.log(this.$route);
      if(this.$router.hasRoute(this.$route.name)){
        console.log("The website identifies this route successfully!")
      }
    },
    async getStudents(){
      await fetch("https://course-backend.onrender.com/")
          .then(res => res.json())
          .then(data => this.students = data)
    },
    toProfile(view, name, id, age, gender, grade){
      this.$router.push({name: view, params:{id, name },
        query:{age, gender, grade}
    })
  }
}
}
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
}
</style>
