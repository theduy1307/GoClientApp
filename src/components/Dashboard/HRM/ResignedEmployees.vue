<template>
  <v-card
    class="total-employees-card trezo-card border-radius d-block bg-white shadow-none p-0"
  >
    <div class="custom-padding-30 position-relative">
      <div class="d-flex align-items-center mb-4 pb-2">
        <div class="flex-shrink-0">
          <div
            class="text-center rounded-2 bg-danger-50 d-flex align-items-center justify-content-center"
            style="width: 44px; height: 44px; line-height: 44px"
          >
            <v-img
              src="@/assets/images/icon-resigned.svg"
              alt="icon-resigned"
            />
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <span class="d-block mb-1">Resigned Employees</span>
          <h3 class="fw-semibold fs-20 mb-0">3,18</h3>
        </div>
      </div>

      <div class="d-flex align-items-center">
        <i
          class="ri-arrow-right-down-line d-inline-block text-center rounded-1 fs-18 text-danger-50"
          style="
            width: 26px;
            height: 26px;
            line-height: 26px;
            background-color: #ffe8d4;
          "
        ></i>
        <p class="ms-2">
          <span class="text-secondary fw-medium">-5%</span> last year
        </p>
      </div>

      <div class="chart-position top-50 translate-middle-y">
        <apexchart
          v-if="isClient"
          type="bar"
          height="140"
          :options="rsignedEmployees"
          :series="employees"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ResignedEmployees",
  setup() {
    const isClient = ref(false);
    const employees = ref([
      {
        name: "Resigned",
        data: [44, 30, 57, 35, 61, 35, 63],
      },
    ]);
    const rsignedEmployees = ref({
      chart: {
        type: "bar",
        height: 140,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          borderRadius: 2,
        },
      },
      colors: ["#EE3E08"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        width: 2,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: false,
          color: "#B1BBC8",
        },
        axisBorder: {
          show: false,
          color: "#B1BBC8",
        },
        labels: {
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        // tickAmount: 6,
        show: false,
        // max: 150,
        // min: 0,
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "Total:" + val;
          },
        },
      },
      fill: {
        opacity: 1,
        colors: "#EE3E08",
        type: "solid",
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      employees,
      rsignedEmployees,
    };
  },
});
</script>

<style lang="scss" scoped>
.total-employees-card {
  .chart-position {
    right: 15px;
  }
  .bg-danger-50 {
    background-color: rgb(238 62 8) !important;
  }
  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
}
</style>
