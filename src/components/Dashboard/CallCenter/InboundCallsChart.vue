<template>
  <v-card
    class="inbound-calls-card trezo-card mb-25 border border-radius d-block bg-white custom-shadow"
  >
    <div class="v-card-header">
      <div>
        <h5 class="mb-0">Inbound Calls</h5>
        <span class="fs-12">Overview of incoming call volume</span>
      </div>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            Today
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

    <div style="margin: -55px -10px -30px -10px">
      <apexchart
        v-if="isClient"
        type="area"
        height="164"
        :options="inboundCalls"
        :series="calls"
      ></apexchart>
    </div>

    <div class="d-flex align-items-center position-relative z-1">
      <div class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <div
            class="bg-body-bg border d-flex align-items-center justify-content-center rounded-2"
            style="width: 48px; height: 48px; line-height: 48px"
          >
            <v-img
              src="@/assets/images/inbound-calls.svg"
              alt="inbound-calls"
            />
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <h3 class="fs-28 fw-semibold mb-0">1,235</h3>
          <span class="text-body d-block">Past 24 hours</span>
        </div>
      </div>

      <span class="d-flex align-items-center align-items-center text-body ms-5">
        <i class="material-symbols-outlined fs-18 pe-2 text-success-60">
          trending_up
        </i>
        <span class="fw-medium me-1">+7.5%</span>
      </span>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "InboundCallsChart",
  setup() {
    const isClient = ref(false);
    const calls = ref([
      {
        name: "Inbound Calls",
        data: [
          100, 130, 115, 170, 110, 120, 85, 140, 150, 100, 110, 90, 160, 125,
          105, 130, 145, 120, 150, 155, 220, 165,
        ],
      },
    ]);
    const inboundCalls = ref({
      chart: {
        type: "area",
        height: 164,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 1,
      },
      colors: ["#605DFF"],
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.6,
        },
      },
      xaxis: {
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan",
          "13 Jan",
          "14 Jan",
          "15 Jan",
          "16 Jan",
          "17 Jan",
          "18 Jan",
          "19 Jan",
          "20 Jan",
          "21 Jan",
          "22 Jan",
        ],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
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
        tickAmount: 5,
        show: false,
        max: 250,
        min: 0,
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      legend: {
        show: true,
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
      calls,
      inboundCalls,
    };
  },
});
</script>

<style lang="scss" scoped>
.inbound-calls-card {
  &.border {
    border: 1px solid #edeff5 !important;
  }
  .ms-5 {
    margin-left: 3rem !important;
  }
  .text-success-60 {
    color: rgb(37 176 3) !important;
  }
}
</style>
