<template>
  <div class="main-page">
    <h2>This is my main page</h2>
    <div class="products">
      <ul>
        <li v-for="product in products" :key="product.id">
          <div>
            <img :src="product.thumbnail" width="100" alt="" />
          </div>
          <p>Brand: {{ product.title }}</p>
          <p>Category: {{ product.category }}</p>
          <p>Description: {{ product.description }}</p>
          <p>Price: {{ product.price }}</p>
          <p>Stock: {{ product.stock }}</p>
          <div>
            <hr />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getProducts() {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => (this.products = data.products));
    },
  },
  async mounted() {
    await this.getProducts();
  },
  components: {},
};
</script>
<style scoped lang="scss">
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
