// import axios from "axios";

const state = {
    invoiceDetails: [],
    loading: false,
    filteredAmount: 0,
    filters: {
        draft: false,
        pending: false,
        paid: false,
    },
};

const getters = {
    allInvoices: (state) => state.invoiceDetails,
    loadingState: (state) => state.loading,
    filteredInvoices: (state) => {
        if (state.filters.draft) {
            return state.invoiceDetails.map(el => el.status === 'draft')
        }
    }

};
const actions = {
    createInvoice({ commit }, invoice) {
        // localStorage.setItem('invoiceData', state.invoiceDetails);
        commit('addInvoice', invoice)
    },

    removeInvoice({ commit }, invoice) {
        commit('deleteInvoice', invoice)
    },
    handleChecked({ commit }, data) {
        commit('resetFilter', data)
    }
};

const mutations = {
    addInvoice: (state, invoice) => state.invoiceDetails.unshift(invoice),
    deleteInvoice: (state, invoice) => state.invoiceDetails.splice(invoice, 1),
    resetFilterData: (state, data) => state.filters = data

};





export default {
    state,
    getters,
    actions,
    mutations
}