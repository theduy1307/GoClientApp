<template>
  <div class="row">
    <div class="col-md-7">
      <div class="mb-4">
        <h3 class="fs-20 fw-semibold mb-1">
          Welcome Back, <span class="text-primary">Olivia!</span>
        </h3>
        <p style="line-height: 1.4">
          Monitor and manage employee performance, attendance and more in one
          place.
        </p>
      </div>
    </div>
    <div class="col-md-5">
      <div class="d-flex flex-wrap ga-2 justify-content-md-end mb-4">
        <RouterLink
          to="/extra-pages/pricing-plan"
          class="btn d-flex align-items-center ga-1"
          style="background-color: #f3e8ff; color: #7c24cc; padding: 3.5px 11px"
        >
          <i class="ri-vip-crown-line fs-18 lh-1" style="color: #7c24cc"></i>
          <span>Plan Upgrade</span>
        </RouterLink>
        <button
          class="btn d-flex align-items-center ga-1"
          style="background-color: #ffe8d4; color: #c52b09; padding: 3.5px 11px"
        >
          <i
            class="ri-file-download-line fs-18 lh-1 position-relative top-1"
            style="color: #c52b09"
          ></i>
          <span>Export Reports</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WelcomeBack",
});
</script>

<style lang="scss" scoped>
.text-primary {
  color: var(--primaryColor) !important;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}
@media (min-width: 768px) {
  .justify-content-md-end {
    justify-content: flex-end !important;
  }
}
</style>
