<template>
  <div class="main-page">
    <h2>This is my main page</h2>
  </div>
</template>

<script lang="js">
export default {
  data(){
    return{
      students: [],
      email: "mohanad@example.com",
      age: 24
    }
  },
  inject: ["emitter"],
  mounted(){
    this.emitter.on("globalEvent", (data)=>{
      this.age = data;
      console.log(this.age);
    })
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
