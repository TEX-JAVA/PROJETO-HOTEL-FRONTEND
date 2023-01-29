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
            { name: 'Breakfast', price: 10 },
            { name: 'Lunch', price: 15 },
            { name: 'Dinner', price: 20 },
            { name: 'All-Meals', price: 35 },
            { name: 'Spa', price: 30 },
            { name: 'Gym', price: 10 },
            { name: 'Hotel Shuttle', price: 20 },
            { name: 'Laundry', price: 10 },
            { name: 'Room Service', price: 50 },
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

        showModal: true,
    },
    mutations: {
        
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
        getShowModal() {
            return this.state.showModal;
        },


    },
    actions: {
        
    },
    modules: {},
});
