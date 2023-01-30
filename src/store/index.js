import { createStore } from 'vuex'

export default createStore({
    name: 'store',
    state: {
        today: new Date().toISOString().split('T')[0],
        minCheckIn: ()=> { return (new Date(today) + 1).toISOString().split('T')[0]},
        minCheckOut: ()=> { return (new Date(minCheckIn) + 1).toISOString().split('T')[0]},
        // Constants
        maxGuests: 10,
        servicesAndPrices: [
            { id:'breakfast', name: 'Café da Manhã', price: 10, description: 'Café da manhã a vontade', imgUrl: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
            { id:'lunch', name: 'Almoço', price: 15, description: 'Experiência gastronômica única', imgUrl: '/src/assets/images/gastronomia/salmon2.jpg' },
            { id:'dinner', name: 'Jantar', price: 20, description: 'Jantares especiais', imgUrl: '/src/assets/images/gastronomia/salmon1.jpg' },
            { id:'allmeals', name: 'Todas as refeições inclusas', price: 35, description: 'Café da manhã, almoço e jantar', imgUrl: '/src/assets/images/gastronomia/salmon1.jpg'},
            { id:'spa', name: 'Spa', price: 30, description: 'Massagens relaxantes', imgUrl: 'https://images.unsplash.com/photo-1630835425197-50feeba99ecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
            { id:'gym', name: 'Academia', price: 10, description: 'Acesso à academia', imgUrl: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' },
            { id:'shuttle', name: 'Transporte Aeroporto-Hotel-Aeroporto', price: 20, description: 'Transporte de ida e volta', imgUrl: 'https://images.unsplash.com/photo-1495150434753-f8ceb319e9dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80' },
            { id:'laundry', name: 'Lavanderia', price: 10, description: 'Lavanderia de roupas', imgUrl: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' },
            { id:'roomservice', name: 'Serviço de Quarto', price: 50, description: 'Serviço de quarto 24 horas', imgUrl: 'https://images.unsplash.com/photo-1580256081112-e49377338b7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80' },
            { id:'wifi', name: 'Wifi de Alta velocidade', price: 10, description: 'Wifi de 1Gbps', imgUrl: 'https://images.unsplash.com/photo-1634909800269-e8ac52a3ec1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
        ],
        roomTypes: [
            { name: 'Classic', price: 300 },
            { name: 'Executive', price: 550 },
            { name: 'Premium', price: 900 },
        ],



        // Variables
        checkIn: '',
        checkOut: '',
        guestsNb: 1,
        servicesChosen: [],
        roomTypeChosen: '',

        showModalServices: false,
        showModalSummary: false,
    },
    mutations: {
        SET_SHOW_MODAL_SERVICES(state, value) {
            state.showModalServices = value;
        },
        SET_SHOW_MODAL_SUMMARY(state, value) {
            state.showModalSummary = value;
        },
    },

    getters: {
        getToday() {
            return state.today;
        },
        getMinCheckIn() {
            return state.minCheckIn;
        },
        getMinCheckOut() {
            return state.minCheckOut;
        },
        getCheckIn() {
            return state.checkIn;
        },
        getCheckOut() {
            return state.checkOut;
        },
        getGuests() {
            return state.guests;
        },
        getServices() {
            return state.services;
        },
        getRoomType() {
            return state.roomType;
        },
        getShowModalServices() {
            return this.state.showModalServices;
        },


    },
    actions: {
        openModalServices({ commit }) {
            commit('SET_SHOW_MODAL_SERVICES', true);
        },
        closeModalServices({ commit }) {
            commit('SET_SHOW_MODAL_SERVICES', false);
        },
        openModalSummary({ commit }) {
            commit('SET_SHOW_MODAL_SUMMARY', true);
        },
        closeModalSummary({ commit }) {
            commit('SET_SHOW_MODAL_SUMMARY', false);
        },
        closeAllModals({ commit }) {
            commit('SET_SHOW_MODAL_SERVICES', false);
            commit('SET_SHOW_MODAL_SUMMARY', false);
        },
    },
    modules: {},
});
