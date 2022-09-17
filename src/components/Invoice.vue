<template>
  <div>
    <div
      @click="clickInvoice"
      class="flex flex-col cursor-pointer my-8 "
    >
      <div
        v-for="invoice in allInvoices"
        :key="invoice.id"
        class="md:px-12 md:py-24 rounded-2xl shadow-lg justify-between Modals w-3/6  flex items-center  font-bold mb-4 md:mb-8"
        :class="darkMode ? 'bg-252945  ' : 'modalTheme  '"
      >
        <div class="flex gap-16 items-center ">
          <h3 class="">
            <span class="c-7C5DFA">#</span> {{invoice.clientName}} </h3>
          <p>Due <span>{{ invoice.paymentTerms }} </span>  </p>
        </div>
        <div class="flex md:gap-16 items-center">
          <div class="flex md:gap-16 items-center">
            <p class="name">{{invoice.clientName}}</p>
            <h3 class="font-bold">£{{invoice.items[0].price}}</h3>
          </div>
          <div class="flex items-center md:gap-8">
            <p class="font-bold">Draft</p>
            <div>
              <img
                src="@/assets/images/icon-arrow-right.svg"
                alt="plus icon"
              >
            </div>

          </div>

        </div>
  </div>
  </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    darkMode: {
      type: Boolean,
    },
    invoiceDetails: Object,
  },
  name: "InvoiceComp",
  computed: mapGetters(["allInvoices"]),
  data() {
    return {};
  },
  methods: {
    clickInvoice() {
      return this.$router.push("/InvoiceDetails");
    },
  },
};
</script>

<style>
</style>
