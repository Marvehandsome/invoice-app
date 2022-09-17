<template>
   <div  class="lightTheme " :class="darkMode ? ' darkTheme' : 'lightTheme ' ">
    <NavBar @mode="toggleDarkMode"/>   
    <div class="pt-72 pb-24">

        <div :class="darkMode ? 'bg-252945  ' : 'modalTheme  '" class=" relative font-bold md:px-12 md:py-12 rounded-2xl shadow-lg justify-between Modals w-3/6  flex items-center ">
            <router-link :to="{ name: 'Index' }" class="absolute flex font-bold left-0 top-0 -mt-24">
                <div class="flex items-center gap-8">
                    <div>
                        <img
                        src="@/assets/images/icon-arrow-left.svg"
                        alt="plus icon"
                        >
                    </div>
                    <p class="font-bold">Go Back</p>
                </div>
            </router-link>
            <p>Status  {{$route.params.id}}</p>
            <div>
                <p class=""></p>
            </div>
            <div class="flex gap-8 items-center font-bold">
                <div  class=" c-7e88c3 cursor-pointer bttn-F9FAFE px-10 py-6 rounded-full">
                    <p> Edit </p>
                </div>
                <div class="bttn-EC5757 cursor-pointer px-10 py-6 rounded-full text-white">
                    <p> Delete </p></div>
                <div class="bttn-888EB0 cursor-pointer px-10 py-6 rounded-full text-white">
                    <p>Mark as Paid</p>
                </div>
            </div>
      
        </div>

        <div :class="darkMode ? 'bg-252945  ' : 'modalTheme  '" class="font-bold md:px-12 md:py-12 mt-16 rounded-2xl shadow-lg  Modals w-3/6  items-center ">
         <div class="flex justify-between w-full">
             <div>
                 <h3>RT3080</h3>
                 <p>Re-branding</p>
            </div>
             <div>
                 <p>106 Kendell Street,<br> Sharrington <br> NR245WQ <br> United Kingdom </p>
             </div>
         </div>

         <div class="flex w-full gap-6">
            <div class="flex w-2/4 justify-between">
                <div class="w-1/2">
                    <div>
                        <p>Invoice Date</p>
                        <h3>2021-8-18 </h3>                        
                    </div>
                    <div class="mt-8">
                        <p>Payment due</p>
                        <h3>2021-8-19 </h3>                        
                    </div>
                </div>

                <div class="w-1/2">
                    <p>Bill To</p>
                    <h3 class="font-bold">Jensen Huang</h3>
                    <p>19 Union Terrace,<br> London,<br> El 3EZ, <br> United Kingdom</p>
                
                </div>
            </div>
            <div class="w-2/4">
                <p>Sent To</p>
                <p>jensenh@mail.com</p>
            </div>
         </div>
         <div class="w-full  mt-8 md:mt-16 ">
             <div class="w-full md:px-12 md:py-12 bg-F9FAFE rounded-t-2xl">
                 <div class="flex w-full text-center">
                     <p class="w-1/4 text-left">Item Name</p>
                     <p class="w-1/4">QTY.</p>
                     <p class="w-1/4">Price</p>
                     <p class="w-1/4 text-right">Total</p>
                 </div>
                 <div class="flex w-full text-center">
                     <p class="w-1/4 text-left">Brand Guidelines</p>
                     <p class="w-1/4">1</p>
                     <p class="w-1/4">£500</p>
                     <p class="w-1/4 text-right">£500</p>
                 </div>
             </div>
                <div  class="flex justify-between items-center md:px-12 md:py-12 bg-252945 rounded-b-2xl">
                    <p>Amount Due</p>
                    <h2> £500 </h2>
                </div>
         </div>

        </div>
    </div>

    <!-- <div>
      <ActionBar />
      <InvoiceList :darkMode="darkMode" class=""/>
    </div> -->
 
      
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
export default {
 name: 'invoice-details',
 components: {
     NavBar
},
 data(){
   return{
     darkMode: false,

   }
 },
 methods: {
    toggleDarkMode(){
       this.darkMode = !this.darkMode 
     }
 }
}
</script>

<style>

</style>
