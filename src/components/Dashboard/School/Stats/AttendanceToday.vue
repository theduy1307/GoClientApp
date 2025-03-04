<template>
  <div class="card border-border-color bg-white rounded-end-3">
    <div class="custom-padding-30 mx-xl-2">
      <div class="d-flex align-items-center mb-5">
        <div class="flex-shrink-0">
          <v-img
            src="@/assets/images/attendance-today.svg"
            alt="attendance-today"
          />
        </div>
        <div class="flex-grow-1 ms-md-3 ms-1">
          <span class="d-block mb-1 text-nowrap">Attendance Today</span>
          <h3 class="fs-20 fw-semibold mb-0">1,425</h3>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <i
          class="ri-arrow-right-up-line d-inline-block text-center rounded-1 fs-18 bg-success-80 text-success-50"
          style="width: 26px; height: 26px; line-height: 26px"
        ></i>
        <p class="ms-2"><span class="fw-medium">+25%</span> last year</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AttendanceToday",
});
</script>
