<template>
  <v-card
    class="new-listings-sold-properties-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">New Listings vs Sold Properties</h5>
      <div class="d-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="bg-white card-header-menu d-inline-block border-radius"
            >
              Monthly
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              Monthly
            </button>
            <button type="button" class="bg-transparent border-none">
              Weekly
            </button>
            <button type="button" class="bg-transparent border-none">
              Today
            </button>
            <button type="button" class="bg-transparent border-none">
              Yearly
            </button>
          </v-list>
        </v-menu>
      </div>
    </div>

    <div style="margin: -25px -9px -20px -18px">
      <apexchart
        v-if="isClient"
        type="area"
        height="296"
        :options="newListingsSoldProperties"
        :series="properties"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "NewListingsSoldPropertiesChart",
  setup() {
    const isClient = ref(false);
    const properties = ref([
      {
        name: "New Listings",
        data: [30, 40, 20, 50, 60, 70, 50, 40, 30, 60, 50, 45],
      },
      {
        name: "Sold Properties",
        data: [80, 50, 90, 40, 50, 90, 55, 60, 80, 30, 95, 80],
      },
    ]);
    const newListingsSoldProperties = ref({
      chart: {
        type: "area",
        height: 296,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF", "#37D80A"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: [2, 2],
        dashArray: [6, 6],
      },
      grid: {
        borderColor: "#ECF0FF",
        strokeDashArray: 4,
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
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisTicks: {
          show: false,
          color: "#B1BBC8",
        },
        axisBorder: {
          show: false,
          color: "#B1BBC8",
        },
        labels: {
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        max: 100,
        min: 0,
        labels: {
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      legend: {
        show: true,
        position: "bottom",
        fontSize: "12px",
        horizontalAlign: "center",
        fontFamily: "Inter",
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
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "" + val + "k";
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      properties,
      newListingsSoldProperties,
    };
  },
});
</script>
