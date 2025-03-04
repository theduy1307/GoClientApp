<template>
  <v-card
    class="employee-work-format-card trezo-card border-radius d-block bg-white border-0 shadow-none p-0"
  >
    <div class="p-25">
      <div class="v-card-header">
        <h5 class="mb-0">Employee Work Format</h5>
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="position-relative dot-btn p-0 bg-transparent border-none"
            >
              <i data-feather="more-vertical"></i>
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
      <div style="margin: -8px 0 -18px 0">
        <apexchart
          v-if="isClient"
          type="donut"
          height="255"
          :options="employeeWorkFormat"
          :series="workFormat"
        ></apexchart>
      </div>
    </div>

    <ul class="ps-0 list-unstyled mb-2">
      <li
        class="d-flex justify-content-between align-items-center border-top"
        style="padding: 13px 30px"
      >
        <div class="d-flex align-items-center" style="width: 175px">
          <div class="flex-grow-1">
            <div class="d-flex align-items-center ga-2">
              <span
                class="d-inline-block bg-danger-50"
                style="width: 8px; height: 8px"
              ></span>
              <span class="fw-medium">Remote</span>
            </div>
          </div>
          <span class="flex-shrink-0 d-flex align-items-center text-success-60">
            <div class="d-flex">
              34%
              <i
                class="material-symbols-outlined fs-18 ms-1 position-relative top-1"
              >
                trending_up
              </i>
            </div>
          </span>
        </div>
        <span class="fw-bold">120</span>
      </li>
      <li
        class="d-flex justify-content-between align-items-center border-top"
        style="padding: 13px 30px"
      >
        <div class="d-flex align-items-center" style="width: 175px">
          <div class="flex-grow-1">
            <div class="d-flex align-items-center ga-2">
              <span
                class="d-inline-block bg-primary-50"
                style="width: 8px; height: 8px"
              ></span>
              <span class="fw-medium">In-office</span>
            </div>
          </div>
          <span class="flex-shrink-0 d-flex align-items-center text-danger-50">
            <div class="d-flex">
              46%
              <i
                class="material-symbols-outlined fs-18 ms-1 position-relative top-1"
              >
                trending_down
              </i>
            </div>
          </span>
        </div>
        <span class="fw-bold">160</span>
      </li>
      <li
        class="d-flex justify-content-between align-items-center border-top"
        style="padding: 13px 30px"
      >
        <div class="d-flex align-items-center" style="width: 175px">
          <div class="flex-grow-1">
            <div class="d-flex align-items-center ga-2">
              <span
                class="d-inline-block bg-success"
                style="width: 8px; height: 8px"
              ></span>
              <span class="fw-medium">Hybrid</span>
            </div>
          </div>
          <span class="flex-shrink-0 d-flex align-items-center text-success-60">
            <div class="d-flex">
              15%
              <i
                class="material-symbols-outlined fs-18 ms-1 position-relative top-1"
              >
                trending_up
              </i>
            </div>
          </span>
        </div>
        <span class="fw-bold">50</span>
      </li>
      <li
        class="d-flex justify-content-between align-items-center border-top"
        style="padding: 13px 30px"
      >
        <div class="d-flex align-items-center" style="width: 175px">
          <div class="flex-grow-1">
            <div class="d-flex align-items-center ga-2">
              <span
                class="d-inline-block bg-primary-div-50"
                style="width: 8px; height: 8px"
              ></span>
              <span class="ms-1 fw-medium">Shift</span>
            </div>
          </div>
          <span class="flex-shrink-0 d-flex align-items-center text-danger-50">
            <div class="d-flex">
              05%
              <i
                class="material-symbols-outlined fs-18 ms-1 position-relative top-1"
              >
                trending_down
              </i>
            </div>
          </span>
        </div>
        <span class="fw-bold">20</span>
      </li>
    </ul>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import feather from "feather-icons";

export default defineComponent({
  name: "EmployeeWorkFormatChart",
  setup() {
    const isClient = ref(false);

    const workFormat = ref([120, 160, 50, 20]);

    const employeeWorkFormat = ref({
      chart: {
        height: 255,
        type: "donut",
      },
      labels: ["Remote", "In-office", "Hybrid", "Shift"],
      colors: ["#FD5812", "#605DFF", "#37D80A", "#AD63F6"],
      stroke: {
        width: 1,
        show: true,
        colors: ["#ffffff"],
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "center",
        fontFamily: "Inter",
        fontWeight: 400,
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          width: 9,
          height: 9,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true,
              name: {
                color: "#64748B",
              },
              value: {
                show: true,
                color: "#64748B",
                fontSize: "16px",
                fontWeight: "600",
                offsetY: -6,
              },
              total: {
                show: true,
                color: "#64748B",
                fontSize: "14px",
                fontWeight: "400",
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
    });

    onMounted(() => {
      isClient.value = true;
      feather.replace();
    });

    return {
      isClient,
      workFormat,
      employeeWorkFormat,
    };
  },
});
</script>

<style lang="scss" scoped>
.employee-work-format-card {
  .bg-danger-50 {
    background-color: rgb(238 62 8) !important;
  }
  .bg-primary-50 {
    background-color: rgb(73 54 245) !important;
  }
  .bg-primary-div-50 {
    background-color: rgb(145 53 232) !important;
  }
  .bg-success {
    background-color: var(--successColor) !important;
  }
  .text-success-60 {
    color: rgb(37 176 3) !important;
  }
  .text-danger-50 {
    color: rgb(238 62 8) !important;
  }
}
</style>
