<template>
  <v-card
    class="employee-work-format-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Employee Salary</h5>
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

    <div class="d-flex align-items-center mb-4 mb-md-5">
      <div class="flex-shrink-0">
        <div
          class="bg-primary-50 bg-opacity-10 d-flex align-items-center justify-content-center rounded-1"
          style="width: 42px; height: 42px; line-height: 42px"
        >
          <v-img
            src="@/assets/images/icon-total-payroll.svg"
            alt="icon-total-payroll"
          />
        </div>
      </div>
      <div class="flex-grow-1 ms-3">
        <span class="d-block mb-0">Total Payroll</span>
        <h3 class="mb-0 fs-20 fw-semibold">$450,000</h3>
      </div>
    </div>

    <div style="margin: -30px -10px -26px -12px">
      <apexchart
        v-if="isClient"
        type="bar"
        height="280"
        :options="employeeSalary"
        :series="salary"
      ></apexchart>
    </div>

    <div class="d-flex flex-wrap ga-2 ga-sm-0 mt-md-5 mt-3">
      <div class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <div
            class="bg-success-60 bg-opacity-10 d-flex align-items-center justify-content-center rounded-1"
            style="width: 42px; height: 42px; line-height: 37px"
          >
            <v-img
              src="@/assets/images/icon-salary-paid.svg"
              alt="icon-salary-paid"
            />
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <span class="d-block mb-1">Salary Paid</span>
          <h3 class="fs-20 fw-semibold">$395k</h3>
        </div>
      </div>
      <div class="d-flex align-items-center ms-sm-3">
        <div class="flex-shrink-0">
          <div
            class="bg-danger-50 bg-opacity-10 d-flex align-items-center justify-content-center rounded-1"
            style="width: 42px; height: 42px; line-height: 42px"
          >
            <v-img
              src="@/assets/images/icon-salary-pending.svg"
              alt="icon-salary-paid"
            />
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <span class="d-block mb-1">Salary Pending</span>
          <h3 class="fs-20 fw-semibold">$60k</h3>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import feather from "feather-icons";

export default defineComponent({
  name: "EmployeeSalaryChart",
  setup() {
    const isClient = ref(false);

    const salary = ref([
      {
        name: "Employee Salary",
        data: [70, 60, 80, 100, 70, 40, 80],
      },
    ]);

    const employeeSalary = ref({
      chart: {
        type: "bar",
        height: 280,
        toolbar: {
          show: false,
        },
      },
      colors: ["#E9D5FF"],
      plotOptions: {
        bar: {
          columnWidth: "52%",
          borderRadius: 4,
        },
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        show: false,
        tickAmount: 4,
        labels: {
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      tooltip: {
        y: {
          formatter: (val: string) => {
            return "$" + val + "K";
          },
        },
      },
      legend: {
        show: true,
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
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 0.1,
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
      feather.replace();
    });

    return {
      isClient,
      salary,
      employeeSalary,
    };
  },
});
</script>

<style lang="scss" scoped>
.employee-work-format-card {
  .rounded-1 {
    border-radius: 0.25rem !important;
  }
  .bg-success-60 {
    background-color: rgba(37, 176, 3, 0.1) !important;
  }
}
@media (min-width: 768px) {
  .mb-md-5 {
    margin-bottom: 3rem !important;
  }
  .mt-md-5 {
    margin-top: 3rem !important;
  }
}
</style>
