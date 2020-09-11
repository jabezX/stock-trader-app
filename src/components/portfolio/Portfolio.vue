<template>
  <div>
    <h1>
      Funds: <small class="text-success">{{ funds | currency }}</small>
    </h1>
    <hr />
    <h5 class="text-center" v-if="stocks.length == 0">
      <small>No stocks available</small>
    </h5>
    <div class="row">
      <app-stock
        v-for="stock in stocks"
        :key="stock.id"
        :stock="stock"
      ></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  data() {
    return {};
  },
  computed: {
    stocks() {
      return this.$store.getters.stockPortfolio;
    },
    funds() {
      return this.$store.getters.funds;
    },
  },

  components: {
    appStock: Stock,
  },
};
</script>

<style >
</style>