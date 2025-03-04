<template>
  <div class="row">
    <div class="col-md-3">
      <div style="margin: -19px -15px -8px -23px">
        <apexchart
          v-if="isClient"
          type="donut"
          height="178"
          :options="salesByCategory"
          :series="sales"
        ></apexchart>
      </div>
    </div>
    <div class="col-md-9">
      <h3 class="mb-3 pb-1 fs-16 fw-medium">
        Sales by Category/Products
        <span class="fs-14 fw-normal text-body">(Top Performing)</span>
      </h3>

      <div class="d-flex flex-wrap ga-3 justify-content-between">
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <div
              class="d-flex align-items-center justify-content-center rounded-2"
              style="
                background-color: #f3e8ff;
                width: 44px;
                height: 44px;
                line-height: 44px;
              "
            >
              <v-img
                src="@/assets/images/electronics-icon.svg"
                alt="electronics-icon"
              />
            </div>
          </div>
          <div class="flex-grow-1 ms-10">
            <span class="text-body">Electronics</span>
            <h3 class="fs-20 fw-medium mb-0">$35,000</h3>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <div
              class="d-flex align-items-center justify-content-center rounded-2"
              style="
                background-color: #d8ffc8;
                width: 44px;
                height: 44px;
                line-height: 44px;
              "
            >
              <v-img
                src="@/assets/images/clothing-icon.svg"
                alt="clothing-icon"
              />
            </div>
          </div>
          <div class="flex-grow-1 ms-10">
            <span class="text-body">Clothing</span>
            <h3 class="fs-20 fw-medium mb-0">$25,000</h3>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <div
              class="d-flex align-items-center justify-content-center rounded-2"
              style="
                background-color: #daebff;
                width: 44px;
                height: 44px;
                line-height: 44px;
              "
            >
              <v-img
                src="@/assets/images/home-goods-icon.svg"
                alt="home-goods-icon"
              />
            </div>
          </div>
          <div class="flex-grow-1 ms-10">
            <span class="text-body">Home Goods</span>
            <h3 class="fs-20 fw-medium mb-0">$18,000</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SalesByCategory",
  setup() {
    const isClient = ref(false);
    const sales = ref([35000, 25000, 18000]);
    const salesByCategory = ref({
      chart: {
        type: "donut",
        height: 178,
      },
      labels: ["Electronics", "Clothing", "Home Goods"],
      colors: ["#AD63F6", "#37D80A", "#3584FC"],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10,
        },
      },
      grid: {
        padding: {
          bottom: -80,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (val: number) => {
            return "$" + val / 1 + "";
          },
        },
      },
      stroke: {
        width: 2,
        show: true,
        colors: ["#ffffff"],
        lineCap: "round",
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      sales,
      salesByCategory,
    };
  },
});
</script>
