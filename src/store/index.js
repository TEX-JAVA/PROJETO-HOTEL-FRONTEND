const store = new Vuex.Store({
    state: {
        date: new Date()
    },
    mutations: {
        setDate(state, date) {
            state.date = date;
        }
    },
    actions: {
        setDate({ commit }, date) {
            commit('setDate', date);
        }
    },
    getters: {
        date: state => state.date
    }


});

export default store;



