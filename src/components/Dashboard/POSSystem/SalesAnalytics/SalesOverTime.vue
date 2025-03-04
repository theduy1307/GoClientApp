<template>
  <div class="row align-items-">
    <div class="col-lg-6 mt-4">
      <div class="d-flex align-items-center mb-4">
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <div
              class="d-flex align-items-center justify-content-center rounded-2"
              style="
                background-color: #dde4ff;
                width: 44px;
                height: 44px;
                line-height: 44px;
              "
            >
              <v-img
                src="@/assets/images/sales-over-time-icon.svg"
                alt="sales-over-time-icon"
              />
            </div>
          </div>
          <div class="flex-grow-1 ms-10">
            <span class="text-body">Sales Over Time</span>
            <h3 class="fs-24 fw-semibold mb-0">$120,000</h3>
          </div>
        </div>
        <span
          class="text-success p-2 py-1 d-inline-block rounded-1 ms-10"
          style="background-color: #d8ffc8"
        >
          +9.1%
        </span>
      </div>
      <p style="line-height: 1.44; max-width: 284px">
        Sales have shown a positive trend, with a significant increase of 9.1%
        over the previous month.
      </p>
    </div>
    <div class="col-lg-6">
      <div style="margin: -7px -20px -14px 0">
        <apexchart
          v-if="isClient"
          type="bar"
          height="197"
          :options="salesOverTime"
          :series="sales"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SalesOverTime",
  setup() {
    const isClient = ref(false);
    const sales = ref([
      {
        name: "Sales Over Time",
        data: [60, 80, 50, 60, 70, 40, 80],
      },
    ]);
    const salesOverTime = ref({
      chart: {
        type: "bar",
        height: 197,
        toolbar: {
          show: false,
        },
      },
      colors: ["#C2CDFF"],
      plotOptions: {
        bar: {
          columnWidth: "30%",
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
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
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
            fontFamily: "Inter",
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
            fontFamily: "Inter",
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
    });

    return {
      isClient,
      sales,
      salesOverTime,
    };
  },
});
</script>

<style lang="scss" scoped>
.py-1 {
  padding-top: 4px !important;
  padding-bottom: 4px !important;
}
</style>
