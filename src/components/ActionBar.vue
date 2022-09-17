<template>
  <div class="">
    <InvoiceForm
      @close="createInvoice"
      v-if="showInvoiceForm"
      class="z-12 absolute top-0 slide-left "
    />
    <div class="flex justify-between Modals w-3/6 pt-32 ">
      <div class="">
        <h2 class="font-bold">Invoices</h2>
        <p class="flex">
          <span class="hidden lg:block"> There are </span>
          <span class="block">{{ invoiceNo }} total invoices </span>
        </p>
      </div>

      <div class=" flex items-center md:gap-24">
        <div
          @click="isFilterOpen=!isFilterOpen"
          class="flex gap-6 items-center cursor-pointer relative "
        >
          <p class=" font-bold flex gap-2">
            <span class="block"> Filter </span>
            <span class="hidden lg:block"> by status </span>
          </p>
          <img
            src="@/assets/images/icon-arrow-down.svg"
            alt="plus icon"
          >

      </div>
      <div
        v-show="isFilterOpen"
        class="absolute ml-28 top-56"
      >
        <ul>
          <li>
            <label class="control control-checkbox bold">
              Draft
              <input
                v-model="filter.draft"
                value="draft"
                type="checkbox"
              />
              <div class="control_indicator"></div>
            </label>
          </li>
          <li>
            <label class="control control-checkbox bold">
              Pending
              <input
                v-model="filter.pending"
                value="pending"
                type="checkbox"
              />
              <div class="control_indicator"></div>
            </label>
          </li>
          <li>
            <label class="control control-checkbox bold">
              Paid
              <input
                v-model="filter.paid"
                value="paid"
                type="checkbox"
              />
              <div class="control_indicator"></div>
            </label>
          </li>
        </ul>
    </div>

    <div
      @click="createInvoice()"
      class="flex items-center gap-6 cursor-pointer bg-7C5DFA p-4 rounded-full"
    >
      <div class="bg-white p-6 rounded-full ">
        <img
          src="@/assets/images/icon-plus.svg"
          alt="plus icon"
        >
      </div>
      <p class="bold pr-4 text-white">New Invoice</p>
  </div>
  </div>
  </div>

  </div>
</template>

<script>
import { mapActions } from "vuex";
import InvoiceForm from "@/components/InvoiceForm.vue";
export default {
  name: "ActionBar",
  components: {
    InvoiceForm,
  },
  data() {
    return {
      showInvoiceForm: false,
      invoiceNo: "7",
      isFilterOpen: false,
      filter: {
        draft: false,
        pending: false,
        paid: false,
      },
      invoicesAmount: 0,
      oneInvoiceFilter: "",
    };
  },
  watch: {
    filter: {
      handler() {
        this.handleChecked(this.filter)
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions([
      "handleChecked"
    ]),
    createInvoice() {
      this.showInvoiceForm = !this.showInvoiceForm;
    },
  },
};
</script>
<style scoped>
</style>
