<template>
  <v-card
    class="total-employees-card trezo-card border-radius d-block bg-white shadow-none p-0"
  >
    <div class="custom-padding-30 position-relative">
      <div class="d-flex align-items-center mb-4 pb-2">
        <div class="flex-shrink-0">
          <div
            class="rounded-2 bg-primary-50 d-flex align-items-center justify-content-center"
            style="width: 44px; height: 44px; line-height: 44px"
          >
            <v-img
              src="@/assets/images/icon-employees.svg"
              alt="icon-employees"
            />
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <span class="d-block mb-1">Total Employees</span>
          <h3 class="fw-semibold fs-20 mb-0">15,720</h3>
        </div>
      </div>

      <div class="d-flex align-items-center">
        <i
          class="ri-arrow-right-up-line d-inline-block text-center rounded-1 fs-18 text-success-50"
          style="
            width: 26px;
            height: 26px;
            line-height: 26px;
            background-color: #d8ffc8;
          "
        ></i>
        <p class="ms-2"><span class="fw-medium">+12%</span> last year</p>
      </div>

      <div class="chart-position top-50 translate-middle-y">
        <apexchart
          v-if="isClient"
          type="area"
          height="140"
          :options="totalEmployees"
          :series="employees"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalEmployees",
  setup() {
    const isClient = ref(false);
    const employees = ref([
      {
        name: "Employees",
        data: [3, 12, 8, 15, 8, 10, 15],
      },
    ]);
    const totalEmployees = ref({
      chart: {
        type: "area",
        height: 140,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#4936F5"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "smooth",
        width: 0,
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
          formatter: (val: string) => {
            return val + "%";
          },
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
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
          radius: 2,
          shape: "diamond",
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "Total:" + val;
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      employees,
      totalEmployees,
    };
  },
});
</script>

<style lang="scss" scoped>
.total-employees-card {
  .chart-position {
    right: 15px;
  }
  .bg-primary-50 {
    background-color: rgb(73 54 245) !important;
  }
  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
}
</style>
