<template>
  <v-card
    class="total-income-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="d-flex mb-4">
      <div class="flex-grow-1">
        <span class="d-block mb-1">Total Income</span>
        <h4 class="fs-20 mb-0">$531,200</h4>
      </div>
      <div class="flex-shrink-0 ms-3">
        <i
          class="ri-money-dollar-circle-line fs-24 text-success for dark-bg d-inline-block text-center rounded-circle"
          style="
            width: 60px;
            height: 60px;
            line-height: 60px;
            background-color: #ecf0ff;
          "
        ></i>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <span
        class="d-inline-block px-3 bg-success bg-opacity-10 text-success border border-success rounded-pill fs-12 fw-medium"
      >
        +35.5%
      </span>
      <span class="ms-2 fs-12">Last 30 days</span>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TotalIncome",
});
</script>

<style lang="scss" scoped>
.total-income-card {
  .bg-success {
    background-color: rgb(55 216 10 / 10%) !important;
  }
  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
}
</style>
