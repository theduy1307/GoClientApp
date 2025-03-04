<template>
  <v-card
    class="listener-analytics-card trezo-card custom-shadow rounded-3 bg-white border custom-padding-30 position-relative"
  >
    <div class="v-card-header" style="top: -5px">
      <h3 class="mb-0 fs-18 fw-semibold">Listener Analytics</h3>
      <div
        class="dropdown select-dropdown without-border position-relative"
        style="right: -5px"
      >
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu text-body border-none d-inline-block border-radius"
            >
              Last 28 days
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              Last 28 days
            </button>
            <button type="button" class="bg-transparent border-none">
              Last 48 days
            </button>
            <button type="button" class="bg-transparent border-none">
              Last 90 days
            </button>
            <button type="button" class="bg-transparent border-none">
              Last Year
            </button>
          </v-list>
        </v-menu>
      </div>
    </div>

    <div style="margin: -29px -27px -28px -16px">
      <SalesByGenderChart />
    </div>

    <div
      class="position-absolute position-for-mobile"
      style="top: 92px; right: 30px"
    >
      <div class="d-flex align-items-center">
        <div style="margin: 0 0 0 0">
          <apexchart
            v-if="isClient"
            type="donut"
            height="60"
            :options="listenerAnalytics"
            :series="analytics"
          ></apexchart>
        </div>

        <ul
          class="ps-0 mb-0 list-unstyled last-child-none"
          style="margin-left: -110px"
        >
          <li class="d-flex align-items-center mb-2">
            <span
              class="d-inline-block bg-primary-div rounded-circle"
              style="width: 10px; height: 10px; margin-right: 7px"
            ></span>
            <span class="fs-12">
              Men:
              <span class="fw-medium">75%</span>
            </span>
          </li>
          <li class="d-flex align-items-center">
            <span
              class="d-inline-block bg-primary rounded-circle"
              style="width: 10px; height: 10px; margin-right: 7px"
            ></span>
            <span class="fs-12">
              Woman:
              <span class="fw-medium">25%</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import SalesByGenderChart from "./SalesByGenderChart.vue";

export default defineComponent({
  name: "ListenerAnalyticsChart",
  components: {
    SalesByGenderChart,
  },
  setup() {
    const isClient = ref(false);
    const analytics = ref([70, 30]);
    const listenerAnalytics = ref({
      chart: {
        height: 60,
        type: "donut",
      },
      labels: ["Men", "Woman"],
      colors: ["#605DFF", "#AD63F6"],
      stroke: {
        width: 0,
        show: true,
        colors: ["#ffffff"],
        lineCap: "round",
      },
      legend: {
        show: false,
        position: "right",
        fontSize: "12px",
        horizontalAlign: "center",
        fontFamily: "Inter",
        fontWeight: 400,
        offsetY: 10,
        itemMargin: {
          horizontal: 0,
          vertical: 5,
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
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "80%",
            labels: {
              show: false,
              name: {
                color: "#64748B",
              },
              value: {
                show: false,
                color: "#000",
                fontSize: "36px",
                fontWeight: "700",
                fontFamily: "Inter",
                offsetY: 10,
                formatter: (val: number) => {
                  return "" + val / 1 + "%";
                },
              },
              total: {
                show: false,
                color: "#64748B",
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "Inter",
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (val: number) => {
            return "" + val / 1 + "%";
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      analytics,
      listenerAnalytics,
    };
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  &.trezo-card {
    border: 1px solid var(--borderColor) !important;
  }
}
</style>
