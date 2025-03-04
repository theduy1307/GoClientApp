<template>
  <v-card
    class="most-sales-location-card trezo-card mb-25 border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Most Sales Location</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="ri-more-fill"></i>
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            This Day
          </button>
          <button type="button" class="bg-transparent border-none">
            This Week
          </button>
          <button type="button" class="bg-transparent border-none">
            This Month
          </button>
          <button type="button" class="bg-transparent border-none">
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="image" style="margin: 33px 0">
      <v-img src="@/assets/images/map.svg" alt="map" />
    </div>

    <ul class="ps-0 mb-0 list-unstyled sales_by_locations mt-4">
      <li class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <v-img
            src="@/assets/images/usa.svg"
            class="wh-30 rounded-circle"
            alt="usa"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <span class="fw-medium d-block mb-2">United States</span>
          <div
            class="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-primary" style="width: 85%">
              <span class="count fw-medium text-body">85%</span>
            </div>
          </div>
        </div>
      </li>
      <li class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <v-img
            src="@/assets/images/germany.svg"
            class="wh-30 rounded-circle"
            alt="germany"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <span class="fw-medium d-block mb-2">Germany</span>
          <div
            class="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-danger" style="width: 75%">
              <span class="count fw-medium text-body">75%</span>
            </div>
          </div>
        </div>
      </li>
      <li class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <v-img
            src="@/assets/images/united-kingdom.svg"
            class="wh-30 rounded-circle"
            alt="united-kingdom"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <span class="fw-medium d-block mb-2">United Kingdom</span>
          <div
            class="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-success" style="width: 40%">
              <span class="count fw-medium text-body">40%</span>
            </div>
          </div>
        </div>
      </li>
      <li class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <v-img
            src="@/assets/images/canada.svg"
            class="wh-30 rounded-circle"
            alt="canada"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <span class="fw-medium d-block mb-2">Canada</span>
          <div
            class="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-primary-div" style="width: 10%">
              <span class="count fw-medium text-body">10%</span>
            </div>
          </div>
        </div>
      </li>
      <li class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <v-img
            src="@/assets/images/portugal.svg"
            class="wh-30 rounded-circle"
            alt="portugal"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <span class="fw-medium d-block mb-2">Portugal</span>
          <div
            class="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="05"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-primary" style="width: 05%">
              <span class="count fw-medium text-body">05%</span>
            </div>
          </div>
        </div>
      </li>
      <li class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <v-img
            src="@/assets/images/spain.svg"
            class="wh-30 rounded-circle"
            alt="spain"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <span class="fw-medium d-block mb-2">Spain</span>
          <div
            class="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-secondary bg-opacity-50"
              style="width: 15%"
            >
              <span class="count fw-medium text-body">15%</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import feather from "feather-icons";

export default defineComponent({
  name: "MostSalesLocation",
  setup() {
    onMounted(() => {
      feather.replace();
    });
  },
});
</script>

<style lang="scss" scoped>
.most-sales-location-card {
  .image {
    .v-responsive {
      justify-content: center;
    }
  }
  .progress {
    display: flex;
    .bg-primary {
      background-color: var(--primaryColor) !important;
    }
  }
}
</style>
