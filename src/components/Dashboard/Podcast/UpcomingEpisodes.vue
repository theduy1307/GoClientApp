<template>
  <v-card
    class="upcoming-episodes-card trezo-card custom-shadow rounded-3 bg-white border mb-25 p-0 pb-4"
  >
    <div class="v-card-header mb-0" style="padding: 20px 25px">
      <h3 class="mb-0 fs-18 fw-semibold">Upcoming Episodes</h3>
      <div class="dropdown action-opt right-for-rtl" style="right: -8px">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="position-relative dot-btn p-0 bg-transparent text-body border-none"
            >
              <i data-feather="more-vertical"></i>
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              Today
            </button>
            <button type="button" class="bg-transparent border-none">
              Last 7 Days
            </button>
            <button type="button" class="bg-transparent border-none">
              Last Month
            </button>
            <button type="button" class="bg-transparent border-none">
              Last 1 Year
            </button>
          </v-list>
        </v-menu>
      </div>
    </div>

    <div class="last-child-none pb-20">
      <div
        v-for="episode in episodes"
        :key="episode.id"
        class="d-flex ga-2 justify-content-between align-items-center border-bottom border-body-bg custom-padding-30 pt-0 child"
        style="margin-bottom: 13.5px; padding-bottom: 13.5px"
      >
        <div class="d-flex">
          <div class="flex-shrink-0">
            <div
              class="text-center rounded-circle d-flex justify-content-center align-items-center"
              :class="episode.iconBgClass"
              style="width: 40px; height: 40px; line-height: 40px"
            >
              <v-img :src="episode.icon" alt="notice-board-icon" />
            </div>
          </div>
          <div class="flex-grow-1 ms-10">
            <h4 class="fs-14 fw-medium mb-0">{{ episode.title }}</h4>
            <p class="fs-12 mb-1">{{ episode.author }}</p>
            <div class="d-flex align-items-center">
              <i class="ri-calendar-line text-primary"></i>
              <span class="fw-medium fs-12 text-primary ms-1">
                {{ episode.date }}
              </span>
            </div>
          </div>
        </div>
        <button
          class="rounded-circle d-inline-block text-center hover-bg text-body for-dark-read text-decoration-none border bg-transparent"
          style="width: 43px; height: 43px; line-height: 42px; color: #b1bbc8"
        >
          <i class="ri-arrow-right-up-line fs-24"></i>
        </button>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import feather from "feather-icons";

export default defineComponent({
  name: "UpcomingEpisodes",
  data() {
    return {
      episodes: [
        {
          id: 1,
          title: "AI for Content Strategy",
          author: "Amanda Garcia",
          date: "October 20, 2024",
          icon: require("@/assets/images/notice-board-icon-1.svg"),
          iconBgClass: "bg-primary-div",
        },
        {
          id: 2,
          title: "Secrets to Viral Marketing",
          author: "Sarah Johnson",
          date: "October 25, 2024",
          icon: require("@/assets/images/notice-board-icon-2.svg"),
          iconBgClass: "bg-primary",
        },
        {
          id: 3,
          title: "Social Media Strategy",
          author: "David Chen",
          date: "October 28, 2024",
          icon: require("@/assets/images/notice-board-icon-3.svg"),
          iconBgClass: "bg-danger",
        },
        {
          id: 4,
          title: "Content Trends for 2025",
          author: "Tom Richards",
          date: "November 3, 2024",
          icon: require("@/assets/images/notice-board-icon-4.svg"),
          iconBgClass: "bg-success",
        },
      ],
    };
  },
  setup() {
    onMounted(() => {
      feather.replace();
    });
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  &.trezo-card {
    border: 1px solid var(--borderColor) !important;
  }
}
</style>
