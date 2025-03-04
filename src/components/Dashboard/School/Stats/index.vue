<template>
  <div class="card-group custom-shadow rounded-3">
    <TotalStudents />

    <TotalTeachers />

    <AttendanceToday />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TotalStudents from "./TotalStudents.vue";
import TotalTeachers from "./TotalTeachers.vue";
import AttendanceToday from "./AttendanceToday.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Stats",
  components: {
    TotalStudents,
    TotalTeachers,
    AttendanceToday,
  },
});
</script>

<style lang="scss">
.card-group {
  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
  .border-border-color {
    border: 1px solid rgb(236 238 242) !important;
  }
  .bg-success-80 {
    background-color: rgb(216 255 200) !important;
  }
  .text-success-50 {
    color: rgb(30 131 8) !important;
  }
  .bg-danger-70 {
    background-color: rgb(255 225 221) !important;
  }
  .bg-success-80 {
    background-color: rgb(216 255 200) !important;
  }
}
@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0 !important;
    border-left: 0 !important;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
}
</style>
