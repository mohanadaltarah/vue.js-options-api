<template>
  <div style="margin-top: 50px" class="life">
    <h2>Life Cycle hooks</h2>
    <p>The age is: {{ age }}</p>
    <button @click="increaseAge">increase</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Mohanad",
      age: 24,
    };
  },
  methods: {
    increaseAge() {
      this.age++;
    },
  },
  beforeCreate() {
    alert("beforeCreate");
  },

  created() {
    alert("created");
  },

  beforeMount() {
    alert("beforeMount");
  },

  mounted() {
    alert("mounted");
  },

  beforeUpdate() {
    alert("beforeUpdate");
  },

  updated() {
    alert("updated");
  },

  beforeUnmount() {
    alert("beforeUnmount");
  },

  unmounted() {
    alert("unmounted");
  },
};
</script>
