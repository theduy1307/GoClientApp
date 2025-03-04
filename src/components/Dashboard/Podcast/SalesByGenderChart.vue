<template>
  <apexchart
    v-if="isClient"
    type="bar"
    height="376"
    :options="salesByGender"
    :series="sales"
  ></apexchart>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SalesByGenderChart",
  setup() {
    const isClient = ref(false);
    const sales = ref([
      {
        name: "Men",
        data: [50, 30, 40, 35, 30],
      },
      {
        name: "Woman",
        data: [25, 40, 30, 45, 25],
      },
    ]);
    const salesByGender = ref({
      chart: {
        type: "bar",
        height: 376,
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF", "#9CAAFF"],
      plotOptions: {
        bar: {
          columnWidth: "32%",
          borderRadius: 6,
          borderRadiusApplication: "end",
        },
      },
      fill: {
        type: ["gradient", "solid"], // Apply gradient only to the first series
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ["#9747FF"], // End color for the gradient
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      grid: {
        borderColor: "#ECEEF2",
        strokeDashArray: 8,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["18-24", "25-34", "35-44", "45-65", "65+"],
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
        tickAmount: 3,
        max: 60,
        min: 0,
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "12px",
            fontFamily: "Inter",
          },
          formatter: (val: number) => {
            return "" + val / 1 + "%";
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
      legend: {
        show: true,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
        fontFamily: "Inter",
        fontWeight: 400,
        offsetY: 10,
        itemMargin: {
          horizontal: 8,
          vertical: 60,
        },
        labels: {
          colors: "#3A4252",
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
      sales,
      salesByGender,
    };
  },
});
</script>
