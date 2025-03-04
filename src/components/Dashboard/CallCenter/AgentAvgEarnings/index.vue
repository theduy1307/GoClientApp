<template>
  <v-card
    class="agent-avg-earnings-card trezo-card border border-radius d-block bg-white custom-shadow"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Agent Avg. Earnings</h5>
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

    <ul
      class="nav nav-tabs justify-content-between ethereum-rate-tabs"
      id="myTab"
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <button
          class="nav-link fw-normal"
          style="font-size: 14px"
          :class="['tab', { active: activeTab === 'oneDay' }]"
          @click="setActiveTab('oneDay')"
        >
          1d
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link fw-normal"
          style="font-size: 14px"
          :class="['tab', { active: activeTab === 'fifteenDay' }]"
          @click="setActiveTab('fifteenDay')"
        >
          15d
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link fw-normal"
          style="font-size: 14px"
          :class="['tab', { active: activeTab === 'oneMonth' }]"
          @click="setActiveTab('oneMonth')"
        >
          1m
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link fw-normal"
          style="font-size: 14px"
          :class="['tab', { active: activeTab === 'sixMonth' }]"
          @click="setActiveTab('sixMonth')"
        >
          6m
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link fw-normal"
          style="font-size: 14px"
          :class="['tab', { active: activeTab === 'oneYear' }]"
          @click="setActiveTab('oneYear')"
        >
          1y
        </button>
      </li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane fade show active" v-show="activeTab === 'oneDay'">
        <div style="margin: 0px -5px -30px -21px">
          <AgentAvgEarningsChart />
        </div>
        <div
          class="d-flex align-items-center position-relative z-1 justify-content-between mt-30"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <div
                class="bg-body-bg border d-flex align-items-center justify-content-center rounded-2"
                style="width: 48px; height: 48px; line-height: 48px"
              >
                <v-img
                  src="@/assets/images/agent-avg-earnings.svg"
                  alt="agent-avg-earnings"
                />
              </div>
            </div>
            <div class="flex-grow-1 ms-3">
              <h3 class="fs-28 fw-semibold mb-0">$2,534</h3>
              <span class="text-body d-block">Last month earning</span>
            </div>
          </div>

          <span class="d-flex align-items-center align-items-center text-body">
            <i class="material-symbols-outlined fs-18 pe-2 text-success">
              trending_up
            </i>
            <span class="fw-medium me-1 text-black">+8.7%</span>
          </span>
        </div>
      </div>
      <div class="tab-pane fade" v-show="activeTab === 'fifteenDay'">
        <div style="margin: 0px -5px -30px -21px">
          <AgentAvgEarningsTwoChart />
        </div>
        <div
          class="d-flex align-items-center position-relative z-1 justify-content-between mt-30"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <div
                class="bg-body-bg border d-flex align-items-center justify-content-center rounded-2"
                style="width: 48px; height: 48px; line-height: 48px"
              >
                <v-img
                  src="@/assets/images/agent-avg-earnings.svg"
                  alt="agent-avg-earnings"
                />
              </div>
            </div>
            <div class="flex-grow-1 ms-3">
              <h3 class="fs-28 fw-semibold mb-0">$3,456</h3>
              <span class="text-body d-block">Last month earning</span>
            </div>
          </div>

          <span class="d-flex align-items-center align-items-center text-body">
            <i class="material-symbols-outlined fs-18 pe-2 text-success">
              trending_up
            </i>
            <span class="fw-medium me-1 text-black">+8.7%</span>
          </span>
        </div>
      </div>
      <div class="tab-pane fade" v-show="activeTab === 'oneMonth'">
        <div style="margin: 0px -5px -30px -21px">
          <AgentAvgEarningsThreeChart />
        </div>
        <div
          class="d-flex align-items-center position-relative z-1 justify-content-between mt-30"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <div
                class="bg-body-bg border d-flex align-items-center justify-content-center rounded-2"
                style="width: 48px; height: 48px; line-height: 48px"
              >
                <v-img
                  src="@/assets/images/agent-avg-earnings.svg"
                  alt="agent-avg-earnings"
                />
              </div>
            </div>
            <div class="flex-grow-1 ms-3">
              <h3 class="fs-28 fw-semibold mb-0">$1,753</h3>
              <span class="text-body d-block">Last month earning</span>
            </div>
          </div>

          <span class="d-flex align-items-center align-items-center text-body">
            <i class="material-symbols-outlined fs-18 pe-2 text-success">
              trending_up
            </i>
            <span class="fw-medium me-1 text-black">+4.7%</span>
          </span>
        </div>
      </div>
      <div class="tab-pane fade" v-show="activeTab === 'sixMonth'">
        <div style="margin: 0px -5px -30px -21px">
          <AgentAvgEarningsFourChart />
        </div>
        <div
          class="d-flex align-items-center position-relative z-1 justify-content-between mt-30"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <div
                class="bg-body-bg border d-flex align-items-center justify-content-center rounded-2"
                style="width: 48px; height: 48px; line-height: 48px"
              >
                <v-img
                  src="@/assets/images/agent-avg-earnings.svg"
                  alt="agent-avg-earnings"
                />
              </div>
            </div>
            <div class="flex-grow-1 ms-3">
              <h3 class="fs-28 fw-semibold mb-0">$6,753</h3>
              <span class="text-body d-block">Last month earning</span>
            </div>
          </div>

          <span class="d-flex align-items-center align-items-center text-body">
            <i class="material-symbols-outlined fs-18 pe-2 text-success">
              trending_up
            </i>
            <span class="fw-medium me-1 text-black">+6.7%</span>
          </span>
        </div>
      </div>
      <div class="tab-pane fade" v-show="activeTab === 'oneYear'">
        <div style="margin: 0px -5px -30px -21px">
          <AgentAvgEarningsFiveChart />
        </div>
        <div
          class="d-flex align-items-center position-relative z-1 justify-content-between mt-30"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <div
                class="bg-body-bg border d-flex align-items-center justify-content-center rounded-2"
                style="width: 48px; height: 48px; line-height: 48px"
              >
                <v-img
                  src="@/assets/images/agent-avg-earnings.svg"
                  alt="agent-avg-earnings"
                />
              </div>
            </div>
            <div class="flex-grow-1 ms-3">
              <h3 class="fs-28 fw-semibold mb-0">$5,325</h3>
              <span class="text-body d-block">Last month earning</span>
            </div>
          </div>

          <span class="d-flex align-items-center align-items-center text-body">
            <i class="material-symbols-outlined fs-18 pe-2 text-success">
              trending_up
            </i>
            <span class="fw-medium me-1 text-black">+3.7%</span>
          </span>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import feather from "feather-icons";

import AgentAvgEarningsChart from "./AgentAvgEarningsChart.vue";
import AgentAvgEarningsTwoChart from "./AgentAvgEarningsTwoChart.vue";
import AgentAvgEarningsThreeChart from "./AgentAvgEarningsThreeChart.vue";
import AgentAvgEarningsFourChart from "./AgentAvgEarningsFourChart.vue";
import AgentAvgEarningsFiveChart from "./AgentAvgEarningsFiveChart.vue";

export default defineComponent({
  name: "AgentAvgEarnings",
  components: {
    AgentAvgEarningsChart,
    AgentAvgEarningsTwoChart,
    AgentAvgEarningsThreeChart,
    AgentAvgEarningsFourChart,
    AgentAvgEarningsFiveChart,
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
.agent-avg-earnings-card {
  &.border {
    border: 1px solid #edeff5 !important;
  }
}
</style>
