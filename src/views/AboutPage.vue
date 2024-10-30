<template>
  <div class="about">
    <h1>This is the about page</h1>
    <input type="text" v-model="userData.name" />
    <button @click="isActive = !isActive">Change Active</button>
    <h2>Username is: {{ username }}</h2>
    <h2>User active status is: {{ isActive }}</h2>
    <button @click="myArray.push('new data')">add to arr</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      isActive: false,
      userData: {
        name: "",
        age: 24,
      },
      myArray: [],
    };
  },
  methods: {
    routeFunction() {
      this.$router.replace({ name: "Home" });
    },
  },
  mounted() {
    console.log(this.$router.hasRoute("Profile"));
  },
  watch: {
    "userData.name"(newValue, oldValue) {
      console.log("new value: ", newValue);
      console.log("old value: ", oldValue);
    },
    myArray: {
      handler(newValue) {
        console.log("new value: ", newValue);
      },
      deep: true,
    },
  },
};
</script>
<style scoped lang="scss"></style>
