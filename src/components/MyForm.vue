<template>
  <div class="form">
    <form action="" @submit.prevent>
      <div>
        <label for="">First Name</label>
        <input type="text" name="firstName" v-model.lazy="student.firstName" />
        <p>Result is: {{ student.firstName }}</p>
      </div>
      <div>
        <label for="">Last Name</label>
        <input type="text" name="lastName" v-model.lazy="student.lastName" />
        <p>Result is: {{ student.lastName }}</p>
      </div>
      <div>
        <label for="">Age</label>
        <input type="number" name="age" v-model.lazy="student.age" />
        <p>Result is: {{ student.age }}</p>
      </div>
      <div>
        <label for="">Email</label>
        <input type="email" name="email" v-model.lazy="student.email" />
        <p>Result is: {{ student.email }}</p>
      </div>
      <div>
        <label for="">Password</label>
        <input
          type="password"
          name="password"
          v-model.lazy="student.password"
        />

        <p>Result is: {{ student.password }}</p>
      </div>
      <div class="actions">
        <input type="submit" value="Register" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      student: {
        firstName: "",
        lastName: "",
        age: null,
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style lang="scss">
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: aliceblue;
  width: 50vw;
  margin: auto;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    gap: 20px;
  }
}
</style>
