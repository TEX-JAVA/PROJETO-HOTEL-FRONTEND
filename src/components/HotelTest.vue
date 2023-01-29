<template>
    <div class="test-div">
        <button @click="showModal = true">Open modal</button>
        <HotelModal v-if="showModal" @close-modal="showModal = false" />
    </div>
</template>

<script>
import HotelModal from './HotelModal.vue'
export default {
    name: 'HotelTest',
    components: {
        HotelModal,
    },
    data() {
        return {
            showModal: false,
        }
    }
}
</script>

<style scoped lang="scss">
.test-div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 50px;
}
</style>