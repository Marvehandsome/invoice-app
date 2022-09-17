<template>
  <div  class="lightTheme h-screen" :class="darkMode ? ' darkTheme' : 'lightTheme ' ">
    <NavBar @mode="toggleDarkMode"/>   
    <div>
      <ActionBar />
      <InvoiceList :darkMode="darkMode" class=""/>
    </div>
 
      
  </div>
</template>

 <script>
import InvoiceList from '@/components/InvoiceList.vue'
import ActionBar from '@/components/ActionBar.vue'
import NavBar from '@/components/NavBar.vue'
export default {
  // props: {
  //   darkMode: {
  //     type: Boolean,
  //   }
  // },
    name: 'IndexPage',
    components: {
      InvoiceList,
      ActionBar,
      NavBar
   },
   data(){
     return{
       showModal: false,
       darkMode: false,

     }
     
   },
   methods: {
    toggleModal(){
      this.showModal =!this.showModal
     },
     toggleDarkMode(){
       this.darkMode = !this.darkMode
     }
   }

}
</script>
<style scoped>
  .bg-color {
    /* background-color: rgba(51, 214, 159, 0.06);
    background: #0c0e16; */
    height: 100vh;
}
</style>
