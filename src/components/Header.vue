<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="secondary">
      <b-navbar-brand to="/">Stock Trader</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/portfolio">Portfolio</b-nav-item>
          <b-nav-item to="/stocks">Stocks</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="randomizeStocks">End day</b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Save & Load</em>
            </template>
            <b-dropdown-item @click="saveData">Save data</b-dropdown-item>
            <b-dropdown-item @click="loadData">Load data</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item>Funds: {{ $store.getters.funds | currency }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["randomizeStocks", "loadData"]),
    saveData() {
      const data = {
        stocks: this.$store.getters.stocks,
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
      };
      this.$http.put("data.json", data);
    },
  },
};
</script>