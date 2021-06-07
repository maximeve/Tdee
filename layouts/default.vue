<template>
  <div class="w-full flex backgroundcontainer justify-center">
    <div class="w-full px-4 sm:w-9/12">
    <div class="pt-3">
    <navbar></navbar>
    </div>
    <Nuxt />
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
<style>
html {
  font-family:
    'Raleway', sans-serif,
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.backgroundcontainer{
  background: url('~/assets/app.jpg') no-repeat center center fixed; 
  background-size: cover;
  height: 100%;
  overflow: hidden;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
