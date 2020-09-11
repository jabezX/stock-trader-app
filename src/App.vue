<template>
  <div id="app">
    <b-overlay :show="this.$store.getters.showOverlay" rounded="sm">
      <app-header></app-header>
      <div class="col-xs-12">
        <transition name="slide" mode="out-in">
          <router-view class="mt-3"></router-view>
        </transition>
      </div>
    </b-overlay>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "app",
  data() {
    return {};
  },

  components: {
    appHeader: Header,
  },

  created() {
    this.$store.dispatch("initStocks");
  },
};
</script>

<style>
body {
  padding: 20px;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  transition: opacity 0.3s;
  opacity: 1s;
  animation: slide-in 0.3s ease-in forwards;
}

.slide-leave {
  opacity: 1;
}

.slide-leave-active {
  opacity: 0;
  transition: opacity 0.3s;
  animation: slide-out 0.3s ease-in forwards;
}

@keyframes slide-in {
  0% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-30px);
  }
}
</style>
