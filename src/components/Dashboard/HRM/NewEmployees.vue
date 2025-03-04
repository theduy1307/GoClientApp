<template>
  <v-card
    class="new-employees-card trezo-card border-radius d-block bg-white shadow-none p-0"
  >
    <div class="custom-padding-30 position-relative">
      <div class="d-flex align-items-center mb-4 pb-2">
        <div class="flex-shrink-0">
          <div
            class="text-center rounded-2 bg-primary-div-50 d-flex align-items-center justify-content-center"
            style="width: 44px; height: 44px; line-height: 44px"
          >
            <v-img
              src="@/assets/images/new-employees.svg"
              alt="new-employees"
            />
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <span class="d-block mb-1">New Employees</span>
          <h3 class="fw-semibold fs-20 mb-0">8,24</h3>
        </div>
      </div>

      <div class="d-flex align-items-center">
        <i
          class="ri-arrow-right-up-line d-inline-block text-center rounded-1 fs-18 text-success-50"
          style="
            width: 26px;
            height: 26px;
            line-height: 26px;
            background-color: #d8ffc8;
          "
        ></i>
        <p class="ms-2"><span class="fw-medium">+10%</span> last year</p>
      </div>

      <div class="chart-position top-50 translate-middle-y me-1 mt-2">
        <apexchart
          v-if="isClient"
          type="radialBar"
          height="140"
          :options="newEmployees"
          :series="employees"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "NewEmployees",
  setup() {
    const isClient = ref(false);

    const employees = ref([30]);

    const newEmployees = ref({
      chart: {
        height: 140,
        width: 140,
        type: "radialBar",
      },
      colors: ["#9135E8"],
      plotOptions: {
        radialBar: {
          hollow: {
            // margin: 0,
            size: "50%",
            background: "#fff",
            margin: 10,
          },
          track: {
            background: "#EDEEF0",
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#4b9bfa",
              fontSize: ".625rem",
              show: false,
            },
            value: {
              show: true,
              offsetY: 5,
              color: "#9135E8",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "Inter",
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Status"],
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      employees,
      newEmployees,
    };
  },
});
</script>

<style lang="scss" scoped>
.new-employees-card {
  .chart-position {
    right: 15px;
  }
  .bg-primary-div-50 {
    background-color: rgb(145 53 232) !important;
  }
  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
}
</style>
