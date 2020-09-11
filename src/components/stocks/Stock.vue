<template>
  <div class="col-sm-6 col-md-4 my-2">
    <b-card bg-variant="light" text-variant="dark" :title="stock.name">
      <hr />
      <b-card-text>
        <small> <em>Price:</em> {{ stock.price | currency }}</small>
      </b-card-text>
      <b-form inline>
        <b-input
          type="number"
          class="mr-2 mb-xs-2 mb-sm-0"
          v-model="quantity"
        ></b-input>
        <b-button
          variant="success"
          @click="buyStock"
          :disabled="
            quantity <= 0 || !Number.isInteger(+quantity) || spent > funds
          "
          >Buy</b-button
        >
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },

  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        quantity: +this.quantity,
        stockPrice: +this.stock.price,
      };
      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },

  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    spent() {
      return this.quantity * this.stock.price;
    },
  },
};
</script>