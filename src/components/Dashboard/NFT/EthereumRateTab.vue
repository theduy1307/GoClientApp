<template>
  <v-card
    class="ethereum-rate-tab-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header mb-2">
      <span class="d-block">Ethereum Rate</span>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="material-symbols-outlined fw-bold">more_vert</i>
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            Daily
          </button>
          <button type="button" class="bg-transparent border-none">
            Weekly
          </button>
          <button type="button" class="bg-transparent border-none">
            Monthly
          </button>
          <button type="button" class="bg-transparent border-none">
            Yearly
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="d-flex align-items-center mb-2">
      <h3 class="fs-32 fw-bold mb-0">$1,528</h3>
      <span
        class="fw-medium fs-12 text-success bg-success bg-opacity-10 border border-success px-2 rounded-pill ms-2"
      >
        +5.4%
        <i class="ri-arrow-up-line"></i>
      </span>
    </div>

    <span class="fs-12 d-block mb-4">Vs previous 30 days</span>

    <ul class="nav nav-tabs justify-content-between ethereum-rate-tabs">
      <li class="nav-item">
        <button
          class="nav-link"
          :class="['tab', { active: activeTab === 'oneDay' }]"
          @click="setActiveTab('oneDay')"
        >
          1D
        </button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link"
          :class="['tab', { active: activeTab === 'fiveDay' }]"
          @click="setActiveTab('fiveDay')"
        >
          5D
        </button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link"
          :class="['tab', { active: activeTab === 'oneMonth' }]"
          @click="setActiveTab('oneMonth')"
        >
          1M
        </button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link"
          :class="['tab', { active: activeTab === 'sixMonth' }]"
          @click="setActiveTab('sixMonth')"
        >
          6M
        </button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link"
          :class="['tab', { active: activeTab === 'oneYear' }]"
          @click="setActiveTab('oneYear')"
        >
          1Y
        </button>
      </li>
    </ul>

    <div class="tab-content" v-show="activeTab === 'oneDay'">
      <div style="margin: -30px -5px 0 -21px">
        <EthereumRateChart />
      </div>
      <ul class="ps-0 mb-0 list-unstyled mt-30">
        <li class="d-flex justify-content-between align-items-center mb-4">
          <span class="fs-12 fw-bold">11:30 AM</span>
          <span class="fs-12 fw-semibold">$3,605.08</span>
          <span class="fs-12 fw-medium text-success">+5.4% </span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-4">
          <span class="fs-12 fw-bold">01:20 PM</span>
          <span class="fs-12 fw-semibold">$3,615.50</span>
          <span class="fs-12 fw-medium text-danger">-3.21%</span>
        </li>
        <li class="d-flex justify-content-between align-items-center">
          <span class="fs-12 fw-bold">11:30 AM</span>
          <span class="fs-12 fw-semibold">$3,831.13</span>
          <span class="fs-12 fw-medium text-success">+7.32%</span>
        </li>
      </ul>
    </div>
    <div class="tab-content" v-show="activeTab === 'fiveDay'">
      <div style="margin: -30px -5px 0 -21px">
        <EthereumRateTwoChart />
      </div>
      <ul class="ps-0 mb-0 list-unstyled mt-30">
        <li class="d-flex justify-content-between align-items-center mb-4">
          <span class="fs-12 fw-bold">09:30 AM</span>
          <span class="fs-12 fw-semibold">$6,605.08</span>
          <span class="fs-12 fw-medium text-success">+4.4% </span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-4">
          <span class="fs-12 fw-bold">10:20 PM</span>
          <span class="fs-12 fw-semibold">$4,543.50</span>
          <span class="fs-12 fw-medium text-danger">-2.21%</span>
        </li>
        <li class="d-flex justify-content-between align-items-center">
          <span class="fs-12 fw-bold">11:30 AM</span>
          <span class="fs-12 fw-semibold">$3,831.13</span>
          <span class="fs-12 fw-medium text-success">+7.32%</span>
        </li>
      </ul>
    </div>
    <div class="tab-content" v-show="activeTab === 'oneMonth'">
      <div style="margin: -30px -5px 0 -21px">
        <EthereumRateThreeChart />
      </div>
      <ul class="ps-0 mb-0 list-unstyled mt-30">
        <li class="d-flex justify-content-between align-items-center mb-4">
          <span class="fs-12 fw-bold">11:30 AM</span>
          <span class="fs-12 fw-semibold">$3,605.08</span>
          <span class="fs-12 fw-medium text-success">+5.4% </span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-4">
          <span class="fs-12 fw-bold">01:20 PM</span>
          <span class="fs-12 fw-semibold">$3,615.50</span>
          <span class="fs-12 fw-medium text-danger">-3.21%</span>
        </li>
        <li class="d-flex justify-content-between align-items-center">
          <span class="fs-12 fw-bold">11:30 AM</span>
          <span class="fs-12 fw-semibold">$3,831.13</span>
          <span class="fs-12 fw-medium text-success">+7.32%</span>
        </li>
      </ul>
    </div>
    <div class="tab-content" v-show="activeTab === 'sixMonth'">
      <div style="margin: -30px -5px 0 -21px">
        <EthereumRateFourChart />
      </div>
      <ul class="ps-0 mb-0 list-unstyled mt-30">
        <li class="d-flex justify-content-between align-items-center mb-4">
          <span class="fs-12 fw-bold">09:30 AM</span>
          <span class="fs-12 fw-semibold">$6,605.08</span>
          <span class="fs-12 fw-medium text-success">+4.4% </span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-4">
          <span class="fs-12 fw-bold">10:20 PM</span>
          <span class="fs-12 fw-semibold">$4,543.50</span>
          <span class="fs-12 fw-medium text-danger">-2.21%</span>
        </li>
        <li class="d-flex justify-content-between align-items-center">
          <span class="fs-12 fw-bold">11:30 AM</span>
          <span class="fs-12 fw-semibold">$3,831.13</span>
          <span class="fs-12 fw-medium text-success">+7.32%</span>
        </li>
      </ul>
    </div>
    <div class="tab-content" v-show="activeTab === 'oneYear'">
      <div style="margin: -30px -5px 0 -21px">
        <EthereumRateFiveChart />
      </div>
      <ul class="ps-0 mb-0 list-unstyled mt-30">
        <li class="d-flex justify-content-between align-items-center mb-4">
          <span class="fs-12 fw-bold">11:30 AM</span>
          <span class="fs-12 fw-semibold">$3,605.08</span>
          <span class="fs-12 fw-medium text-success">+5.4% </span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-4">
          <span class="fs-12 fw-bold">01:20 PM</span>
          <span class="fs-12 fw-semibold">$3,615.50</span>
          <span class="fs-12 fw-medium text-danger">-3.21%</span>
        </li>
        <li class="d-flex justify-content-between align-items-center">
          <span class="fs-12 fw-bold">11:30 AM</span>
          <span class="fs-12 fw-semibold">$3,831.13</span>
          <span class="fs-12 fw-medium text-success">+7.32%</span>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import feather from "feather-icons";

import EthereumRateChart from "./EthereumRateChart.vue";
import EthereumRateTwoChart from "./EthereumRateTwoChart.vue";
import EthereumRateThreeChart from "./EthereumRateThreeChart.vue";
import EthereumRateFourChart from "./EthereumRateFourChart.vue";
import EthereumRateFiveChart from "./EthereumRateFiveChart.vue";

export default defineComponent({
  name: "EthereumRateTab",
  components: {
    EthereumRateChart,
    EthereumRateTwoChart,
    EthereumRateThreeChart,
    EthereumRateFourChart,
    EthereumRateFiveChart,
  },
  setup() {
    const activeTab = ref("oneDay");

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    onMounted(() => {
      feather.replace();
    });

    return {
      activeTab,
      setActiveTab,
    };
  },
});
</script>

<style lang="scss" scoped>
.ethereum-rate-tab-card {
  .bg-success {
    background-color: rgb(55 216 10 / 10%) !important;
  }
}
.ethereum-rate-tabs {
  margin-bottom: 30px !important;
  border: 0;
  .nav-item {
    .nav-link {
      width: 47px;
      height: 32px;
      padding: 0;
      border: 0;
      font-weight: 600;
      font-size: 12px;
      border-radius: 4px;
      color: #64748b;
      &.active {
        background-color: var(--primaryColor) !important;
        color: var(--whiteColor) !important;
      }
    }
  }
}
</style>
