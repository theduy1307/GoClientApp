<template>
  <v-card
    class="active-user-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Active Users</h5>
      <div class="d-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu d-inline-block border-radius"
            >
              Monthly
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              Monthly
            </button>
            <button type="button" class="bg-transparent border-none">
              Yearly
            </button>
          </v-list>
        </v-menu>
      </div>
    </div>

    <div style="margin: -24px -30px -27px -17px">
      <apexchart
        v-if="isClient"
        type="bar"
        height="408"
        :options="activeUsers"
        :series="users"
      ></apexchart>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ActiveUsersChart",
  setup() {
    const isClient = ref(false);
    const users = ref([
      {
        name: "Active Users",
        data: [20, 15, 25, 95, 25, 65, 15, 25, 15, 20],
      },
    ]);
    const activeUsers = ref({
      chart: {
        type: "bar",
        height: 408,
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF", "#AD63F6", "#3584FC", "#FD5812"],
      plotOptions: {
        bar: {
          columnWidth: "15%",
          borderRadius: 5,
        },
      },
      grid: {
        show: true,
        borderColor: "#ECF0FF",
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
        categories: [
          "Oct 01",
          "Oct 02",
          "Oct 03",
          "Oct 04",
          "Oct 05",
          "Oct 06",
          "Oct 07",
          "Oct 08",
          "Oct 09",
          "Oct 10",
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
          show: true,
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
          formatter: (val: string) => {
            return "$" + val + "K";
          },
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
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      users,
      activeUsers,
    };
  },
});
</script>
