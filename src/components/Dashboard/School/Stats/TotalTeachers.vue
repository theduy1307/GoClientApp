<template>
  <div class="card border-border-color bg-white">
    <div class="custom-padding-30 mx-xl-2">
      <div class="d-flex align-items-center mb-5">
        <div class="flex-shrink-0">
          <v-img
            src="@/assets/images/total-teachers.svg"
            alt="total-students"
          />
        </div>
        <div class="flex-grow-1 ms-md-3 ms-1">
          <span class="d-block mb-1">Total Teachers</span>
          <h3 class="fs-20 fw-semibold mb-0">780</h3>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <i
          class="ri-arrow-right-down-line d-inline-block text-center rounded-1 fs-18 text-danger-40 bg-danger-70"
          style="width: 26px; height: 26px; line-height: 26px"
        ></i>
        <p class="ms-2">
          <span class="text-black fw-medium">-10%</span> last year
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TotalTeachers",
});
</script>
