<template>
  <v-card
    class="call-center-geography-card trezo-card mb-25 border border-radius d-block bg-white custom-shadow"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Call Center Geography</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            Last Month
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Today
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Week
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Month
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Year
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="d-flex justify-content-center" style="margin: 40px 0">
      <v-img src="@/assets/images/map.svg" alt="map" style="height: 187px" />
    </div>

    <ul class="ps-0 mb-0 list-unstyled sales_by_locations">
      <li class="d-flex align-items-center pe-0">
        <div class="flex-shrink-0">
          <v-img
            src="@/assets/images/usa.svg"
            class="wh-30 rounded-circle"
            alt="usa"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <div class="d-flex justify-content-between position-relative">
            <span class="fw-medium d-block mb-2">United States</span>
            <span class="count fw-medium text-body">90%</span>
            <span
              class="position-absolute top-50 start-50 translate-middle pb-2 fw-medium"
              >1,200 calls</span
            >
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-success-60" style="width: 90%"></div>
          </div>
        </div>
      </li>
      <li class="d-flex align-items-center pe-0">
        <div class="flex-shrink-0">
          <v-img
            src="@/assets/images/canada.svg"
            class="wh-30 rounded-circle"
            alt="canada"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <div class="d-flex justify-content-between position-relative">
            <span class="fw-medium d-block mb-2">Canada</span>
            <span class="count fw-medium text-body">88%</span>
            <span
              class="position-absolute top-50 start-50 translate-middle pb-2 fw-medium"
              >980 calls</span
            >
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="88"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-primary" style="width: 88%"></div>
          </div>
        </div>
      </li>
      <li class="d-flex align-items-center pe-0">
        <div class="flex-shrink-0">
          <v-img
            src="@/assets/images/brazil.svg"
            class="wh-30 rounded-circle"
            alt="brazil"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <div class="d-flex justify-content-between position-relative">
            <span class="fw-medium d-block mb-2">Brazil</span>
            <span class="count fw-medium text-body">65%</span>
            <span
              class="position-absolute top-50 start-50 translate-middle pb-2 fw-medium"
              >850 calls</span
            >
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="65"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-danger" style="width: 65%"></div>
          </div>
        </div>
      </li>
    </ul>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CallCenterGeography",
});
</script>

<style lang="scss" scoped>
.call-center-geography-card {
  &.border {
    border: 1px solid #edeff5 !important;
  }
  .progress {
    display: flex;
    background-color: #e9ecef !important;

    .bg-success {
      background-color: var(--successColor) !important;
    }
    .bg-primary {
      background-color: var(--primaryColor) !important;
    }
    .bg-success-60 {
      background-color: rgb(37 176 3) !important;
    }
    .bg-danger {
      background-color: rgb(253 88 18) !important;
    }
  }
  .sales_by_locations {
    li {
      margin-bottom: 20px !important;

      &:last-child {
        margin-bottom: 0 !important;
      }
    }
  }
}
</style>
