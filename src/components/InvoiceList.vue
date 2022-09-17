<template>
  <div>
    <div class="">
      <div v-if="invoices.length > 0">
          <InvoiceComp  :darkMode="darkMode"/>
      </div> 
      <div v-else class="">
          <InvoiceEmpty :darkMode="darkMode" class=""/>
      </div>
   </div>
  </div>
</template>

<script>
import InvoiceEmpty from '@/components/InvoiceEmpty.vue'
import InvoiceComp from '@/components/Invoice.vue'
export default {
    props: {
    darkMode: {
      type: Boolean,
    }
  },
  components: {
    InvoiceComp,
    InvoiceEmpty,
  },
  data(){
    return{
      invoices: this.$store.state.invoices.invoiceDetails
    }
  },
  methods: {
       toggleDarkMode(){
      
     }
  }
}
</script>

<style>

</style>
