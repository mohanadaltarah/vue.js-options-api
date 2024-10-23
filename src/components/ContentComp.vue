<template>
  <div class="content">
    <ul>
      <li v-for="(student, i) in st" :key="i">{{ student }}</li>
    </ul>
  </div>
  <button @click="DeleteFirst">Change Ref</button>
  <p>active is {{ isActive }}</p>
  <button @click="changeActive">Change Prem</button>
</template>

<script>
export default {
  props: {
    st: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      myStudents: this.st,
    };
  },
  methods: {
    DeleteFirst() {
      this.myStudents.shift();
    },
    changeActive() {
      this.$emit("updateActive");
    },
  },
};
</script>
<style scoped lang="scss">
.content {
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    gap: 20px;
  }
}
</style>
