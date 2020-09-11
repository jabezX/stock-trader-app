<template>
  <div class="text-center">
    <h1>Trade stocks or view your portflio.</h1>
    <h6>You can Save & Load your data.</h6>
    <h6>Click on 'End day' to begin a new day.</h6>
    <hr />
    <p>
      Your funds: <span class="text-success">{{ funds }}</span>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>