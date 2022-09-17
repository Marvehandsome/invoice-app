<template>
<div class="bg-wrapper">
  <div  @click.self="closeModal" class=" w-full h-full text-white " >
    <div class="w-full md:w-1/2 h-full px-10 bg-0C0E16 md:overflow-y-scroll scrollbar slide-left">
      <div class="w-full">
        <p  class="md:hidden">Go Back</p>
        <h2 class="font-bold py-16">New Invoices</h2>
        <form>
          <fieldset>
            <legend class="c-7C5DFA">Bill From</legend>
            <label class=""> Street Address </label> <br> <br>
            
            <CustomInput
              v-model="invoiceDetails.senderAddress.street"
              type="text"
            /> <br>
           
            <div class="flex mt-6 md:mt-10 gap-4 md:gap-6">
              <div class="flex flex-col">
                <label>City </label> <br>
                <CustomInput
                 v-model="invoiceDetails.senderAddress.city"
                 type="text"
                />
              </div>

              <div class="flex flex-col">
                <label>Post Code </label> <br>
                <CustomInput
                  v-model="invoiceDetails.senderAddress.postCode"
                  type="number"
                />
              </div>

              <div class="flex flex-col">
                <label>Country </label> <br>
                <CustomInput
                  v-model="invoiceDetails.senderAddress.country"
                  type="text"
                />
              </div>

            </div>
            <legend class=" c-7C5DFA ">Bill To</legend>
            
            <label class=""> Clients Name </label> <br> <br>
            <CustomInput
              v-model="invoiceDetails.clientName"
              type="text"
            /> 
            <br> <br> <br>      
            <label class=""> Clients Email </label> <br> <br>
            <CustomInput
              v-model="invoiceDetails.clientEmail"
              type="text"
            />    
            <div class="flex mt-6 md:mt-10 gap-4 md:gap-6">
              <div class="flex flex-col">
                <label>City </label> <br>
                <CustomInput
                  v-model="invoiceDetails.clientAddress.city"
                  type="text"
                />
              </div>

              <div class="flex flex-col">
                <label>Post Code </label> <br>
                <CustomInput
                  v-model="invoiceDetails.clientAddress.postCode"
                  type="number"
                />
              </div>

              <div class="flex flex-col">
                <label>Country </label> <br>
                <CustomInput
                  v-model="invoiceDetails.clientAddress.country"
                  type="text"
                />
              </div>

            </div>  
            <br><br>  
            <label class=""> Invoice Date </label> <br> <br>
            <CustomInput
              v-model="invoiceDetails.createdAt"
              type="date"
            /> 
            <br> <br> <br>
            <label class=""> Payment Terms </label> <br> <br>
                        
                                <select v-model="invoiceDetails.paymentTerms" type="text" class="select shadow bg-252945  rounded-md w-full py-6 px-10   leading-tight  focus:shadow-outline" >
                                <option value="Net 1 Day">Net 1 Day</option>
                                <option value="Net 7 Days">Net 7 Days</option>
                                <option value="Net 21 Days">Net 21 Days</option>
                                <option value="Net 30 Days">Net 30 Days</option>
                                </select> <br><br> <br> 

            <label class=""> Project Description </label> <br> <br>
            <CustomInput
            v-model="invoiceDetails.description"
              type="text"
            /> <br>      

            <h3 class="font-bold pt-16">Item List</h3>  

            <div v-for="(item, index) in invoiceDetails.items" :key="index"  class="flex gap-4 mt-16 md:gap-6">
              <div class="flex flex-col w-3/6">
                <label>Item Name </label> <br>
                <CustomInput
                  v-model="item.name"       
                  type="text"
                />
              </div>

              <div class="flex flex-col w-1/6">
                <label>Qty. </label> <br>
                <CustomInput
                @input="getTotal(index)"
                  v-model="item.quantity"
                  type="number"
                />
              </div>

              <div class="flex flex-col w-1/6">
                <label>Price </label> <br>
                <CustomInput
                 @input="getTotal(index)"
                  v-model="item.price"
                  type="number"
                />
              </div>

              <div class="flex flex-col w-1/6">
                <label> Total</label> <br>
                <!-- <h3 class="mt-8">0.00</h3> -->
                <CustomInput v-model="item.total"  type="number" disabled  />
              </div>

              <div class="w-1/6 flex items-center  mt-12 ">
                <img
                  src="@/assets/images/icon-delete.svg"
                  alt="delete icon" 
                  @click="removeItem(index)"
                  class="w-10 cursor-pointer"
                >
              </div>

            </div>
              <div @click="addNewItem"  class="flex items-center mt-16 cursor-pointer gap-2 bg-252945 rounded-full p-4 justify-center ">
                 <div>
                    <img
                      src="@/assets/images/icon-plus.svg"
                      alt="plus icon" class="icon-img "
                    >
                 </div>

                 <p>Add New Item</p>
              </div>    

              <div class="flex justify-between mt-24 mb-16">
                <div class="cursor-pointer bg-252945 py-4 px-8 rounded-full">
                  <p> Discard </p>
                </div>
                <div class="flex gap-6 " >
                  <div class="cursor-pointer bg-252945 py-4 px-8  rounded-full">
                    <p> Save as draft</p>
                  </div>
                  <div @click="saveInvoice" class="cursor-pointer bg-7C5DFA py-4 px-8 rounded-full" >
                    <p> Save & Send</p>
                  </div>
                </div>
              </div>         
          </fieldset>

        </form>
      </div>
    </div>
    <div  class="bg-opacity-50 bg-0C0E16  overscroll-y-none"></div>
  </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import CustomInput from "@/components/CustomInput.vue";
export default {
  components: {
    CustomInput,
  },
  data() {
    return {
      itemList: {},
      invoiceDetails: {
        senderAddress: {
          city: "",
          country: "",
          postCode: "",
          street: "",
        },
        clientName: "",
        clientEmail: "",
        clientAddress: {
          city: "",
          country: "",
          postCode: "",
          street: "",
        },
        createdAt: "",
        description: "",
        paymentDue: "",
        paymentTerms: "",
        status: "",
        items: [{ name: "", quantity: 0, price: 0, total: 0 }],
      },
    };
  },
  methods: {
    closeModal(){
      this.$emit('close')
    },
    getDate(date) {
        this.invoiceDetails.createdAt = date
        this.setPaymentDue()
    },
    setPaymentDue() {
        const date = this.invoiceDetails.createdAt
        const terms = this.invoiceDetails.paymentTerms
        this.invoiceDetails.paymentDue = this.addDays(date, terms).toISOString().split('T')[0];
        console.log(this.invoiceDetails.paymentDue)     
    },

  addDays(date, days) {
    var result = new Date(date, days);
    result.setDate(result.getDate() + days);
    return result;
},
onlySplitDocDate(date){
    return date.split('-')
},

    addNewItem() {
    this.invoiceDetails.items.push({name:"", quantity:0, price:0, total:0})
    },
    getTotal(i) {
        const data = this.invoiceDetails.items[i]
        this.invoiceDetails.items[i].total = data.quantity * data.price
    },
    removeItem(i) {
      this.invoiceDetails.items.splice(i, 1);
    },
    ...mapActions(['createInvoice']),
    ...mapMutations(['addInvoice']), 
    saveInvoice(){
      const newInvoice = {...this.invoiceDetails, status: 'paid'}
      this.addInvoice(newInvoice)
    }
  }
};
</script>

<style>
.icon-img {
  filter:  grayscale(1) invert(1);
}
.bg-form {
  background: #990000;
}

.select{
  box-shadow: 0px 0px 4px 4px rgb(124,93,250); 
  border: solid 1px #494E6E;
}
.select:focus{
    outline:none;
    border: 1px solid #7c5ef3;
}
</style>
