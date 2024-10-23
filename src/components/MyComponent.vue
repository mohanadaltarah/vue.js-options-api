<template>
  <div class="parent">
    <h2>This is a slot component</h2>
    <p>name is {{ name }}</p>
    <form action="">
      <slot name="slotTitle"></slot>
      <slot name="slotInputs"></slot>
      <slot name="slotAction"></slot>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
    },
  },
};
</script>
