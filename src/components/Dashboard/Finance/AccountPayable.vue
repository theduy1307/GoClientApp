<template>
  <v-card
    class="account-payable-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="d-flex mb-4">
      <div class="flex-grow-1">
        <span class="d-block mb-1">Account Payable</span>
        <h4 class="fs-20 mb-0">$14,580</h4>
      </div>
      <div class="flex-shrink-0 ms-3">
        <i
          class="ri-currency-line fs-24 text-primary for dark-bg d-inline-block text-center rounded-circle"
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
        class="d-inline-block px-3 bg-danger bg-opacity-10 text-danger border border-danger rounded-pill fs-12 fw-medium"
      >
        -10.1%
      </span>
      <span class="ms-2 fs-12">Last 30 days</span>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AccountPayable",
});
</script>

<style lang="scss" scoped>
.account-payable-card {
  .bg-danger {
    background-color: rgb(253 88 18 / 10%) !important;
  }
  .text-primary {
    color: var(--primaryColor) !important;
  }
  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
}
</style>
