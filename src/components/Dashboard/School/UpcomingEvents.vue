<template>
  <div class="card custom-shadow rounded-3 bg-white border">
    <div class="custom-padding-30">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap ga-1 pb-4"
      >
        <h5 class="mb-0 fw-semibold">Upcoming Events</h5>
        <div
          class="swiper-pagination-upcoming-events text-end"
          style="width: 100px"
        ></div>
      </div>

      <Swiper
        :slidesPerView="1"
        :spaceBetween="25"
        :loop="false"
        :centeredSlides="false"
        :preventClicks="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :pagination="{
          el: '.swiper-pagination-upcoming-events',
          clickable: true,
        }"
        :modules="modules"
        class="upcoming-events-slide-two"
      >
        <SwiperSlide class="cursor" v-for="item in items" :key="item.id">
          <div class="bg-body-bg p-3 rounded-3" style="margin-top: 2px">
            <div class="d-flex flex-wrap ga-1 justify-content-between mb-1">
              <span class="fs-16 fw-medium">
                {{ item.title }}
              </span>
              <span>
                {{ item.date }}
              </span>
            </div>
            <div class="d-flex flex-wrap ga-1 justify-content-between">
              <span class="d-flex align-items-center">
                <i class="ri-time-line fs-16 me-2 text-body"></i>
                <span class="text-body">{{ item.time }}</span>
              </span>
              <span class="d-flex align-items-center">
                <i class="ri-map-pin-line fs-16 me-2 text-body"></i>
                <span class="text-body">{{ item.location }}</span>
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

export default defineComponent({
  name: "UpcomingEvents",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Science Fair",
          date: "November 25, 2024",
          time: "9:00 AM - 3:00 PM",
          location: "Auditorium",
        },
        {
          id: 2,
          title: "Science Fair",
          date: "November 28, 2024",
          time: "9:00 AM - 3:00 PM",
          location: "California",
        },
        {
          id: 3,
          title: "Science Fair",
          date: "November 25, 2024",
          time: "9:00 AM - 3:00 PM",
          location: "Auditorium",
        },
        {
          id: 4,
          title: "Science Fair",
          date: "November 28, 2024",
          time: "9:00 AM - 3:00 PM",
          location: "California",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
});
</script>

styscss
