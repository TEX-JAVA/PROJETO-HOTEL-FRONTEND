<script>
import HotelHeader from './components/HotelHeader.vue'
import HotelFooter from './components/HotelFooter.vue'
import HotelMainPage from './components/HotelMainPage.vue';
import HotelAbout from './components/HotelAbout.vue';
import store from './store';

export default {
  name: 'App',
  components: {
    HotelHeader,
    HotelFooter,
    HotelMainPage,
    HotelAbout,
  },
  mounted() {

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





