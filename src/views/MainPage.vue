<template>
  <div class="main-page">
    <h2>This is my main page</h2>
    <ul v-styleLinks="50">
      <li>-</li>
      <li>-</li>
      <li>-</li>
      <li>-</li>
      <li>-</li>
    </ul>
  </div>
</template>

<script lang="js">
export default {
  directives:{
    styleLinks(el, order){
      el.childNodes.forEach(child => {
        child.style.fontSize = order.value + "px";
      })
    }
  },
  data() {
    return {

    };
  },
  methods: {},
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
