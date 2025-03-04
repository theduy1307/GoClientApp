<template>
  <v-card
    class="overview-card trezo-card mb-25 border border-radius d-block bg-white custom-shadow"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Overview</h5>
      <div class="d-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu d-inline-block border-radius"
            >
              This Year
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
    </div>

    <div class="call-overview-tabs">
      <div class="row justify-content-center">
        <div class="col-md-4 col-sm-6">
          <div
            class="card bg-primary bg-opacity-10 border-0 rounded-3 p-4 mb-4 calls-card"
            :class="['tab', { active: activeTab === 'totalCalls' }]"
            @click="setActiveTab('totalCalls')"
            type="button"
          >
            <div class="d-flex align-items-center mb-3">
              <div class="flex-grow-1 me-3">
                <span class="text-body d-block mb-1">Total Calls</span>
                <h3 class="fs-24 fw-semibold">26,435</h3>
              </div>

              <div class="flex-shrink-0">
                <v-img
                  src="@/assets/images/total-calls.svg"
                  alt="total-calls"
                />
              </div>
            </div>
            <span
              class="d-flex align-items-center align-items-center text-body"
            >
              <i
                class="material-symbols-outlined fs-18 pe-2 position-relative top-1 text-success"
              >
                trending_up
              </i>
              <span class="fw-medium me-1">+15%</span>
              last year
            </span>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div
            class="card bg-primary-divs border-0 rounded-3 p-4 mb-4 calls-card"
            style="background-color: #faf5ff"
            :class="['tab', { active: activeTab === 'answeredCalls' }]"
            @click="setActiveTab('answeredCalls')"
            type="button"
          >
            <div class="d-flex align-items-center mb-3">
              <div class="flex-grow-1 me-3">
                <span class="text-body d-block mb-1">Answered Calls</span>
                <h3 class="fs-24 fw-semibold">18,520</h3>
              </div>

              <div class="flex-shrink-0">
                <v-img
                  src="@/assets/images/answered-calls.svg"
                  alt="answered-calls"
                />
              </div>
            </div>
            <span
              class="d-flex align-items-center align-items-center text-body"
            >
              <i
                class="material-symbols-outlined fs-18 pe-2 position-relative top-1 text-success-60"
              >
                trending_up
              </i>
              <span class="fw-medium me-1">+15%</span>
              last year
            </span>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div
            class="card bg-dangers border-0 rounded-3 p-4 mb-4 calls-card"
            style="background-color: #fff5ed"
            :class="['tab', { active: activeTab === 'missedCalls' }]"
            @click="setActiveTab('missedCalls')"
            type="button"
          >
            <div class="d-flex align-items-center mb-3">
              <div class="flex-grow-1 me-3">
                <span class="text-body d-block mb-1">Missed Calls</span>
                <h3 class="fs-24 fw-semibold">3,735</h3>
              </div>

              <div class="flex-shrink-0">
                <v-img
                  src="@/assets/images/missed-calls.svg"
                  alt="missed-calls"
                />
              </div>
            </div>
            <span
              class="d-flex align-items-center align-items-center text-body"
            >
              <i
                class="material-symbols-outlined fs-18 pe-2 position-relative top-1 text-danger-50"
              >
                trending_down
              </i>
              <span class="fw-medium me-1">-25%</span>
              last year
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane" v-show="activeTab === 'totalCalls'">
        <div style="margin: -24px -10px -26px -18px">
          <TotalCallsChart />
        </div>
      </div>
      <div class="tab-pane" v-show="activeTab === 'answeredCalls'">
        <div style="margin: -24px -10px -26px -18px">
          <AnsweredCallsChart />
        </div>
      </div>
      <div class="tab-pane" v-show="activeTab === 'missedCalls'">
        <div style="margin: -24px -10px -26px -18px">
          <MissedCallsChart />
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TotalCallsChart from "./TotalCallsChart.vue";
import AnsweredCallsChart from "./AnsweredCallsChart.vue";
import MissedCallsChart from "./MissedCallsChart.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Overview",
  components: {
    TotalCallsChart,
    AnsweredCallsChart,
    MissedCallsChart,
  },
  setup() {
    const activeTab = ref("totalCalls");

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      setActiveTab,
    };
  },
});
</script>

<style lang="scss" scoped>
.overview-card {
  &.border {
    border: 1px solid #edeff5 !important;
  }
  .call-overview-tabs {
    .bg-primary {
      background-color: rgb(96 93 255 / 10%) !important;
    }
  }
  .p-4 {
    padding: 1.5rem !important;
  }
  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
}
</style>
