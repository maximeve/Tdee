<template>
  <div class="flex flex-wrap mt-5">
    <div class="w-full flex flex-col justify-center sm:w-1/3">
      <h2 class="py-5 text-white font-black flex">Macro's</h2>
      <p
        class="text-white text-left pb-5"
      >Macro is short for macronutrient, of which there are three: protein, carbohydrates and fats. All foods are divided up into a combination of these macros, and that's how the calorie content is made up. Protein and carbs are four calories per gram, and fat is nine calories per gram.</p>
    </div>
    <div class="w-full sm:w-2/3">
    <div class="w-full flex justify-center mb-5">
      <button @click="setMode('cutting')" class="mx-2 rounded-lg bg-white py-2 px-10 hover:bg-gray-300 focus:outline-none focus:bg-gray-500">Cutting</button>
      <button @click="setMode('maintenance')" class="mx-2 rounded-lg bg-white py-2 px-10 hover:bg-gray-300 focus:outline-none focus:bg-gray-500">Maintenance</button>
      <button @click="setMode('bulking')" class="mx-2 rounded-lg bg-white py-2 px-10 hover:bg-gray-300 focus:outline-none focus:bg-gray-500">Bulking</button>
    </div>
        <maintenance-macro v-show="this.mode === 'maintenance'" :maintenanceMacro="this.maintenance"></maintenance-macro>
        <bulk-macro v-show="this.mode === 'bulking'" :bulkMacro="this.bulk"></bulk-macro>
        <cut-macro v-show="this.mode === 'cutting'" :cutMacro="this.cut"></cut-macro>
    </div>
  </div>
</template>
<script>
import maintenanceMacro from "./maintenanceMacro.vue";
import bulkMacro from './bulkMacro.vue';
import cutMacro from './cutMacro.vue';

export default {
  components: {
    maintenanceMacro,
    bulkMacro,
    cutMacro,
  },
  created: function() {
    this.calculateRatios();
  },
  data() {
    return {
      mode: "maintenance",
      tdee: this.$store.getters["store/getTdee"],
      system: this.$store.getters["store/getSystem"],
      cut: "",
      maintenance: "",
      bulk: ""
    };
  },
  methods: {
    calculateRatios() {
      // this.cut = this.calculateRatio(cutCal, 0.3, 0.3, 0.4);
      // this.bulk = this.calculateRatio(bulkCal, 0.3, 0.4, 0.3);
      // this.maintenance = this.calculateRatio(this.tdee, 0.3, 0.4, 0.4);

      // OPDELEN IN MAINTENANCE, BULK en CUT DIETS //
      this.maintenance = {
        lowCarb: this.calculateRatio(this.tdee, 0.45, 0.15, 0.4),
        modCarb: this.calculateRatio(this.tdee, 0.3, 0.3, 0.4),
        highCarb: this.calculateRatio(this.tdee, 0.3, 0.4, 0.3)
      }
      this.bulk = {
          lowCarb: this.calculateRatio(parseFloat(this.tdee) + parseFloat(250), 0.45, 0.15, 0.4),
          modCarb: this.calculateRatio(parseFloat(this.tdee) + parseFloat(250), 0.3, 0.3, 0.4),
          highCarb: this.calculateRatio(parseFloat(this.tdee) + parseFloat(250), 0.3, 0.4, 0.3)
        }
      this.cut = {
        lowCarb: this.calculateRatio(parseFloat(this.tdee) - parseFloat(250), 0.45, 0.15, 0.4),
        modCarb: this.calculateRatio(parseFloat(this.tdee) - parseFloat(250), 0.3, 0.3, 0.4),
        highCarb: this.calculateRatio(parseFloat(this.tdee) - parseFloat(250), 0.3, 0.4, 0.3),
      }
    },
    setMode(parameter) {
      this.mode = parameter;
      console.log(this.mode)
    },
    calculateRatio(tdee, protPercent, carbPercent, fatPercent) {
      var ratio = {
        total: tdee,
        protein: Math.round((protPercent * tdee) / 4),
        fat: Math.round((fatPercent * tdee) / 9),
        carbs: Math.round((carbPercent * tdee) / 4)
      };
      return ratio;
    }
  }
};
</script>