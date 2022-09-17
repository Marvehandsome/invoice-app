<template>
  <div  :class="darkMode ? ' darkTheme' : 'lightTheme '" class="h-full">
      <div class="flex  pt-16 flex-col items-center justify-between ">
        <div class="items-center">
         <img src="@/assets/images/illustration-empty.svg" alt="illustration" class="">
        </div>
        <div class="text-center">
          <h2 class="font-bold my-6">There is nothing here</h2>
          <p>
            Create an invoice by clicking the <br> <span class="font-bold"> New Invoice </span> button and get started
          </p>
        </div>
      </div>
    
  </div>
</template>
<script>
export default {
    props: {
    darkMode: {
      type: Boolean,
    }
  },
  name: 'InvoiceEmpty',
  data(){
    return{
      
    }
  }
}
</script>

<style>
  
</style>
