<template>
  <v-card
    class="recent-property-card trezo-card bg-primary-div border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Recent Property</h5>
      <div class="swiper-pagination3 text-end" style="width: 100px"></div>
    </div>

    <Swiper
      :slidesPerView="1"
      :spaceBetween="35"
      :centeredSlides="false"
      :preventClicks="true"
      :loop="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      :pagination="{
        el: '.swiper-pagination3',
        clickable: true,
      }"
      :breakpoints="{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1199: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 1,
        },
        1600: {
          slidesPerView: 1,
        },
        1700: {
          slidesPerView: 2,
        },
      }"
      :modules="modules"
      class="recent-property-slide"
    >
      <SwiperSlide
        v-for="property in propertys"
        :key="property.id"
        class="bg-white"
      >
        <v-img :src="property.image" class="rounded-3" alt="property" />

        <div class="mt-3">
          <h5 class="mb-2">${{ property.price }}</h5>
          <div class="d-flex flex-wrap ga-2 justify-content-between mb-2">
            <span class="text-body">{{ property.location }}</span>
            <a
              href="#"
              class="fs-14 text-primary fw-medium text-decoration-none"
            >
              View More
            </a>
          </div>
          <div class="d-flex flex-wrap ga-3">
            <div class="d-flex align-items-center">
              <i class="ri-hotel-bed-line fs-18 text-primary"></i>
              <span class="text-body ms-1">{{ property.bed }} Bed</span>
            </div>
            <div class="d-flex align-items-center">
              <i class="ri-showers-line fs-18 text-primary"></i>
              <span class="text-body ms-1">{{ property.bath }} Bath</span>
            </div>
            <div class="d-flex align-items-center">
              <i class="ri-square-line fs-18 text-primary"></i>
              <span class="text-body ms-1">{{ property.sqft }} sqft</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

export default defineComponent({
  name: "RecentProperty",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const propertys = ref([
      {
        id: 1,
        image: require("@/assets/images/property-5.png"),
        price: "800,000",
        location: "35 Prince Consort Road",
        bed: "6",
        bath: "5",
        sqft: "1900",
      },
      {
        id: 2,
        image: require("@/assets/images/property-6.png"),
        price: "220,000",
        location: "58 Gateway Road Portland",
        bed: "8",
        bath: "6",
        sqft: "2000",
      },
      {
        id: 3,
        image: require("@/assets/images/property-5.png"),
        price: "800,000",
        location: "35 Prince Consort Road",
        bed: "6",
        bath: "5",
        sqft: "1900",
      },
      {
        id: 4,
        image: require("@/assets/images/property-6.png"),
        price: "220,000",
        location: "58 Gateway Road Portland",
        bed: "8",
        bath: "6",
        sqft: "2000",
      },
    ]);
    return {
      modules: [Autoplay, Pagination],
      propertys,
    };
  },
});
</script>

<style lang="scss" scoped>
.recent-property-card {
  .bg-primary-div {
    background-color: rgb(173 99 246) !important;
  }
  .mt-3 {
    margin-top: 1rem !important;
  }
}
</style>
