<template>
  <v-card
    class="active-user-card trezo-card mb-25 border-radius d-block border-0 shadow-none"
  >
    <div
      class="d-flex justify-content-between align-items-center position-relative"
    >
      <div class="flex-grow-1 me-3">
        <span class="d-block mb-2">Active User</span>
        <h3 class="fs-24 fw-bold">241K</h3>
        <span
          class="bg-success bg-opacity-10 border border-success rounded-pill text-success px-2 fs-12 fw-medium d-inline-block"
        >
          +5.4%
        </span>
      </div>
      <div
        class="position-absolute top-50 end-0 translate-middle-y saas-chart-position"
      >
        <apexchart
          v-if="isClient"
          style="width: 95px"
          type="donut"
          height="85"
          :options="activeUser"
          :series="users"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ActiveUserChart",
  setup() {
    const isClient = ref(false);
    const users = ref([1000, 825, 825]);
    const activeUser = ref({
      chart: {
        height: 85,
        type: "donut",
      },
      labels: ["Active User", "Total User", "Bunch User"],
      colors: ["#5DA8FF", "#58F229", "#757DFF"],
      stroke: {
        width: 1,
        show: true,
        colors: ["#ffffff"],
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "center",
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
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: false,
              name: {
                color: "#64748B",
              },
              value: {
                show: true,
                color: "#3A4252",
                fontSize: "22px",
                fontWeight: "600",
              },
              total: {
                show: true,
                color: "#64748B",
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
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      users,
      activeUser,
    };
  },
});
</script>

<style lang="scss" scoped>
.active-user-card {
  .bg-success {
    background-color: rgb(55 216 10 / 10%) !important;
  }
}
</style>
