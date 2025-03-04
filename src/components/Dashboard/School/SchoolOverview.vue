<template>
  <div class="row align-items-center">
    <div class="col-md-7">
      <div class="mb-3 mb-md-4">
        <h3 class="fs-20 fw-semibold mb-1">School Overview Dashboard</h3>
        <p style="line-height: 1.4">
          Manage Students, Teachers, and School Data Seamlessly!
        </p>
      </div>
    </div>
    <div class="col-md-5 text-md-end mb-4">
      <div
        class="d-inline-block rounded-1"
        style="
          border: 1px solid #dde4ff;
          background-color: #ecf0ff;
          padding: 1px 10px;
        "
      >
        <i class="ri-calendar-line text-primary"></i>
        <span class="text-primary ms-1">
          {{ fulldate }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SchoolOverview",
  setup() {
    const fulldate = ref("");

    // Function to format the current date
    const getFormattedDate = () => {
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      fulldate.value = new Intl.DateTimeFormat("en-US", options).format(
        new Date()
      );
    };

    onMounted(() => {
      getFormattedDate();
    });

    return {
      fulldate,
    };
  },
});
</script>

<style lang="scss" scoped>
.text-primary {
  color: var(--primaryColor) !important;
}
</style>
