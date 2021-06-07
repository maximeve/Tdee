<template>
  <div class="w-full pt-8 container">
      <div class="w-full flex">
        <div class="sm:w-1/3 sm:mx-2 p-3 rounded-lg formborder bg-opacity-20 bg-clip-padding border border-2px border-white" style="backdrop-filter:blur(20px)">
          <h2 class="text-white text-left font-black flex justify-center">Cut</h2>
          <h3 class="text-xl text-white text-left font-black flex justify-center md:text-2xl">{{ Math.round(this.logGetters)-250 }} calories/day</h3>
        </div>
        <div class="w-1/3 sm:mx-2 p-3 rounded-lg formborder bg-opacity-20 bg-clip-padding border border-2px border-white" style="backdrop-filter:blur(20px)">
          <h2 class="text-white text-left font-black flex justify-center">Maintenance</h2>
          <h3 class="text-xl text-white text-left font-black flex justify-center md:text-2xl">{{ Math.round(this.logGetters)}} calories/day</h3>
        </div>
        <div class="w-1/3 sm:mx-2 p-3 rounded-lg formborder bg-opacity-20 bg-clip-padding border border-2px border-white" style="backdrop-filter:blur(20px)">
          <h2 class="text-white text-left font-black flex justify-center">Bulk</h2>
          <h3 class="text-xl text-white text-left font-black flex justify-center md:text-2xl">{{ Math.round(this.logGetters)+250 }} calories/day</h3>
        </div>
      </div>
      <macro-calculator></macro-calculator>
      <product-view></product-view>
  </div>
</template>

<script>
import macroCalculator from '../components/macroCalculator.vue';
import productView from '../components/productView.vue'

export default {
  components:{
    macroCalculator,
    productView
  },
  computed: {
    logGetters() {
      return this.$store.getters["store/getTdee"];
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.container{
  height: 100%
}
h1 {
  font-size: 42px;
  line-height: 44px;
}
.formborder{
  border: 1px solid;
border-image-source: linear-gradient(45deg, rgb(32, 54, 136), rgb(166,188,255));
  border-image-slice: 1;
}
</style>
