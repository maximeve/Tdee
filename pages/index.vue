<template>
  <div class="container">
    <div class="flex flex-row flex-wrap-reverse">
      <div class="sm: mt-6 lg:w-1/2 flex flex-col justify-start md:w-full">
        <h1 class="text-white text-left font-black">
          Total
          <br class="sm: hidden md:hidden lg:block" />Daily
          <br />Energy
          <br class="sm: hidden md:hidden lg:block" />Expenditure
        </h1>
        <p
          class="text-white text-left mt-6 pr-10"
        >Your Total Daily Energy Expenditure (TDEE) is an estimation of how many calories you burn per day when exercise is taken into account. It is calculated by first figuring out your Basal Metabolic Rate, then multiplying that value by an activity multiplier.</p>
        <NuxtLink to="/about"
          class="hover:bg-blue-900 sm:w-full md:w-1/3 border rounded-md p-3 border-2px border-white text-white mt-6 font-black focus:outline-none"
        >Read More</NuxtLink>
      </div>
      <div class="lg:w-1/2 md:w-full">
        <button @click="setSelected('imperial')" class="bg-white py-2 px-10">Imperial</button>
        <button @click="setSelected('metric')" class="bg-white py-2 px-10">Metric</button>
        <calculatorMetric v-if="this.selected === 'metric'"></calculatorMetric>
        <calculatorImperial v-if="this.selected === 'imperial'"></calculatorImperial>
      </div>
    </div>
  </div>
</template>

<script>
import calculatorMetric from "../components/calculatorMetric.vue";
export default {
  computed: {
    logGetters(){
      return this.$store.getters["store/getTdee"]
    },
  },
  data() {
    return {
      components: {
        calculatorMetric
      },
      selected: "imperial",
    };
  },
  methods: {
    setSelected(add) {
      this.selected = add;
      this.$store.dispatch('store/setSystem',add)
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 42px;
  line-height: 44px;
}
.container {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
