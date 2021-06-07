<template>
  <div class="w-full flex">
    <div
      class="w-1/3 sm:mx-2 py-5 flex flex-col rounded-lg formborder bg-opacity-20 bg-clip-padding border border-2px border-white"
      style="backdrop-filter:blur(20px)"
    >
      <h1 class="sm:text-2xl text-white text-left font-black flex justify-center pb-2">Low carb</h1>
      <h1
        class="text-2xl text-white text-left font-black flex justify-center pb-2"
      >{{ this.cutMacro.lowCarb.protein }}g</h1>
      <div class="flex justify-center">
        <img src="../assets/protein.png" style="filter: invert(100%);width:20px;" />
        <p class="text-white font-bold flex justify-center pl-2">PROTEIN</p>
      </div>
      <h1
        class="text-2xl text-white text-left font-black flex justify-center pb-2 pt-5"
      >{{ this.cutMacro.lowCarb.fat }}g</h1>
      <div class="flex justify-center">
        <img src="../assets/fat.png" style="filter: invert(100%);width:20px;" />
        <p class="text-white font-bold flex justify-center pl-2">FAT</p>
      </div>
      <h1
        class="text-2xl text-white text-left font-black flex justify-center pb-2 pt-5"
      >{{ this.cutMacro.lowCarb.carbs }}g</h1>
      <div class="flex justify-center">
        <img src="../assets/carb.png" style="filter: invert(100%);width:20px;" />
        <p class="text-white font-bold flex justify-center pl-2">CARB</p>
      </div>
    </div>
    <!-- MAINTENANCE DIET  -->
    <div
      class="w-1/3 sm:mx-2 py-5 flex flex-col rounded-lg formborder bg-opacity-20 bg-clip-padding border border-2px border-white"
      style="backdrop-filter:blur(20px)"
    >
      <h1 class="sm:text-2xl text-white text-left font-black flex justify-center pb-2">Moderate carb</h1>
      <h1
        class="text-2xl text-white text-left font-black flex justify-center pb-2"
      >{{ this.cutMacro.modCarb.protein }}g</h1>
      <div class="flex justify-center">
        <img src="../assets/protein.png" style="filter: invert(100%);width:20px;" />
        <p class="text-white font-bold flex justify-center pl-2">PROTEIN</p>
      </div>
      <h1
        class="text-2xl text-white text-left font-black flex justify-center pb-2 pt-5"
      >{{ this.cutMacro.modCarb.fat }}g</h1>
      <div class="flex justify-center">
        <img src="../assets/fat.png" style="filter: invert(100%);width:20px;" />
        <p class="text-white font-bold flex justify-center pl-2">FAT</p>
      </div>
      <h1
        class="text-2xl text-white text-left font-black flex justify-center pb-2 pt-5"
      >{{ this.cutMacro.modCarb.carbs }}g</h1>
      <div class="flex justify-center">
        <img src="../assets/carb.png" style="filter: invert(100%);width:20px;" />
        <p class="text-white font-bold flex justify-center pl-2">CARB</p>
      </div>
    </div>
    <!-- BULK DIET  -->
    <div
      class="w-1/3 sm:mx-2 py-5 flex flex-col rounded-lg formborder bg-opacity-20 bg-clip-padding border border-2px border-white"
      style="backdrop-filter:blur(20px)"
    >
      <h1 class="sm:text-2xl text-white text-left font-black flex justify-center pb-2">High carb</h1>
      <h1
        class="text-2xl text-white text-left font-black flex justify-center pb-2"
      >{{ this.cutMacro.highCarb.protein }}g</h1>
      <div class="flex justify-center">
        <img src="../assets/protein.png" style="filter: invert(100%);width:20px;" />
        <p class="text-white font-bold flex justify-center pl-2">PROTEIN</p>
      </div>
      <h1
        class="text-2xl text-white text-left font-black flex justify-center pb-2 pt-5"
      >{{ this.cutMacro.highCarb.fat }}g</h1>
      <div class="flex justify-center">
        <img src="../assets/fat.png" style="filter: invert(100%);width:20px;" />
        <p class="text-white font-bold flex justify-center pl-2">FAT</p>
      </div>
      <h1
        class="text-2xl text-white text-left font-black flex justify-center pb-2 pt-5"
      >{{ this.cutMacro.highCarb.carbs }}g</h1>
      <div class="flex justify-center">
        <img src="../assets/carb.png" style="filter: invert(100%);width:20px;" />
        <p class="text-white font-bold flex justify-center pl-2">CARB</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['cutMacro']
}
</script>