<template>
  <div class="main-page">
    <h2>This is my main page</h2>
    <button @click="routeFunction">Click me</button>
  </div>
</template>

<script lang="js">
export default {
  mounted(){
    console.log(this.$router)
  },
  methods:{
    routeFunction(){
      this.$router.go(-1)
    }
  }
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
