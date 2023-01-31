import { createStore } from 'vuex'

export default createStore({
    name: 'store',
    state: {
        today: '',
        minCheckIn: '',
        minCheckOut: '',
        // Constants
        maxGuests: 10,
        servicesAndPrices: [
            { id:'breakfast', name: 'Café da Manhã', price: 10, description: 'Café da manhã a vontade', imgUrl: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
            { id:'lunch', name: 'Almoço', price: 15, description: 'Experiência gastronômica única', imgUrl: '/src/assets/images/gastronomia/salmon2.jpg' },
            { id:'dinner', name: 'Jantar', price: 20, description: 'Jantares especiais', imgUrl: '/src/assets/images/gastronomia/salmon1.jpg' },
            //{ id:'allmeals', name: 'Todas as refeições inclusas', price: 35, description: 'Café da manhã, almoço e jantar', imgUrl: '/src/assets/images/gastronomia/salmon1.jpg'},
            { id:'spa', name: 'Spa', price: 30, description: 'Massagens relaxantes', imgUrl: 'https://images.unsplash.com/photo-1630835425197-50feeba99ecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
            { id:'gym', name: 'Academia', price: 10, description: 'Acesso à academia', imgUrl: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' },
            { id:'shuttle', name: 'Transporte Aeroporto-Hotel', price: 20, description: 'Transporte de ida e volta', imgUrl: 'https://images.unsplash.com/photo-1495150434753-f8ceb319e9dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80' },
            { id:'laundry', name: 'Lavanderia', price: 10, description: 'Lavanderia de roupas', imgUrl: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' },
            { id:'roomservice', name: 'Serviço de Quarto', price: 50, description: 'Serviço de quarto 24 horas', imgUrl: 'https://images.unsplash.com/photo-1635350644128-c8e41eb8b2a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
            { id:'wifi', name: 'Wifi de Alta velocidade', price: 10, description: 'Wifi de 1Gbps', imgUrl: 'https://images.unsplash.com/photo-1634909800269-e8ac52a3ec1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
        ],
        roomTypes: [
            { id: 'classic', name: 'Classic', price: 300, description: 'Experimente toda a vitalidade do Brasil em um quarto pensado para te permitir descansar ou se concentrar no trabalho.', imgUrl: '/src/assets/images/reserva/classic.jpg' },
            { id: 'executive', name: 'Executive', price: 550, description: 'Você poderá recarregar as energias em um quarto com uma cama queen-size, enquanto relaxa assistindo TV ou tomando um bom banho.', imgUrl: '/src/assets/images/reserva/executive.jpg' },
            { id: 'premium', name: 'Premium', price: 900, description: 'Descubra a combinação perfeita de trabalho e descanso. Uma suíte espaçosa, com todo o conforto que você imaginar.', imgUrl: '/src/assets/images/reserva/premium.jpg' },
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
        SET_TODAY(state, value) {
            state.today = value;
        },
        SET_MIN_CHECK_IN(state, value) {
            state.minCheckIn = value;
        },
        SET_MIN_CHECK_OUT(state, value) {
            state.minCheckOut = value;
        },

        SET_SHOW_MODAL_SERVICES(state, value) {
            state.showModalServices = value;
        },
        SET_SHOW_MODAL_SUMMARY(state, value) {
            state.showModalSummary = value;
        },
        SET_CHECK_IN(state, value) {
            state.checkIn = value;
        },
        SET_CHECK_OUT(state, value) {
            state.checkOut = value;
        },
        SET_GUESTS_NB(state, value) {
            state.guestsNb = value;
        },
        SET_SERVICES_CHOSEN(state, value) {
            state.servicesChosen = value;
        },
        SET_ROOM_TYPE_CHOSEN(state, value) {
            state.roomTypeChosen = value;
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
        getServicesNames() {
            return this.state.servicesChosen.map((service) => service.name);
        },
        getRoomType() {
            return state.roomType;
        },
        getShowModalServices() {
            return this.state.showModalServices;
        },


    },
    actions: {
        setToday({ commit }) {
            const today = new Date().toISOString().split('T')[0];
            commit('SET_TODAY', today);
        },
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
        setCheckIn({ commit }, value) {
            if (!localStorage.getItem('checkIn')) {
                localStorage.setItem('checkIn', '');
            }
            const checkIn = ''
            localStorage.setItem('checkIn', value);
            commit('SET_CHECK_IN', value);
        },
        setMinCheckIn({ commit }, value) {
            const minCheckIn = new Date(new Date(this.state.today).getTime() + 86400000).toISOString().split('T')[0]; 
            commit('SET_MIN_CHECK_IN', minCheckIn);
        },
        setCheckOut({ commit }, value) {
            if (!localStorage.getItem('checkOut')) {
                localStorage.setItem('checkOut', '');
            }
            localStorage.setItem('checkOut', value);
            commit('SET_CHECK_OUT', value);
        },
        setMinCheckOut({ commit }, value) {
            if (this.state.checkIn === '') {
                const minCheckOut = new Date(new Date(this.state.minCheckIn).getTime() + 86400000).toISOString().split('T')[0]; 
                commit('SET_MIN_CHECK_OUT', minCheckOut);
            } else {
                const minCheckOut = new Date(new Date(this.state.checkIn).getTime() + 86400000).toISOString().split('T')[0];
                commit('SET_MIN_CHECK_OUT', minCheckOut);
            }
        },
        setGuestsNb({ commit }, value) {
            if (!localStorage.getItem('guestsNb')) {
                localStorage.setItem('guestsNb', '');
            }
            localStorage.setItem('guestsNb', value);
            commit('SET_GUESTS_NB', value);
        },
        setRoomTypeChosen({ commit }, value) {
            if (!localStorage.getItem('roomTypeChosen')) {
                localStorage.setItem('roomTypeChosen', '');
            }
            localStorage.setItem('roomTypeChosen', value);
            commit('SET_ROOM_TYPE_CHOSEN', value);
        },
        setServicesChosen({ commit }, value) {
            if (!localStorage.getItem('servicesChosen')) {
                localStorage.setItem('servicesChosen', '');
            }
            let servicesChosen = [...this.state.servicesChosen]
            if (servicesChosen.includes(value)) {
                servicesChosen = servicesChosen.filter(item => item !== value);
            } else 
                servicesChosen.push(value);
            localStorage.setItem('servicesChosen', JSON.stringify(servicesChosen));
            commit('SET_SERVICES_CHOSEN', servicesChosen);
        },
        setServicesSelectedOnLoad({ commit }) {
            if (localStorage.getItem('servicesChosen') && localStorage.getItem('servicesChosen') !== ('' || '[]')) {
                const servicesChosen = JSON.parse(localStorage.getItem('servicesChosen'));
                commit('SET_SERVICES_CHOSEN', servicesChosen);
            }
        },
        setCheckInOnLoad({ commit }) {
            if (localStorage.getItem('checkIn') && localStorage.getItem('checkIn') !== '') {
                const checkIn = localStorage.getItem('checkIn');
                commit('SET_CHECK_IN', checkIn);
            }
        },
        setCheckOutOnLoad({ commit }) {
            if (localStorage.getItem('checkOut') && localStorage.getItem('checkOut') !== '') {
                const checkOut = localStorage.getItem('checkOut');
                commit('SET_CHECK_OUT', checkOut);
            }
        },
        setGuestsNbOnLoad({ commit }) {
            if (localStorage.getItem('guestsNb') && localStorage.getItem('guestsNb') !== '') {
                const guestsNb = localStorage.getItem('guestsNb');
                commit('SET_GUESTS_NB', guestsNb);
            }
        },
        setRoomTypeChosenOnLoad({ commit }) {
            if (localStorage.getItem('roomTypeChosen') && localStorage.getItem('roomTypeChosen') !== '') {
                const roomTypeChosen = localStorage.getItem('roomTypeChosen');
                commit('SET_ROOM_TYPE_CHOSEN', roomTypeChosen);
            }
        },
        

    },
    modules: {},
});
