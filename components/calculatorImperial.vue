<template>
<div>
  <form
    class="formborder bg-opacity-20 bg-clip-padding flex flex-col p-10"
    style="backdrop-filter:blur(20px)"
    @submit.prevent="calculate">
    <div class="flex flex-row justify-center p-2">
      <input type="radio" class="genderclass" name="gender" id="male" value="MALE" v-model="gender" />
      <label
        for="male"
        class="hover:bg-blue-900 flex h-12 justify-center w-1/3 border items-center text-center rounded-md border-2px border-white text-white font-black"
      >MALE</label>
      <input
        type="radio"
        class="genderclass"
        name="gender"
        id="female"
        value="FEMALE"
        v-model="gender"
      />
      <label
        for="female"
        class="hover:bg-blue-900 flex h-12 justify-center w-1/3 border items-center text-center rounded-md border-2px border-white text-white font-black"
      >FEMALE</label>
    </div>
    <div class="flex flex-col pt-4 px-6 mb-4">
      <label for="age" class="text-left text-white">AGE</label>
      <input type="number" id="age" class="focus:outline-none" v-model="age" />
    </div>
    <div class="flex flex-row pt-4 px-6">
      <label class="weight text-white mr-2" for="weight">WEIGHT (lbs)</label>
      <input
        type="number"
        class="w-full focus:outline-none mr-2"
        name="weight"
        id="weight"
        value="WEIGHT"
        v-model="weight"
      />
      <label class="height text-white mr-2" for="height">HEIGHT (feet)</label>
      <input
        type="number"
        class="w-full focus:outline-none mr-2"
        name="height"
        id="height"
        value="HEIGHT"
        step=".01"
        v-model="heightfeet"
      />
    </div>
    <label for="activity" class="text-left text-white py-4 px-6">Activity Level</label>
    <select id="activity" name="activity" class="mx-6" v-model="activity">
      <option value="1.2">Sedentary (Office job)</option>
      <option value="1.375">Light Exercise (1-2 days/week)</option>
      <option value="1.55">Moderate Exercise (3-5 days/week)</option>
      <option value="1.725">Heavy Exercise (6-7 days/week)</option>
      <option value="1.9">Extreme Exercise (more)</option>
    </select>
    <button
      class="hover:bg-blue-900 mx-6 sm:w-full md:w-1/3 border rounded-md p-3 border-2px border-white text-white mt-6 font-black focus:outline-none"
    >CALCULATE</button>
  </form>
</div>
</template>
<script>
export default {
  data () {
      return {
        gender: '',
        weight: '',
        heightfeet:'',
        activity:'',
        age:'',
        total:''
      }
    },
    methods:{
      calculate(){
        const height = this.heightfeet*12
        if(this.gender === 'MALE'){
        const bmr = 4.536*this.weight+15.88*height-5*this.age+5
        this.total = (bmr*this.activity).toFixed(2);
        this.$store.dispatch('store/setTdee',this.total)
        this.$router.push('/calculation')
        }else if(this.gender==='FEMALE'){
        const height = this.heightfeet*12
        const bmr = 4.536*this.weight+15.88*height-5*this.age-161
        this.total = (bmr*this.activity).toFixed(2);
        this.$store.dispatch('store/setTdee',this.total)
        console.log('female'+this.total) 
        this.$router.push('/calculation')
        }else{
          this.total = 'Please fill in gender'
        }
      }
    }
};
</script>
<style scoped>
.genderclass{
  visibility: hidden;
}
h1{
  font-size: 42px;
  line-height: 44px;
}
.formborder{
  border: 1px solid;
  border-image-source: linear-gradient(90deg, rgb(14,24,60), rgb(166,188,255));
  border-image-slice: 1;
}
.container{
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
input[type="radio"]:checked+label{ background-color: #9ab0ec; }

input[type=number]{
    -webkit-border-radius: 5px;;
    -moz-border-radius: 5px;;
     border-radius: 5px;
    }
    select{
    -webkit-border-radius: 5px;;
    -moz-border-radius: 5px;;
     border-radius: 5px;
    }
</style>