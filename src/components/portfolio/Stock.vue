<template>
  <div class="col-sm-6 col-md-4 my-2">
    <b-card bg-variant="light" text-variant="dark" :title="stock.name">
      <b-card-text>
        <small> <em>Price:</em> {{ stock.price | currency }}</small>
        <hr />
        <em>Quantity:</em> {{ stock.quantity }}
      </b-card-text>
      <b-form inline>
        <b-input
          type="number"
          class="mr-2 mb-xs-2 mb-sm-0"
          v-model="quantity"
        ></b-input>
        <b-button
          variant="primary"
          :disabled="quantity <= 0 || quantity > stock.quantity"
          @click="sellStock"
          >Sell</b-button
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
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: +this.stock.price,
        quantity: +this.quantity,
      };
      this.$store.dispatch("sellStock", order);
      this.quantity = 0;
    },
  },

  computed: {},
};
</script>