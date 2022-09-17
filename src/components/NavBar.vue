<template>
  <div class="md:top-0 md:fixed md:h-full " > 
    <div class="flex md:flex-col justify-between items-center bg-252945 w-full md:w-40 md:h-full border-radius" >
      <div class="bg-7C5DFA border-radius md:rounded-none p-14">
        <img src="@/assets/images/logo.svg" alt="logo icon" class="p-1 slide-left ">
      </div>
      <div class="flex md:flex-col items-center gap-6 md:gap-0">
        <div  class=" border-c border-r md:border-r-0 md:border-b p-14">
          <img :src="require('@/assets/images/'+ icon)" alt="icon-sun" @click="toggleMode()" class="p-2 cursor-pointer">
        </div>
        <div >
          <div>
            <img src="@/assets/images/image-avatar.jpg" alt="avatar" class="rounded-full w-20  m-10 cursor-pointer">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return{
      darkMode: false,
      icon: 'icon-sun.svg'
    }
  },
  methods: {
    toggleMode() {
      this.$emit('mode')
      this.darkMode = !this.darkMode
      this.icon = this.darkMode == true ? 'icon-moon.svg' : 'icon-sun.svg'
    }, 
    // toggleIcon(){

    // } 
   
    
  }
}
</script>

<style>

</style>
