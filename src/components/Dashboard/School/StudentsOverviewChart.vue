<template>
  <v-card
    class="students-overview-card trezo-card mb-25 border border-radius d-block bg-white custom-shadow"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Students Overview</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            Last Month
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Today
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Week
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Month
          </button>
          <button type="button" class="bg-transparent border-none">
            Last Year
          </button>
        </v-list>
      </v-menu>
    </div>

    <div style="margin: -5px -9px -27px -16px" class="pb-5">
      <apexchart
        v-if="isClient"
        type="bar"
        height="291"
        :options="studentsOverview"
        :series="students"
      ></apexchart>
    </div>

    <div class="d-flex ga-2 align-items-center">
      <div class="d-flex">
        <div
          class="d-flex align-items-center justify-content-center rounded-1"
          style="
            background-color: #daebff;
            width: 42px;
            height: 42px;
            line-height: 42px;
          "
        >
          <v-img src="@/assets/images/boys.svg" alt="boys" />
        </div>
        <div class="ms-2">
          <span class="d-block">Boys</span>
          <h3 class="fs-20 fw-semibold mb-0">980</h3>
        </div>
      </div>
      <div class="d-flex ms-5">
        <div
          class="d-flex align-items-center justify-content-center rounded-1"
          style="
            background-color: #ffe8d4;
            width: 42px;
            height: 42px;
            line-height: 42px;
          "
        >
          <v-img src="@/assets/images/girls.svg" alt="boys" />
        </div>
        <div class="ms-2">
          <span class="d-block">Girls</span>
          <h3 class="fs-20 fw-semibold mb-0">675</h3>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "StudentsOverviewChart",
  setup() {
    const isClient = ref(false);

    const students = ref([
      {
        name: "Boys",
        data: [70, 42, 70, 120, 40, 70, 90],
      },
      {
        name: "Girls",
        data: [-70, -44, -70, -120, -40, -70, -90],
      },
    ]);

    const studentsOverview = ref({
      colors: ["#3584FC", "#FD5812"],
      chart: {
        type: "bar",
        height: 291,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
          borderRadius: 5,
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "all",
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        borderColor: "#EDEFF5",
        strokeDashArray: 8,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
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
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        axisTicks: {
          show: false,
          color: "#8695AA",
        },
        axisBorder: {
          show: false,
          color: "#D5D9E2",
        },
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "Status " + val + "";
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      students,
      studentsOverview,
    };
  },
});
</script>

<style lang="scss" scoped>
.students-overview-card {
  &.border {
    border: 1px solid #edeff5 !important;
  }
  .pb-5 {
    padding-bottom: 3rem !important;
  }
  .ms-5 {
    margin-left: 3rem !important;
  }
}
</style>
