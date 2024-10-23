<template>
  <div class="main-page">
    <h2>This is my main page</h2>
    <keep-alive>
      <my-component :name="name" v-if="!isComponentTwo">
        <template #slotTitle>
          <h2>Form Title one</h2>
        </template>
        <template #slotInputs>
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Password" />
        </template>
        <template #slotAction>
          <input type="submit" value="Submit" />
        </template>
      </my-component>
    </keep-alive>
    <hr />
    <keep-alive>
      <my-component-two name="Khalid" v-if="isComponentTwo">
        <template #slotTitle>
          <h2>Form Title two</h2>
        </template>
        <template #slotInputs>
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Password" />
        </template>
        <template #slotAction>
          <input type="submit" value="Submit" />
        </template>
      </my-component-two>
    </keep-alive>
    <button @click="isComponentTwo = !isComponentTwo">change component</button>
  </div>
</template>

<script>
import MyComponent from "@/components/MyComponent.vue";
import MyComponentTwo from "@/components/MyComponent.vue";

export default {
  name: "MainPage",
  data() {
    return {
      name: "Mohanad",
      isComponentTwo: false,
    };
  },
  methods: {
    changeActive() {
      this.isActive = !this.isActive;
    },
  },

  components: {
    MyComponent,
    MyComponentTwo,
  },
};
</script>
<style scoped lang="scss">
.main-page {
  h2 {
    color: #2c3e50;
  }
  p {
    color: green;
  }
}
</style>
