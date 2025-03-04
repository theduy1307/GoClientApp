<template>
  <v-card
    class="new-admissions-card trezo-card mb-25 border border-radius d-block bg-white custom-shadow"
  >
    <div class="v-card-header mb-0 pb-5">
      <h5 class="mb-0">New Admissions</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i data-feather="more-vertical"></i>
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            This Day
          </button>
          <button type="button" class="bg-transparent border-none">
            This Week
          </button>
          <button type="button" class="bg-transparent border-none">
            This Month
          </button>
          <button type="button" class="bg-transparent border-none">
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>

    <div style="margin: -8px 0 -13px 0">
      <apexchart
        v-if="isClient"
        type="donut"
        height="251"
        :options="newAdmissions"
        :series="admissions"
      ></apexchart>
    </div>

    <div class="d-flex flex-wrap ga-3 justify-content-center mt-5">
      <div class="d-flex align-items-center">
        <span
          class="d-inline-block rounded-circle bg-success"
          style="width: 11px; height: 11px"
        ></span>
        <span class="ms-2">
          Mathematics:
          <span class="fw-semibold">455</span>
        </span>
      </div>
      <div class="d-flex align-items-center">
        <span
          class="d-inline-block rounded-circle bg-danger"
          style="width: 11px; height: 11px"
        ></span>
        <span class="ms-2">
          English:
          <span class="fw-semibold">375</span>
        </span>
      </div>
      <div class="d-flex align-items-center">
        <span
          class="d-inline-block rounded-circle bg-primary-div"
          style="width: 11px; height: 11px"
        ></span>
        <span class="ms-2">
          History:
          <span class="fw-semibold">220</span>
        </span>
      </div>
      <div class="d-flex align-items-center">
        <span
          class="d-inline-block rounded-circle bg-primary"
          style="width: 11px; height: 11px"
        ></span>
        <span class="ms-2">Art: <span class="fw-semibold">180</span></span>
      </div>
      <div class="d-flex align-items-center">
        <span
          class="d-inline-block rounded-circle bg-info bg-opacity-50"
          style="width: 11px; height: 11px"
        ></span>
        <span class="ms-2">Music: <span class="fw-semibold">45</span></span>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import feather from "feather-icons";

export default defineComponent({
  name: "NewAdmissionsChart",
  setup() {
    const isClient = ref(false);

    const admissions = ref([455, 375, 220, 180, 45]);

    const newAdmissions = ref({
      chart: {
        height: 251,
        type: "donut",
      },
      labels: ["Mathematics", "English", "History", "Art", "Music"],
      colors: ["#37D80A", "#FF4023", "#605DFF", "#AD63F6", "#90C7FF"],
      stroke: {
        width: 1,
        show: true,
        colors: ["#ffffff"],
        lineCap: "round",
      },
      legend: {
        show: false,
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
          shape: "diamond",
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "80%",
            labels: {
              show: true,
              name: {
                color: "#64748B",
              },
              value: {
                show: true,
                color: "#64748B",
                fontSize: "24px",
                fontWeight: "600",
                offsetY: 1,
              },
              total: {
                show: true,
                color: "#64748B",
                fontSize: "14px",
                fontWeight: "400",
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
      feather.replace();
    });

    return {
      isClient,
      admissions,
      newAdmissions,
    };
  },
});
</script>

<style lang="scss" scoped>
.new-admissions-card {
  &.border {
    border: 1px solid #edeff5 !important;
  }
  .mt-5 {
    margin-top: 3rem !important;
  }
  .pb-5 {
    padding-bottom: 3rem !important;
  }
  .ga-3 {
    gap: 1.3rem !important;
  }
}
</style>
