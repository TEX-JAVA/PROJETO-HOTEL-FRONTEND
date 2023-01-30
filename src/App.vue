<script>
import HotelHeader from './components/HotelHeader.vue'
import HotelFooter from './components/HotelFooter.vue'
import HotelMainPage from './components/HotelMainPage.vue';
import HotelAbout from './components/HotelAbout.vue';
import store from './store';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    HotelHeader,
    HotelFooter,
    HotelMainPage,
    HotelAbout,
  },
  methods: {
    ...mapActions(['setServicesSelectedOnLoad', 'setRoomTypeChosenOnLoad', 'setGuestsNbOnLoad', 'setCheckInOnLoad', 'setCheckOutOnLoad']),
  },
  mounted() {
    this.setServicesSelectedOnLoad();
    this.setRoomTypeChosenOnLoad();
    this.setGuestsNbOnLoad();
    this.setCheckInOnLoad();
    this.setCheckOutOnLoad();
  },
}
</script>

<template>
  <HotelHeader />
  <router-view />
  <HotelFooter />
</template>

<style lang="scss" scoped>

</style>





