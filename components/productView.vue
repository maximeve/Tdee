<template>
  <div class="w-full">
    <h2 class="py-5 text-white text-center font-black flex justify-center">Tracking tools</h2>
    <p class="text-white text-center pb-5">These days, counting calories is very easy. There are many useful websites and apps that help you log your meals and track your intake.</p>
    <div class="sm:flex">
      <div class="mx-2 mt-5 w-full flex rounded-lg formborder bg-opacity-20 bg-clip-padding border border-2px border-white" style="backdrop-filter:blur(20px)">
        <img src="../assets/foodscale.png" style="height:150px;width:150px;" class="rounded-lg" />
        <div class="p-5">
          <h2 class="text-white text-white text-center font-black flex">Food scales</h2>
          <p class="text-white"
          >You'll need a food scale to accurately measure the calories of the food you're eating (most people underestimate big time!)</p>
          <button  class="hover:bg-blue-900 sm:w-full border rounded-md p-3 border-2px border-white text-white mt-6 font-black focus:outline-none">Get Food scale</button>
        </div>
      </div>
      <div class="mx-2 mt-5 w-full flex rounded-lg formborder bg-opacity-20 bg-clip-padding border border-2px border-white" style="backdrop-filter:blur(20px)">
        <img src="../assets/scale.jpg" style="height:150px;width:150px;" class="rounded-lg" />
        <div class="p-5">
          <h2 class="text-white text-white text-center font-black flex">Bathrooms scale</h2>
          <p class="text-white">You'll need a food scale to accurately measure the calories of the food you're eating (most people underestimate big time!)</p>
          <button  class="hover:bg-blue-900 sm:w-full border rounded-md p-3 border-2px border-white text-white mt-6 font-black focus:outline-none">Get Food scale</button>
        </div>
      </div>
      <div class="mx-2 mt-5 w-full flex rounded-lg formborder bg-opacity-20 bg-clip-padding border border-2px border-white" style="backdrop-filter:blur(20px)">
        <img src="../assets/fitnesspal.png" style="height:150px;width:150px;" class="rounded-lg" />
        <div class="p-5">
          <h2 class="text-white text-white text-center font-black flex">MyFitnessPal App</h2>
          <p class="text-white"
          >You'll need to enter everything you eat into a calorie tracker app like MyFitnessPal<br>MyFitnessPal is free and works on iOS/Android. Find it in the app store</p>
          <button
            class="hover:bg-blue-900 sm:w-full border rounded-md p-3 border-2px border-white text-white mt-6 font-black focus:outline-none"
          >Get Food scale</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.formborder{
  border: 1px solid;
border-image-source: linear-gradient(45deg, rgb(32, 54, 136), rgb(166,188,255));
  border-image-slice: 1;
}
</style>