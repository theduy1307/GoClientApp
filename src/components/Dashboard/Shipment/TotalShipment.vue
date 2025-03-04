<template>
  <v-card
    class="total-shipment-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="d-flex justify-content-between align-items-center mb-4">
      <span
        class="d-inline-block px-3 bg-success text-success border border-success rounded-pill fs-12 fw-medium"
      >
        +45%
      </span>
      <div class="text-end">
        <span class="ms-2 fs-12">Last 30 days</span>
        <span class="fs-12 fw-bold text-primary-div d-block">+20,300</span>
      </div>
    </div>

    <div class="d-flex align-items-end">
      <div class="flex-grow-1">
        <span class="d-block mb-1">Total Shipment</span>
        <h4 class="fs-20 mb-0">175,950</h4>
      </div>
      <div class="flex-shrink-0 me-3 me-auto">
        <i
          class="ri-truck-line fs-24 text-white bg-primary-div d-inline-block text-center rounded-circle text-white"
          style="width: 60px; height: 60px; line-height: 60px"
        ></i>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TotalShipment",
});
</script>

<style lang="scss" scoped>
.total-shipment-card {
  .bg-success {
    background-color: rgb(55 216 10 / 10%) !important;
  }
  .border-success {
    border-color: rgb(55 216 10) !important;
  }
  .text-success {
    color: var(--successColor) !important;
  }
  .text-primary-div {
    color: rgb(173 99 246);
  }
  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
}
</style>
