<template>
  <v-card
    class="employee-attendance-trends-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div
      class="d-flex justify-content-between align-items-center flex-wrap ga-3"
      style="padding-bottom: 33px"
    >
      <h5 class="mb-0">Employee Attendance Trends</h5>
      <div class="position-relative">
        <DateRangePicker />
        <i
          class="ri-calendar-line position-absolute top-50 start-0 translate-middle-y ps-3 fs-15"
        ></i>
      </div>
    </div>

    <ul
      class="ps-0 mb-0 list-unstyled d-flex flex-wrap justify-content-between ga-2 lh-1 employee-attendance-list"
      style="padding-bottom: 45px"
    >
      <li>Avg. Daily Attend: <span class="fw-semibold">320</span></li>
      <li>High. Attend: <span class="fw-semibold">340</span> (October 5th)</li>
      <li>Low. Attend: <span class="fw-semibold">290</span> (October 1st)</li>
    </ul>
    <div style="margin: -24px 13px -21px -18px">
      <apexchart
        v-if="isClient"
        type="area"
        height="388"
        :options="employeeAttendanceTrends"
        :series="attendance"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import DateRangePicker from "./DateRangePicker.vue";

export default defineComponent({
  name: "EmployeeAttendanceTrendsChart",
  components: {
    DateRangePicker,
  },
  setup() {
    const isClient = ref(false);

    const attendance = ref([
      {
        name: "Attendance",
        data: [170, 420, 300, 550, 550, 650, 820],
      },
      {
        name: "Absent",
        data: [320, 300, 650, 400, 750, 650, 600],
      },
    ]);

    const employeeAttendanceTrends = ref({
      chart: {
        type: "area",
        height: 388,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#4936F5", "#EC1F00"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight", //'straight', 'smooth', 'monotoneCubic', 'stepline'
        width: [2, 2],
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
        strokeDashArray: 10,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0.5,
        },
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
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
        tickAmount: 5,
        max: 1000,
        min: 0,
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      legend: {
        show: true,
        position: "bottom",
        fontSize: "12px",
        horizontalAlign: "center",
        fontFamily: "Inter",
        fontWeight: 400,
        offsetY: 10,
        itemMargin: {
          horizontal: 8,
          vertical: 10,
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      attendance,
      employeeAttendanceTrends,
    };
  },
});
</script>
