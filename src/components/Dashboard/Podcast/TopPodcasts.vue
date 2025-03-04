<template>
  <v-card
    class="top-podcasts-card trezo-card custom-shadow rounded-3 bg-white border p-0"
    style="padding-bottom: 18px"
  >
    <div class="v-card-header mb-0" style="padding: 20px 25px">
      <h3 class="mb-0 fs-18 fw-semibold">Top Podcasts</h3>
      <div
        class="dropdown select-dropdown without-border position-relative"
        style="right: -5px"
      >
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu text-body border-none d-inline-block border-radius"
            >
              Last 28 days
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              Last 28 days
            </button>
            <button type="button" class="bg-transparent border-none">
              Last 48 days
            </button>
            <button type="button" class="bg-transparent border-none">
              Last 90 days
            </button>
            <button type="button" class="bg-transparent border-none">
              Last Year
            </button>
          </v-list>
        </v-menu>
      </div>
    </div>

    <div class="default-table-area style-three style-two top-podcasts pb-10">
      <div class="table-responsive">
        <table
          class="table align-middle border-0"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <thead>
            <tr>
              <th
                scope="col"
                class="bg-body-bg"
                style="padding-top: 6.5px; padding-bottom: 6.5px"
              >
                <span class="fs-12 fw-medium text-body">Name</span>
              </th>
              <th
                scope="col"
                class="bg-body-bg"
                style="padding-top: 6.5px; padding-bottom: 6.5px"
              >
                <span class="fs-12 fw-medium text-body">Episodes</span>
              </th>
              <th
                scope="col"
                class="bg-body-bg"
                style="padding-top: 6.5px; padding-bottom: 6.5px"
              >
                <span class="fs-12 fw-medium text-body">Earnings</span>
              </th>
              <th
                scope="col"
                class="bg-body-bg"
                style="padding-top: 6.5px; padding-bottom: 6.5px"
              >
                <span class="fs-12 fw-medium text-body">Ratings</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(podcast, index) in podcasts" :key="index">
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      :src="podcast.image"
                      class="wh-44 rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-10 position-relative top-2">
                    <h6 class="mb-0 fs-14 fw-medium">{{ podcast.name }}</h6>
                    <span class="fs-12 text-body">{{ podcast.role }}</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom">
                <span class="fs-14 fw-medium">{{ podcast.episodes }}</span>
              </td>
              <td class="border-bottom">
                <span class="fs-14 fw-medium">{{ podcast.earnings }}</span>
              </td>
              <td class="border-bottom">
                <ul class="ps-0 mb-0 list-unstyled d-flex ga-1">
                  <li v-for="star in 5" :key="star">
                    <i
                      :class="getStarClass(star, podcast.rating)"
                      class="text-orange-darken-2 fs-15"
                    ></i>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TopPodcasts",
  setup() {
    const podcasts = ref([
      {
        image: require("@/assets/images/user-129.png"),
        name: "Tom Richards",
        role: "Content Strategist",
        episodes: 95,
        earnings: "$125,000",
        rating: 4.5,
      },
      {
        image: require("@/assets/images/user-130.png"),
        name: "Amanda Garcia",
        role: "Social Media",
        episodes: 110,
        earnings: "$140,000",
        rating: 4.5,
      },
      {
        image: require("@/assets/images/user-131.png"),
        name: "Lisa Kim",
        role: "Branding Consultant",
        episodes: 85,
        earnings: "$160,000",
        rating: 4,
      },
      {
        image: require("@/assets/images/user-132.png"),
        name: "Michael Young",
        role: "Data Analytics",
        episodes: 130,
        earnings: "$90,000",
        rating: 3.5,
      },
      {
        image: require("@/assets/images/user-133.png"),
        name: "Ravi Patel",
        role: "SEO & SEM",
        episodes: 75,
        earnings: "$85,000",
        rating: 3,
      },
    ]);

    // Function to determine star icons based on rating
    const getStarClass = (star: number, rating: number) => {
      if (star <= Math.floor(rating)) {
        return "ri-star-fill text-rating-color";
      } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
        return "ri-star-half-line text-rating-color";
      } else {
        return "ri-star-line text-rating-color";
      }
    };

    return {
      podcasts,
      getStarClass,
    };
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
